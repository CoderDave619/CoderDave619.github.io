// Shareable build: only the Black Ops III hub, Shadows of Evil and Revelations are live.
// Any other internal link is turned into plain text (or removed from menus).
(function () {
  const OK_ART = ["shadows-of-evil", "revelations"];
  const allowed = href => {
    if (!href || href.startsWith("#") || /^(https?:|mailto:)/i.test(href) && !href.startsWith(location.origin)) return true;
    let u; try { u = new URL(href, location.href); } catch (e) { return false; }
    if (u.origin !== location.origin) return true;
    const p = u.pathname, q = u.searchParams;
    if (u.pathname === location.pathname && u.search === location.search) return true;
    if (/\/pages\/game\.html$/.test(p)) return q.get("g") === "bo3";
    if (/\/pages\/article\.html$/.test(p)) return OK_ART.includes(q.get("a")) && !q.get("t");
    if (/\/index\.html$|\/$/.test(p)) return !u.hash;
    return false;
  };
  const fix = root => {
    (root.querySelectorAll ? root : document).querySelectorAll("a[href]").forEach(a => {
      if (allowed(a.getAttribute("href"))) return;
      if (a.closest(".main-nav, #wikilinks, .ss-nav, .acct-menu, .site-footer nav, .hub-tiles")) { const li = a.parentElement; a.remove(); if (li && li.tagName === "LI" && !li.textContent.trim()) li.remove(); return; }
      const s = document.createElement("span"); s.className = (a.className || "") + " locked"; s.innerHTML = a.innerHTML; a.replaceWith(s);
    });
  };
  const tidy = () => {
    const S = window.SITE, wl = document.getElementById("wikilinks");
    if (wl) wl.innerHTML = OK_ART.map(sl => S.articles.find(a => S.slug(a.title) === sl && a.game === "bo3")).filter(Boolean)
      .map(a => `<li><a href="${S.artUrl(a.title)}">🧟 ${S.esc(a.title)}</a></li>`).join("");
    document.querySelectorAll(".hub-side .hub-box").forEach(b => { if (!b.querySelector("#wikilinks")) b.remove(); });
    document.querySelectorAll("#hubmain > section").forEach(sec => { if (/forum|featured/i.test(sec.id) || sec.querySelector(".thread-list")) { document.querySelectorAll(`.hub-tiles a[href="#${sec.id}"]`).forEach(t => t.remove()); sec.remove(); } });
    document.querySelectorAll(".wn-group").forEach(g => { g.innerHTML = `<b>Zombies maps</b>` + OK_ART.map(sl => { const a = S.articles.find(x => S.slug(x.title) === sl && x.game === "bo3"); return a ? `<a href="${S.artUrl(a.title)}">${S.esc(a.title)}</a>` : ""; }).join(""); });
    document.querySelectorAll(".wn-group + .wn-group").forEach(g => g.remove());
  };
  const run = () => { tidy(); fix(document); new MutationObserver(ms => ms.forEach(m => m.addedNodes.forEach(n => n.nodeType === 1 && fix(n.parentNode || n)))).observe(document.body, { childList: true, subtree: true }); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();
