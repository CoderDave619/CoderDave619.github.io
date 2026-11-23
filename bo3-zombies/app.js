// Shared behavior for every page: header, footer, search, URL helpers, placeholder art.
(function () {
  const S = window.SITE;
  S.games.forEach(g => { g.count = S.articles.filter(a => a.game === g.id).length; });
  const root = document.body.dataset.root || "";   // "" on homepage, "../" in /pages
  const page = (p) => root + p;
  S.homeUrl = () => page("index.html");
  S.gameUrl = (g) => page("pages/game.html?g=" + g);
  S.catUrl  = (g, c) => page("pages/category.html?g=" + g + (c ? "&c=" + c : ""));
  S.artUrl  = (t) => page("pages/article.html?a=" + S.slug(t));
  S.esc = (s) => String(s).replace(/[&<>"]/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch]));

  // Deterministic gradient "art" until real images exist
  S.art = (seed, color) => {
    let h = 0; for (const ch of seed) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const [a, b] = color || ["#f2a541", "#3a2a40"];
    return `background: radial-gradient(circle at ${20 + h % 60}% ${20 + (h >> 3) % 50}%, ${a}bb, transparent 55%), linear-gradient(${h % 360}deg, ${b}, #0f1117);`;
  };

  // Forum storage: seed threads from data.js plus anything posted in this browser.
  // NOTE: localStorage is per-browser only. Real posting between users needs a backend.
  const FKEY = "codex-forum-v1";
  const loadLocal = () => { try { return JSON.parse(localStorage.getItem(FKEY)) || {}; } catch (e) { return {}; } };
  const saveLocal = (d) => { try { localStorage.setItem(FKEY, JSON.stringify(d)); return true; } catch (e) { return false; } };
  S.forumThreads = (gid) => {
    const local = loadLocal()[gid] || { threads: [], replies: {} };
    const seed = (S.forums[gid] || []).map(t => Object.assign({}, t, { posts: t.posts.concat(local.replies[t.id] || []) }));
    const mine = local.threads.map(t => Object.assign({}, t, { posts: t.posts.concat(local.replies[t.id] || []) }));
    return mine.concat(seed).sort((x, y) => (y.pinned ? 1 : 0) - (x.pinned ? 1 : 0));
  };
  S.forumAddThread = (gid, t) => {
    const d = loadLocal(); d[gid] = d[gid] || { threads: [], replies: {} };
    t.id = "u" + Date.now(); d[gid].threads.unshift(t); return saveLocal(d) ? t.id : null;
  };
  S.forumAddReply = (gid, tid, post) => {
    const d = loadLocal(); d[gid] = d[gid] || { threads: [], replies: {} };
    const own = d[gid].threads.find(t => t.id === tid);
    if (own) own.posts.push(post); else (d[gid].replies[tid] = d[gid].replies[tid] || []).push(post);
    return saveLocal(d);
  };
  S.basicsUrl = g => page("pages/basics.html?g=" + g);
  S.coachUrl = g => page("pages/coach.html?g=" + g);
  S.compUrl = g => page("pages/competitive.html?g=" + g);
  S.forumUrl = (g, t) => page("pages/forum.html?g=" + g + (t ? "&t=" + t : ""));

  // Breadcrumbs: Home / Series / Game / ...extra (each [label, href|null])
  S.seriesUrl = id => page("pages/series.html?s=" + id);
  S.crumbs = (g, extra) => {
    const parts = [[`Home`, S.homeUrl()]];
    const se = g && S.seriesOf(g);
    if (se) parts.push([se.name, S.seriesUrl(se.id)]);
    if (g) parts.push([S.short(g), S.gameUrl(g.id)]);
    (extra || []).forEach(x => parts.push(x));
    return parts.map(([l, h], i) => h && i < parts.length - 1 ? `<a href="${h}">${S.esc(l)}</a>` : `<span>${S.esc(l)}</span>`).join(" / ");
  };

  // Header
  const header = document.querySelector("[data-header]");
  if (header) {
    const gid = document.body.dataset.game || new URLSearchParams(location.search).get("g");
    const g = gid && S.game(gid);
    header.innerHTML = `
      <div class="wrap">
        <a class="brand" href="${S.homeUrl()}">
          <span class="brand-mark">${S.siteName.split(" ").pop()[0]}</span>
          <span>${S.siteName}<small>Game encyclopedia</small></span>
        </a>
        <div class="search search-sm">
          <span class="icon">🔍</span>
          <input type="search" data-search placeholder="Search the wiki…" autocomplete="off" aria-label="Search">
          <div class="search-results"></div>
        </div>
        <button class="nav-toggle" aria-label="Menu">☰</button>
        <nav class="main-nav">
          ${g ? "" : `<a href="${S.homeUrl()}#games">Games</a>`}
          ${g ? [["game", S.gameUrl(g.id), S.esc(S.short(g)) + " hub"], ["basics", S.basicsUrl(g.id), "Basic info"], ["competitive", S.compUrl(g.id), "Competitive"], ["forum", S.forumUrl(g.id), "Forum"]].filter(([k]) => S.shows(g, k))
            .map(([k, href, label]) => `<a class="${new RegExp(k + "\\.html").test(location.pathname) ? "active" : ""}" href="${href}">${label}</a>`).join("") : ""}
          ${g ? "" : `<a class="${/requests\.html/.test(location.pathname) ? "active" : ""}" href="${page("pages/requests.html")}">Request a game</a>`}
        </nav>
        <div class="account" id="account"></div>
      </div>`;
    header.querySelector(".nav-toggle").onclick = () => header.querySelector(".main-nav").classList.toggle("open");
    S.accountUrl = () => page("pages/account.html");
    S.reviewUrl = () => page("pages/review.html");
    const acct = header.querySelector("#account"), A = S.auth;
    if (A) {
      const u = A.user();
      if (!u) acct.innerHTML = `<a class="btn btn-primary btn-sm" href="${S.accountUrl()}">Sign in</a>`;
      else {
        const d = A.data(), queue = d.pending.length + d.reports.length;
        acct.innerHTML = `
          <button class="acct-btn" type="button" aria-haspopup="true"><span class="avatar sm">${S.esc(u.name[0].toUpperCase())}</span>
            <span class="acct-name">${S.esc(u.name)}</span>${A.can("review") && queue ? `<span class="dot">${queue}</span>` : ""}</button>
          <div class="acct-menu">
            <div class="am-head"><b>${S.esc(u.name)}</b> ${A.lvl(u.name)}${A.badge(u.tier)}
              <div class="xpbar sm"><i style="width:${(() => { const L = A.levelOf(u.name), lo = L ? S.xpFor(L) : 0; return Math.round((A.xpOf(u.name) - lo) / (S.xpFor(L + 1) - lo) * 100); })()}%"></i></div></div>
            <a href="${S.accountUrl()}">My account</a>
            ${A.can("review") ? `<a href="${S.reviewUrl()}">Review queue <em>${queue}</em></a>` : ""}
            <label class="am-switch">Preview as
              <select>${S.tiers.filter(t => t.id !== "guest").map(t => `<option value="${t.id}" ${t.id === u.tier ? "selected" : ""}>${t.name}</option>`).join("")}</select></label>
            <a href="#" data-signout>Sign out</a>
          </div>`;
        acct.querySelector(".acct-btn").onclick = e => { e.stopPropagation(); acct.classList.toggle("open"); };
        document.addEventListener("click", e => { if (!acct.contains(e.target)) acct.classList.remove("open"); });
        acct.querySelector("select").onchange = e => { A.setTier(e.target.value); location.reload(); };
        acct.querySelector("[data-signout]").onclick = e => { e.preventDefault(); A.signOut(); location.reload(); };
      }
    }
  }

  // Footer
  const footer = document.querySelector("[data-footer]");
  if (footer) {
    footer.innerHTML = `
      <div class="wrap">
        <div>© ${new Date().getFullYear()} ${S.siteName}. A fan-made encyclopedia, not affiliated with any game's creators.<br>Game names and trademarks belong to their owners. Text is written by contributors.</div>
        <nav><a href="${S.homeUrl()}">Home</a><a href="${S.homeUrl()}#games">All games</a><a href="${page("pages/requests.html")}">Request a game</a><a href="${S.homeUrl()}#about">About</a></nav>
      </div>`;
  }

  // Search (any input with [data-search]) across every game
  document.querySelectorAll("[data-search]").forEach(input => {
    const box = input.parentElement.querySelector(".search-results");
    let hl = -1;
    const render = () => {
      const q = input.value.trim().toLowerCase();
      hl = -1;
      if (!q) { box.classList.remove("open"); return; }
      const scope = input.dataset.scope;
      const STOP = new Set("how to do the a an of in on for i can get guide complete beat finish what is where find".split(" "));
      const norm = x => x.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const words = norm(q).split(/[^a-z0-9]+/).filter(w => w && !STOP.has(w));
      const has = text => { const t = norm(text); return words.length ? words.every(w => t.includes(w)) : t.includes(norm(q)); };
      const ALIAS = { "main easter egg": "main quest ee easter egg boss steps", "side easter eggs": "side ee easter egg secrets music song", "notable glitches": "glitch glitches exploit", "lore": "story lore plot ending", "in-game mechanics": "mechanics wonder weapon pack a punch perks" };
      const hits = S.articles.filter(a => !scope || a.game === scope).filter(a => has(a.title + " " + a.summary + " " + a.category + " " + S.game(a.game).title)).slice(0, 7);
      // Also match individual sections and Easter egg steps, linking straight to them
      const secHits = [];
      S.articles.filter(a => (!scope || a.game === scope) && a.sections).forEach(a => a.sections.forEach(sec => {
        const anchor = "#s-" + S.slug(sec.title), alias = ALIAS[sec.title.toLowerCase()] || "";
        if (!/overview/i.test(sec.title) && has(a.title + " " + sec.title + " " + alias) && words.some(w => norm(sec.title + " " + alias).includes(w))) secHits.push({ a, label: sec.title, anchor, top: true });
        (sec.steps || []).forEach((st, i) => { if (has(a.title + " " + st.title) && words.some(w => norm(st.title).includes(w))) secHits.push({ a, label: `${sec.title} › Step ${i + 1}: ${st.title}`, anchor }); });
      }));
      secHits.sort((x, y) => (y.top ? 1 : 0) - (x.top ? 1 : 0));
      const secFirst = secHits.some(h => h.top);
      const artItems = hits.map(a => `<a href="${S.artUrl(a.title)}"><span class="cat">${S.esc(S.short(S.game(a.game)))} · ${S.esc((S.cat(a.category) || { name: a.category }).name)}</span><br>${S.esc(a.title)}</a>`)
;
      const secItems = secHits.slice(0, Math.max(3, 9 - hits.length)).map(h => `<a href="${S.artUrl(h.a.title)}${h.anchor}"><span class="cat">${S.esc(h.a.title)} · section</span><br>${S.esc(h.label)}</a>`);
      const items = secFirst ? secItems.concat(artItems) : artItems.concat(secItems);
      box.innerHTML = items.length
        ? items.join("")
        : `<div class="empty">No pages match “${S.esc(input.value)}”.</div>`;
      box.classList.add("open");
    };
    input.addEventListener("input", render);
    input.addEventListener("keydown", e => {
      const links = [...box.querySelectorAll("a")];
      if ((e.key === "ArrowDown" || e.key === "ArrowUp") && links.length) {
        e.preventDefault();
        hl = (hl + (e.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
        links.forEach((l, i) => l.classList.toggle("hl", i === hl));
      } else if (e.key === "Enter" && links.length) {
        location.href = links[Math.max(hl, 0)].href;
      } else if (e.key === "Escape") box.classList.remove("open");
    });
    document.addEventListener("click", e => { if (!input.parentElement.contains(e.target)) box.classList.remove("open"); });
  });

  document.querySelectorAll("[data-site]").forEach(el => el.textContent = S.siteName);

  // "From someone who was there": firsthand context added by the site's editor.
  // Data: an `insider` array on any article or tournament event: [{ text, by, date }]. Empty shows a placeholder.
  S.insiderBlock = notes => (notes && notes.length)
    ? `<aside class="insider" id="insider"><div class="insider-head">From someone who was there</div>${notes.map(n => `<blockquote>${S.esc(n.text)}</blockquote><div class="who">${S.esc(n.by || "")}${n.date ? " · " + S.esc(n.date) : ""}</div>`).join("")}</aside>`
    : `<aside class="insider empty" id="insider"><div class="insider-head">From someone who was there</div><p class="small">No firsthand notes yet. This box is for context only someone who played or watched at the time would know: what the community thought, what it felt like, what the records leave out.</p></aside>`;

  // Picture slots: the site's own screenshots live in images/<game>/<page>/<kind>-<item>.png (see README).
  // If the file isn't there yet, a quiet placeholder shows instead. No images are hotlinked from other sites.
  S.imgPath = (game, page, kind, item) => `images/${game}/${S.slug(page)}/${kind}${item ? "-" + S.slug(item) : ""}.png`;
  S.img = (path, alt, cls) => `<figure class="img-slot ${cls || ""}" title="Picture: ${S.esc(path)}"><img src="${(document.body.dataset.root || "") + path}" alt="${S.esc(alt)}" loading="lazy" onerror="this.parentNode.classList.add('missing');this.remove()"><figcaption>${S.esc(alt)}</figcaption></figure>`;
})();

// ---------- Coach's corner: a context-aware panel for any informational page ----------
// Tips live in S.coachTips["<type>:<key>"] = { reviewed: false, sections: { "<section title>": ["tip", ...] } }
// <type> is one of the templates below; <key> is a game id or an article title. Empty sections show a draft placeholder.
(function () {
  const S = window.SITE; S.coachTips = S.coachTips || {};
  S.coachTemplates = {
    hub: { blurb: "A head start and the advice a coach would give you.", sections: ["Fundamentals", "Common mistakes", "How to improve"] },
    competitive: { blurb: "Rules and advice for players who want to compete.", sections: ["Ruleset and settings", "How to get into competitive", "Advice for aspiring players", "Common mistakes in scrims and ranked"] },
    map: { blurb: "Coaching for this map: how to plan a game and where to set up.", sections: ["Map strategy", "Early-round plan", "Best training spots", "Common mistakes on this map"] },
    speedruns: { blurb: "How runners practise and plan their routes.", sections: ["Routing", "Practice routine", "Setups and settings", "Common run killers"] },
    tech: { blurb: "How to practise these techniques until they're second nature.", sections: ["How to practise", "Drills", "When to use them in a match"] },
    article: { blurb: "Tips from players who know this well.", sections: ["Tips"] }
  };
  S.coachPanel = (type, key, opts) => {
    if (opts && opts.game && !S.shows(S.game(opts.game), "coach")) return "";
    const t = S.coachTemplates[type] || S.coachTemplates.article, data = S.coachTips[type + ":" + key] || {}, secs = data.sections || {};
    const fmtB = x => S.esc(x).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/VERIFY/g, '<span class="badge-verify">VERIFY</span>');
    const draft = data.reviewed ? "" : `<span class="badge-verify mk-draft">Draft, pending review</span>`;
    const body = t.sections.map(name => { const tips = secs[name] || [];
      return `<div class="coach-sec"><h3>${S.esc(name)}</h3>${tips.length ? `<ul class="mk-list">${tips.map(x => `<li>${fmtB(x)}</li>`).join("")}</ul>` : `<p class="small muted coach-empty">Not written yet.</p>`}</div>`; }).join("");
    const more = opts && opts.game ? `<p class="small"><a href="${S.coachUrl(opts.game)}">All ${S.esc(S.short(S.game(opts.game)))} coaching →</a></p>` : "";
    return `<details class="coach-panel" id="coach"${opts && opts.open ? " open" : ""}><summary><span class="coach-ico">🎓</span><span><b>Coach's corner</b> ${draft}<span class="small muted coach-blurb">${S.esc(t.blurb)}</span></span><span class="coach-chev">▾</span></summary><div class="coach-body">${body}${more}</div></details>`;
  };
})();
