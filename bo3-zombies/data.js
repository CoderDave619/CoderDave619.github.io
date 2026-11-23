// ------------------------------------------------------------
// Site-wide settings and shared definitions.
// Each game lives in its own file under games/ and is listed in
// GAME_FILES below. Adding a game = add a file + one list entry.
// ------------------------------------------------------------
window.SITE = {
  siteName: "The Codex",
  tagline: "A fan-built encyclopedia for the games we love. Long-form wiki articles, deep technique guides, competitive coverage and a forum for every game.",

  // Article types. Each game picks the ones it uses (game.categories).
  categories: [
    { id: "characters", name: "Characters", icon: "👤", blurb: "Heroes, villains and everyone in between." },
    { id: "missions",   name: "Campaign missions", icon: "🎬", blurb: "Every story mission, with walkthroughs and collectibles." },
    { id: "mpmaps",     name: "Multiplayer maps", icon: "🗺️", blurb: "Layouts, callouts, spawns and strategy." },
    { id: "locations",  name: "Locations",  icon: "🗺️", blurb: "Regions, towns and hidden places." },
    { id: "weapons",    name: "Weapons",    icon: "🔫", blurb: "Stats, attachments and recommended setups." },
    { id: "items",      name: "Items",      icon: "🎒", blurb: "Gear, consumables and collectibles." },
    { id: "scorestreaks", name: "Scorestreaks", icon: "🚁", blurb: "Every streak, its cost and how to counter it." },
    { id: "perks",      name: "Perks & Wildcards", icon: "⭐", blurb: "Perks, Wildcards and the Pick 10 system." },
    { id: "modes",      name: "Game modes", icon: "🎯", blurb: "Rules and strategy for every mode." },
    { id: "zombies",    name: "Zombies",    icon: "🧟", blurb: "Maps, Easter eggs, perks and survival strategy." },
    { id: "gods",       name: "Gods",       icon: "⚡", blurb: "Every god: abilities, roles and builds." },
    { id: "roles",      name: "Roles",      icon: "🛡️", blurb: "What each role does and how to play it." },
    { id: "classes",    name: "Classes & skill trees", icon: "🌳", blurb: "Characters, skill trees and builds." },
    { id: "chambers",   name: "Test chambers", icon: "🧪", blurb: "Every chamber with solutions." },
    { id: "coop",       name: "Co-op",      icon: "🤝", blurb: "Co-op courses, gestures and teamwork." },
    { id: "enemies",    name: "Enemies & bosses", icon: "🐉", blurb: "Creatures, bosses and how to beat them." },
    { id: "lore",       name: "Lore",       icon: "📜", blurb: "Story, factions and history." },
    { id: "quests",     name: "Quests",     icon: "🧭", blurb: "Story and side quests." },
    { id: "nations",    name: "Nations & formables", icon: "🏳️", blurb: "Starting nations, formable nations and their goals." },
    { id: "ideas",      name: "Ideas & policies", icon: "📘", blurb: "National ideas, idea groups and policies." },
    { id: "mechanics",  name: "Mechanics", icon: "⚙️", blurb: "How the game's systems work." },
    { id: "dlc",        name: "DLC & expansions", icon: "📦", blurb: "What each expansion adds." },
    { id: "achievements", name: "Achievements", icon: "🏅", blurb: "Achievements and how to unlock them." },
    { id: "fighters",   name: "Fighters & Kameos", icon: "🥋", blurb: "Every fighter and Kameo: moves, combos and frame data." },
    { id: "combos",     name: "Combos & frame data", icon: "🎮", blurb: "Combo routes, frame data and move lists." },
    { id: "fatalities", name: "Fatalities & finishers", icon: "💀", blurb: "Inputs and ranges for every finisher." },
    { id: "villagers",  name: "Villagers", icon: "🏡", blurb: "Every villager: personality, birthday and house." },
    { id: "critters",   name: "Fish, bugs & sea creatures", icon: "🐟", blurb: "Where and when to catch everything." },
    { id: "diy",        name: "DIY recipes & items", icon: "🔨", blurb: "Recipes, materials and furniture." },
    { id: "events",     name: "Events & seasons", icon: "🎉", blurb: "Holidays, seasonal events and visitors." },
    { id: "tech",       name: "Tech",       icon: "🧠", blurb: "Techniques and niche mechanics." },
    { id: "competitive", name: "Competitive", icon: "🏆", blurb: "The competitive scene: rules, events, teams and terms." }
  ],

  // Series: every main entry, covered or not. `id` matches a game id when the game has a wiki here.
  series: [
    { id: "cod", characters: ["Captain Price", "Soap MacTavish", "Frank Woods", "Alex Mason", "David Mason", "Raul Menendez"], esports: "Call of Duty has had an organised competitive scene since the mid-2000s, through MLG, the Call of Duty Championship (from 2013), the Call of Duty World League and, since 2020, the franchised Call of Duty League. VERIFY dates.", name: "Call of Duty", overview: "Activision's long-running first-person shooter franchise, split across several sub-series developed mainly by Infinity Ward, Treyarch and Sledgehammer Games.",
      // [title, year, gameId (if covered), group]
      entries: [
        ["Call of Duty", 2003, null, "World War era"], ["Call of Duty 2", 2005, null, "World War era"], ["Call of Duty 3", 2006, null, "World War era"],
        ["Call of Duty: World at War", 2008, null, "World War era"], ["Call of Duty: WWII", 2017, null, "World War era"], ["Call of Duty: Vanguard", 2021, null, "World War era"],
        ["Call of Duty 4: Modern Warfare", 2007, null, "Modern Warfare"], ["Call of Duty: Modern Warfare 2", 2009, null, "Modern Warfare"], ["Call of Duty: Modern Warfare 3", 2011, null, "Modern Warfare"],
        ["Call of Duty: Modern Warfare", 2019, null, "Modern Warfare"], ["Call of Duty: Modern Warfare II", 2022, null, "Modern Warfare"], ["Call of Duty: Modern Warfare III", 2023, null, "Modern Warfare"],
        ["Call of Duty: Black Ops", 2010, null, "Black Ops"], ["Call of Duty: Black Ops II", 2012, "bo2", "Black Ops"], ["Call of Duty: Black Ops III", 2015, "bo3", "Black Ops"],
        ["Call of Duty: Black Ops 4", 2018, null, "Black Ops"], ["Call of Duty: Black Ops Cold War", 2020, null, "Black Ops"], ["Call of Duty: Black Ops 6", 2024, null, "Black Ops"], ["Call of Duty: Black Ops 7", 2025, null, "Black Ops"],
        ["Call of Duty: Ghosts", 2013, null, "Standalone"], ["Call of Duty: Advanced Warfare", 2014, null, "Standalone"], ["Call of Duty: Infinite Warfare", 2016, null, "Standalone"],
        ["Call of Duty: Mobile", 2019, null, "Free-to-play"], ["Call of Duty: Warzone", 2020, null, "Free-to-play"]
      ] },
    { id: "smite", characters: ["Zeus", "Ymir", "Anubis", "Thor", "Athena"], esports: "Hi-Rez ran the SMITE Pro League and a yearly SMITE World Championship for the original game, and continued competitive play into SMITE 2. VERIFY details.", name: "SMITE", overview: "Hi-Rez Studios' third-person MOBA series, where gods from world mythologies fight in a behind-the-back camera view.",
      entries: [["SMITE", 2014, "smite"], ["SMITE 2", 2024, "smite2"]] },
    { id: "borderlands", characters: ["Claptrap", "Lilith", "Roland", "Mordecai", "Brick", "Tiny Tina", "Handsome Jack"], esports: "No esports scene; competition centres on speedruns and challenge runs.", name: "Borderlands", overview: "Gearbox's looter-shooter series: co-op, cel-shaded art and procedurally generated guns.",
      entries: [["Borderlands", 2009, "borderlands"], ["Borderlands 2", 2012], ["Borderlands: The Pre-Sequel", 2014], ["Borderlands 3", 2019], ["Tiny Tina's Wonderlands", 2022], ["Borderlands 4", 2025]] },
    { id: "portal", characters: ["Chell", "GLaDOS", "Wheatley", "Cave Johnson"], esports: "Speedrunning and least-portals challenges are the series' competitive scene.", name: "Portal", overview: "Valve's first-person puzzle series built around a gun that creates linked portals.",
      entries: [["Portal", 2007], ["Portal 2", 2011, "portal2"]] },
    { id: "eu", characters: [], esports: "Competition happens in community-organised multiplayer campaigns.", name: "Europa Universalis", overview: "Paradox's grand strategy series covering roughly four centuries of history, from the late Middle Ages to the Napoleonic era.",
      entries: [["Europa Universalis", 2000], ["Europa Universalis II", 2001], ["Europa Universalis III", 2007], ["Europa Universalis IV", 2013, "eu4"], ["Europa Universalis V", 2025]] },
    { id: "mk", characters: ["Liu Kang", "Scorpion", "Sub-Zero", "Raiden", "Kitana", "Shang Tsung"], esports: "Mortal Kombat has been a fixture of fighting game tournaments, including EVO, for most of its modern history, with official pro circuits for recent titles. VERIFY.", name: "Mortal Kombat", overview: "NetherRealm's (originally Midway's) fighting game series, famous for its fatalities and over-the-top story mode.",
      entries: [["Mortal Kombat", 1992], ["Mortal Kombat II", 1993], ["Mortal Kombat 3", 1995], ["Mortal Kombat 4", 1997], ["Mortal Kombat: Deadly Alliance", 2002], ["Mortal Kombat: Deception", 2004], ["Mortal Kombat: Armageddon", 2006], ["Mortal Kombat vs. DC Universe", 2008], ["Mortal Kombat (2011)", 2011], ["Mortal Kombat X", 2015], ["Mortal Kombat 11", 2019], ["Mortal Kombat 1", 2023, "mk1"]] },
    { id: "ac", characters: ["Tom Nook", "Isabelle", "K.K. Slider", "Blathers"], esports: "No esports; the community runs design contests and events.", name: "Animal Crossing", overview: "Nintendo's life-sim series about living in a village of animal neighbours in real time.",
      entries: [["Animal Crossing", 2001], ["Animal Crossing: Wild World", 2005], ["Animal Crossing: City Folk", 2008], ["Animal Crossing: New Leaf", 2012], ["Animal Crossing: New Horizons", 2020, "acnh"]] }
  ],

  games: [],     // filled by games/*.js
  articles: [],  // filled by games/*.js

  // Turn hub parts on or off per game: in a games/*.js file set
  //   hubHide: ["competitive", "speedruns"]
  // Any of: headsUp, coach, basics, competitive, speedruns, tech, meta, trending, guides, updates, forum, featured.
  // A hidden part disappears from the hub page, its tile, and the menus that link to it.
  // An admin can also flip parts on and off from the hub page ("Edit hub layout"). Those choices are saved in
  // this browser (hubOverride) and win over hubHide until reset.
  hubOverride(g) { try { const o = (JSON.parse(localStorage.getItem("codex-hub-layout-v1")) || {})[g && g.id]; return Array.isArray(o) ? o : null; } catch (e) { return null; } },
  setHubOverride(g, hidden) { try { const all = JSON.parse(localStorage.getItem("codex-hub-layout-v1")) || {}; if (hidden) all[g.id] = hidden; else delete all[g.id]; localStorage.setItem("codex-hub-layout-v1", JSON.stringify(all)); return true; } catch (e) { return false; } },
  shows(g, part) { const o = this.hubOverride(g); return !(o || (g && g.hubHide) || []).includes(part); },

  // Default order of hub sections; a game can set its own hubLayout.
  hubLayout: ["tech", "competitive", "meta", "trending", "guides", "speedruns", "updates", "forum", "featured"],
  hubs: {},      // per-game hub content, filled by games/*.js

  // Fallback hub content for a game that hasn't filled a section yet. Empty sections are hidden.
  defaultHub: {
    tech: [], tiers: null, builds: [], guides: [], speedruns: [], updates: [], codes: [],
    competitive: { terms: [] },
    facts: { release: "TBD", platforms: ["TBD"], developer: "TBD", publisher: "TBD", price: "TBD", length: { main: "TBD", extras: "TBD", completionist: "TBD" } }
  },

  // ---- Forums ----
  // Boards shared by every game's forum, plus seed threads (placeholders).
  forumBoards: [
    { id: "general", name: "General discussion" },
    { id: "help", name: "Help & questions" },
    { id: "speedrun", name: "Speedrunning" },
    { id: "builds", name: "Builds & strategy" },
    { id: "lore", name: "Lore & theories" }
  ],
  forums: {},   // per-game seed threads, filled by games/*.js

  recentChanges: []
};

// Helpers used by every page (defined before game files load)
(function (S) {
  S.slug = s => String(s).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  S.game = id => S.games.find(g => g.id === id);
  S.cat = id => S.categories.find(c => c.id === id);
  S.gameCats = g => (g.categories || ["characters", "locations", "items", "lore", "quests", "enemies"]).map(S.cat).filter(Boolean);
  S.short = g => g.short || g.title;
  S.seriesOf = g => S.series.find(x => x.id === g.series);
})(window.SITE);

// Load every game file. Order here is the order on the homepage.
window.GAME_FILES = ["bo3", "bo3-zombies", "bo3-chronicles", "bo3-speedruns", "zombies-maps"];
(function () {
  const root = (document.body && document.body.dataset.root) || "";
  window.GAME_FILES.forEach(f => document.write(`<script src="${root}games/${f}.js"><\/script>`));
})();
