// ------------------------------------------------------------
// Call of Duty: Black Ops III. Hub built around Zombies speedrunning
// (see games/bo3-speedruns.js and pages/speedruns.html). Original wording.
// DLC dates are the first (PlayStation 4) release dates. VERIFY.
// ------------------------------------------------------------
(function (S) {
  const G = "bo3";
  S.games.push({
    id: G, title: "Call of Duty: Black Ops III", short: "Black Ops III", series: "cod", genre: "First-person shooter", year: 2015,
    color: ["#d94a3a", "#1b1d24"],
    blurb: "Treyarch's 2015 shooter: wall-running and thrust-jump movement, Specialists, and the deepest Zombies mode in the series, with a speedrunning scene that is still active.",
    categories: ["zombies", "characters", "mpmaps", "weapons", "perks", "modes", "tech", "competitive"],
    hubHide: [], // parts to hide on this hub, e.g. ["competitive", "speedruns"]; see data.js
    hubLayout: ["speedruns", "trending", "guides", "updates", "forum", "featured"],
    techArticle: null, competitiveArticle: null
  });
  const A = o => S.articles.push(Object.assign({ game: G }, o));

  A({ title: "Shadows of Evil", category: "zombies", featured: true, trending: true,
    summary: "The launch Zombies map: a 1940s noir city called Morg City, four strangers bound by a deal with the Shadowman, and the Beast form that opens up the map.",
    facts: { Release: "November 2015 (launch)", Players: "1–4", "Main quest": "Yes (solo and co-op)" },
    sections: [
      { title: "Overview", body: "Shadows of Evil swapped the usual cast for four morally compromised characters in a Lovecraftian take on a 1940s city. Beast mode lets a player become a tentacled creature to power switches and open shortcuts, and the map's [[Apothicon Servant]] wonder weapon is built from parts hidden around the city." }
    ] });
  A({ title: "The Giant", category: "zombies", trending: true,
    summary: "A reimagining of Der Riese, the factory map from World at War, with the original crew and the Black Ops III weapon and perk systems.",
    facts: { Release: "November 2015 (bonus map)", Players: "1–4", "Main quest": "Yes" } });
  A({ title: "Der Eisendrache", category: "zombies", featured: true, trending: true,
    summary: "A castle in the Austrian Alps with four elemental bows, a rocket test site and a dragon. Released with the Awakening DLC and a favourite speedrun map.",
    facts: { Release: "Feb 2016, Awakening DLC (VERIFY)", Players: "1–4", "Main quest": "Yes (solo and co-op)" } });
  A({ title: "Zetsubou No Shima", category: "zombies",
    summary: "A Japanese research island in the Pacific with plant-growing, spider nests and the KT-4 wonder weapon. Released with the Eclipse DLC.",
    facts: { Release: "Apr 2016, Eclipse DLC (VERIFY)", Players: "1–4", "Main quest": "Yes" } });
  A({ title: "Gorod Krovi", category: "zombies",
    summary: "A ruined, alternate-history Stalingrad patrolled by dragons and mechs, with a dragon-fire gauntlet. Released with the Descent DLC.",
    facts: { Release: "Jul 2016, Descent DLC (VERIFY)", Players: "1–4", "Main quest": "Yes" } });
  A({ title: "Revelations", category: "zombies", trending: true,
    summary: "The finale of the original Aether storyline: a patchwork world stitched from earlier maps. Released with the Salvation DLC.",
    facts: { Release: "Aug 2016, Salvation DLC (VERIFY)", Players: "1–4", "Main quest": "Yes" } });
  A({ title: "Zombies Chronicles", category: "zombies",
    summary: "A 2017 expansion that remastered eight classic Zombies maps for Black Ops III: Nacht der Untoten, Verrückt, Shi No Numa, Kino der Toten, Ascension, Shangri-La, Moon and Origins.",
    facts: { Release: "May 2017 (VERIFY)", Maps: "8 remasters" } });
  A({ title: "GobbleGum", category: "zombies", summary: "Single-use buffs bought from GobbleGum machines in Black Ops III Zombies." });

  S.hubs[G] = {
    coach: { reviewed: false, modesTitle: "By mode", modes: ["Zombies", "Multiplayer", "Speedrunning"], tips: {} },
    mustKnow: [{"text": "**Zombies basics:** kill zombies for points, spend them on doors, turn on the power, then buy perks and find Pack-a-Punch. Every map follows that path.", "href": "@basics", "label": "Basics"}, {"text": "**Early points:** in rounds 1 and 2, shoot each zombie a few times and finish it with your knife. That's worth more than a headshot kill.", "href": "@basics"}, {"text": "**Perk order:** **Juggernog** first (you survive more hits), then Quick Revive or Speed Cola, then Stamin-Up.", "a": "Shadows of Evil", "label": "Where the perks are"}, {"text": "**Build the shield** on every map that has one. It blocks hits from behind and makes training much safer.", "a": "Der Eisendrache", "label": "Buildables"}, {"text": "**GobbleGums:** take a pack of five into each match. Classic gums never run out; Mega gums cost Liquid Divinium.", "a": "Revelations", "label": "Our map picks"}, {"text": "**First Easter egg:** The Giant's is short and forgiving. Der Eisendrache is the usual next step.", "a": "The Giant"}, {"text": "**Multiplayer movement:** thrust jump, slide and wall-run are all part of fighting. Your Specialist ability charges over time.", "href": "@basics"}, {"text": "**Speedrunning?** World records follow strict rules on patch, player count and category.", "href":"@speedruns", "label": "Records"}],
    tech: [],
    competitive: {},
    tiers: null,
    guides: [
      { name: "Shadows of Evil main quest", type: "Zombies" }, { name: "Der Eisendrache bow quests", type: "Zombies" },
      { name: "Revelations main quest", type: "Zombies" }, { name: "Gorod Krovi main quest", type: "Zombies" }
    ],
    speedruns: [],   // filled from games/bo3-speedruns.js
    updates: [
      { version: "Zombies Chronicles", date: "May 2017 (VERIFY)", title: "Remastered maps", notes: ["Eight classic maps remade for Black Ops III"] },
      { version: "Salvation", date: "Aug 2016 (VERIFY)", title: "DLC 4", notes: ["Zombies: Revelations"] },
      { version: "Descent", date: "Jul 2016 (VERIFY)", title: "DLC 3", notes: ["Zombies: Gorod Krovi"] },
      { version: "Eclipse", date: "Apr 2016 (VERIFY)", title: "DLC 2", notes: ["Zombies: Zetsubou No Shima"] },
      { version: "Awakening", date: "Feb 2016 (VERIFY)", title: "DLC 1", notes: ["Zombies: Der Eisendrache"] },
      { version: "Launch", date: "Nov 2015", title: "Release", notes: ["Zombies: Shadows of Evil, plus The Giant as a bonus map"] }
    ],
    codes: [],
    facts: { release: "November 6, 2015", platforms: ["PlayStation 4", "Xbox One", "PC", "PS3 / Xbox 360 (no campaign)"], developer: "Treyarch", publisher: "Activision", price: "$59.99 at launch", length: { main: "~7–9 hours (VERIFY)", extras: "Varies", completionist: "Varies" } }
  };
  S.forums[G] = [
    { id: "z1", board: "speedrun", title: "Der Eisendrache solo EE: which bow first?", author: "framecount", when: "today", posts: [{ author: "framecount", when: "today", body: "Comparing routes for the solo main quest." }] },
    { id: "z2", board: "general", title: "Welcome to the Black Ops III forum", author: "moderator", when: "1 week ago", pinned: true, posts: [{ author: "moderator", when: "1 week ago", body: "Speedrun discussion goes in the Speedrunning board. Record claims need a video." }] }
  ];
  S.recentChanges.push({ title: "Der Eisendrache", note: "Page created", when: "just now" });
})(window.SITE);
