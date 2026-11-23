// ------------------------------------------------------------
// Tiered accounts, wiki edits, history and reports: PREVIEW ONLY.
// Everything is stored in this browser's localStorage so each role
// can be tried. A real site moves this to a backend (see README).
// ------------------------------------------------------------
(function (S) {
  S.tiers = [
    { id: "guest",       name: "Reader",         rank: 0, color: "#9aa3b5", desc: "Not signed in. Can read everything." },
    { id: "contributor", name: "Contributor",    rank: 1, color: "#5ec2b7", desc: "Any account. Suggested edits go to a review queue. Can post in forums and report content." },
    { id: "trusted",     name: "Trusted editor", rank: 2, color: "#6ba8f2", desc: "Unlocked automatically at level 5, or promoted by a moderator. Edits publish right away." },
    { id: "moderator",   name: "Moderator",      rank: 3, color: "#f2a541", desc: "Reviews the queue, reverts edits, handles reports, locks pages and bans users." },
    { id: "admin",       name: "Admin",          rank: 4, color: "#f26b6b", desc: "Runs the site. Everything moderators can do, plus managing moderators." }
  ];
  // ---- XP & levels ----
  // Level L needs 25 * L * (L + 1) total XP (Lv1 = 50, Lv2 = 150, Lv5 = 750, Lv10 = 2750).
  S.XP = {
    editApproved: 25,  // suggested edit approved by a moderator
    editPublished: 15, // trusted editor's direct edit
    articleCreated: 40,
    threadPosted: 10,
    replyPosted: 5,
    likeReceived: 3,
    reportAccepted: 10, // a moderator acted on your report
    editRejected: -15,
    editReverted: -20
  };
  S.PROMOTE_LEVEL = 5;  // reaching this level auto-promotes a Contributor to Trusted editor
  S.xpFor = L => 25 * L * (L + 1);
  S.levelFromXP = xp => { let L = 0; while (xp >= S.xpFor(L + 1)) L++; return L; };
  // Placeholder XP for the invented forum users, so their level badges show something.
  S.seedXP = { moderator: 3400, keeper_of_embers: 1650, framecount: 900, lorehound: 520, ashwalker: 160, ghostflame: 60, icebound: 300 };
  S.tier = id => S.tiers.find(t => t.id === id) || S.tiers[0];

  const KEY = "codex-accounts-v1";
  const blank = () => ({ user: null, users: {}, pending: [], history: {}, published: {}, reports: [], locked: {}, banned: {} });
  const load = () => { try { return Object.assign(blank(), JSON.parse(localStorage.getItem(KEY)) || {}); } catch (e) { return blank(); } };
  const save = d => { try { localStorage.setItem(KEY, JSON.stringify(d)); return true; } catch (e) { return false; } };
  const now = () => new Date().toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
  const id = () => Math.random().toString(36).slice(2, 9);

  const A = S.auth = {};
  A.data = load;

  // ---- Session ----
  A.user = () => { const d = load(); return d.user ? Object.assign({ name: d.user }, d.users[d.user]) : null; };
  A.tierOf = () => { const u = A.user(); return u ? u.tier : "guest"; };
  A.signIn = (name) => {
    const d = load(); name = name.trim().slice(0, 30); if (!name) return false;
    d.users[name] = d.users[name] || { tier: "contributor", approved: 0, xp: 0, log: [], joined: new Date().toLocaleDateString([], { dateStyle: "medium" }) };
    d.user = name; return save(d);
  };
  A.signOut = () => { const d = load(); d.user = null; save(d); };
  A.setTier = (tier) => { const d = load(); if (!d.user) return; d.users[d.user].tier = tier; save(d); };   // preview switcher

  // ---- XP ----
  const addXP = (d, name, kind, note) => {
    const amt = S.XP[kind]; if (!amt || !name) return;
    const u = d.users[name] = d.users[name] || { tier: "contributor", approved: 0, xp: S.seedXP[name] || 0, log: [], joined: now() };
    u.xp = Math.max(0, (u.xp || 0) + amt);
    (u.log = u.log || []).unshift({ kind, amt, note: note || "", when: now() }); u.log = u.log.slice(0, 50);
    if (u.tier === "contributor" && !u.manual && S.levelFromXP(u.xp) >= S.PROMOTE_LEVEL) { u.tier = "trusted"; u.log.unshift({ kind: "promoted", amt: 0, note: `Reached level ${S.PROMOTE_LEVEL}: promoted to Trusted editor`, when: now() }); }
  };
  A.giveXP = (name, kind, note) => { const d = load(); addXP(d, name, kind, note); save(d); };
  A.xpOf = name => { const u = load().users[name]; return u ? (u.xp || 0) : (S.seedXP[name] || 0); };
  A.levelOf = name => S.levelFromXP(A.xpOf(name));
  A.lvl = name => name === "Guest" ? "" : `<span class="lvl" title="${A.xpOf(name)} XP">Lv ${A.levelOf(name)}</span>`;
  // Moderator override: set someone's tier by hand (stops auto-promotion from changing it back)
  A.setUserTier = (name, tier) => { const d = load(); const u = d.users[name]; if (!u) return; u.tier = tier; u.manual = true; u.log.unshift({ kind: "tier", amt: 0, note: `Tier set to ${S.tier(tier).name} by ${d.user}`, when: now() }); save(d); };
  A.likes = () => load().likes || {};
  A.like = (postKey, author) => {
    const d = load(); if (!d.user) return false; d.likes = d.likes || {};
    const l = d.likes[postKey] = d.likes[postKey] || [];
    if (l.includes(d.user) || author === d.user) return false;
    l.push(d.user); addXP(d, author, "likeReceived", "Liked forum post"); return save(d);
  };

  // ---- Permissions ----
  const rank = () => S.tier(A.tierOf()).rank;
  A.isBanned = () => { const u = A.user(); return !!(u && load().banned[u.name]); };
  A.can = (action, slug) => {
    if (A.isBanned()) return false;
    const r = rank(), locked = slug && load().locked[slug];
    switch (action) {
      case "suggest": return r >= 1 && !locked;
      case "publish": return locked ? r >= 3 : r >= 2;
      case "post":    return r >= 1;
      case "report":  return r >= 1;
      case "review": case "revert": case "lock": case "ban": return r >= 3;
      default: return false;
    }
  };

  // ---- Article content (original from data.js + published edits) ----
  A.published = slug => load().published[slug] || {};
  A.history = slug => load().history[slug] || [];
  A.isLocked = slug => !!load().locked[slug];

  // Submit an edit. Publishes directly for trusted+, otherwise queues it.
  A.submitEdit = (slug, title, changes, summary, source) => {
    const d = load(), u = d.user; if (!u) return null;
    const before = Object.assign({}, d.published[slug] || {});
    const edit = { id: id(), slug, title, author: u, tier: d.users[u].tier, when: now(), summary: summary || "No summary", source: source || "", changes, before };
    if (A.can("publish", slug)) {
      d.published[slug] = Object.assign({}, before, changes);
      (d.history[slug] = d.history[slug] || []).unshift(Object.assign(edit, { status: "published", by: u }));
      addXP(d, u, "editPublished", title); save(d); return "published";
    }
    d.pending.push(edit); save(d); return "queued";
  };
  // Guest submission request: no account, must pass a bot check, rate-limited, earns no XP.
  S.GUEST_LIMIT = 3; // per hour, per browser (a real site limits by IP on the server)
  A.guestSubmit = (slug, title, changes, summary, email, source) => {
    const d = load(), hour = Date.now() - 3600e3;
    d.guestTimes = (d.guestTimes || []).filter(t => t > hour);
    if (d.guestTimes.length >= S.GUEST_LIMIT) return "limited";
    d.guestTimes.push(Date.now());
    d.pending.push({ id: id(), slug, title, author: "Guest", guest: true, email: email || "", tier: "guest", when: now(), summary: summary || "No summary", source: source || "", changes, before: {} });
    return save(d) ? "queued" : null;
  };
  A.approve = (editId) => {
    const d = load(), i = d.pending.findIndex(e => e.id === editId); if (i < 0) return;
    const e = d.pending.splice(i, 1)[0];
    e.before = Object.assign({}, d.published[e.slug] || {});
    d.published[e.slug] = Object.assign({}, e.before, e.changes);
    (d.history[e.slug] = d.history[e.slug] || []).unshift(Object.assign(e, { status: "approved", by: d.user, reviewed: now() }));
    if (!e.guest) { const au = d.users[e.author]; if (au) au.approved = (au.approved || 0) + 1; addXP(d, e.author, "editApproved", e.title); }
    save(d);
  };
  A.reject = (editId, reason) => {
    const d = load(), i = d.pending.findIndex(e => e.id === editId); if (i < 0) return;
    const e = d.pending.splice(i, 1)[0];
    (d.history[e.slug] = d.history[e.slug] || []).unshift(Object.assign(e, { status: "rejected", by: d.user, reason: reason || "", reviewed: now() }));
    if (!e.guest) addXP(d, e.author, "editRejected", e.title); save(d);
  };
  A.revert = (slug, revId) => {
    const d = load(), h = d.history[slug] || [], rev = h.find(e => e.id === revId); if (!rev) return;
    d.published[slug] = Object.assign({}, rev.before);
    h.unshift({ id: id(), slug, title: rev.title, author: d.user, tier: d.users[d.user].tier, when: now(), status: "reverted",
      summary: `Reverted edit by ${rev.author} (“${rev.summary}”)`, changes: rev.before, before: {} });
    rev.status = "was reverted"; if (rev.author !== d.user && !rev.guest) addXP(d, rev.author, "editReverted", rev.title); save(d);
  };
  A.toggleLock = (slug) => { const d = load(); d.locked[slug] = !d.locked[slug]; save(d); return d.locked[slug]; };

  // ---- Game requests ----
  S.seedRequests = [
    { id: "r1", title: "Starling Drift 2", platform: "PC, PS5", why: "Huge lore and a big modding scene, no good wiki yet.", by: "framecount", when: "Oct 2026", votes: 48, status: "planned" },
    { id: "r2", title: "Rootbound: Deep Roots", platform: "Switch", why: "Crafting recipes are scattered across Discord servers.", by: "lorehound", when: "Nov 2026", votes: 31, status: "requested" },
    { id: "r3", title: "Neon Requiem", platform: "PC, Xbox", why: "Speedrun community needs a route database.", by: "ghostflame", when: "Sep 2026", votes: 27, status: "added" },
    { id: "r4", title: "Tidecaller's Oath", platform: "PC", why: "Unit stats change every patch and nobody tracks them.", by: "icebound", when: "Nov 2026", votes: 12, status: "requested" }
  ];
  S.requestStatuses = { requested: "Requested", planned: "Planned", added: "Added" };
  A.requests = () => {
    const d = load(), votes = d.reqVotes || {}, status = d.reqStatus || {};
    return S.seedRequests.concat(d.requests || []).map(r => Object.assign({}, r, {
      votes: (r.votes || 0) + (votes[r.id] || []).length, voted: !!(d.user && (votes[r.id] || []).includes(d.user)), status: status[r.id] || r.status
    })).sort((x, y) => y.votes - x.votes);
  };
  A.addRequest = (title, platform, why, guest) => {
    const d = load(), hour = Date.now() - 3600e3;
    if (guest) { d.guestTimes = (d.guestTimes || []).filter(t => t > hour); if (d.guestTimes.length >= S.GUEST_LIMIT) return "limited"; d.guestTimes.push(Date.now()); }
    const existing = A.requests().find(r => r.title.toLowerCase() === title.toLowerCase());
    if (existing) return "duplicate:" + existing.id;
    (d.requests = d.requests || []).push({ id: id(), title, platform, why, by: guest ? "Guest" : d.user, when: now(), votes: 0, status: "requested" });
    return save(d) ? "ok" : null;
  };
  A.voteRequest = rid => {
    const d = load(); if (!d.user) return false; d.reqVotes = d.reqVotes || {};
    const v = d.reqVotes[rid] = d.reqVotes[rid] || [];
    const i = v.indexOf(d.user); i >= 0 ? v.splice(i, 1) : v.push(d.user); return save(d);
  };
  A.setRequestStatus = (rid, st) => { const d = load(); (d.reqStatus = d.reqStatus || {})[rid] = st; save(d); };

  // ---- Reports & bans ----
  A.report = (kind, target, title, reason) => {
    const d = load(); if (!d.user) return false;
    d.reports.push({ id: id(), kind, target, title, reason, by: d.user, when: now() }); return save(d);
  };
  A.dismissReport = rid => { const d = load(); d.reports = d.reports.filter(r => r.id !== rid); save(d); };
  // Act on a report: removes it from the queue and rewards the reporter
  A.acceptReport = rid => { const d = load(), r = d.reports.find(x => x.id === rid); if (!r) return; d.reports = d.reports.filter(x => x.id !== rid); addXP(d, r.by, "reportAccepted", r.title); save(d); return r; };
  A.ban = name => { const d = load(); d.banned[name] = true; save(d); };
  A.unban = name => { const d = load(); delete d.banned[name]; save(d); };
  A.reset = () => save(blank());
  A.forumXP = (kind, note) => A.giveXP(load().user, kind, note);

  A.badge = (tierId) => { const t = S.tier(tierId); return `<span class="tier-badge" style="--tc:${t.color}">${t.name}</span>`; };
})(window.SITE);
