"""Fetch wrestling news feeds and build index.html.

Run by GitHub Actions on a schedule. Each headline links back to the original site.
Which companies get big sections, and the page sizes, are set in layout.json.
How stories are ranked is set in ranking.json.
"""
import html
import json
import math
import re
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path
from zoneinfo import ZoneInfo

ROOT = Path(__file__).parent
MAX_PER_FEED = 15
MAX_SIDEBAR = 3     # headlines per sidebar company
OTHER = "Other Wrestling News"


def text(el, *tags):
    for tag in tags:
        found = el.find(tag)
        if found is not None and (found.text or found.get("href")):
            return (found.text or found.get("href")).strip()
    return ""


def parse_date(value):
    if not value:
        return None
    try:
        return parsedate_to_datetime(value).astimezone(timezone.utc)
    except (TypeError, ValueError):
        pass
    try:
        return datetime.fromisoformat(value.replace("Z", "+00:00")).astimezone(timezone.utc)
    except ValueError:
        return None


MEDIA = "{http://search.yahoo.com/mrss/}"
CONTENT = "{http://purl.org/rss/1.0/modules/content/}encoded"


def find_image(e, atom):
    """Return the photo attached to a feed item, or the first picture in its text."""
    for tag in (f"{MEDIA}content", f"{MEDIA}thumbnail", f"{MEDIA}group/{MEDIA}content", "enclosure"):
        for el in e.findall(tag):
            url = el.get("url", "")
            kind = el.get("type", "") + el.get("medium", "")
            if url.startswith("http") and ("image" in kind or tag.endswith("thumbnail")
                                           or re.search(r"\.(jpe?g|png|webp)(\?|$)", url, re.I)):
                return url
    body = html.unescape(text(e, CONTENT, "description", f"{atom}content", f"{atom}summary"))
    found = re.search(r"<img[^>]+src=[\"'](https?://[^\"']+)", body)
    return found.group(1) if found else ""


def fetch(feed):
    req = urllib.request.Request(feed["url"], headers={"User-Agent": "wrestling-news-page/1.0"})
    with urllib.request.urlopen(req, timeout=20) as resp:
        root = ET.fromstring(resp.read())
    atom = "{http://www.w3.org/2005/Atom}"
    entries = root.findall(".//item") or root.findall(f".//{atom}entry")
    items = []
    for e in entries[:MAX_PER_FEED]:
        title = text(e, "title", f"{atom}title")
        if not title:
            # Social posts (like Bluesky feeds) have no headline, so use the start of the post.
            post = re.sub(r"<[^>]+>", "", html.unescape(text(e, "description")))
            title = post if len(post) <= 140 else post[:137].rsplit(" ", 1)[0] + "..."
        link = text(e, "link", f"{atom}link")
        date = parse_date(text(e, "pubDate", f"{atom}updated", f"{atom}published"))
        if title and link.startswith("http"):
            summary = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", html.unescape(text(e, "description", f"{atom}summary"))))[:800]
            items.append({"title": title, "link": link, "date": date, "source": feed["name"], "image": find_image(e, atom),
                          "summary": summary})
    return items


STOPWORDS = set("a an and are as at be by for from has have in is it its new of on or that the this to was will with after over says report reportedly".split())


def words(title):
    return {w for w in re.findall(r"[a-z0-9']+", title.lower()) if len(w) > 2 and w not in STOPWORDS}


def phrase_score(title, table):
    t = title.lower()
    return sum(v for k, v in table.items() if re.search(rf"\b{re.escape(k)}\b", t))


