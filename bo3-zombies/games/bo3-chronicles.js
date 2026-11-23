// ------------------------------------------------------------
// Black Ops III: Zombies Chronicles map pages (2017 remasters of eight classic maps).
// Each is the Black Ops III version of the map, titled "Map (Black Ops III)". The original
// game versions get their own pages later (see S.zmVersions in zombies-maps.js).
// Original wording. Facts come from the guides listed in each page's references; uncertain facts say VERIFY.
// Main quests: Moon, Origins, Shangri-La and Ascension. The other four have no main quest.
// ------------------------------------------------------------
(function (S) {
  const G = "bo3";
  const flat = sec => { if (sec.phases && !sec.steps) sec.steps = sec.phases.flatMap(p => p.steps.map(st => Object.assign({ phase: p.name, body: st.body || (st.do || []).join(" ").replace(/\*\*/g, "") }, st))); return sec; };
  const A = o => { (o.sections || []).forEach(flat); S.articles = S.articles.filter(x => !(x.title === o.title && x.game === G)); S.articles.push(Object.assign({ game: G, category: "zombies", chronicles: true }, o)); };

  const AI_NEW = ["Accelerated Ideas: Zombies Chronicles, all new Easter eggs", "https://www.accelerated-ideas.com/news/zombies-chronicles-all-new-easter-eggs-black-ops-3-remastered.aspx"];
  const GRX_EE = ["Gameranx: Zombies Chronicles, all the Easter eggs (May 2017)", "https://gameranx.com/features/id/106473/article/call-of-duty-black-ops-3-zombie-chronicles-all-the-easter-eggs-easter-eggs-guide/"];
  const CHEAT = ["CheatCC: Zombies Chronicles secrets", "https://www.cheatcc.com/articles/call-of-duty-zombies-chronicles-cheats-cheat-codes-for-xbox-one-playstation-4-and-windows/"];
  const refs = (...xs) => xs.map(([t, u]) => `${t}. ${u}`);
  const GUMSRC = [["SegmentNext: BO3 GobbleGum tier list", "https://segmentnext.com/bo3-zombies-best-gobblegums"]];
  const GUMNOTE = "Our picks, not an official ranking. We started from a general BO3 GobbleGum tier list and adjusted it for this map. No source ranks gums map by map, so treat this as a starting point. VERIFY.";
  // Shared top-five core from the tier list, then five map-specific picks
  const gums = (core, extra) => ({ title: "Top 10 GobbleGums", level: "Intermediate", body: "Classic gums last until used; Mega gums are rarer and made with Liquid Divinium. The tag shows what each pick is best for.",
    gums: core.concat(extra).map(([name, type, why, goal]) => ({ name, type, why, goal })), gumNote: GUMNOTE, sources: GUMSRC });
  const CORE = why => [["Perkaholic", "Mega", why[0], "Any"], ["Shopping Free", "Mega", why[1], "Any"], ["Near Death Experience", "Mega", why[2], "Easter egg"], ["Alchemical Antithesis", "Classic", why[3], "High rounds"], ["Power Vacuum", "Mega", why[4], "Any"]];
  const NO_QUEST = map => ({ title: "Main Easter egg", level: "Beginner", body: `No main quest. ${map} is a survival map: the goal is to last as many rounds as you can. Its secrets are listed under Side Easter eggs.` });
  const NO_BUILD = map => ({ title: "Buildables", level: "Beginner", body: `${map} has no buildables. Everything is bought from walls, perk machines and the Mystery Box.` });
  const GLITCH_NONE = { title: "Notable glitches", level: "Advanced", body: "Glitches are grouped by type: Out of bounds, God spot and Other.", glitches: [], none: "No out-of-bounds glitch or god spot is known for the Black Ops III version of this map yet. Know one? Add it with a video link." };

  // ---------------- Nacht der Untoten ----------------
  A({ title: "Nacht der Untoten (Black Ops III)",
    summary: "the Zombies Chronicles remaster of the very first Zombies map: a small airfield bunker where you hold out as long as you can.",
    facts: { Game: "Black Ops III (Zombies Chronicles)", Release: "May 2017 (VERIFY)", Original: "World at War (2008)", "Main quest": "No" },
    features: { note: "The remaster adds a **GobbleGum machine**, **Wunderfizz** and the **Ray Gun Mark II** to the classic layout. VERIFY which perks are on this map.",
      perks: [["Mule Kick", "location not listed yet"], ["Wunderfizz", "random perk machine added in the remaster"]], box: ["Starts in the second room, right of the radio"],
      wonder: [["Ray Gun Mark II", "Mystery Box"]], other: [["Radio", "second room, cycles the zombie songs"], ["Samantha dolls", "shoot for a free Max Ammo"]] },
    sections: [
      { title: "Lore", level: "Beginner", brief: "An abandoned airfield bunker in Germany, where the very first Zombies stand took place. The original map had almost no story; later games tie it back to Group 935.",
        body: "Nacht der Untoten (\"night of the undead\") is a ruined airfield bunker in Germany. In World at War it was a hidden bonus mode with no characters or quest, just a hold-out against endless waves.\n\nLater games fold it into the wider story: pieces of the bunker reappear in Revelations, and audio from the remaster points to the Group 935 experiments nearby. VERIFY: the remaster's cast and any new story lines." },
      {"title": "Media", "level": "Beginner", "body": "The map's Easter egg song. Nothing loads or plays until you click it.", "media": [{"kind": "song", "title": "No Easter egg song known", "by": "VERIFY"}]},
      { title: "In-game mechanics", level: "Beginner", body: "A tiny map: spawn room, a help room upstairs and a second room downstairs. Board up windows for points, buy doors to open the map, and use the Mystery Box for better guns.\n\nThe remaster adds GobbleGum, Wunderfizz and the Ray Gun Mark II, which changes the map from a pure survival test into something closer to a modern map." },
      gums(CORE(["Every perk on a map with almost none.", "Opens the small map instantly.", "Three rounds of safety in tight rooms.", "Ammo for long camping games.", "More drops on a map with little else."]),
        [["Wall Power", "Mega", "A Pack-a-Punched wall gun on a map without Pack-a-Punch. VERIFY.", "Casual"], ["Killing Time", "Mega", "Freeze a full window rush.", "Any"], ["Stock Option", "Classic", "No reloads while holding a corner.", "Any"], ["In Plain Sight", "Classic", "Escape a cornered spot.", "Any"], ["Coagulant", "Classic", "More time to be revived in co-op.", "Co-op"]]),
      NO_BUILD("Nacht der Untoten"),
      NO_QUEST("Nacht der Untoten"),
      { title: "Side Easter eggs", level: "Beginner", body: "Small secrets in the remaster:",
        items: ["Music radio: shoot or knife the radio in the second room, right of the Mystery Box, to cycle the zombie songs.[ref:3]",
          "Secret song: press four hidden buttons (under the shelves by the stairs near the box, going prone; the ceiling above the spawn stairs; high on the wall left of Mule Kick; upstairs opposite the wall-buy). Shoot the Samantha doll in front of the RK5 wall-buy, follow the music to each spinning doll and shoot it, then go back to the first doll. The song plays and a Max Ammo drops.[ref:1]",
          "Samantha dolls and Dr. Monty radios are hidden around the map, as on every Chronicles map.[ref:3]"] },
      GLITCH_NONE
    ],
    references: refs(AI_NEW, GRX_EE, CHEAT) });

  // ---------------- Verrückt ----------------
  A({ title: "Verrückt (Black Ops III)",
    summary: "the Zombies Chronicles remaster of the asylum map, split in two at the start so teams have to fight their way back together.",
    facts: { Game: "Black Ops III (Zombies Chronicles)", Release: "May 2017 (VERIFY)", Original: "World at War (2009)", "Main quest": "No" },
    features: { note: "Players spawn split across two sides of the asylum until the power is on. VERIFY perk locations.",
      perks: [["Juggernog", "near the Dr. Monty radio"], ["Wunderfizz", "added in the remaster"]], wonder: [["Ray Gun Mark II", "Mystery Box"]],
      other: [["Toilets", "flush in a pattern for two music Easter eggs"], ["Fountain", "the remaster lets you make the statue spew blood"]] },
    sections: [
      { title: "Lore", level: "Beginner", brief: "Wittenau Sanatorium, a German asylum where Group 935 ran experiments on patients. The original map was survival only; the setting comes from in-game notes and later games.",
        body: "Verrückt (\"insane\") is an asylum in Germany. Group 935, the scientists behind Element 115, are said to have used it for human experiments. VERIFY.\n\nLike Nacht, the original had no quest. A slice of the asylum returns as one of the floating pieces of Revelations." },
      {"title": "Media", "level": "Beginner", "body": "The map's Easter egg song. Nothing loads or plays until you click it.", "media": [{"kind": "song", "title": "Lullaby for a Dead Man", "by": "Kevin Sherwood and Elena Siegman. VERIFY"}]},
      { title: "In-game mechanics", level: "Beginner", body: "Players start split into two groups on opposite sides. Turning on the power reunites them and enables the perks.\n\nThe remaster adds GobbleGum, Wunderfizz and the Ray Gun Mark II." },
      gums(CORE(["Every perk without crossing the split map.", "Reunite the two sides quickly.", "Safety in the cramped halls.", "Ammo for long games.", "More drops on a small map."]),
        [["Killing Time", "Mega", "Freeze a hallway rush.", "Any"], ["Wall Power", "Mega", "An upgraded wall gun early.", "Casual"], ["Stock Option", "Classic", "No reloads in tight halls.", "Any"], ["In Plain Sight", "Classic", "Slip out of a cornered room.", "Any"], ["Anywhere But Here!", "Classic", "Jump out of a trapped side.", "Casual"]]),
      NO_BUILD("Verrückt"),
      NO_QUEST("Verrückt"),
      { title: "Side Easter eggs", level: "Beginner", body: "Two music secrets and a new remaster secret:",
        items: ["\"Lullaby for a Dead Man\": flush the leftmost upstairs toilet three times.[ref:3]",
          "Secret song: flush the right toilet 9 times, the middle 3 times and the left 5 times (935). A Samantha doll appears left of Wunderfizz. Interact with it, shoot each doll you hear, then return to the first doll for a Max Ammo and the song.[ref:1][ref:3]",
          "New in the remaster: shoot the middle fountain with an explosive to make the statue spew blood.[ref:1]",
          "Dr. Monty radio near the Juggernog machine.[ref:2]"] },
      { title: "Notable glitches", level: "Advanced", body: "Glitches are grouped by type: Out of bounds, God spot and Other.",
        glitches: [{ name: "Fountain gun (original only)", type: "Out of bounds", difficulty: "Advanced", status: "Original game only, not in the remaster",
          what: "In the World at War version, getting out of the map let you reach a hidden machine gun at the base of the fountain. The remaster replaced it with the blood fountain secret.", how: ["Only worked in the original game."], src: [AI_NEW] }] }
    ],
    references: refs(AI_NEW, GRX_EE, CHEAT) });

  // ---------------- Shi No Numa ----------------
  A({ title: "Shi No Numa (Black Ops III)",
    summary: "the Zombies Chronicles remaster of the Japanese swamp map, the first to bring in the original four characters.",
    facts: { Game: "Black Ops III (Zombies Chronicles)", Release: "May 2017 (VERIFY)", Original: "World at War (2009)", "Main quest": "No" },
    features: { note: "VERIFY perk and box locations for the remaster.", wonder: [["Ray Gun Mark II", "Mystery Box"]],
      other: [["Comm Room telephone", "music Easter egg"], ["Fishing Hut", "start of the remaster's secret song"], ["Swamp water", "slows you down"]] },
    sections: [
      { title: "Lore", level: "Beginner", brief: "A Japanese research base in a swamp, built where an Element 115 meteor came down. It was the first map with the original four characters: Dempsey, Nikolai, Takeo and Richtofen.",
        body: "Shi No Numa (\"swamp of death\") is a Japanese base hidden in a swamp, near a crashed meteor of Element 115. VERIFY. It introduced the original crew that later became known as Ultimis.\n\nNotes found around the base, including a diary from an American pilot, hint at what happened to the people stationed there. VERIFY." },
      {"title": "Media", "level": "Beginner", "body": "The map's Easter egg song. Nothing loads or plays until you click it.", "media": [{"kind": "song", "title": "The One", "by": "Kevin Sherwood and Elena Siegman. VERIFY"}]},
      { title: "In-game mechanics", level: "Beginner", body: "A central hut with four outer huts; each perk machine appears in one of them at random as you open the map. VERIFY. Swamp water slows you down, and hellhound rounds return.\n\nThe remaster adds GobbleGum, Wunderfizz and the Ray Gun Mark II." },
      gums(CORE(["Every perk without opening every hut.", "Open all the huts fast.", "Safety in the slow swamp.", "Ammo for long games.", "More drops between dog rounds."]),
        [["Killing Time", "Mega", "Freeze a dog round.", "Any"], ["Always Done Swiftly", "Classic", "Faster movement while aiming through the swamp.", "Any"], ["Stock Option", "Classic", "No reloads in the huts.", "Any"], ["In Plain Sight", "Classic", "Escape across the swamp.", "Any"], ["Wall Power", "Mega", "An upgraded wall gun early.", "Casual"]]),
      NO_BUILD("Shi No Numa"),
      NO_QUEST("Shi No Numa"),
      { title: "Side Easter eggs", level: "Beginner", body: "Music secrets:",
        items: ["\"The One\": use the telephone in the Comm Room three times.[ref:3]",
          "New secret song: walk the bridge to the Fishing Hut and shoot each of the four metal pans on its wall once with the starting pistol. Interact with the Samantha doll in the dead-fish pile outside, shoot the dolls on the bridge posts as they appear, then interact with the first doll again.[ref:1][ref:3]",
          "Dr. Monty radio at spawn.[ref:2]"] },
      GLITCH_NONE
    ],
    references: refs(AI_NEW, GRX_EE, CHEAT) });

  // ---------------- Kino der Toten ----------------
  A({ title: "Kino der Toten (Black Ops III)",
    summary: "the Zombies Chronicles remaster of the haunted German theatre, with its teleporter, traps and the Thundergun.",
    facts: { Game: "Black Ops III (Zombies Chronicles)", Release: "May 2017 (VERIFY)", Original: "Black Ops (2010)", "Main quest": "No" },
    features: { note: "The **teleporter** on stage is the only way to reach Pack-a-Punch.",
      perks: [["Quick Revive", "spawn"], ["Juggernog", "centre area"], ["Speed Cola", "Stakeout area, past the right room"], ["Double Tap", "near the AK-74u wall-buy, past the left room"], ["Mule Kick", "room right of spawn"]],
      pap: "In the projector room. Turn on power (free switch on stage), then use the teleporter.",
      box: ["Almost every room has a spot: left room, the room past it, right room, the room past it, the stage and the centre area"],
      wonder: [["Thundergun", "Mystery Box, one player at a time"]],
      traps: ["Electric traps: PM63 room, the stage, the spawn stairs and before the stage", "Turrets: Speed Cola room and the stage", "Fire trap: MPL room"],
      other: [["Teleporter", "on stage; links to the projector room"], ["Meteor rocks", "shoot three for the \"115\" song"]] },
    sections: [
      { title: "Lore", level: "Beginner", brief: "A German theatre that Group 935 turned into a test site, linked by teleporter to their secret rooms. The original four come here after Shi No Numa and Der Riese.",
        body: "Kino der Toten (\"cinema of the dead\") is an old theatre that Group 935 used for experiments. The teleporter on stage sends players to the projector room and, briefly, to strange rooms full of film reels. VERIFY.\n\nThe film reels found there tell pieces of the Group 935 story. A fragment of the theatre later returns in Revelations." },
      {"title": "Media", "level": "Beginner", "body": "The map's Easter egg song. Nothing loads or plays until you click it.", "media": [{"kind": "song", "title": "115", "by": "Kevin Sherwood and Elena Siegman. VERIFY", "how": "Activate the three orange **meteorites**."}]},
      { title: "In-game mechanics", level: "Beginner", body: "Turn on the free power switch on stage, then use the teleporter to reach Pack-a-Punch in the projector room. The teleporter needs time to recharge between uses.\n\nTraps are spread around the theatre, and the Thundergun is in the Mystery Box. The remaster adds GobbleGum, Wunderfizz and the Ray Gun Mark II." },
      gums(CORE(["All five perks at once.", "Open the theatre and power fast.", "Safety in the busy stage area.", "Ammo for long Thundergun games.", "More drops before the teleporter recharges."]),
        [["Killing Time", "Mega", "Freeze a crawler round in the lobby.", "Any"], ["Wall Power", "Mega", "An upgraded wall gun before the first teleport.", "Casual"], ["In Plain Sight", "Classic", "Get to the teleporter safely.", "Any"], ["Stock Option", "Classic", "No reloads while training on stage.", "Any"], ["Arms Grace", "Classic", "Keep the Thundergun if you bleed out in co-op.", "Co-op"]]),
      NO_BUILD("Kino der Toten"),
      NO_QUEST("Kino der Toten"),
      { title: "Side Easter eggs", level: "Beginner", body: "Secrets to find:",
        items: ["\"115\" song: shoot three orange meteor rocks. Guides disagree on the spots: the glass case in the spawn room (under the right stairs) is in both; the other two are either on a shelf and a table above the stage, or on a bookcase between the alley and stage and on a locker in the costume room. VERIFY.[ref:2][ref:3]",
          "New in the remaster: cogs behind the main stage are part of a new secret. Details still being worked out.[ref:1]",
          "Samantha dolls and a Dr. Monty radio are hidden around the map.[ref:3]"] },
      GLITCH_NONE
    ],
    references: refs(AI_NEW, GRX_EE, CHEAT, ["Gameranx: Kino der Toten walkthrough (May 2017)", "https://gameranx.com/features/id/106909/article/call-of-duty-black-ops-3-zombie-chronicles-kino-der-toten-map-walkthrough-map-guide/"]) });

  // ---------------- Ascension ----------------
  A({
 "title": "Ascension (Black Ops III)",
 "summary": "the Zombies Chronicles remaster of the Soviet launch site, with Lunar Landers, space monkeys and the Casimir Mechanism quest.",
 "facts": {
  "Game": "Black Ops III (Zombies Chronicles)",
  "Release": "May 2017 (VERIFY)",
  "Original": "Black Ops (2011)",
  "Main quest": "Yes: Casimir Mechanism (four players)"
 },
 "features": {
  "note": "Widow's Wine replaces PhD Flopper, and Wunderfizz adds Double Tap II and Deadshot Daiquiri.",
  "perks": [
   [
    "Quick Revive",
    "spawn"
   ],
   [
    "Juggernog",
    "bottom side, up the first stairs"
   ],
   [
    "Speed Cola",
    "by the Sickle lander pad"
   ],
   [
    "Stamin-Up",
    "topside, left"
   ],
   [
    "Mule Kick",
    "below Speed Cola and power"
   ],
   [
    "Widow's Wine",
    "topside right lander pad"
   ],
   [
    "Double Tap II, Deadshot Daiquiri",
    "Wunderfizz"
   ]
  ],
  "pap": "Ride a lander to spawn from each other pad, then press the red button in the power room.",
  "box": [
   "Starts in the power room"
  ],
  "wonder": [
   [
    "Thundergun",
    "Mystery Box"
   ],
   [
    "Gersh Device",
    "Mystery Box, needed for the quest"
   ],
   [
    "Matryoshka Dolls",
    "Mystery Box"
   ]
  ],
  "traps": [
   "Turrets: outside spawn (topside) and by Pack-a-Punch",
   "Fire: by Pack-a-Punch and by Stamin-Up"
  ],
  "other": [
   [
    "Lunar Landers",
    "250 points, free if someone else calls it"
   ],
   [
    "Space monkeys",
    "steal perks on monkey rounds"
   ],
   [
    "Centrifuge",
    "crouch under it in spawn"
   ]
  ]
 },
 "sections": [
  {
   "chapter": "Map features",
   "title": "Remaster changes",
   "level": "Beginner",
   "brief": "This page covers the **Black Ops III (Zombies Chronicles)** version. Here's what changed from the 2011 original.",
   "lists": [
    {
     "title": "What's different",
     "items": [
      "**Widow's Wine** replaces PhD Flopper, in the same spot.",
      "A **Wunderfizz** machine adds **Double Tap II** and **Deadshot Daiquiri**.",
      "**GobbleGum** machines, **Double Pack-a-Punch** and Black Ops III weapons with weapon kits.",
      "You go down after **three hits**, not two.",
      "With the power off the map is just washed out, not black and white.",
      "Monkeys can now steal perks from areas nobody has opened.",
      "The main quest now rewards **all eight perks**.",
      "A new song quest: **Samantha's Lullaby**."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Map layout",
   "level": "Beginner",
   "brief": "Spawn has two doors: **topside** and **bottom side**. The areas loop into each other, so there's usually more than one way round.",
   "lists": [
    {
     "title": "Spawn",
     "items": [
      "Quick Revive, two wall-buys, a teddy bear for the song, radios and a **Lunar Lander** pad.",
      "The **centrifuge** in the middle spins every few rounds. **Crouch** under it or it kills you. It kills zombies too."
     ]
    },
    {
     "title": "Topside",
     "items": [
      "**Left**: Stamin-Up, a fire trap, Trip Mines, a teddy bear, the main quest pod and a lander pad.",
      "**Right**: a turret trap, Widow's Wine and a lander pad, plus a door through to the bottom side."
     ]
    },
    {
     "title": "Bottom side",
     "items": [
      "First room: a wall-buy, with stairs up to **Juggernog** and another door.",
      "Keep climbing to the **power room**.",
      "Through the power room door and down: **Mule Kick**, with stairs up and down.",
      "**Up**: Speed Cola, the Sickle and a lander pad, with a teddy bear.",
      "**Down**: the **Pack-a-Punch** launch pad, a turret trap and a door back to topside that also unlocks a fire trap."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Power",
   "level": "Beginner",
   "brief": "Go up through the bottom side to the **power room** and flip the switch. The map's colours come back on.",
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Lunar Landers",
   "level": "Beginner",
   "brief": "Platforms that fly you between four pads. Calling one yourself costs **250**; if someone else calls it while you're on, you ride free.",
   "lists": [
    {
     "title": "How they work",
     "items": [
      "Each lander has a **30-second** cool-down between trips.",
      "Zombies can't hit you while you're riding.",
      "Anyone standing on the pad goes too."
     ]
    }
   ],
   "spawns": [
    {
     "item": "Lander pads",
     "id": "lander",
     "fixed": true,
     "note": "The guide names three lander stations by their Cyrillic letters (Б, Д and Ф) but doesn't say which letter is on which pad. VERIFY",
     "spots": [
      "**Spawn** room",
      "**Speed Cola** and Sickle area",
      "**Stamin-Up** area",
      "**Widow's Wine** area (PhD Flopper in the original)"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Pack-a-Punch",
   "level": "Beginner",
   "brief": "Launch the rocket to open it. You need the **power on** first.",
   "lists": [
    {
     "title": "Steps",
     "items": [
      "From each of the other three pads, call a lander and ride it back to **spawn**. The rocket screen in spawn fills in as you go.",
      "When the rocket on the screen is full, press the **red button** in the power room.",
      "The rocket launches, the blast shields drop, and Pack-a-Punch is open on the launch pad."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Traps",
   "level": "Beginner",
   "table": {
    "cols": [
     "Trap",
     "Where",
     "Cost"
    ],
    "rows": [
     [
      "Turret",
      "Just outside the first spawn door (topside)",
      "1,000"
     ],
     [
      "Turret",
      "Outside the rocket and Pack-a-Punch area",
      "1,000"
     ],
     [
      "Fire",
      "Outside, near Pack-a-Punch",
      "1,000"
     ],
     [
      "Fire",
      "Near Stamin-Up",
      "1,000"
     ]
    ]
   },
   "warn": "Traps can hurt players too.",
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Monkey rounds",
   "level": "Beginner",
   "brief": "Every **4 to 7 rounds**, space monkeys replace the zombies. They can down you, but mostly they go for your **perk machines**.",
   "lists": [
    {
     "title": "What to know",
     "items": [
      "Monkey rounds only start once **someone owns a perk**.",
      "The perk being attacked **flashes** in the bottom left.",
      "If a monkey reaches it, you lose that perk and have to buy it again. They keep going until every perk is gone.",
      "Save every perk and you get a free **perk bottle**. Otherwise you just get a **Max Ammo** at the end."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Special weapons",
   "level": "Intermediate",
   "table": {
    "cols": [
     "Weapon",
     "How to get it",
     "What it does"
    ],
    "rows": [
     [
      "Thundergun",
      "Mystery Box only, one player at a time",
      "A blast of air that can wipe out a whole horde. 2 shots per mag, 12 spare. Only reloads when empty."
     ],
     [
      "Zeus Cannon",
      "Pack-a-Punch the Thundergun",
      "The same blast with 4 per mag and 24 spare."
     ],
     [
      "Gersh Device",
      "Mystery Box",
      "A black hole that pulls in zombies for 10 seconds. Jump in to teleport once per throw. It vanishes if thrown outside the map."
     ],
     [
      "Matryoshka Dolls",
      "Mystery Box",
      "A chain of exploding dolls. They can hurt you. They vanish if thrown outside the map."
     ]
    ]
   },
   "body": "You hold three special grenades at a time and refill them with a Max Ammo. You can carry the Gersh Device or the dolls, not both.",
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Buildables",
   "level": "Beginner",
   "body": "Ascension has no buildables. Everything is bought from walls, perk machines and the Mystery Box.",
   "chapter": "Map features"
  },
  {
   "chapter": "Game features",
   "title": "Perks",
   "level": "Beginner",
   "table": {
    "cols": [
     "Perk",
     "Cost",
     "Where"
    ],
    "rows": [
     [
      "Quick Revive",
      "500 solo (three times), 1,500 co-op",
      "Spawn"
     ],
     [
      "Juggernog",
      "2,500",
      "Bottom side, up the first stairs (two floors below power)"
     ],
     [
      "Speed Cola",
      "3,000",
      "By the Sickle and its lander pad"
     ],
     [
      "Stamin-Up",
      "2,000",
      "Back of the topside left area"
     ],
     [
      "Mule Kick",
      "4,000",
      "One floor below Speed Cola and the power room"
     ],
     [
      "Widow's Wine",
      "4,000",
      "By the topside right lander pad (where PhD Flopper was)"
     ],
     [
      "Double Tap II, Deadshot Daiquiri",
      "Wunderfizz",
      "No machine of their own. Wunderfizz spot not given. VERIFY"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Game features",
   "title": "Weapons",
   "level": "Beginner",
   "tables": [
    {
     "title": "Wall-buys",
     "cols": [
      "Weapon",
      "Cost",
      "Where"
     ],
     "rows": [
      [
       "RK5",
       "500",
       "Spawn, and at the bottom of the stairs near Widow's Wine"
      ],
      [
       "Sheiva",
       "500",
       "Spawn"
      ],
      [
       "L-CAR 9",
       "750",
       "Room next to Quick Revive"
      ],
      [
       "Trip Mines",
       "1,000",
       "Same room as a lander pad (Ф). VERIFY which"
      ],
      [
       "Kuda",
       "1,200",
       "Other side of the door by the RK5"
      ],
      [
       "Vesper",
       "1,200",
       "Stamin-Up room"
      ],
      [
       "ICR-1",
       "1,200",
       "Next to a lander pad (Ф). VERIFY which"
      ],
      [
       "VMP",
       "1,300",
       "Next to Juggernog"
      ],
      [
       "KN-44",
       "1,400",
       "Bottom of the stairs near Mule Kick"
      ],
      [
       "Argus",
       "1,500",
       "The floor below the power switch"
      ],
      [
       "HVK-30",
       "1,600",
       "Next to Speed Cola"
      ],
      [
       "Sickle",
       "3,000",
       "Next to a lander pad (Б, the Speed Cola pad)"
      ]
     ]
    },
    {
     "title": "Mystery Box only",
     "cols": [
      "Weapons"
     ],
     "rows": [
      [
       "KRM-262, M8A7, Pharo, Weevil, BRM, Dingo, 48 Dredge, Gorgon, Locus, Drakon, SVG-100, Man-O-War, 205 Brecci, Haymaker 12, XM-53, Galil, M16, Ray Gun, Ray Gun Mark II, Thundergun, Gersh Device, Matryoshka Dolls"
      ]
     ]
    }
   ],
   "body": "L-CAR 9, HVK-30 and KN-44 are on the wall and in the box. The Sickle, Galil, M16 and the wonder weapons have no weapon kits.",
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Game features",
   "title": "Mystery Box",
   "level": "Beginner",
   "brief": "**950** points a go (10 in a Fire Sale, when every spot opens). It always **starts in the power room** and moves after a few uses.",
   "spawns": [
    {
     "item": "Mystery Box",
     "id": "mystery-box",
     "note": "The guide only gives the starting spot.",
     "spots": [
      "**Power room** (start)",
      "Other spots still to be added. VERIFY"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Game features",
   "title": "GobbleGum machines",
   "level": "Beginner",
   "spawns": [
    {
     "item": "GobbleGum machines",
     "id": "gum-machine",
     "fixed": true,
     "spots": [
      "**Spawn** room",
      "Just outside spawn, on the way to **Stamin-Up**",
      "Next to the **power switch**",
      "The room **above Juggernog**",
      "Under the **clock** at Pack-a-Punch",
      "Next to **Widow's Wine**",
      "Next to **Mule Kick**",
      "Near lander pad **Б** (Speed Cola)"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Top 10 GobbleGums",
   "level": "Intermediate",
   "body": "Classic gums last until used; Mega gums are rarer and made with Liquid Divinium. The tag shows what each pick is best for.",
   "gums": [
    {
     "name": "Perkaholic",
     "type": "Mega",
     "why": "Every perk, and monkeys can't make you rebuy them all.",
     "goal": "Any"
    },
    {
     "name": "Shopping Free",
     "type": "Mega",
     "why": "Open the base and the landers fast.",
     "goal": "Any"
    },
    {
     "name": "Near Death Experience",
     "type": "Mega",
     "why": "Safety for the Casimir Mechanism fight.",
     "goal": "Easter egg"
    },
    {
     "name": "Alchemical Antithesis",
     "type": "Classic",
     "why": "Ammo for long Thundergun games.",
     "goal": "High rounds"
    },
    {
     "name": "Power Vacuum",
     "type": "Mega",
     "why": "More drops during monkey rounds.",
     "goal": "Any"
    },
    {
     "name": "Killing Time",
     "type": "Mega",
     "why": "Freeze monkeys before they reach a perk.",
     "goal": "Any"
    },
    {
     "name": "Wall Power",
     "type": "Mega",
     "why": "An upgraded wall gun before Pack-a-Punch opens.",
     "goal": "Casual"
    },
    {
     "name": "In Plain Sight",
     "type": "Classic",
     "why": "Hold the launch-pad circle for node 3.",
     "goal": "Easter egg"
    },
    {
     "name": "Stock Option",
     "type": "Classic",
     "why": "No reloads while training.",
     "goal": "Any"
    },
    {
     "name": "Arms Grace",
     "type": "Classic",
     "why": "Keep your guns in co-op.",
     "goal": "Co-op"
    }
   ],
   "gumNote": "Our picks, not an official ranking. We started from a general BO3 GobbleGum tier list and adjusted it for this map. No source ranks gums map by map, so treat this as a starting point. VERIFY.",
   "sources": [
    [
     "SegmentNext: BO3 GobbleGum tier list",
     "https://segmentnext.com/bo3-zombies-best-gobblegums"
    ]
   ],
   "chapter": "Game features"
  },
  {
   "chapter": "Game features",
   "title": "The original version",
   "level": "Intermediate",
   "brief": "Notes for the 2011 **Black Ops** map, which the remaster is based on.",
   "lists": [
    {
     "title": "Differences",
     "items": [
      "**PhD Flopper** (2,000) stood where Widow's Wine is now. It blocks explosive and fall damage, and diving from a height makes an explosion.",
      "No Wunderfizz, GobbleGum or Double Pack-a-Punch, and you went down in **two hits**.",
      "The main quest gave a **90-second Death Machine** instead of all perks."
     ]
    }
   ],
   "tables": [
    {
     "title": "Original weapons",
     "cols": [
      "Wall-buys",
      "Mystery Box"
     ],
     "rows": [
      [
       "Olympia, M14, PM63, MPL, MP5K, AK74u, MP40, M16, Stakeout, Sickle, Claymore, M67 grenades",
       "CZ75, Python, Spectre, FN FAL, G11, FAMAS, AUG, Commando, Galil, HS-10, SPAS-12, Dragunov, L96A1, RPK, HK21, Ballistic Knife, Crossbow, China Lake, M72 LAW, Ray Gun, Thundergun, Gersh Device, Matryoshka Dolls"
      ]
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Easter eggs and quests",
   "title": "Main Easter egg",
   "level": "Intermediate",
   "body": "Gersh's quest to repair the Casimir Mechanism. The guide was written for **four players**. Whether the remaster lets smaller groups finish it isn't confirmed yet. VERIFY",
   "needs": [
    "**Four players**",
    "**Power** on and **Pack-a-Punch** open",
    "A **Gersh Device** and **Matryoshka Dolls**",
    "The **Zeus Cannon** and **two Ray Guns** for the last step"
   ],
   "phases": [
    {
     "name": "Phase 1: The generator",
     "steps": [
      {
       "title": "Throw a Gersh Device outside the map",
       "do": [
        "Go **topside** and turn **right**, toward the Widow's Wine lander.",
        "Throw a **Gersh Device** at the **generator box outside the map**. It gets pulled into the portal and you hear a sound."
       ]
      }
     ]
    },
    {
     "name": "Phase 2: Four nodes",
     "steps": [
      {
       "title": "Node 1: the terminal",
       "spawns": [
        {
         "item": "Terminal",
         "id": "node-1",
         "fixed": true,
         "spots": [
          "**Stamin-Up lander pad**: the screen in the **corner** with the Illuminati symbol"
         ]
        }
       ],
       "do": [
        "Interact with the terminal. The first node lights."
       ]
      },
      {
       "title": "Node 2: four buttons on a monkey round",
       "spawns": [
        {
         "item": "Perk room buttons",
         "id": "node-2-button",
         "fixed": true,
         "note": "They only appear during a monkey round.",
         "spots": [
          "**Juggernog**: across from the machine",
          "**Widow's Wine** (PhD Flopper in the original): left of the machine",
          "**Speed Cola**: on the other side of the door frame from the machine",
          "**Stamin-Up**: left of the machine"
         ]
        }
       ],
       "do": [
        "On a **monkey round**, all four players press their button **at the same time**."
       ]
      },
      {
       "title": "Node 3: the pressure plates",
       "spawns": [
        {
         "item": "Pressure plates",
         "id": "node-3",
         "fixed": true,
         "spots": [
          "**Pack-a-Punch** launch pad: four plates in front of the **clock**"
         ]
        }
       ],
       "do": [
        "Leave a crawler and lead it far away.",
        "All four players stand on a plate for **2 minutes**.",
        "Don't shoot, throw anything or let a zombie in, or it resets.",
        "A nuke-like blast ends the round when it works."
       ]
      },
      {
       "title": "Node 4: spell LUNA",
       "do": [
        "One player waits in **spawn** to call the lander, one rides it, one waits at the **Stamin-Up** pad.",
        "Call it to **Stamin-Up**: **L**.",
        "Back to **spawn**: **U**.",
        "To **Speed Cola**: **N**.",
        "From Speed Cola to **Stamin-Up**: **A**. All four nodes are now lit."
       ]
      }
     ]
    },
    {
     "name": "Phase 3: The Casimir Mechanism",
     "steps": [
      {
       "title": "Overload the orb",
       "do": [
        "Go to the pod by **Stamin-Up** and the Trip Mines. A **green orb** sits on the ground.",
        "Hit it with **Matryoshka Dolls**, a **Gersh Device**, **two or more Zeus Cannon shots** and **Ray Gun** shots."
       ],
       "tip": "Reward: **all eight perks** in the remaster (a 90-second Death Machine in the original)."
      }
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Easter eggs and quests",
   "title": "Side Easter eggs",
   "level": "Beginner",
   "body": "Smaller secrets.",
   "eggs": [
    {
     "name": "Samantha's Lullaby (remaster)",
     "reward": "A Max Ammo and a secret song",
     "what": "The guide calls the song \"Samantha's Sorrow\". VERIFY the title.",
     "steps": [
      "Open **Pack-a-Punch** and get **Gersh Devices**.",
      "Throw one at each **Samantha doll** outside the map: on a pipe at the left of Pack-a-Punch, on a railing on the building across from lander pad **Д**, and on the overhanging rafters by **Stamin-Up**.",
      "Below the **KN-44** wall-buy near Pack-a-Punch, interact with the doll on the ground.",
      "Shoot the dolls that appear, in order, with a bullet gun: on debris by the **Kuda**; on a barrel by the **Wunderfizz**; under the rafters by **Stamin-Up**; in front of the broken engine by lander pad **Ф**; then just above that.",
      "Go back to the doll under the KN-44 and interact again."
     ]
    },
    {
     "name": "Abracadavre",
     "reward": "The song \"Abracadavre\"",
     "steps": [
      "Find the three **teddy bears**: in spawn, topside by the starting wall-buys; on top of a wall in the Sickle lander room; behind a fence on the left at the lander pad behind **Stamin-Up**.",
      "Interact with each one. Once per game."
     ]
    },
    {
     "name": "Rocket power-up",
     "reward": "A random power-up",
     "steps": [
      "Start the Pack-a-Punch launch with a **Ray Gun** or explosive weapon in hand.",
      "Shoot the rocket as it takes off until it explodes.",
      "Go to the launch pad and pick up the power-up."
     ]
    },
    {
     "name": "Character dolls",
     "reward": "Funny voice lines",
     "steps": [
      "**Takeo**: next to Widow's Wine.",
      "**Richtofen**: on a desk the floor above Juggernog.",
      "**Nikolai**: next to Speed Cola.",
      "**Dempsey**: next to the Trip Mines wall-buy."
     ]
    }
   ],
   "items": [
    "Shadow Man silhouette in a window of a building on the way to Pack-a-Punch.[ref:1]",
    "Dr. Monty radio in the spawn room.[ref:2]"
   ],
   "sources": [
    [
     "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Notable glitches",
   "level": "Advanced",
   "body": "Glitches are grouped by type: Out of bounds, God spot and Other.",
   "glitches": [],
   "none": "No out-of-bounds glitch or god spot is known for the Black Ops III version of this map yet. Know one? Add it with a video link.",
   "chapter": "Easter eggs and quests"
  },
  {
   "title": "Storyline",
   "level": "Beginner",
   "brief": "A Soviet rocket base where scientists studied Element 115. The scientist Gersh is trapped in another dimension, and the main quest frees him.",
   "body": "Ascension is set at a Soviet launch facility run by a group researching Element 115 and space flight. VERIFY. Its scientist, Gersh, invented the Gersh Device, a black-hole grenade, and was trapped in another dimension by Samantha.\n\nThe main quest repairs the Casimir Mechanism so Gersh can escape. His voice guides the players through it.",
   "chapter": "Media and lore"
  },
  {
   "title": "Cinematics and music",
   "level": "Beginner",
   "body": "The map's Easter egg song. Nothing loads or plays until you click it.",
   "media": [
    {
     "kind": "song",
     "title": "Abracadavre",
     "by": "Kevin Sherwood, vocals by Elena Siegman",
     "how": "Activate the three hidden **teddy bears**."
    }
   ],
   "chapter": "Media and lore"
  },
  {
   "chapter": "Media and lore",
   "title": "Radios",
   "level": "Intermediate",
   "body": "Still to be added. VERIFY"
  },
  {
   "chapter": "Media and lore",
   "title": "Ciphers",
   "level": "Advanced",
   "body": "Still to be added. VERIFY"
  },
  {
   "chapter": "Media and lore",
   "title": "Trophies and achievements",
   "level": "Beginner",
   "body": "Still to be added. VERIFY"
  }
 ],
 "references": [
  "Accelerated Ideas: Zombies Chronicles, all new Easter eggs. https://www.accelerated-ideas.com/news/zombies-chronicles-all-new-easter-eggs-black-ops-3-remastered.aspx",
  "Gameranx: Zombies Chronicles, all the Easter eggs (May 2017). https://gameranx.com/features/id/106473/article/call-of-duty-black-ops-3-zombie-chronicles-all-the-easter-eggs-easter-eggs-guide/",
  "CheatCC: Zombies Chronicles secrets. https://www.cheatcc.com/articles/call-of-duty-zombies-chronicles-cheats-cheat-codes-for-xbox-one-playstation-4-and-windows/",
  "Accelerated Ideas: Ascension Easter egg steps (Zombies Chronicles). https://www.accelerated-ideas.com/news/ascension-easter-egg-steps-zombies-chronicles-black.aspx",
  "Gameranx: Ascension walkthrough (May 2017). https://gameranx.com/features/id/106907/article/call-of-duty-black-ops-3-zombie-chronicles-ascension-map-walkthrough-map-guide/",
  "r/CODZombies wiki: Ascension complete map breakdown, created by /u/chrisd848 and /u/The_Beebat (community guide)"
 ],
 "chapterBlurbs": {
  "Map features": "What's new in the remaster, the layout, power, Lunar Landers, Pack-a-Punch, traps, monkeys and special weapons.",
  "Game features": "Perks, weapons, the Mystery Box, GobbleGum and notes on the original.",
  "Easter eggs and quests": "The main quest, side Easter eggs and known glitches.",
  "Media and lore": "The story, music, radios, ciphers and trophies."
 }
});


  // ---------------- Shangri-La ----------------
  A({ title: "Shangri-La (Black Ops III)",
    summary: "the Zombies Chronicles remaster of the jungle temple map, with Eclipse mode, a water slide and a time-loop quest.",
    facts: { Game: "Black Ops III (Zombies Chronicles)", Release: "May 2017 (VERIFY)", Original: "Black Ops (2011)", "Main quest": "Yes: Time Travel Will Tell (four players)" },
    features: { note: "Pack-a-Punch needs players standing on **pressure pads** at the same time.",
      perks: [["Quick Revive", "by the waterfall"], ["Juggernog", "across from Quick Revive"], ["Speed Cola", "by the cave"], ["Stamin-Up", "in the cave"], ["Mule Kick", "under the dig site"], ["Double Tap, Deadshot Daiquiri, PhD Flopper", "in the cave"]],
      pap: "All players stand on pressure pads at once (by Quick Revive, end of the wooden bridge, between the power switches, the orange tunnel). The number of pads matches the number of players.",
      box: ["In the cave", "By the waterfall"], wonder: [["Ray Gun Mark II", "Mystery Box"], ["31-79 JGb215 (shrink ray)", "Mystery Box, needed for the quest"]],
      gum: "Spawn room, mine-cart entrance, the bottom of the water slide, and by the power switches",
      other: [["Mine cart", "250 points, into the mines"], ["Geysers", "free launch pads"], ["Water slide", "behind the waterfall, after power"], ["Mud pits", "slow you down"]] },
    sections: [
      { title: "Lore", level: "Beginner", brief: "A lost temple in the Himalayas holding the Focusing Stone. Two explorers, Brock and Gary, are stuck in a time loop, and the quest breaks it.",
        body: "Shangri-La is a hidden temple city in the mountains, with Element 115 meteor rock inside. Two explorers, Brock and Gary, came looking for treasure and became stuck repeating the same moments. VERIFY.\n\nThe quest has the crew travel through time (Eclipse mode) to help the explorers, which frees them and gives the crew the Focusing Stone, a key item in Richtofen's plan." },
      {"title": "Media", "level": "Beginner", "body": "The map's Easter egg song. Nothing loads or plays until you click it.", "media": [{"kind": "song", "title": "Pareidolia", "by": "Kevin Sherwood and Elena Siegman. VERIFY", "how": "Activate the three **115 meteorites**."}]},
      { title: "In-game mechanics", level: "Intermediate", body: "Eclipse mode sends the crew back in time when four skull buttons are pressed at once. The mine cart, geysers and water slide move you around quickly. Mud pits slow you down.\n\nNapalm and Shrieker zombies are special enemies. The remaster adds GobbleGum, Wunderfizz and the Ray Gun Mark II." },
      gums(CORE(["All the perks, including the three in the cave.", "Open the temple fast.", "Safety during the long four-player quest.", "Ammo for long games.", "More drops for the quest."]),
        [["Killing Time", "Mega", "Freeze Napalm zombies away from you.", "Any"], ["In Plain Sight", "Classic", "Hold your pressure pad when zombies rush it.", "Easter egg"], ["Always Done Swiftly", "Classic", "Move through mud faster while aiming.", "Any"], ["Stock Option", "Classic", "No reloads in tight temple halls.", "Any"], ["Arms Grace", "Classic", "Keep the shrink ray in co-op.", "Co-op"]]),
      NO_BUILD("Shangri-La"),
      { title: "Main Easter egg", level: "Advanced", body: "Needs **four players**. Several steps need everyone to act at the same time, so count down out loud.[ref:4]",
        needs: ["**Four players**", "Power on", "The **shrink ray** from the box (and later its upgrade)", "Trip Mines from the wall"],
        phases: [
          { name: "Phase 1: Open up", steps: [
            { title: "Power and Pack-a-Punch", spawns: [{"item": "Pack-a-Punch pressure plates", "id": "pap-plate", "fixed": true, "note": "One player on each at the same time.", "spots": ["**Spawn**: in the **middle** of the spawn area", "**First waterfall**: **beside the gong**", "**Lower power area**: **in front of the power switch**", "**Mine tunnel**: in the tunnel leading **away from the power room**"]}], do: ["Open the doors to the water wheel and the power switches.", "Flip both switches.", "All four players stand on the **pressure pads** to open Pack-a-Punch."] },
            { title: "Start Eclipse mode", spawns: [{"item": "Eclipse buttons", "id": "eclipse-button", "fixed": true, "note": "All four pressed together.", "spots": ["**Spawn**: four skull buttons on the walls **around the Quick Revive** machine"]}], do: ["All four press the **skull buttons** around Quick Revive **at the same time**."] },
            { title: "Symbol slabs", do: ["Press the skull button by the perk machine opposite the tunnel.", "Pairs of players stand on **matching symbol slabs** together."] } ] },
          { name: "Phase 2: Golden rods", steps: [
            { title: "Water slide grates", do: ["In Eclipse, three players stand on the **metal grates** at the bottom of the slide.", "The fourth slides down and hits them."] },
            { title: "Shrink the stone ball", spawns: [{"item": "Stone ball", "id": "stone-ball", "fixed": true, "spots": ["**Waterfall**: on the ledge **above the water slide entrance**. VERIFY: one guide says the top of the waterfall."]}], do: ["Shoot the **grey stone ball** off the cliff by the slide.", "Shrink it with the **shrink ray**.", "Melee it into the slide and ride up to the temple."] },
            { title: "Gas valve", do: ["Start Eclipse.", "Turn the **valve wheel** in the mine tunnel until a quote plays.", "Pull the lever next to it."] },
            { title: "Light the gas pipes", spawns: [{"item": "Gas leaks", "id": "gas-leak", "fixed": true, "note": "Guides place these differently. VERIFY", "spots": ["In the tunnel **near the minecart entrance**", "**Above a Mystery Box spot**, beside the geyser", "Two at the **power room entrance**, on the valve side"]}], do: ["Lure a **Napalm zombie** past the four gas pipes (two in the tunnel, two by the perk room).", "Pull the valve lever."] },
            { title: "Plug the waterfall", do: ["Buy **trip mines**.", "Place them at four spots opposite the holes in the tunnel wall.", "Lure zombies to set them off.", "Press the button at the bottom of the waterfall."] } ] },
          { name: "Phase 3: Stones, dials and gongs", steps: [
            { title: "Melee 12 stones", spawns: [{"item": "Symbol stones", "id": "symbol-stone", "fixed": true, "note": "Exact spots still to be added.", "spots": ["**Spawn**: five stones on the walls", "**Mud pit side**: two stones", "**Minecart side**: two stones", "**Lower area**: three stones"]}], do: ["In Eclipse, melee **12 stones**: 5 in spawn, 2 on the mud side, 2 on the mine-cart side, 3 downstairs."] },
            { title: "Blow the wooden trap", do: ["Explode the **wooden trap** left of the hut outside the map on the mine-cart side."] },
            { title: "Set the dials", do: ["In the mud room, set the four golden dials to **16, 1, 3, 4**."], tip: "The dials read in Roman-style marks: C is 10, I is 5, a dot is 1." },
            { title: "Ring the gongs", do: ["In Eclipse, ring the **4 correct gongs** of 8, in order.", "As the 4th rings, shoot the orbs on the rods in the temple with the **upgraded shrink ray**.", "Shoot the sixth orb to shrink the meteor."], warn: "A wrong gong resets the sequence. Guides don't give the order. VERIFY." } ] },
          { name: "Phase 4: Free the explorers", steps: [
            { title: "Give them the dynamite", do: ["Pack-a-Punch disappears; open it again with the pressure pads.", "Give the explorers the **dynamite** at the top of the temple stairs."] },
            { title: "Take the Focusing Stone", do: ["Open Pack-a-Punch again.", "Pick up the shrunken meteor, the **Focusing Stone**, where the explorers were."], tip: "Reward: everyone gets **all perks**, kept even after going down." } ] }
        ] },
      { title: "Side Easter eggs", level: "Beginner", body: "Secrets to find:",
        items: ["Music Easter egg: shoot three meteor rocks. Both guides agree on one behind Quick Revive; the others are near Juggernog or the moving walls, and either inside a broken wall past the AK-74u room or near the pad in the mining area. VERIFY.[ref:2][ref:3]",
          "Samantha dolls and a Dr. Monty radio are hidden around the map.[ref:3]"] },
      GLITCH_NONE
    ],
    references: refs(AI_NEW, GRX_EE, CHEAT, ["Accelerated Ideas: Shangri-La Easter egg steps (Zombies Chronicles)", "https://www.accelerated-ideas.com/news/shangrila-easter-egg-steps-zombies-chronicles-dlc-5.aspx"], ["Gameranx: Shangri-La walkthrough (May 2017)", "https://gameranx.com/features/id/106905/article/call-of-duty-black-ops-3-zombie-chronicles-shangri-la-map-walkthrough-map-guide/"]) });

  // ---------------- Moon ----------------
  A({
 "title": "Moon (Black Ops III)",
 "summary": "the Zombies Chronicles remaster of the lunar base map. Its full main quest can be done solo in this version.",
 "facts": {
  "Game": "Black Ops III (Zombies Chronicles)",
  "Release": "May 2017 (VERIFY)",
  "Original": "Black Ops (2011)",
  "Main quest": "Yes: Richtofen's Grand Scheme"
 },
 "features": {
  "note": "You need the P.E.S. suit outside the base. Widow's Wine replaces PhD Flopper and Double Tap II replaces Double Tap.",
  "perks": [
   [
    "Juggernog",
    "Area 51, by the teleporter"
   ],
   [
    "Speed Cola",
    "Area 51, by the teleporter"
   ],
   [
    "Quick Revive",
    "across from the P.E.S. cabinet"
   ],
   [
    "Double Tap II",
    "lab, bottom floor"
   ],
   [
    "Stamin-Up",
    "Tunnel 11"
   ],
   [
    "Deadshot Daiquiri",
    "lab, top floor"
   ],
   [
    "Widow's Wine",
    "biodome"
   ],
   [
    "Mule Kick",
    "outside the lab"
   ]
  ],
  "pap": "Open from the start in Area 51, next to spawn.",
  "box": [
   "Biodome",
   "Outside the biodome",
   "Power room area",
   "Spawn"
  ],
  "wonder": [
   [
    "Wave Gun",
    "Mystery Box, or throw a Q.E.D."
   ]
  ],
  "gum": "Eight machines, from Area 51 to Tunnel 11",
  "other": [
   [
    "P.E.S.",
    "space suit for low-oxygen areas"
   ],
   [
    "Hacker",
    "hacks doors, boxes and terminals"
   ],
   [
    "Excavators",
    "dig into the base and cut off areas"
   ],
   [
    "Teleporter",
    "Moon base to Area 51"
   ],
   [
    "Power",
    "the MPD room near Tunnel 6"
   ]
  ]
 },
 "sections": [
  {
   "chapter": "Map features",
   "title": "Remaster changes",
   "level": "Beginner",
   "brief": "This page covers the **Black Ops III (Zombies Chronicles)** version. Here's what changed from the 2011 original.",
   "lists": [
    {
     "title": "What's different",
     "items": [
      "**Widow's Wine** replaces PhD Flopper, in the same spot.",
      "**Double Tap II** replaces Double Tap.",
      "**GobbleGum** machines, **Double Pack-a-Punch** and Black Ops III weapons with weapon kits.",
      "You go down after **three hits**, not two.",
      "A Q.E.D. can now drop **Widow's Wine grenades**.",
      "The main quest no longer needs the **Shangri-La** and **Call of the Dead** quests done first.",
      "A new **Space Dog** Easter egg and a new song quest, **Samantha's Lullaby**."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "How the map works",
   "level": "Intermediate",
   "brief": "You start in **Area 51** on Earth, next to Pack-a-Punch, and teleport up to the Moon base.",
   "body": "Outside the base there's no air, so you need a **P.E.S.** space suit. The **Hacker** lets you hack doors, the Mystery Box and terminals. **Excavators** dig into the base and can cut off rooms until you stop them.",
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Power",
   "level": "Beginner",
   "brief": "One switch, in the **MPD room** near **Tunnel 6**.",
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Pack-a-Punch",
   "level": "Beginner",
   "brief": "Open from the start, right next to where you spawn in **Area 51**. It costs **5,000**.",
   "lists": [
    {
     "title": "Getting back to Area 51",
     "items": [
      "Use the teleporter pad **above the power room**, just outside the outer **biodome** door.",
      "**Every player** has to stand on it at once, which can be hard in public games."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Special weapons",
   "level": "Intermediate",
   "table": {
    "cols": [
     "Weapon",
     "How to get it",
     "What it does"
    ],
    "rows": [
     [
      "Wave Gun",
      "Mystery Box or a thrown Q.E.D., one player at a time",
      "A blast that kills every zombie in its radius. 14 shots, 28 when upgraded (Max Wave Gun)."
     ],
     [
      "Zap Guns",
      "Press left on the D-pad to split the Wave Gun",
      "Dual pistols that kill a zombie in one hit. 96 shots, 148 when upgraded (Porter's X2 Zap Guns)."
     ],
     [
      "Gersh Device",
      "Mystery Box",
      "A black hole that pulls in zombies for 10 seconds. Jump in to teleport somewhere random."
     ],
     [
      "Q.E.D.",
      "Mystery Box",
      "A random effect, good or bad. See below."
     ]
    ]
   },
   "body": "The Wave Gun can't be **Double Pack-a-Punched**. You hold three special grenades at a time and refill them with a Max Ammo.",
   "lists": [
    {
     "title": "What a Q.E.D. can do",
     "items": [
      "**Good**: a black hole; a Python, Ray Gun, China Lake or SPAS-12 firing in a circle; explosions or lightning on nearby zombies; zombies turned into humans; a random power-up, gun or special grenade; bonus points; a free perk for everyone; upgrading your gun; reviving a teammate.",
      "**Bad**: points taken away; a perk taken from everyone; more zombies; your upgraded gun turned back to normal; everyone nearby downed.",
      "**Neither**: a frag or Semtex grenade, a door opening or closing, or nothing at all."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Buildables",
   "level": "Beginner",
   "body": "Moon has no buildables. Everything is bought from walls, perk machines and the Mystery Box.",
   "chapter": "Map features"
  },
  {
   "chapter": "Game features",
   "title": "Perks",
   "level": "Beginner",
   "table": {
    "cols": [
     "Perk",
     "Cost",
     "Where"
    ],
    "rows": [
     [
      "Juggernog",
      "2,500",
      "Area 51, next to the teleporter pad"
     ],
     [
      "Speed Cola",
      "3,000",
      "Area 51, next to the teleporter pad"
     ],
     [
      "Quick Revive",
      "500 solo (three times), 1,500 co-op",
      "The first room on the Moon, across from the P.E.S. cabinet"
     ],
     [
      "Double Tap II",
      "2,000",
      "Lab, bottom floor, across from the foot of the stairs"
     ],
     [
      "Stamin-Up",
      "2,000",
      "The rocky part of Tunnel 11, on the right"
     ],
     [
      "Deadshot Daiquiri",
      "1,500",
      "Lab, top floor"
     ],
     [
      "Widow's Wine",
      "4,000",
      "Biodome, just right of the Mystery Box spot"
     ],
     [
      "Mule Kick",
      "4,000",
      "Outside the lab, by the rock"
     ]
    ]
   },
   "body": "The guide's table marks Mule Kick as missing from the remaster, but its own GobbleGum and wall-buy lists put things next to it, so it's still there. VERIFY",
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Game features",
   "title": "Weapons",
   "level": "Beginner",
   "tables": [
    {
     "title": "Wall-buys",
     "cols": [
      "Weapon",
      "Cost",
      "Where"
     ],
     "rows": [
      [
       "RK5",
       "500",
       "Outside the spawn door"
      ],
      [
       "Sheiva",
       "500",
       "Outside the spawn door"
      ],
      [
       "L-CAR 9",
       "750",
       "Between Tunnel 6 and spawn"
      ],
      [
       "Trip Mines",
       "1,000",
       "Inside the biodome"
      ],
      [
       "Kuda",
       "1,200",
       "Tunnel 6"
      ],
      [
       "Pharo",
       "1,200",
       "Tunnel 11"
      ],
      [
       "VMP",
       "1,300",
       "Lab, top floor"
      ],
      [
       "KN-44",
       "1,400",
       "Next to Mule Kick"
      ]
     ]
    },
    {
     "title": "Mystery Box only",
     "cols": [
      "Weapons"
     ],
     "rows": [
      [
       "KRM-262, Vesper, HVK-30, M8A7, ICR-1, Argus, Weevil, BRM, Dingo, 48 Dredge, Gorgon, Locus, Drakon, SVG-100, Man-O-War, 205 Brecci, Haymaker 12, XM-53, Galil, M16, Ray Gun, Ray Gun Mark II, Wave Gun, Q.E.D., Gersh Device"
      ]
     ]
    }
   ],
   "body": "Sheiva, Kuda, KN-44 and Pharo are on the wall and in the box.",
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Game features",
   "title": "Mystery Box",
   "level": "Beginner",
   "spawns": [
    {
     "item": "Mystery Box",
     "id": "mystery-box",
     "note": "One spot is active at a time; it moves after a teddy bear.",
     "spots": [
      "Biodome",
      "Outside the biodome",
      "Power room area",
      "Spawn"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Game features",
   "title": "GobbleGum machines",
   "level": "Beginner",
   "spawns": [
    {
     "item": "GobbleGum machines",
     "id": "gum-machine",
     "fixed": true,
     "spots": [
      "**Area 51**, next to the teleporter",
      "Inside the **biodome**",
      "The **spawn room** in the Moon base",
      "**Tunnel 6**",
      "On the Moon's surface near **Mule Kick**",
      "**Lab, middle floor**",
      "The **power room**, next to the Mystery Box spot",
      "**Tunnel 11**, next to Stamin-Up"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Top 10 GobbleGums",
   "level": "Intermediate",
   "body": "Classic gums last until used; Mega gums are rarer and made with Liquid Divinium. The tag shows what each pick is best for.",
   "gums": [
    {
     "name": "Perkaholic",
     "type": "Mega",
     "why": "All eight perks on a big base.",
     "goal": "Any"
    },
    {
     "name": "Shopping Free",
     "type": "Mega",
     "why": "Open the base fast.",
     "goal": "Any"
    },
    {
     "name": "Near Death Experience",
     "type": "Mega",
     "why": "Safety for the long quest.",
     "goal": "Easter egg"
    },
    {
     "name": "Alchemical Antithesis",
     "type": "Classic",
     "why": "Ammo for long Wave Gun games.",
     "goal": "High rounds"
    },
    {
     "name": "Power Vacuum",
     "type": "Mega",
     "why": "More drops while you fill the pyramid canisters.",
     "goal": "Any"
    },
    {
     "name": "Killing Time",
     "type": "Mega",
     "why": "Freeze astronaut zombies.",
     "goal": "Any"
    },
    {
     "name": "In Plain Sight",
     "type": "Classic",
     "why": "Move safely between airlocks.",
     "goal": "Easter egg"
    },
    {
     "name": "Stock Option",
     "type": "Classic",
     "why": "No reloads while filling canisters.",
     "goal": "Easter egg"
    },
    {
     "name": "Wall Power",
     "type": "Mega",
     "why": "An upgraded wall gun before Area 51.",
     "goal": "Casual"
    },
    {
     "name": "Coagulant",
     "type": "Classic",
     "why": "More bleedout time outside the base.",
     "goal": "Co-op"
    }
   ],
   "gumNote": "Our picks, not an official ranking. We started from a general BO3 GobbleGum tier list and adjusted it for this map. No source ranks gums map by map, so treat this as a starting point. VERIFY.",
   "sources": [
    [
     "SegmentNext: BO3 GobbleGum tier list",
     "https://segmentnext.com/bo3-zombies-best-gobblegums"
    ]
   ],
   "chapter": "Game features"
  },
  {
   "chapter": "Game features",
   "title": "The original version",
   "level": "Intermediate",
   "brief": "Notes for the 2011 **Black Ops** map (Rezurrection DLC), which the remaster is based on.",
   "lists": [
    {
     "title": "Differences",
     "items": [
      "**PhD Flopper** (2,000) stood where Widow's Wine is, and **Double Tap** (1.33x fire rate) where Double Tap II is.",
      "You went down in **two hits**, with no GobbleGum or Double Pack-a-Punch.",
      "Past step 10 the main quest needed **two or more players** and the **Shangri-La** and **Call of the Dead** quests finished first."
     ]
    }
   ],
   "tables": [
    {
     "title": "Original weapons",
     "cols": [
      "Wall-buys",
      "Mystery Box"
     ],
     "rows": [
      [
       "Olympia, M14, PM63, MPL, MP5K, AK74u, MP40, M16, Stakeout, Sickle, Claymore, M67 grenades",
       "CZ75, Python, Spectre, FN FAL, G11, FAMAS, AUG, Commando, Galil, HS-10, SPAS-12, Dragunov, L96A1, RPK, HK21, Ballistic Knife, Crossbow, China Lake, M72 LAW, Ray Gun, Scavenger, VR-11, Matryoshka Dolls"
      ]
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Main Easter egg",
   "level": "Intermediate",
   "body": "Richtofen's Grand Scheme. Turn the **power** on first. In the remaster you no longer need the Shangri-La and Call of the Dead quests done.[ref:4]",
   "needs": [
    "**Power** on",
    "The **Hacker**, the **Wave Gun**, **Q.E.D.s** and a **Gersh Device**",
    "A grenade",
    "A **Richtofen** player for the second half"
   ],
   "phases": [
    {
     "name": "Phase 1: Cryogenic Slumber Party",
     "steps": [
      {
       "title": "Samantha Says",
       "do": [
        "Outside spawn, play **Samantha Says** on the **four computers**.",
        "Left to right they're **red, green, blue, yellow**."
       ]
      },
      {
       "title": "Hack the lab panels",
       "spawns": [
        {
         "item": "Hacker",
         "id": "hacker",
         "spots": [
          "**Lab, top floor**: on the tanks **right of Deadshot Daiquiri**",
          "**Lab, top floor**: on a shelf **left of the biodome exit**",
          "**Lab, middle floor**: on the blue railing **right of the stairs** up",
          "**Lab, middle floor**: on the electrical box **left of those stairs**",
          "**Lab, bottom floor**: on a shelf **left of the stairs** up",
          "**Lab, bottom floor**: on a shelf **right of the exit**"
         ]
        }
       ],
       "do": [
        "Get the **Hacker**.",
        "On the middle floor, hack the **leftmost wall panel** (500 points). A timer starts.",
        "Hack the **four glowing green panels** across the three floors before it runs out, or start again.",
        "Back on the middle floor, press all **four wall panels, left to right**, quickly. They all light up."
       ]
      },
      {
       "title": "Stop the excavator",
       "do": [
        "Play on until the computer warns that the excavator is breaching **Tunnel 6**. Let it break all the way in.",
        "Go to **spawn** and hack the **excavator control panel**. It pulls out of Tunnel 6."
       ]
      },
      {
       "title": "Move the artifact",
       "do": [
        "In **Tunnel 6**, find a **round stone**. Melee or shoot it to roll it along until it reaches **spawn** and sits on a **satellite dish**.",
        "Merge the **Wave Gun** (left on the D-pad) and shoot the stone off the dish. It lands by the **Tunnel 11** door.",
        "Keep pushing it through Tunnel 11 to the **MPD**. It fits into the front and a **tube** opens on the front-right corner."
       ]
      },
      {
       "title": "Release Samantha",
       "do": [
        "Kill **25 zombies** near the tube.",
        "Flip the **switch** to the right of it. The MPD opens."
       ],
       "tip": "Reward: a **90-second Death Machine**. In the original, solo games ended the quest here."
      }
     ]
    },
    {
     "name": "Phase 2: Big Bang Theory",
     "steps": [
      {
       "title": "Get the tiles",
       "do": [
        "Get a **Gersh Device**.",
        "In **Area 51**, throw a grenade at the shelves **outside the map, right of the teleporter**. Tiles fall down.",
        "Throw the Gersh Device there to pull the tiles to the teleporter.",
        "Teleport to the Moon. The tiles land by **Quick Revive**.",
        "Throw a **Q.E.D.** at them to send them to a computer in **spawn**."
       ]
      },
      {
       "title": "Connect the tube",
       "spawns": [
        {
         "item": "S-shaped tube",
         "id": "tube",
         "note": "The guide gives two of three spots. VERIFY the third",
         "spots": [
          "**Lab, middle floor**: near the **leftmost wall panel**",
          "**Lab**: right of the exit"
         ]
        }
       ],
       "do": [
        "Find the **S-shaped tube** in the lab.",
        "Fit it on the **right side** of the spawn computer."
       ]
      },
      {
       "title": "Charge the Vril Device",
       "do": [
        "The **Richtofen** player places the **Vril Device** on the tiles.",
        "Richtofen keeps using the computer to talk to Maxis until the screen turns **green**, then picks the device back up."
       ]
      },
      {
       "title": "Fill the four tubes",
       "do": [
        "At the MPD, kill **25 zombies** by a corner tube and flip its switch.",
        "Do this at all **four** corners: **100 kills** in all."
       ]
      },
      {
       "title": "Place the Vril Device",
       "do": [
        "Richtofen puts the **Vril Device** into the front of the MPD."
       ],
       "tip": "Reward: **all perks**, for good. The guide says \"the player\". VERIFY whether everyone gets them."
      },
      {
       "title": "Launch the rockets",
       "do": [
        "Play **Samantha Says** again, **three times** in a row.",
        "Throw a **Q.E.D.** at the front of the MPD. The artifact pops out and lands by the Samantha Says computers.",
        "Throw a **Gersh Device** at those computers.",
        "Rockets fly at Earth. The quest is done."
       ]
      }
     ]
    }
   ],
   "chapter": "Easter eggs and quests",
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Easter eggs and quests",
   "title": "Side Easter eggs",
   "level": "Beginner",
   "body": "Smaller secrets. Each song plays once per game.",
   "eggs": [
    {
     "name": "Samantha's Lullaby (remaster)",
     "reward": "A Max Ammo and a secret song",
     "what": "The song is the theme from the PS4 Zombies Chronicles pre-order.",
     "steps": [
      "In the **power room**, use the **four speakers** by the Mystery Box **15 times** in this order: 3, 1, 1, 4, 4, 1, 4, 2, 4, 2, 4, 1, 1, 2, 3. VERIFY the numbering against the guide's picture.",
      "A doll appears **left of the MPD**. Interact with it.",
      "Shoot every doll that appears in front of the MPD with a bullet gun.",
      "Go back to the first doll and interact again."
     ]
    },
    {
     "name": "Space Dog (remaster)",
     "reward": "See the Space Dog",
     "what": "Brings to life an old rumour from the original Moon.",
     "steps": [
      "Get the **Wave Gun**.",
      "In **Area 51**, shoot the **hellhound toy** by a truck tyre. It reappears by the **dog bowls** in the lab.",
      "Shoot the **teddy bear** on a ledge near the **biodome**. It also moves to the bowls.",
      "Shoot the **bone** by some rocks at the **Area 51 teleporter**. It moves to the bowls too.",
      "With the **Hacker**, hack the **dog bowl** on the lab's middle floor.",
      "Kill **50 zombies** in front of the bowls. A dog barks.",
      "From the teleporter to Area 51, look out of the map toward spawn. Space Dog jumps past on one of three paths."
     ],
     "warn": "Another guide adds killing a dog on a dog round first. VERIFY"
    },
    {
     "name": "Coming Home",
     "reward": "The song \"Coming Home\"",
     "steps": [
      "Activate the three **teddy bears in space helmets**: on the crates below the starting room; in the airlock between the M16 and the power room; in the broken wall by Stamin-Up."
     ]
    },
    {
     "name": "Electronic songs",
     "reward": "Three 8-bit tracks",
     "steps": [
      "**Damned** (instrumental): the computers right of the old MP5K wall-buy, across from Deadshot.",
      "**Coming Home** (8-bit): the consoles by the door to the power room from Tunnel 11.",
      "**Pareidolia** (8-bit, from Shangri-La): the computers right of the window crates on the lab's middle floor."
     ]
    },
    {
     "name": "Nightmare",
     "reward": "\"Nightmare\" by Avenged Sevenfold",
     "what": "This one is tied to the **One Giant Leap** trophy from the original. VERIFY that it works in the remaster.",
     "steps": [
      "Let both excavators breach **Tunnels 6 and 11**.",
      "One player goes down in spawn and bleeds out.",
      "The other finishes the round, so the first player respawns."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Notable glitches",
   "level": "Advanced",
   "body": "Glitches are grouped by type: Out of bounds, God spot and Other.",
   "glitches": [],
   "none": "No out-of-bounds glitch or god spot is known for the Black Ops III version of this map yet. Know one? Add it with a video link.",
   "chapter": "Easter eggs and quests"
  },
  {
   "title": "Storyline",
   "level": "Beginner",
   "brief": "Group 935's secret base on the Moon. Richtofen takes control of the zombies by swapping places with Samantha, and the ending launches rockets at Earth.",
   "body": "Moon is set at Griffin Station, a Group 935 base on the Moon, reached through a teleporter from Area 51. VERIFY.\n\nThe main quest is the high point of Richtofen's plan: he uses the Vril Device and the Focusing Stone to put his soul in Samantha's place inside the Aether, giving him control of the undead. Maxis answers by launching rockets at Earth, which sets up Black Ops II.",
   "chapter": "Media and lore"
  },
  {
   "title": "Cinematics and music",
   "level": "Beginner",
   "body": "The map's Easter egg song. Nothing loads or plays until you click it.",
   "media": [
    {
     "kind": "song",
     "title": "Coming Home",
     "by": "Kevin Sherwood and Elena Siegman. VERIFY",
     "how": "Activate the three hidden **teddy bears**."
    }
   ],
   "chapter": "Media and lore"
  },
  {
   "chapter": "Media and lore",
   "title": "Radios",
   "level": "Intermediate",
   "brief": "Five radios and six audio reels. The guide doesn't give their locations yet. VERIFY",
   "lists": [
    {
     "title": "Radios: how teleporting began",
     "items": [
      "**1.** 1939. Richtofen and Dr. Schuster send a walnut a few feet through their teleporter prototype, powered by Element 115. It works.",
      "**2.** Maxis brushes it off and reveals Group 935 is making a deal with the Nazis. Richtofen and Schuster decide to carry on alone.",
      "**3.** 1940. Richtofen tests the machine on himself. He lands in a strange chamber with a pyramid, hears whispers, then finds himself in a jungle.",
      "**4.** Schuster thinks Richtofen is lost, until he bursts back in, changed and excited by what he saw.",
      "**5.** Two years on, Richtofen shows his own team a Vril machine on the Moon and names Dr. Groph head of **Griffin Station**. He says it's a gateway to the Aether, and plans to keep spying on Maxis."
     ]
    },
    {
     "title": "Audio reels: Griffin Station",
     "items": [
      "**1.** Groph and Schuster learn by accident that killing something next to the pyramid fills its tanks with souls.",
      "**2.** Richtofen orders Groph to keep filling the tanks with prisoners' souls.",
      "**3.** The machine is ready. Richtofen says he'll get rid of Maxis and Samantha himself.",
      "**4.** The tanks are full when an intruder alarm goes off. **Samantha** runs into the pyramid and gets trapped.",
      "**5.** Richtofen tells Groph to find Maxis, who must have come through too.",
      "**6.** Groph teleports Maxis to the Moon to talk Samantha out. Instead Maxis tells her to kill them all, and is shot."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Media and lore",
   "title": "Ciphers",
   "level": "Advanced",
   "body": "Still to be added. VERIFY"
  },
  {
   "chapter": "Media and lore",
   "title": "Trophies and achievements",
   "level": "Beginner",
   "body": "Still to be added. VERIFY"
  }
 ],
 "references": [
  "Accelerated Ideas: Zombies Chronicles, all new Easter eggs. https://www.accelerated-ideas.com/news/zombies-chronicles-all-new-easter-eggs-black-ops-3-remastered.aspx",
  "Gameranx: Zombies Chronicles, all the Easter eggs (May 2017). https://gameranx.com/features/id/106473/article/call-of-duty-black-ops-3-zombie-chronicles-all-the-easter-eggs-easter-eggs-guide/",
  "CheatCC: Zombies Chronicles secrets. https://www.cheatcc.com/articles/call-of-duty-zombies-chronicles-cheats-cheat-codes-for-xbox-one-playstation-4-and-windows/",
  "Accelerated Ideas: Moon Easter egg steps (Zombies Chronicles). https://www.accelerated-ideas.com/news/moon-easter-egg-steps-zombies-chronicles-dlc-5.aspx",
  "Gameranx: Moon walkthrough (May 2017). https://gameranx.com/features/id/106903/article/call-of-duty-black-ops-3-zombie-chronicles-moon-map-walkthrough-map-guide/",
  "r/CODZombies wiki: Moon complete map breakdown, written by u/The_Beebat and u/LackingAGoodName (community guide)"
 ],
 "chapterBlurbs": {
  "Map features": "What's new in the remaster, how the map works, power, Pack-a-Punch and special weapons.",
  "Game features": "Perks, weapons, the Mystery Box, GobbleGum and notes on the original.",
  "Easter eggs and quests": "The main quest, side Easter eggs and known glitches.",
  "Media and lore": "The story, music, radios, ciphers and trophies."
 }
});



  // ---------------- Origins ----------------
  A({ title: "Origins (Black Ops III)",
    summary: "the Zombies Chronicles remaster of the First World War dig site, with four elemental staffs, giant robots and the Little Lost Girl quest.",
    facts: { Game: "Black Ops III (Zombies Chronicles)", Release: "May 2017 (VERIFY)", Original: "Black Ops II (2013)", "Main quest": "Yes: Little Lost Girl (solo possible, very long)" },
    features: { note: "Six **generators** power the map; zombies attack them and you have to recapture them.",
      perks: [["Quick Revive", "spawn"], ["Juggernog", "on the path by generator 4"], ["Speed Cola", "inside a robot footprint"], ["Stamin-Up", "by generator 5"], ["Mule Kick", "under the dig site"]],
      pap: "At the top of the excavation site. All six generators must be running.",
      box: ["At several generator spots (exact spots not listed yet)"], wonder: [["Staffs of the Ancients", "fire, wind, ice and lightning; built from parts"], ["Ray Gun and Ray Gun Mark II", "rare dig rewards"]],
      other: [["Generators", "six; #1 at spawn, #6 behind the church"], ["Tank", "loops from the church"], ["Giant robots", "Thor, Odin and Freya stomp the map"], ["Dig spots", "use the shovel for loot"], ["Gramophone", "opens the staff portals"]] },
    sections: [
      { title: "Lore", level: "Beginner", brief: "A First World War battlefield in northern France where Group 935 first dug up the secrets of Element 115. It's where the Primis crew first meet, and the quest frees Samantha.",
        body: "Origins is set in 1918 at a Group 935 dig site in northern France, in the middle of the war. VERIFY. The crew are the younger versions of Dempsey, Nikolai, Takeo and Richtofen, later called Primis.\n\nThe main quest, Little Lost Girl, ends with Samantha freed from Agartha. The ending shows two children playing, which hints the whole story may be a game between them. The remaster brings this map into Black Ops III, where the Primis story continues." },
      {"title": "Media", "level": "Beginner", "body": "The map's Easter egg song and ending cutscene. Nothing loads or plays until you click it.", "media": [{"kind": "outro", "title": "Origins ending", "spoiler": true}, {"kind": "song", "title": "Archangel", "by": "Kevin Sherwood and Elena Siegman, with Malukah. VERIFY", "how": "Activate the three green **Element 115** pick-ups."}]},
      { title: "In-game mechanics", level: "Advanced", body: "Six generators power the map, and zombies try to capture them. The tank loops between the church and the second generator. Three giant robots stomp across the map and crush anyone underfoot.\n\nFour elemental staffs are built from parts and a crystal in the Crazy Place, then upgraded through puzzles. Digging with a shovel gives random loot. The remaster adds GobbleGum and Wunderfizz." },
      gums(CORE(["All perks on a huge map.", "Open the dig site and generators fast.", "Safety for the long Rain Fire step.", "Ammo for staff-less guns between upgrades.", "More drops while you dig for staff parts."]),
        [["Killing Time", "Mega", "Freeze Panzersoldats and the hordes around them.", "Any"], ["In Plain Sight", "Classic", "Get to a generator under attack.", "Easter egg"], ["Stock Option", "Classic", "No reloads while recapturing generators.", "Any"], ["Wall Power", "Mega", "An upgraded wall gun before all six generators are on.", "Casual"], ["Arms Grace", "Classic", "Keep your staff if you bleed out in co-op.", "Co-op"]]),
      { title: "Buildables", level: "Intermediate", body: "The four staffs are the main buildables. Each needs its parts, a music disc and a crystal from the Crazy Place, and is built at the bottom of the excavation site. The shield and Maxis Drone also need parts; their spots aren't listed yet.",
        buildables: [
          { name: "Staff of Fire", what: "Shoots fireballs; upgrades into a stronger fire staff.", parts: [{ name: "Disc", spawns: ["Between the tank and the stairs", "In the burning church pews", "By generator 6 and the challenge chest"] }, { name: "Pieces", spawns: ["Challenge chest by generator 6", "Dropped by a Panzersoldat", "Shoot down the burning plane"] }, { name: "Crystal", spawns: ["The Crazy Place"] }], tables: ["Bottom of the **excavation site**"] },
          { name: "Staff of Wind", what: "Blasts zombies away with air.", parts: [{ name: "Disc", spawns: ["By generator 5", "By the lightning tunnel entrance", "In the tunnel entrance"] }, { name: "Pieces", spawns: ["Inside the feet of the **Thor**, **Odin** and **Freya** robots"] }, { name: "Crystal", spawns: ["The Crazy Place"] }], tables: ["Bottom of the **excavation site**"] },
          { name: "Staff of Ice", what: "Freezes zombies.", parts: [{ name: "Disc", spawns: ["Tank station desk", "Shelf by the Mystery Box", "Shelf by the rear entrance"] }, { name: "Pieces", spawns: ["Dig with the shovel **while it's snowing**"] }, { name: "Crystal", spawns: ["The Crazy Place"] }], tables: ["Bottom of the **excavation site**"] },
          { name: "Staff of Lightning", what: "Fires electric bolts. VERIFY: part spots not yet listed.", parts: [], tables: ["Bottom of the **excavation site**"] },
          { name: "Shovel", what: "Dig spots give random loot.", parts: [{ name: "Shovel", spawns: ["Next to the M14 at spawn", "By generators 3, 4 and 5", "In front of the church"] }] }],
        sources: [["Gameranx: Origins walkthrough (May 2017)", "https://gameranx.com/features/id/106659/article/call-of-duty-black-ops-3-zombie-chronicles-origins-map-walkthrough-map-guide/"]] },
      { title: "Main Easter egg", level: "Advanced", body: "Solo is possible but very hard; the airstrike step alone can take hours. Co-op is much easier.[ref:4]",
        needs: ["All **four staffs** built and upgraded", "An upgraded **Ballista** for the plane step", "**Zombie Blood** drops", "Several hours"],
        phases: [
          { name: "Phase 1: The staffs", steps: [
            { title: "Build the four staffs", spawns: [{"item": "Gramophone", "id": "gramophone", "fixed": true, "spots": ["**Excavation site, lower level**: on the floor **under the table** at the bottom of the stairs"]}, {"item": "Plain record (opens the staff room)", "id": "record-plain", "spots": ["**Excavation site**: in the machinery **beside the Excavation Site sign**", "**Pack-a-Punch**: on the **wheelbarrow beside the machine**", "**Behind the excavation site**: against the wall by the path up to the **church**"]}, {"item": "Lightning record (purple)", "id": "record-lightning", "note": "Guides disagree on the third spot. VERIFY", "spots": ["**Generator 4**: on the **cart** on the muddy path", "**Wunderfizz**: on the table to the **right of the machine**", "**Wind tunnel**: to the **right of where the portal is built**"]}, {"item": "Lightning staff parts (from the tank)", "id": "part-lightning", "fixed": true, "spots": ["**Tank route, right side**: the large wooden platform about halfway to the tank station", "**Excavation site walkway** (ride on the **left** of the tank): in the mound on the small wooden platform", "**Near the church** (ride on the **right**): jump onto the grassy verge and follow the path in"]}, {"item": "Ice staff parts (dig during snow)", "id": "part-ice", "note": "Dig mounds while it snows. One guide says each part has its own area, another that any mound can hold any part. VERIFY", "spots": ["A dig mound **between spawn and the workshop**", "A dig mound in the **middle of the map**", "A dig mound **near the church**"]}, {"item": "Ice record (blue)", "id": "record-ice", "note": "Guides disagree on generator 2 or 3. VERIFY", "spots": ["**Tank station**: on a shelf inside, near **Generator 2** (or 3)"]}, {"item": "Fire staff parts", "id": "part-fire", "fixed": true, "note": "Guides give different triggers for the second part. VERIFY", "spots": ["**Generator 6**: the reward chest after you power it", "Dropped by the first **Panzersoldat** you kill", "The **glowing plane**: shoot it down; the part lands **past the excavation site toward Generator 4**, on your **right**"]}, {"item": "Fire record (red)", "id": "record-fire", "spots": ["**Church, upstairs**", "**Church, downstairs**", "**Generator 6**"]}, {"item": "Wind staff parts (inside the robots)", "id": "part-wind", "fixed": true, "note": "Shoot the glowing panel under a robot's foot and let it step on you to get inside.", "spots": ["**Left robot (Freya)**: feet land by **Generator 6** and at the **front of the church**. VERIFY", "**Middle robot (Odin)**: feet land on **either side of Generator 4**. VERIFY", "**Right robot (Thor)**: feet land at **Generators 2 and 3**. VERIFY"]}, {"item": "Wind record (yellow)", "id": "record-wind", "note": "One guide only. VERIFY", "spots": ["**Generator 5**: by the **boxes** or on the wall next to the tunnel"]}], do: ["Collect each staff's **parts** and **disc**.", "Play the disc on the **gramophone** in the excavation site to open the portal.", "Take the **crystals** from the chambers.", "Build each staff at the bottom of the excavation site."] },
            { title: "Solve the chamber puzzles", do: ["**Lightning**: play the purple triangles 1,3,6 then 3,5,7 then 2,4,6.", "**Ice**: find the right blue tablets by trial and error.", "**Wind**: turn the rings to match the picture.", "**Fire**: kill zombies on the fire pad until all four pits fill."], warn: "A wrong ice tablet resets that puzzle." },
            { title: "Upgrade the staffs", spawns: [{"item": "Lightning: sparking dials", "id": "lightning-dial", "fixed": true, "note": "Two guides give different dial settings, so check the sparks. VERIFY", "spots": ["**Spawn room**: by the stairs, turn to point **left**", "**Tank station** by Generator 2, near the back door: point **down**", "**Generator 5**: across from **Stamin-Up**, point **down**", "**Behind the excavation site**, on the path to the church: point **up**", "**Under the church**, behind the tank: point **right**", "**Church, upstairs**: point **up**", "**Wind tunnel**: on the **right** going toward the wind portal, point **up**"]}, {"item": "Ice: tombstones", "id": "ice-tombstone", "fixed": true, "note": "Shoot with any gun except the ice staff first, then freeze and smash. VERIFY", "spots": ["By the **soul chest behind Juggernog**", "**Directly behind** that one, in a giant footprint by the body on a stake", "On top of the **tank at the tank station**, to the **left of the downed robot**"]}], do: ["**Lightning**: turn the dials on the sparking panels, then align the purple rings.", "**Ice**: freeze three dripping tombstones and smash them, then align the blue rings.", "**Wind**: point the smoking stone balls at the dig site, then align the yellow rings.", "**Fire**: read the church symbols and shoot the matching torches, then align the red rings.", "Put each staff back in its chamber and kill zombies nearby to fill it."] } ] },
          { name: "Phase 2: Robots and the airstrike", steps: [
            { title: "Arm the robots", do: ["Place **wind**, **ice** and **lightning** staffs in the three robots.", "Put the **fire** staff on the new stand at the bottom of the dig site."] },
            { title: "Press the red buttons", do: ["Get inside each robot's **head**.", "Press the **red button** in each."] },
            { title: "Rain fire", do: ["Carry the four **stone tablets** from the Tank Room to the church fountain.", "Kill zombies to clean them, then carry them back without stepping in mud.", "Throw the **airstrike** marker by the concrete circle near the crashed plane.", "Send the **Maxis Drone** into the new hole.", "Kill the **Panzersoldats** that appear."], warn: "This step is the hardest. Plan for a long fight." } ] },
          { name: "Phase 3: Fists and the finale", steps: [
            { title: "Shoot down the plane", do: ["Grab **Zombie Blood**.", "Shoot the burning plane with the upgraded **Ballista**.", "Grab more Zombie Blood and kill the odd white zombie for a Maxis Drone part."] },
            { title: "Earn the Thunderfists", do: ["At the bottom of the dig site, punch the **white-handed zombies**.", "Pick up the drop, then keep punching until they stop."] },
            { title: "Free Samantha", do: ["Place all four staffs on the altars in the **Crazy Place**.", "Punch knight zombies with the **Thunderfists** to open the rift.", "Send the **Maxis Drone** up through it.", "Use the teleporter that appears to end the game."], tip: "Reward: the final cutscene." } ] }
        ] },
      { title: "Side Easter eggs", level: "Beginner", body: "Secrets to find:",
        items: ["\"Archangel\": activate three green Element 115 pieces (under a bunk bed at spawn, under a bed by a second-floor workstation, by a crate on scaffolding near the dig site).[ref:2]",
          "\"Shepherd of Fire\": activate three red radios (above the Maxis Drone parts, inside the Freya robot, in the fire area of the Crazy Place).[ref:2]",
          "\"Aether\": step on three generator floor panels. VERIFY: the guide's list looks mistyped.[ref:2]",
          "\"Remember Forever\" (remaster): with all four staffs, grab Zombie Blood, shoot the panel behind each orb under the bottom ring of the dig site with its matching staff, shoot the Samantha doll by the teleport circle in the Crazy Place, then shoot the six dolls that appear.[ref:1]",
          "Jump scare: aim a sniper scope at the fire on top of the church tower.[ref:2]"] },
      GLITCH_NONE
    ],
    references: refs(AI_NEW, GRX_EE, CHEAT, ["Accelerated Ideas: Origins Easter egg steps", "https://www.accelerated-ideas.com/news/all-easter-egg-steps--black-ops-2-origins-zombies.aspx"], ["Gameranx: Origins walkthrough (May 2017)", "https://gameranx.com/features/id/106659/article/call-of-duty-black-ops-3-zombie-chronicles-origins-map-walkthrough-map-guide/"]) });

  // ---------- Chapter layout (Map features, Game features, Easter eggs and quests, Media and lore) ----------
  ((titles) => { const MF = "Map features", GF = "Game features", EQ = "Easter eggs and quests", ML = "Media and lore";
    const map = { "In-game mechanics": [MF, "How the map works"], "Buildables": [MF], "Top 10 GobbleGums": [GF], "Main Easter egg": [EQ], "Side Easter eggs": [EQ], "Notable glitches": [EQ], "Lore": [ML, "Storyline"], "Media": [ML, "Cinematics and music"] };
    const rank = { [MF]: 0, [GF]: 1, [EQ]: 2, [ML]: 3 };
    titles.forEach(t => { const a = S.articles.find(x => x.title === t && x.game === G); if (!a || !a.sections || a.chapterBlurbs) return; a.sections = a.sections.map(s => Object.assign({}, s));
      a.sections.forEach(s => { const m = map[s.title]; s.chapter = m ? m[0] : MF; if (m && m[1]) s.title = m[1]; });
      const f = a.features || {}, have = n => a.sections.some(s => s.title === n), add = s => a.sections.push(s);
      if (!have("Perks")) add(f.perks && f.perks.length ? { chapter: GF, title: "Perks", level: "Beginner", table: { cols: ["Perk", "Where"], rows: f.perks }, body: f.note || "" } : { chapter: GF, title: "Perks", level: "Beginner", body: "Perk locations are still to be added. VERIFY" });
      if (!have("Mystery Box")) add(f.box && f.box.length ? { chapter: GF, title: "Mystery Box", level: "Beginner", spawns: [{ item: "Mystery Box", id: "mystery-box", note: "One spot is active at a time; it moves after a teddy bear.", spots: f.box }] } : { chapter: GF, title: "Mystery Box", level: "Beginner", body: "Mystery Box locations are still to be added. VERIFY" });
      [["Radios", "Intermediate"], ["Ciphers", "Advanced"], ["Trophies and achievements", "Beginner"]].forEach(([n, l]) => { if (!have(n)) add({ chapter: ML, title: n, level: l, body: "Still to be added. VERIFY" }); });
      a.sections = a.sections.map((s, i) => [s, i]).sort((x, y) => rank[x[0].chapter] - rank[y[0].chapter] || x[1] - y[1]).map(x => x[0]);
      a.chapterBlurbs = a.chapterBlurbs || { [MF]: "How the map works and what you can build.", [GF]: "Perks, the Mystery Box and GobbleGum.", [EQ]: "The main quest, side Easter eggs and known glitches.", [ML]: "The story, cutscenes, radios, ciphers and trophies." };
    });
  })(S.articles.filter(x => x.game === G && x.category === "zombies" && /\(Black Ops III\)$/.test(x.title)).map(x => x.title));
})(window.SITE);