def rank_stories(items, ranking, now):
    """Merge headlines about the same story from different sites, then score each story.

    A story scores higher when more sources report it, when its headline has big-news
    words, and when it comes from a trusted source. The score halves every halfLifeHours.
    """
    trust = ranking["sourceTrust"]
    stories = []
    for it in items:
        w = words(it["title"])
        match = None
        for st in stories:
            overlap = len(w & st["words"]) / max(1, len(w | st["words"]))
            if overlap >= ranking["sameStoryMatch"]:
                match = st
                break
        if match:
            match["all"].append(it)
            match["words"] |= w
        else:
            stories.append({"all": [it], "words": set(w)})

    ranked = []
    for st in stories:
        group = st["all"]
        # Show the version from the most trusted source; use the newest time for freshness.
        best = max(group, key=lambda i: trust.get(i["source"], 1.0))
        dates = [i["date"] for i in group if i["date"]]
        newest = max(dates) if dates else None
        age_hours = (now - newest).total_seconds() / 3600 if newest else 24
        sources = sorted({i["source"] for i in group})
        weight = 1 + phrase_score(best["title"], ranking["bigNewsWords"]) + phrase_score(best["title"], ranking["lowValueWords"])
        # strength is how big the story is, without the freshness decay. The Moments slideshow uses it.
        strength = max(0.2, weight) * trust.get(best["source"], 1.0) * (1 + 0.6 * (len(sources) - 1))
        score = strength * 0.5 ** (max(0, age_hours) / ranking["halfLifeHours"])
        by_trust = sorted(group, key=lambda i: trust.get(i["source"], 1.0), reverse=True)
        image = next((i["image"] for i in by_trust if i.get("image")), "")
        ranked.append({**best, "date": newest or best["date"], "sources": sources, "all_items": group, "image": image,
                       "strength": round(strength, 3), "score": round(score, 3), "major": score >= ranking["majorScore"]})
    ranked.sort(key=lambda s: s["score"], reverse=True)
    return ranked


def get_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "wrestling-news-page/1.0 (by github pages site)"})
    with urllib.request.urlopen(req, timeout=20) as resp:
        return json.loads(resp.read())


def fetch_engagement(cfg):
    """Collect posts people are reacting to, with an engagement number for each.

    Reddit's r/SquaredCircle (upvotes + comments) and Bluesky posts from chosen
    wrestling reporters (likes + reposts + replies). Anything unreachable is skipped.
    """
    posts = []
    rd = cfg.get("reddit", {})
    if rd.get("enabled"):
        try:
            data = get_json(f"https://www.reddit.com/r/{rd['subreddit']}/hot.json?limit={rd.get('limit', 100)}")
            for child in data["data"]["children"]:
                p = child["data"]
                posts.append({"text": p.get("title", ""), "url": p.get("url", ""),
                              "engagement": p.get("score", 0) + 2 * p.get("num_comments", 0), "where": "Reddit"})
        except Exception as err:
            print(f"Skipping Reddit engagement: {err}")
    bs = cfg.get("bluesky", {})
    for handle in bs.get("handles", []) if bs.get("enabled") else []:
        try:
            data = get_json(f"https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor={handle}&limit=50")
            for item in data.get("feed", []):
                p = item["post"]
                ext = (p.get("embed") or {}).get("external") or {}
                posts.append({"text": p.get("record", {}).get("text", ""), "url": ext.get("uri", ""),
                              "engagement": p.get("likeCount", 0) + 2 * p.get("repostCount", 0) + p.get("replyCount", 0),
                              "where": "Bluesky"})
        except Exception as err:
            print(f"Skipping Bluesky {handle}: {err}")
    return posts


def add_engagement(stories, posts, ranking):
    """Raise the score of stories that match posts with lots of engagement."""
    cfg = ranking.get("engagement", {})
    for st in stories:
        links = {i["link"] for i in st["all_items"]}
        w = words(st["title"])
        total = 0
        for p in posts:
            same_link = p["url"] and p["url"] in links
            overlap = len(w & words(p["text"])) / max(1, len(w))
            if same_link or overlap >= 0.6:
                total += p["engagement"]
        st["engagement"] = total
        if total:
            boost = 1 + cfg.get("weight", 0.35) * math.log10(1 + total)
            st["score"] = round(st["score"] * boost, 3)
            st["strength"] = round(st["strength"] * boost, 3)
            st["major"] = st["score"] >= ranking["majorScore"]
    stories.sort(key=lambda s: s["score"], reverse=True)


NUMBER = r"(\d[\d,]*(?:\.\d+)?)\s*(million|thousand|k|m)?"
METRICS = [
    # (metric, pattern). The number must sit right next to the word that names it.
    ("viewers", NUMBER + r"\s+(?:average\s+)?viewers"),
    ("buys", NUMBER + r"\s+(?:ppv\s+|pay-per-view\s+)?buys"),
    ("tickets", NUMBER + r"\s+(?:tickets|fans\s+in\s+attendance|in\s+attendance|attendance)"),
    ("gate", r"\$\s?" + NUMBER + r"\s+(?:live\s+)?gate"),
    ("gate", r"gate\s+of\s+\$\s?" + NUMBER),
]
METRIC_LABELS = {"viewers": "Viewers", "tickets": "Tickets", "gate": "Gate", "buys": "PPV buys (est.)"}
# Every entry of a kind shows the same numbers in the same order; unreported ones show a dash.
TICKER_LAYOUT = {"tv": ("tickets", "viewers", "gate"),
                 # PPVs sell buys instead of having TV viewers, so buys take the viewers spot.
                 "event": ("tickets", "buys", "gate"),
                 # WWE and NXT events stream on Netflix and ESPN, so they show viewers.
                 "wwe_event": ("tickets", "viewers", "gate")}


def to_number(value, unit):
    n = float(value.replace(",", ""))
    unit = (unit or "").lower()
    return n * (1_000_000 if unit in ("million", "m") else 1_000 if unit in ("thousand", "k") else 1)


def short_number(n):
    if n >= 1_000_000:
        return f"{n / 1_000_000:.2f}".rstrip("0").rstrip(".") + "M"
    if n >= 10_000:
        return f"{n / 1_000:.1f}".rstrip("0").rstrip(".") + "K"
    return f"{n:,.0f}"


def find_show(title, companies):
    """Return (display name, company, kind, color) for the first show or event the headline names."""
    for c in companies:
        for kind, key in (("event", "events"), ("tv", "tvShows")):
            for show in c.get(key, []):
                # Case-sensitive, so "all in" in a sentence doesn't count as the All In event.
                if re.search(rf"\b{re.escape(show)}\b", title):
                    label = show if show.startswith(c["name"]) else f'{c["name"]} {show}'
                    return label, c, kind, c.get("showColors", {}).get(show, c["color"])
    return None, None, None, None


def find_numbers(items, companies, limit, max_age_days=10):
    """Group reported figures by show: viewers, tickets, gate and PPV buys.

    Each show keeps the newest figure for each kind of number. Shows are listed
    newest first. A headline that names no show is left out of the ticker.
    """
    now = datetime.now(timezone.utc)
    shows = {}
    oldest = datetime.min.replace(tzinfo=timezone.utc)
    for it in sorted(items, key=lambda i: i["date"] or oldest, reverse=True):
        if it["date"] and (now - it["date"]).days > max_age_days:
            continue
        name, company, kind, color = find_show(it["title"], companies)
        if not name:
            continue
        for metric, pattern in METRICS:
            m = re.search(pattern, it["title"], re.I)
            if not m:
                continue
            n = to_number(m.group(1), m.group(2))
            if n < 100:
                continue
            show = shows.setdefault(name, {"name": name, "color": color, "kind": kind, "company": company["name"],
                                           "date": it["date"], "metrics": {}})
            if metric not in show["metrics"]:
                value = ("$" if metric == "gate" else "") + short_number(n)
                show["metrics"][metric] = {"value": value, "link": it["link"], "source": it["source"]}
    return list(shows.values())[:limit]


def event_tag(show):
    """WWE calls its big shows Premium Live Events; everyone else's are PPVs."""
    if show["kind"] != "event":
        return ""
    return "<i>PLE</i>" if show["company"] in ("WWE", "NXT") else "<i>PPV</i>"


def render_numbers(shows):
    """A scrolling ticker across the top: one entry per show with its numbers side by side."""
    if not shows:
        return ""
    cells = []
    for sh in shows:
        parts = ""
        layout_kind = "wwe_event" if sh["kind"] == "event" and sh["company"] in ("WWE", "NXT") else sh["kind"]
        for k in TICKER_LAYOUT[layout_kind]:
            v = sh["metrics"].get(k)
            if v:
                parts += (f'<a class="m {k}" href="{esc(v["link"])}" target="_blank" rel="noopener" '
                          f'title="Source: {esc(v["source"])}"><b>{esc(v["value"])}</b> <small>{METRIC_LABELS[k]}</small></a>')
            else:
                parts += f'<span class="m {k} missing"><b>–</b> <small>{METRIC_LABELS[k]}</small></span>'
        cells.append(f'<span class="tick" style="--c:{esc(sh["color"])}"><strong>{esc(sh["name"])}</strong>{event_tag(sh)}{parts}</span>')
    cells = "".join(cells)
    # The items are written twice so the loop scrolls without a gap.
    seconds = max(20, 8 * len(shows))
    return (f'<div class="ticker" aria-label="Show numbers"><span class="ticker-label">The Numbers</span>'
            f'<div class="ticker-window"><div class="ticker-track" style="--speed:{seconds}s">'
            f'{cells}<span aria-hidden="true" class="ticker-copy">{cells}</span></div></div></div>')


def update_moments(stories, companies, layout, ranking, now):
    """Keep a rolling list of the biggest stories with photos from the last momentsDays days.

    The list is saved in moments.json, so a moment stays in the slideshow after its story
    drops out of the news feeds. Headlines about a show or event count for a bit more,
    since those are usually the in-ring moments people talk about.
    """
    path = ROOT / "moments.json"
    saved = json.loads(path.read_text()) if path.exists() else []
    by_link = {m["link"]: m for m in saved}
    for st in stories:
        if not st.get("image") or not st["date"]:
            continue
        popularity = round(st["strength"] * (1.5 if find_show(st["title"], companies)[0] else 1), 3)
        old = by_link.get(st["link"])
        if old is None or popularity >= old["popularity"]:
            by_link[st["link"]] = {"title": st["title"], "link": st["link"], "image": st["image"], "source": st["source"],
                                   "date": st["date"].isoformat(), "popularity": popularity, "tags": st.get("tags", [])}
    cutoff = now - timedelta(days=layout.get("momentsDays", 30))
    kept = sorted((m for m in by_link.values() if datetime.fromisoformat(m["date"]) >= cutoff),
                  key=lambda m: m["popularity"], reverse=True)[:60]
    path.write_text(json.dumps(kept, indent=1))
    # Skip a moment when a bigger one already covers the same story.
    shown = []
    for m in kept:
        w = words(m["title"])
        if all(len(w & words(o["title"])) / max(1, len(w | words(o["title"]))) < ranking["sameStoryMatch"] for o in shown):
            shown.append(m)
        if len(shown) == layout.get("momentsToShow", 8):
            break
    return shown


def render_moments(moments, companies, seconds=6):
    if not moments:
        return ""
    colors = {c["name"]: c["color"] for c in companies}
    slides, dots = [], []
    for i, m in enumerate(moments):
        color = colors.get(m["tags"][0], "#d4af37") if m["tags"] else "#d4af37"
        when = datetime.fromisoformat(m["date"]).strftime("%b %d")
        on = " on" if i == 0 else ""
        # A photo that won't load removes its own slide.
        slides.append(f'<a class="slide{on}" href="{esc(m["link"])}" target="_blank" rel="noopener" style="--c:{esc(color)}">'
                      f'<img src="{esc(m["image"])}" alt="" loading="{"eager" if i == 0 else "lazy"}" referrerpolicy="no-referrer" '
                      f'onerror="this.parentNode.remove()">'
                      f'<span class="cap"><b>{esc(m["title"])}</b><small>{esc(m["source"])} · {when}</small></span></a>')
    return (f'<section class="moments" data-seconds="{seconds}" aria-label="Big moments from the last 30 days">'
            f'<h3>Moments <span>Last 30 days</span></h3><div class="slides">{"".join(slides)}</div>'
            f'<div class="dots"></div></section>')


EASTERN = ZoneInfo("America/New_York")
DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
# "Name vs. Name" inside a headline. The names end at words like "set for" or at punctuation.
VS = re.compile(r"([A-Z][\w.'&\- ]{0,50}?)\s+vs\.?\s+([A-Z][\w.'&\- ]{0,50}?)"
                r"(?=\s+(?:set|added|announced|for|at|on|in|is|will|headlines|official|confirmed)\b|[,;:!?()|]|\s+-|$)")
NOT_A_CARD = re.compile(r"\b(results?|recap|review|grades|ratings?|viewers|viewership|draws?|drew|attendance|tickets)\b", re.I)


def upcoming_shows(schedule, companies, layout, now):
    """The next week of TV plus the big events coming up, soonest first."""
    by_name = {c["name"]: c for c in companies}
    today = now.astimezone(EASTERN).date()
    shows = []
    for ev in schedule.get("events", []):
        day = datetime.strptime(ev["date"], "%Y-%m-%d").date()
        if today <= day <= today + timedelta(days=layout.get("upcomingEventDays", 60)) and ev["company"] in by_name:
            shows.append({"company": ev["company"], "show": ev["name"], "date": day, "place": ev.get("place", ""),
                          "ppv": ev.get("ppv", False), "event": True})
    event_days = {(s["company"], s["date"]) for s in shows}
    for w in schedule.get("weekly", []):
        if w["company"] not in by_name:
            continue
        day = today + timedelta(days=(DAYS.index(w["day"]) - today.weekday()) % 7)
        # A special event that night takes the place of the weekly show.
        if (w["company"], day) not in event_days:
            shows.append({"company": w["company"], "show": w["show"], "date": day, "place": w.get("network", ""),
                          "ppv": False, "event": False})
    shows.sort(key=lambda s: (s["date"], not s["event"]))
    for s in shows:
        c = by_name[s["company"]]
        s["label"] = s["show"] if s["show"].startswith(s["company"]) else f'{s["company"]} {s["show"]}'
        s["color"] = c.get("showColors", {}).get(s["show"], c["color"])
    return shows[:layout.get("upcomingToShow", 10)]


def find_cards(shows, items, now):
    """Fill each upcoming show with the matches news headlines say are set for it."""
    keys = {id(s): re.compile(rf"\b{re.escape(s['show'].split(':')[0])}\b") for s in shows}
    event_keys = [keys[id(s)] for s in shows if s["event"]]
    for s in shows:
        s["matches"] = []
        # Only news from after the previous episode counts, so last week's card doesn't show up.
        since = now - timedelta(days=7 if not s["event"] else 45)
        key = keys[id(s)]
        for it in sorted(items, key=lambda i: i["date"] or now, reverse=True):
            if not it["date"] or it["date"] < since:
                continue
            for line in [it["title"]] + re.split(r"(?<=[.!?])\s+", it.get("summary", "")):
                if not key.search(line) or NOT_A_CARD.search(line):
                    continue
                # A match named for a big event belongs to that event, not the weekly show.
                if not s["event"] and any(k.search(line) for k in event_keys):
                    continue
                for a, b in VS.findall(line):
                    match = f"{a.strip()} vs. {b.strip()}"
                    if match.lower() not in (m.lower() for m in s["matches"]):
                        s["matches"].append(match)
    return shows


def render_upcoming(shows):
    if not shows:
        return ""
    rows = []
    for s in shows:
        tag = ("<i>PLE</i>" if s["company"] in ("WWE", "NXT") else "<i>PPV</i>") if s["ppv"] else ""
        when = s["date"].strftime("%a %b ") + str(s["date"].day)
        card = ("<ul>" + "".join(f"<li>{esc(m)}</li>" for m in s["matches"][:6]) + "</ul>" if s["matches"]
                else '<small class="none">No matches announced yet</small>' if s["event"] else "")
        place = f' <small>{esc(s["place"])}</small>' if s["place"] else ""
        rows.append(f'<li class="{"event" if s["event"] else "tv"}" style="--c:{esc(s["color"])}"><time>{when}</time>'
                    f'<div><b>{esc(s["label"])}</b>{tag}{place}{card}</div></li>')
    return f'<section class="upcoming"><h3>Upcoming Shows</h3><ol>{"".join(rows)}</ol></section>'


def allocate(sections, layout, caps=None):
    """Decide how many stories each home-page section shows.

    Every section with news gets its top story. Major stories always show. Remaining
    space up to totalStories goes to the highest-scoring stories, wherever they are,
    so a company with a big news day gets more room and a quiet one gets less.
    caps can give some sections a lower limit than maxPerCompany.
    """
    lo, total = layout["minPerCompany"], layout["totalStories"]
    caps = caps or {}
    shown = {name: [] for name in sections}
    for name, news in sections.items():
        shown[name] = news[:lo]
    for name, news in sections.items():
        for st in news[lo:]:
            if st["major"] and len(shown[name]) < caps.get(name, layout["maxPerCompany"]):
                shown[name].append(st)
    used = sum(len(v) for v in shown.values())
    rest = sorted(((st["score"], name, st) for name, news in sections.items() for st in news if st not in shown[name]),
                  key=lambda x: x[0], reverse=True)
    for _, name, st in rest:
        if used >= total:
            break
        if len(shown[name]) < caps.get(name, layout["maxPerCompany"]):
            shown[name].append(st)
            used += 1
    for name in shown:
        shown[name].sort(key=lambda s: s["score"], reverse=True)
    return shown


def tag_items(items, companies):
    """Tag each headline with every company it mentions."""
    for c in companies:
        words = "|".join(re.escape(k) for k in c["keywords"])
        c["_rx"] = re.compile(rf"\b({words})\b", re.I)
    for it in items:
        it["tags"] = [c["name"] for c in companies if c["_rx"].search(it["title"])]


def esc(value):
    return html.escape(value, quote=True)


def render_item(it):
    when = it["date"].strftime("%b %d, %I:%M %p UTC") if it["date"] else ""
    # Stories about more than one company show all their company tags.
    tags = "".join(f'<span class="tag">{esc(t)}</span>' for t in it["tags"]) if len(it["tags"]) > 1 else ""
    major = '<span class="major">Top story</span>' if it.get("major") else ""
    others = len(it.get("sources", [])) - 1
    also = f' · also on {others} other site{"s" if others > 1 else ""}' if others > 0 else ""
    cls = ' class="is-major"' if it.get("major") else ""
    return (f'<li{cls}>{major}'
            f'<a href="{esc(it["link"])}" target="_blank" rel="noopener">{esc(it["title"])}</a>'
            f'<div class="meta">{esc(it["source"])}{also} · {when} {tags}</div></li>')


def render_list(items, limit):
    rows = "\n".join(render_item(it) for it in items[:limit])
    return f'<ul>{rows or "<li class=\'meta\'>No news right now.</li>"}</ul>'


def anchor(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def banner_title(name, c):
    """The company's logo image when companies.json has one, otherwise its name."""
    if c and c.get("logo"):
        return f'<h2 class="has-logo"><img class="logo" src="{esc(c["logo"])}" alt="{esc(name)}"></h2>'
    return f'<h2>{esc(name)}</h2>'


def layout_vars(layout):
    """Sizes from layout.json become CSS variables the template uses."""
    return ("<style>:root { "
            f"--title-size: {float(layout['titleSize'])}rem; "
            f"--company-size: {float(layout['companyNameSize'])}rem; "
            f"--headline-size: {float(layout['headlineSize'])}rem; "
            f"--page-w: {int(layout.get('pageWidth', 1200))}px; }}</style>")


# Blocks that aren't company sections. Their ids start with @ in layout.json.
BLOCKS = ("@moments", "@upcoming", "@spotlight", "@promotions")


def page_columns(layout, companies):
    """Return the page's columns and the companies listed under More Promotions.

    layout.json "columns" is a list of {width, autoSort, blocks}; blocks are company
    names or one of BLOCKS, top to bottom. Older layouts without "columns" get the
    classic arrangement built from featured / pinned / sidebar.
    """
    names = [c["name"] for c in companies]
    if layout.get("columns"):
        cols = [{"width": float(c.get("width", 1)), "autoSort": bool(c.get("autoSort")),
                 "blocks": [b for b in c.get("blocks", []) if b in names or b in BLOCKS]} for c in layout["columns"]]
        promos = [n for n in layout.get("promotions", []) if n in names]
    else:
        featured = [n for n in layout["featured"] if n in names]
        pinned = [n for n in featured if n in layout.get("pinned", [])]
        cols = ([{"width": 1, "autoSort": False, "blocks": [n]} for n in pinned]
                + [{"width": 1, "autoSort": True, "blocks": [n for n in featured if n not in pinned]},
                   {"width": 1, "autoSort": False, "blocks": list(BLOCKS)}])
        promos = [n for n in layout.get("sidebar", []) if n in names]
    hidden = set(layout.get("hidden", []))
    if layout.get("showMoments") is False:
        hidden.add("@moments")
    if layout.get("showPostOfTheDay") is False:
        hidden.add("@spotlight")
    for c in cols:
        c["blocks"] = [b for b in c["blocks"] if b not in hidden]
    # A company placed nowhere goes under More Promotions, so its news still shows.
    placed = {b for c in cols for b in c["blocks"]} | set(promos) | hidden
    promos += [n for n in names if n not in placed]
    return cols, promos


def render(items, companies, layout, failed, numbers=None, moments=None, upcoming=None):
    now = datetime.now(timezone.utc)
    by_company = {c["name"]: [it for it in items if c["name"] in it["tags"]] for c in companies}
    other = [it for it in items if not it["tags"]]
    by_name = {c["name"]: c for c in companies}
    cols, promos = page_columns(layout, companies)

    # A column with autoSort puts its companies in order of biggest news. Other blocks keep their spots.
    top_score = lambda n: by_company[n][0]["score"] if by_company[n] else -1
    for col in cols:
        if col["autoSort"]:
            ranked = iter(sorted((b for b in col["blocks"] if b in by_name), key=top_score, reverse=True))
            col["blocks"] = [next(ranked) if b in by_name else b for b in col["blocks"]]
    # A company alone in its column gets a big section; companies sharing a column get small ones.
    featured = [b for col in cols for b in col["blocks"] if b in by_name]
    big = {b for col in cols for b in col["blocks"] if b in by_name and sum(x in by_name for x in col["blocks"]) == 1}
    small_cap = layout.get("maxPerSmallSection", 2)
    shown = allocate({n: by_company[n] for n in featured}, layout, {n: small_cap for n in featured if n not in big})

    def section(name):
        c = by_name[name]
        # bannerFrom / bannerTo / bannerText / bannerName / bannerBorder in companies.json override the banner look.
        extra = "".join(f";--{var}:{esc(c[key])}" for var, key in (("b1", "bannerFrom"), ("b2", "bannerTo"), ("bt", "bannerText"),
                                                                              ("bn", "bannerName"), ("bb", "bannerBorder"))
                        if c.get(key))
        size = "big" if name in big else "small"
        tagline = "" if c.get("logo") else f'<span>{esc(c.get("tagline", ""))}</span>'
        return (f'<section class="featured {size}" id="{anchor(name)}" style="--c:{esc(c["color"])};--c2:{esc(c.get("color2", "#111"))}{extra}">'
                f'<div class="banner">{banner_title(name, c)}{tagline}</div>'
                f'{render_list(shown[name], 99)}</section>')

    side = []
    for name in promos:
        news = by_company[name]
        side.append(f'<details id="{anchor(name)}" style="--c:{esc(by_name[name]["color"])}"{" open" if news else ""}>'
                    f'<summary>{esc(name)} <span class="count">{len(news)}</span></summary>'
                    f'{render_list(news, MAX_SIDEBAR)}</details>')
    # Stories that name none of the companies sit at the bottom of More Promotions.
    side.append(f'<details id="{anchor(OTHER)}" style="--c:#777"{" open" if other else ""}>'
                f'<summary>Other News <span class="count">{len(other)}</span></summary>'
                f'{render_list(other, MAX_SIDEBAR)}</details>')

    spot = json.loads((ROOT / "spotlight.json").read_text())
    spotlight = ""
    if spot.get("text"):
        spotlight = (f'<figure class="spotlight"><figcaption>{esc(spot["title"])}</figcaption>'
                     f'<blockquote>{esc(spot["text"])}</blockquote>'
                     f'<a href="{esc(spot["link"])}" target="_blank" rel="noopener">{esc(spot["author"])}'
                     f'{" · " + esc(spot["date"]) if spot.get("date") else ""}</a></figure>')
    blocks = {"@moments": render_moments(moments or [], companies, layout.get("momentsSeconds", 6)),
              "@upcoming": render_upcoming(upcoming or []),
              "@spotlight": spotlight,
              "@promotions": '<section class="promos"><h3>More Promotions</h3>' + "\n".join(side) + "</section>"}

    nav = [f'<a href="#{anchor(n)}" style="--c:{esc(by_name[n]["color"])}">{esc(n)} <span class="count">{len(by_company[n])}</span></a>'
           for n in featured]
    widths = " ".join(f'{max(0.2, c["width"]):g}fr' for c in cols)
    grid = (f'<div class="grid" style="--cols:{widths}">'
            + "".join('<div class="col">' + "".join(section(b) if b in by_name else blocks[b] for b in c["blocks"]) + "</div>"
                      for c in cols)
            + "</div>")

    note = f'<p class="meta">Couldn\'t reach today: {esc(", ".join(failed))}</p>' if failed else ""
    template = (ROOT / "template.html").read_text()
    return (template.replace("{{UPDATED}}", now.strftime("%B %d, %Y at %I:%M %p UTC"))
                    .replace("{{NAV}}", "".join(nav))
                    .replace("{{SECTIONS}}", grid)
                    .replace("{{NUMBERS}}", render_numbers(numbers or []) if layout.get("showNumbers", True) else "")
                    .replace("{{LAYOUT_VARS}}", layout_vars(layout))
                    .replace("{{NOTE}}", note))


def main():
    feeds = json.loads((ROOT / "feeds.json").read_text())
    companies = json.loads((ROOT / "companies.json").read_text())["companies"]
    layout = json.loads((ROOT / "layout.json").read_text())
    items, failed = [], []
    for feed in feeds:
        try:
            items += fetch(feed)
        except Exception as err:
            print(f"Skipping {feed['name']}: {err}")
            failed.append(feed["name"])
    ranking = json.loads((ROOT / "ranking.json").read_text())
    now = datetime.now(timezone.utc)
    stories = rank_stories(items, ranking, now)
    add_engagement(stories, fetch_engagement(ranking.get("engagement", {})), ranking)
    tag_items(stories, companies)
    numbers = find_numbers(items, companies, layout.get("numbersToShow", 8))
    moments = update_moments(stories, companies, layout, ranking, now)
    schedule = json.loads((ROOT / "schedule.json").read_text())
    upcoming = find_cards(upcoming_shows(schedule, companies, layout, now), items, now)
    (ROOT / "index.html").write_text(render(stories, companies, layout, failed, numbers, moments, upcoming))
    print(f"Ranked {len(items)} headlines into {len(stories)} stories from {len(feeds) - len(failed)} sources")


if __name__ == "__main__":
    main()
