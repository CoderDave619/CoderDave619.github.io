// ------------------------------------------------------------
// Black Ops III Zombies map pages. One article per map, using the Zombies map template:
//   Lore · In-game mechanics · Main quest (collapsible steps) · Side Easter eggs · Notable glitches
// Everything is written in our own words from the cited guides. Steps where sources disagree are marked VERIFY.
// Speedrun records live separately (games/bo3-speedruns.js) and are not linked from here.
// ------------------------------------------------------------
(function (S) {
  const G = "bo3";
  // Phased Easter egg guides: { phases: [{ name, steps: [{ title, do: [...], tip?, warn?, solo?, coop? }] }] } are flattened into steps (each step keeps its phase name)
  const flat = sec => { if (sec.phases && !sec.steps) sec.steps = sec.phases.flatMap(p => p.steps.map(st => Object.assign({ phase: p.name, body: st.body || (st.do || []).join(" ").replace(/\*\*/g, "") }, st))); return sec; };
  const A = o => { (o.sections || []).forEach(flat); S.articles = S.articles.filter(x => !(x.title === o.title && x.game === G)); S.articles.push(Object.assign({ game: G, category: "zombies" }, o)); };
  const SN = (m, slug) => `SegmentNext: ${m} Easter egg guide. https://segmentnext.com/${slug}`;
  const GG = "GGRecon: The story of Call of Duty Zombies, part 3. https://www.ggrecon.com/articles/the-story-of-call-of-duty-zombies-part-3-the-alternate-dimension";
  const TGG = "The Global Gaming: The complete story of Call of Duty Zombies. https://theglobalgaming.com/call-of-duty/zombies-complete-story";
  const PENDING_SIDE = "Side Easter eggs for this map (the music Easter egg and other secrets) are being researched and will be added with sources.";
  const PENDING_GLITCH = "No glitches are documented here yet. Glitches are only listed once a source describes them, and patched ones are marked as patched.";

  // ======================= Der Eisendrache =======================
  A({
 "title": "Der Eisendrache",
 "features": {
  "note": "The power switch is in the armory next to Stamin-Up.",
  "perks": [
   [
    "Quick Revive",
    "spawn"
   ],
   [
    "Juggernog",
    "the Juggernog vault"
   ],
   [
    "Double Tap II",
    "Lower Courtyard"
   ],
   [
    "Speed Cola",
    "church"
   ],
   [
    "Stamin-Up",
    "armory"
   ],
   [
    "Mule Kick",
    "tunnel from spawn"
   ],
   [
    "Widow's Wine, Electric Cherry, Deadshot",
    "Wunderfizz only"
   ]
  ],
  "pap": "Use all three spots (rocket pad, Undercroft, Bastion) after power; it moves between them.",
  "wonder": [
   [
    "Wrath of the Ancients",
    "bow from the knight's tomb, four elemental upgrades"
   ],
   [
    "Ragnarok DG-4",
    "buildable"
   ]
  ],
  "other": [
   [
    "Teleporters",
    "link the courtyard to the rocket pad"
   ],
   [
    "Stone dragons",
    "feed them to unlock the bow"
   ],
   [
    "Pyramid room",
    "zero gravity and time travel for the quest"
   ]
  ],
  "box": [
   "Juggernog vault",
   "Upper Courtyard",
   "Death Ray",
   "Lower Courtyard",
   "Rocket pad"
  ],
  "gum": "Seven machines: spawn, Void bow room, both courtyards, Undercroft, rocket pad, armory",
  "traps": [
   "Electric (Mission Control)",
   "Death Ray (Bastion)",
   "Castle Gates (Lower Courtyard)"
  ]
 },
 "featured": true,
 "trending": true,
 "summary": "A mountain castle with four elemental bows, a rocket test site, a time-travel teleporter and a dragon. The first Black Ops III DLC map, released with Awakening.",
 "facts": {
  "Game": "Black Ops III",
  "Release": "Feb 2016, Awakening DLC",
  "Crew": "Primis",
  "Wonder weapon": "Wrath of the Ancients (bow)",
  "Main quest": "Yes, solo or co-op",
  "Quest finale": "The Moon is destroyed"
 },
 "sections": [
  {
   "chapter": "Map features",
   "title": "Power",
   "level": "Beginner",
   "brief": "The power switch is in the **armory**, right next to **Stamin-Up** and the **Bowie Knife**. Turning it on opens doors around the castle, including the way into the **Undercroft**.",
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Pack-a-Punch",
   "level": "Beginner",
   "brief": "Turn the power on, then visit all **three Pack-a-Punch spots** and interact with each one. The machine appears at the **last** spot you used.",
   "spawns": [
    {
     "item": "Pack-a-Punch spots",
     "id": "pap-spot",
     "fixed": true,
     "note": "After it's built, the machine moves between these three. A map on the wall next to each spot lights up **red** where it is now.",
     "spots": [
      "**Rocket pad**",
      "**Undercroft**",
      "**Bastion** (the Death Ray)"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Getting around",
   "level": "Beginner",
   "brief": "Four **Wundersphere** launchers fling you across the castle, and two linked **teleporters** join the Undercroft and the rocket pad.",
   "tables": [
    {
     "title": "Wunderspheres (500 points a launch)",
     "cols": [
      "From",
      "To"
     ],
     "rows": [
      [
       "Lower Courtyard",
       "Upper Courtyard"
      ],
      [
       "Upper Courtyard",
       "Lower Courtyard"
      ],
      [
       "Rocket pad",
       "Spawn"
      ],
      [
       "Death Ray",
       "Rocket pad"
      ]
     ]
    }
   ],
   "lists": [
    {
     "title": "Good to know",
     "items": [
      "Each launcher's **landing pad** has to be switched on before that launcher works.",
      "The whole team can ride in one Wundersphere launch.",
      "The teleporter door in the Undercroft costs **1,500**, then each trip costs **500**."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Anti-gravity",
   "level": "Beginner",
   "brief": "In the **Undercroft**, stand on each of the **four platforms** around the pyramid until it glows blue. When all four are lit, gravity switches off for a short time and you can wall-run. Several quests need it.",
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
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
     "What it does",
     "Where",
     "Cost"
    ],
    "rows": [
     [
      "Electric",
      "Shocks zombies that walk through",
      "Entrance to Mission Control",
      "1,000"
     ],
     [
      "Death Ray",
      "Electrifies the whole floor below it",
      "The Bastion",
      "1,000"
     ],
     [
      "Castle Gates",
      "Slams shut and crushes zombies",
      "Lower Courtyard",
      "1,000"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Buildables",
   "level": "Beginner",
   "body": "Two things are built here, at any of the three build tables. Each shield part appears at **one** of its three spots each game.",
   "buildables": [
    {
     "name": "Rocket Shield",
     "what": "Blocks zombies from behind and can rocket-boost through them.",
     "parts": [
      {
       "name": "Fuel tanks (Lower Courtyard)",
       "spawns": [
        "On top of **crates past the Castle Gates trap**",
        "Beside the **bottom of the stairs** up to the balconies",
        "At the **top of the stairs** toward the Bastion (Death Ray)"
       ]
      },
      {
       "name": "Body (Upper Courtyard)",
       "spawns": [
        "Inside the **clock tower**, leaning on the table",
        "At the **bottom of the stairs** from the clock tower into the Upper Courtyard",
        "Against the **wall in front of the church**"
       ]
      },
      {
       "name": "Top (Undercroft, needs anti-gravity)",
       "spawns": [
        "Above the pyramid, on the **outside railing**",
        "On the wall **above the Undercroft Pack-a-Punch spot**",
        "On the wall **above the doorway to the teleporter room**"
       ]
      }
     ],
     "tables": [
      "**Lower Courtyard / Gatehouse**: above Double Tap, across from the Wundersphere",
      "**Mission Control / church**: at the back, by the dragon statue",
      "**Undercroft**: near the pyramid"
     ]
    },
    {
     "name": "Ragnarok DG-4",
     "what": "A pair of gravity spikes. **Slam** them for a shockwave that throws back and kills zombies around you, or **plant** them to make a barrier that lifts zombies (and Panzersoldats) into the air and kills them. Every player needs a pair for the boss.",
     "parts": [
      {
       "name": "Panzersoldat part",
       "spawns": [
        "Dropped by the **first Panzersoldat** you kill"
       ]
      },
      {
       "name": "Death Ray part",
       "spawns": [
        "Turn on the **Death Ray trap** and look up: a **blue part floats** above the Bastion. Ride the **Upper Courtyard** or **above-Double-Tap** Wundersphere through it to grab it."
       ]
      },
      {
       "name": "Rocket test part",
       "spawns": [
        "At the rocket test site, wait for a **test firing**, pull the **lever under the stairs**, then run back inside the **rocket tunnel**. When the test ends, use the **control panel**: the part appears in the **teleporter**. Grab it before it vanishes. VERIFY: exact lever and panel spots still to be added."
       ]
      }
     ],
     "tables": [
      "Any of the three build tables"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
     ""
    ],
    [
     "SegmentNext: Der Eisendrache workbench locations",
     "https://segmentnext.com/bo3-zombies-der-eisendrache-workbench-locations"
    ]
   ],
   "chapter": "Map features"
  },
  {
   "chapter": "Game features",
   "title": "Perks",
   "level": "Beginner",
   "brief": "Nine perks. All of them, including the three without a machine, can also come out of a **Wunderfizz**.",
   "table": {
    "cols": [
     "Perk",
     "Where"
    ],
    "rows": [
     [
      "Quick Revive",
      "Spawn"
     ],
     [
      "Juggernog",
      "The Juggernog vault"
     ],
     [
      "Double Tap II",
      "Lower Courtyard"
     ],
     [
      "Speed Cola",
      "Church / computer room"
     ],
     [
      "Stamin-Up",
      "Armory (power room)"
     ],
     [
      "Mule Kick",
      "The tunnel from spawn"
     ],
     [
      "Widow's Wine",
      "Wunderfizz only"
     ],
     [
      "Electric Cherry",
      "Wunderfizz only"
     ],
     [
      "Deadshot Daiquiri",
      "Wunderfizz only"
     ]
    ]
   },
   "lists": [
    {
     "title": "Wunderfizz machines",
     "items": [
      "Lower Courtyard",
      "Church",
      "Upper Courtyard",
      "Rocket pad"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
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
      "Where",
      "In the box?"
     ],
     "rows": [
      [
       "RK5",
       "500",
       "Spawn",
       "No"
      ],
      [
       "Sheiva",
       "500",
       "Spawn",
       "Yes"
      ],
      [
       "L-CAR 9",
       "750",
       "VERIFY: spot to add",
       "No"
      ],
      [
       "KRM-262",
       "750",
       "VERIFY: spot to add",
       "No"
      ],
      [
       "VMP",
       "1,100",
       "VERIFY: spot to add",
       "Yes"
      ],
      [
       "Kuda",
       "1,200",
       "Upper Courtyard",
       "No"
      ],
      [
       "Vesper",
       "1,200",
       "VERIFY: spot to add",
       "No"
      ],
      [
       "M8A7",
       "1,400",
       "VERIFY: spot to add",
       "Yes"
      ],
      [
       "KN-44",
       "1,400",
       "Juggernog vault",
       "Yes"
      ],
      [
       "HVK-30",
       "1,600",
       "Undercroft",
       "Yes"
      ],
      [
       "BRM",
       "4,500",
       "Left of a build table, after the BRM side Easter egg",
       "No"
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
       "Pharo, ICR-1, Argus, Weevil, Dingo, 48 Dredge, Gorgon, Locus, Drakon, SVG-100, Man-O-War, 205 Brecci, Haymaker 12, XM-53, Ray Gun, Monkey Bombs, Trip Mines"
      ]
     ]
    },
    {
     "title": "Special weapons",
     "cols": [
      "Weapon",
      "How to get it"
     ],
     "rows": [
      [
       "Wrath of the Ancients",
       "Feed the three stone dragons (see the main quest, part 1)"
      ],
      [
       "Four upgraded bows",
       "Storm, Fire, Wolf and Void: one quest each (part 1)"
      ],
      [
       "Ragnarok DG-4",
       "Build it (see Buildables)"
      ]
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
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
      "**Juggernog vault**",
      "**Upper Courtyard**",
      "**Death Ray** (Bastion)",
      "**Lower Courtyard**",
      "**Rocket pad**"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
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
     "note": "All seven work every game.",
     "spots": [
      "**Spawn**",
      "**Void bow room**",
      "**Upper Courtyard**",
      "**Undercroft**",
      "**Lower Courtyard**",
      "**Rocket pad**",
      "**Armory**"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
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
     "why": "All perks without paying for each one on a map with long trips between machines.",
     "goal": "Any"
    },
    {
     "name": "Shopping Free",
     "type": "Mega",
     "why": "Rushes the 4,500 points of doors to power in one go.",
     "goal": "Easter egg"
    },
    {
     "name": "Near Death Experience",
     "type": "Mega",
     "why": "Three rounds of safety for the boss fight.",
     "goal": "Easter egg"
    },
    {
     "name": "Alchemical Antithesis",
     "type": "Classic",
     "why": "Keeps your Pack-a-Punched guns fed between bow kills.",
     "goal": "High rounds"
    },
    {
     "name": "Power Vacuum",
     "type": "Mega",
     "why": "More drops while you work through the bow quests.",
     "goal": "Easter egg"
    },
    {
     "name": "Killing Time",
     "type": "Mega",
     "why": "Freeze the Panzersoldats and the hordes around them.",
     "goal": "Any"
    },
    {
     "name": "Wall Power",
     "type": "Mega",
     "why": "A Pack-a-Punched wall gun early, before you have the bow.",
     "goal": "Casual"
    },
    {
     "name": "In Plain Sight",
     "type": "Classic",
     "why": "Slip past zombies on the narrow castle walkways.",
     "goal": "Any"
    },
    {
     "name": "Stock Option",
     "type": "Classic",
     "why": "Long sprays without reloading during the boss.",
     "goal": "Any"
    },
    {
     "name": "Arms Grace",
     "type": "Classic",
     "why": "Keep your guns if you bleed out in co-op.",
     "goal": "Co-op"
    }
   ],
   "gumNote": "Our picks, not an official ranking. We started from a general BO3 GobbleGum tier list and adjusted it for this map's layout and quest. No source ranks gums map by map, so treat this as a starting point. VERIFY.",
   "sources": [
    [
     "SegmentNext: BO3 GobbleGum tier list",
     "https://segmentnext.com/bo3-zombies-best-gobblegums"
    ],
    [
     "Call of Duty blog: GobbleGum 101 (Dec 2015)",
     "https://www.callofduty.com/blog/archives/call-of-duty-black-ops-3-zombies--gobblegum-101"
    ],
    [
     "SegmentNext: Black Ops 3 Zombies maps overview",
     "https://segmentnext.com/call-of-duty-black-ops-3/maps"
    ],
    [
     "SegmentNext: Der Eisendrache workbench locations",
     "https://segmentnext.com/bo3-zombies-der-eisendrache-workbench-locations"
    ]
   ],
   "chapter": "Game features"
  },
  {
   "chapter": "Easter eggs and quests",
   "title": "Main Easter egg",
   "level": "Advanced",
   "body": "Four parts: upgrade the bow, travel back in time, guide the Keeper's spirit, then the boss. Turn the power on first. Rewritten from the community breakdown and checked against our earlier sources; gaps it leaves are marked VERIFY.",
   "needs": [
    "Power on and **anti-gravity** understood",
    "Play a **ranked** match: you need **one upgraded bow per player**. In a custom match even a solo player has to make all four.",
    "Every player needs a **Ragnarok DG-4** for the boss",
    "The wisps, the trip to the past and **Groph's code** all happen **in the same round**",
    "Monkey Bombs and a strong shotgun help in the boss fight"
   ],
   "phases": [
    {
     "name": "Part 1: The bow and its upgrades",
     "steps": [
      {
       "title": "Feed the three stone dragons",
       "do": [
        "Kill zombies right under each **stone dragon**. Each one eats **8 souls**.",
        "Do all three in any order."
       ],
       "spawns": [
        {
         "item": "Stone dragons",
         "id": "stone-dragon",
         "fixed": true,
         "spots": [
          "**Lower Courtyard**: in the open, just past the **Castle Gates trap**",
          "**Mission Control / church**: **under the clock**",
          "**Undercroft**: near the **pyramid**"
         ]
        }
       ]
      },
      {
       "title": "Take the Wrath of the Ancients",
       "do": [
        "Go to the **Family Crypt**, between the church and the Undercroft, and take the bow. It uses a weapon slot.",
        "A quick shot uses **one arrow**; a held (charged) shot uses **two** and hits harder."
       ]
      },
      {
       "title": "Void bow",
       "do": [
        "At the **Castle Gate / Gatehouse** entrance, put a **charged shot** into the purple symbol and take the **broken arrow** that drops.",
        "In the **trophy room** under the clock tower, get a **melee kill** on the purple square, then use the **urn**: it floats up.",
        "Collect the **six Keeper skulls** (below), then come back to the urn.",
        "Lead **six crawlers** into the purple circle for the skulls to eat.",
        "Listen to the **three words** the urn spirit says: Heart, Door, Griffon, Stagg, Horn or Crown. Shoot the urn and use it again to hear them twice.",
        "In the **knight statue room** between the church and the living quarters, use the three matching **knights** in the order you heard.",
        "Kill zombies until the **three symbols** drop, then shoot them in order in the ritual room. A beam of purple light appears. VERIFY: where the symbols drop.",
        "Stand the arrow in the beam for a few seconds to repair it. The arrow then goes to its **ritual stand in the Undercroft**. Get about **30 kills** inside the square around the pyramid until it glows white, put it in the stand, and take your upgraded bow a few seconds later."
       ],
       "warn": "Shooting the symbols in the wrong order while you're in the ritual room kills you.",
       "spawns": [
        {
         "item": "Keeper skulls",
         "id": "void-skull",
         "fixed": true,
         "note": "Listed in a fast one-way route.",
         "spots": [
          "On a **low wall in front of Mule Kick**",
          "**Upper Courtyard**: in a **window** up the stairs toward the church",
          "**Undercroft teleporter room**: in the **sink**",
          "**Rocket test site**: in the **back of a truck**",
          "By **Double Tap**: on the **broken piece of wall**",
          "**Living quarters**: in **Samantha's room**, in the **toy box**"
         ]
        }
       ]
      },
      {
       "title": "Fire bow",
       "do": [
        "At the **top of the clock tower stairs**, put a **charged shot** into the symbol on the wall for the **broken fire arrow**. VERIFY: exact spot.",
        "At the rocket test site, stay inside during a **test launch**, then run out and shoot the top of the **glowing red rock**. A fireball rises over the castle.",
        "From a Wundersphere, hit each of the **three ritual circles** with an arrow **in mid-air**. Each lights up orange with a sound.",
        "Get **10 kills** in each circle. They fire beams up at the fireball.",
        "At the **top of the clock tower**, use the **clock** to see an Apothicon symbol. That picks the **fireplace** you need.",
        "From the circle that's still lit, volley arrows toward that fireplace. Each arrow leaves a small volcano to shoot from next. Reach it in **four shots or fewer** (three gives a Max Ammo).",
        "Use the lit fireplace to hand over the broken arrow, then go up to the castle top and use the **fireball**. It bursts and drops the repaired arrow. The arrow then goes to its **ritual stand in the Undercroft**. Get about **30 kills** inside the square around the pyramid until it glows white, put it in the stand, and take your upgraded bow a few seconds later."
       ],
       "warn": "Miss the four-shot limit and you have to wait for the next round to try again.",
       "spawns": [
        {
         "item": "Fire ritual circles",
         "id": "fire-circle",
         "fixed": true,
         "spots": [
          "In front of the **Gatehouse**, near spawn",
          "On the **Death Ray**",
          "Outside the **clock tower**"
         ]
        },
        {
         "item": "Fireplace routes",
         "id": "fire-route",
         "note": "Which route you do depends on the clock's symbol.",
         "spots": [
          "Gatehouse circle to **Samantha's room**",
          "Death Ray circle to the **church**",
          "Clock tower circle to the **Upper Courtyard**"
         ]
        }
       ]
      },
      {
       "title": "Storm (lightning) bow",
       "do": [
        "Put a **charged shot** into the **weather vane** on top of the castle and grab the broken arrow from the broken wall below.",
        "Shoot the **three bonfires** outside the map to light them.",
        "With anti-gravity on in the Undercroft, wall-run over all **five wind symbols** without touching the ground.",
        "Charge each **urn** with **5 kills**, hold a charged shot by it until it pulls in lightning, and fire at its **matching bonfire**.",
        "Use the blue smoke at the weather vane to repair the arrow. The arrow then goes to its **ritual stand in the Undercroft**. Get about **30 kills** inside the square around the pyramid until it glows white, put it in the stand, and take your upgraded bow a few seconds later."
       ],
       "spawns": [
        {
         "item": "Bonfires",
         "id": "lightning-bonfire",
         "fixed": true,
         "spots": [
          "**Castle**: behind the **clock tower**",
          "**Castle**: far off, toward the **rocket test site**",
          "**Rocket test site**: up on the **mountains**, facing the castle"
         ]
        },
        {
         "item": "Urns and their bonfires",
         "id": "lightning-urn",
         "fixed": true,
         "spots": [
          "**Rocket pad tunnel**, behind debris: fire at the bonfire on the mountains",
          "**Above Double Tap**, by the build table: fire at the bonfire toward the rocket test site",
          "**Inside the clock tower**, under the stairs: fire at the bonfire behind the clock tower"
         ]
        }
       ]
      },
      {
       "title": "Wolf bow",
       "do": [
        "Use the **four paintings** in story order: the king with two wolves, the king on a horse, the burning battlefield, the defeated king. A wolf howls when it's right. VERIFY: order.",
        "Pick up the **broken wolf arrow** that appears in the Undercroft.",
        "At the rocket test site, put a **charged shot** into the **flag**. A **wolf skull** tumbles down the mountain: pick it up.",
        "Use the **wolf bones** by the Undercroft ritual stand to call a **spirit wolf**.",
        "Follow it to **three spots** and get **10 kills** at each. It digs up bones each time: take them.",
        "The wolf waits under a spot in the Undercroft. With anti-gravity on, wall-run and shoot the glowing **wolf symbol**. A platform rises: jump in and take the arrow from the skeleton. The arrow then goes to its **ritual stand in the Undercroft**. Get about **30 kills** inside the square around the pyramid until it glows white, put it in the stand, and take your upgraded bow a few seconds later."
       ],
       "spawns": [
        {
         "item": "Wolf paintings",
         "id": "wolf-painting",
         "note": "Which painting hangs where changes each game.",
         "spots": [
          "**Trophy room**",
          "**Clock tower**",
          "**Mission Control**",
          "**Living quarters**"
         ]
        },
        {
         "item": "Wolf dig spots",
         "id": "wolf-dig",
         "fixed": true,
         "spots": [
          "**Upper Courtyard**: behind the **Wundersphere**",
          "**Castle entrance**: by the **Gates trap** and Double Tap",
          "**Undercroft**: in front of the **Pack-a-Punch spot**"
         ]
        }
       ]
      }
     ]
    },
    {
     "name": "Part 2: Back in time",
     "steps": [
      {
       "title": "Light the teleporter",
       "do": [
        "With the **plain Wrath of the Ancients**, fire quick shots at the **top of the teleporter** until all its prongs light up. You'll hear a growl. It can take a few tries."
       ]
      },
      {
       "title": "Shoot the wisps",
       "do": [
        "With an **upgraded bow**, shoot a **wisp**. The next one appears at another spot.",
        "Hit **four** in quick succession. The Undercroft teleporter glows **purple** when it's done."
       ],
       "warn": "It's timed and resets each round. A stray shot or Widow's Wine blast at an empty wisp spot fails it until next round.",
       "spawns": [
        {
         "item": "Wisps",
         "id": "wisp",
         "note": "Four of these are used each attempt.",
         "spots": [
          "**Mission Control**: the **clock** in the church",
          "**Mission Control**: the **radios** in the church",
          "**Barracks / Upper Courtyard**: on the **clock** by the stairs",
          "**Armory**: by the **power switch**",
          "**Living quarters**: the **globe** by Samantha's room",
          "**Gatehouse**: on **boxes** in the room above Double Tap",
          "**Gatehouse / spawn**: the **back of the car** by Double Tap",
          "**Spawn**: next to **Quick Revive**"
         ]
        }
       ]
      },
      {
       "title": "Go back in time",
       "do": [
        "Pay **500** to use the purple teleporter.",
        "In the past: pick up the **soul canister**, pick up the **Death Ray parts**, and watch the **code Dr. Groph types** into his safe.",
        "You come back at the rocket test site. A Panzersoldat spawns after every trip."
       ],
       "warn": "The code changes each round. Don't finish the round until you've used it, or you'll have to redo the wisps."
      },
      {
       "title": "Open Groph's safe",
       "do": [
        "You must have used the **Death Ray trap** at least once.",
        "Fit the extra parts into the **Death Ray console** and switch it from **destroy** to **protect**.",
        "Enter Groph's code on the console by the **clock tower**. The **safe in the Undercroft** opens: take what's inside.",
        "Fit one piece into **each side** of the Death Ray and switch it back to **destroy**."
       ]
      },
      {
       "title": "Win Simon Says",
       "do": [
        "Hellhounds now spawn without end.",
        "At both consoles, match the symbols to the one on the big screen. The Death Ray prongs start glowing when both are done.",
        "Press the **green button** on the back of the Death Ray. A rocket crashes into the **Upper Courtyard**."
       ],
       "spawns": [
        {
         "item": "Simon Says consoles",
         "id": "simon",
         "fixed": true,
         "spots": [
          "Near the **clock tower**",
          "On the **rocket pad**"
         ]
        }
       ]
      },
      {
       "title": "Fetch the Keeper tablet",
       "do": [
        "Go back in time again (wisps and teleporter as before).",
        "Use the machine in the **corner** of the room to open a box and take the **Keeper tablet**."
       ],
       "tip": "You can do this any time after the rocket comes down, but you need it in part 3."
      }
     ]
    },
    {
     "name": "Part 3: The Keeper's spirit",
     "steps": [
      {
       "title": "Wake the spirit",
       "do": [
        "Take the **golden rod** from the crashed rocket to the **Family Crypt** and put it in the base. A spirit **Keeper** appears."
       ]
      },
      {
       "title": "Charge it at four spots",
       "do": [
        "Follow it to each spot and fill it with souls from the **matching bow**. The colour on your screen in the circle tells you which: dark blue Storm, purple Void, orange Fire, light blue Wolf."
       ],
       "spawns": [
        {
         "item": "Keeper spots",
         "id": "keeper-spot",
         "fixed": true,
         "spots": [
          "**Upper Courtyard**",
          "In front of **Mule Kick**",
          "**Living quarters**, near the statues",
          "In front of the **Gates trap** by the castle entrance. Put the **Keeper tablet** in the wall first or it can't be charged."
         ]
        }
       ]
      },
      {
       "title": "Open the pyramid",
       "do": [
        "The Keeper goes down to the Undercroft pyramid and a short audio scene plays, with no zombies for a while.",
        "The pyramid is swapped for the **MPD** holding three full canisters. Add the **fourth** to open it and reveal the corrupted Keeper."
       ]
      }
     ]
    },
    {
     "name": "Part 4: The boss",
     "steps": [
      {
       "title": "Enter the arena",
       "do": [
        "All players **plant their Ragnaroks together** on one of the blue anti-gravity floor plates."
       ]
      },
      {
       "title": "Beat the corrupted Keeper",
       "do": [
        "Keep moving. It drops fire volcanoes, sends skulls after you and spawns hellhounds.",
        "When an **electric orb** appears in the middle, one player **plants their Ragnarok in it**. The Keeper is stunned: shoot the **gold symbol on its chest**.",
        "**Phase 2**: kill the Panzersoldats first, then repeat the orb. Hellhounds keep coming.",
        "**Phase 3**: more Panzersoldats, and the Keeper may join in before they're all dead. A Max Ammo drops between phases."
       ],
       "warn": "If your Ragnarok isn't charged, hide behind one of the **six pillars** when it charges its electric blast, or it kills you in one hit."
      },
      {
       "title": "Destroy the Moon",
       "do": [
        "Back in the Undercroft, use the glowing front of the **MPD**, then use it again to take the **Summoning Key**.",
        "Take the key to the console by the **clock tower** and use it. The rockets fire and the Moon is destroyed."
       ]
      }
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Easter eggs and quests",
   "title": "Side Easter eggs",
   "level": "Beginner",
   "body": "Smaller secrets, from a song to a free Mega GobbleGum.",
   "eggs": [
    {
     "name": "\"Dead Again\" (music)",
     "reward": "Song",
     "steps": [
      "Use all three **teddy bears**."
     ],
     "spawns": [
      {
       "item": "Teddy bears",
       "id": "bear",
       "fixed": true,
       "spots": [
        "In the **jail cell** near Juggernog",
        "In **Samantha's room**, sitting on a chair",
        "In a **car window** at the rocket test site"
       ]
      }
     ]
    },
    {
     "name": "BRM wall-buy",
     "reward": "A BRM on the wall",
     "steps": [
      "Turn on anti-gravity.",
      "Run across all **five blue glowing tiles** around the Undercroft. VERIFY: tile spots still to be added.",
      "Buy the **BRM** for **4,500** from the wall to the left of the build table. VERIFY: which table."
     ]
    },
    {
     "name": "Skeleton zombies",
     "reward": "Zombies turn into skeletons",
     "steps": [
      "Hold the bow (any version) and use the **In Plain Sight** GobbleGum.",
      "While it's active, shoot at each of the **three floating skulls**.",
      "To undo it, destroy the **three skulls on a chair** near the dragon head in the church."
     ],
     "spawns": [
      {
       "item": "Floating skulls",
       "id": "skel-skull",
       "fixed": true,
       "spots": [
        "To the **right of Mule Kick**, behind the brick wall",
        "Above the **church entrance**, by the three big windows",
        "By **Double Tap**, on the right near the brick wall"
       ]
      }
     ]
    },
    {
     "name": "Panzer Claw helmet",
     "reward": "No damage from Panzer melee",
     "steps": [
      "Shoot down each of the **three Panzer claws** set into the walls.",
      "Each lands on a small wooden box nearby. Shoot it when a **Panzersoldat is right in front of it** to kill it in one hit.",
      "Do it at all three."
     ],
     "warn": "If a Panzersoldat dies any other way, that chance is gone for the rest of the game.",
     "spawns": [
      {
       "item": "Panzer claws",
       "id": "claw",
       "fixed": true,
       "spots": [
        "Above the **bridge / catwalk** by the room across from the living quarters",
        "In the **tunnel** by the boxes next to Quick Revive",
        "Above the box at the end of the **power room / church / barracks** connector"
       ]
      }
     ]
    },
    {
     "name": "Plunger melee",
     "reward": "A plunger in place of your knife",
     "steps": [
      "Blow open the **fire bow spot** in the clock tower and put your **Ragnarok** behind the clock.",
      "Drop down and use the **lever** on the table by the door to start and stop the clock.",
      "Stop it on **9:35**. Lightning strikes and it ticks to 9:36.",
      "With anti-gravity on in the pyramid room, run along the **blue marks** near the pyramid. You go back in time.",
      "Take the **plunger** from the table to the left of the teleporter."
     ]
    },
    {
     "name": "Second gondola",
     "reward": "A free upgraded gun or Cymbal Monkeys",
     "steps": [
      "At the start, throw a grenade into the gondola on your **right** before it leaves.",
      "After calling the gondola with **four fuses**, the **fifth** fuse brings the other gondola.",
      "It holds one of: a Pack-a-Punched **Man-O-War**, a Pack-a-Punched **Haymaker 12**, or **Cymbal Monkeys**."
     ]
    },
    {
     "name": "Free Mega GobbleGum",
     "reward": "A free Mega gum",
     "steps": [
      "Take the **plant** from the cabinet in the Undercroft teleporter room (right of the door as you go in).",
      "Go back in time (see part 2) and put it back in the same place.",
      "Back in the present, use the plant to collect your gum."
     ]
    },
    {
     "name": "Drew Marlowe's family photo",
     "reward": "A developer tribute",
     "steps": [
      "Stay in **round 2**. Let zombies break all **five spawn barriers**.",
      "Rebuild exactly **2 boards** on each, then buy the **RK5**.",
      "Rebuild to **4 boards** each, then buy the **Sheiva**.",
      "Rebuild to **5 boards** each, then buy the **RK5** again.",
      "Within **5 seconds**, open the door toward the KRM and look out off the map. A heart-shaped photo appears."
     ],
     "warn": "Any step out of order fails it for the rest of the game. Starting with an RK5 from another Easter egg may block it."
    },
    {
     "name": "Disco ball",
     "steps": [
      "Shoot a ball in the Speed Cola room with the **Ray Gun** for a minute of disco. VERIFY: not in the community breakdown."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Notable glitches",
   "level": "Advanced",
   "body": "Glitches are grouped by type: Out of bounds (outside the playable map), God spot (somewhere zombies can't reach you) and Other. Each says whether it still works, as far as we can confirm.",
   "glitches": [
    {
     "name": "Keeper ritual stalls",
     "type": "Other",
     "difficulty": "Beginner",
     "status": "Reported in guides (VERIFY on the current version)",
     "what": "The Keeper ritual in the main quest can stop progressing if the wrong bow is used or a stone panel is missed. A restart may be needed.",
     "how": [
      "Use the matching upgraded bow for each step.",
      "Hit every stone panel before moving on."
     ],
     "src": [
      [
       "SegmentNext: Der Eisendrache Easter egg guide",
       "https://segmentnext.com/call-of-duty-black-ops-3/maps"
      ]
     ]
    },
    {
     "name": "Dragon head god mode",
     "type": "God spot",
     "difficulty": "Advanced",
     "status": "Patched (forum label)",
     "what": "Standing on a dragon head left you safe from zombies. Patched, so it's here as history.",
     "how": [
      "Steps not written up yet. The forum thread and video hold the method.",
      "VERIFY: we couldn't open the thread to confirm the steps."
     ],
     "src": [
      [
       "Se7enSins forum: Der Eisendrache god mode glitch (dragon head)",
       "https://www.se7ensins.com/forums/threads/der-eisendrache-godmode-glitch-dragon-head.1456274/"
      ]
     ]
    },
    {
     "name": "Under the map",
     "type": "Out of bounds",
     "difficulty": "Advanced",
     "status": "Forum labelled working (VERIFY on the current version)",
     "what": "Gets you underneath the castle map.",
     "how": [
      "Steps not written up yet. The forum thread and video hold the method.",
      "VERIFY: we couldn't open the thread to confirm the steps."
     ],
     "src": [
      [
       "Se7enSins forum: easy under-map glitch on Der Eisendrache",
       "https://www.se7ensins.com/forums/threads/easy-under-map-glitch-on-der-eisendrache.1479618/"
      ],
      [
       "Madgaz Gaming on YouTube: Der Eisendrache out-of-map glitch (Feb 2016)",
       "https://www.youtube.com/watch?v=ub-G1zF_6Cc"
      ]
     ]
    }
   ],
   "none": null,
   "chapter": "Easter eggs and quests"
  },
  {
   "title": "Storyline",
   "brief": "A mountain castle that Group 935 turned into a rocket base. Primis, the original four heroes from Origins, come here to collect souls they need for their plan. The story ends with the castle's rockets destroying the Moon.",
   "body": "Der Eisendrache (\"the iron dragon\") is a castle in the Alps that Group 935 turned into a weapons and rocket facility. VERIFY. The crew is Primis: the versions of Dempsey, Nikolai, Takeo and Richtofen who first met in Origins.[ref:3]\n\nThe castle itself predates Group 935. One account says Primis raised it after the Great War against the Apothicons, while another says the Wolf King built it for them; the two sources don't agree, so treat the castle's origin as unsettled.[ref:2][ref:3]\n\nThe main quest ties the map into the wider story. The crew travels back in time inside the castle, recovers a pair of soul canisters, defeats the Keeper-corrupted boss in a sealed arena, and finally uses the castle's rockets to destroy the Moon, the base Samantha and Richtofen had been fighting over since Black Ops.[ref:1]\n\nThe quest is about collecting the souls of the Ultimis crew, starting with the original Dempsey. In the ending, Primis Dempsey switches off his older self's life support.[ref:4]",
   "level": "Beginner",
   "chapter": "Media and lore",
   "more": "In the main story, Primis chases a Group 935 truck carrying the original Dempsey in a cryo pod, but arrive too late: he has been launched toward Griffin Station on the Moon. Richtofen poses as his younger self to fool Dr. Groph, the crew pulls the rocket back down into the courtyard, and they bring the MPD over from the Moon. After the corrupted Keeper falls, the castle's missiles destroy the Moon and everyone at Griffin Station. Dempsey switches off his older self's life support, and Richtofen captures that soul in the Summoning Key."
  },
  {
   "title": "Cinematics and music",
   "level": "Beginner",
   "body": "Cutscenes and the map's Easter egg song. Nothing loads or plays until you click it.",
   "media": [
    {
     "kind": "intro",
     "title": "Der Eisendrache intro"
    },
    {
     "kind": "outro",
     "title": "Der Eisendrache ending",
     "spoiler": true
    },
    {
     "kind": "song",
     "title": "Dead Again",
     "by": "Elena Siegman and Kevin Sherwood. VERIFY",
     "how": "Use the three **teddy bears** (see Side Easter eggs)."
    }
   ],
   "chapter": "Media and lore"
  },
  {
   "chapter": "Media and lore",
   "title": "Map facts and trivia",
   "level": "Beginner",
   "table": {
    "cols": [
     "Fact",
     ""
    ],
    "rows": [
     [
      "Name",
      "German for \"the Iron Dragon\""
     ],
     [
      "Setting",
      "Griffin Castle, near Werfen in the Alps"
     ],
     [
      "Date",
      "Around October 1945 (the guide's estimate)"
     ],
     [
      "Crew",
      "Primis: Dempsey, Nikolai, Takeo and Richtofen"
     ],
     [
      "Release order",
      "19th Zombies map; comes after The Giant and before Zetsubou No Shima"
     ],
     [
      "Internal map name",
      "zm_castle"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Media and lore",
   "title": "Radios",
   "level": "Intermediate",
   "body": "Five radios, all Dr. Groph. Each summary is our own short version.",
   "table": {
    "cols": [
     "#",
     "Where",
     "What you hear"
    ],
    "rows": [
     [
      "1",
      "A sealed room next to the knight statues",
      "Dr. Groph rallies Group 935, boasting of weapons breakthroughs and a base on the Moon."
     ],
     [
      "2",
      "The church",
      "With Richtofen missing and Der Riese likely lost, Groph takes command and halts MPD tests."
     ],
     [
      "3",
      "The bell tower",
      "Groph worries the MPD is clouding their minds, and dreams of Samantha on the Moon."
     ],
     [
      "4",
      "By Groph's safe",
      "The pyramid acts strangely; guards hear a voice saying \"the loop must be closed\"."
     ],
     [
      "5",
      "Maxis's bedroom",
      "Groph notes Division 9's weapon research and hopes it can break the Eastern Front."
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Media and lore",
   "title": "Ciphers",
   "level": "Advanced",
   "body": "Eleven ciphers and one scrap of paper, all solved by the community. The meanings are short summaries.",
   "table": {
    "cols": [
     "#",
     "Type",
     "What it says"
    ],
    "rows": [
     [
      "1",
      "Bifid",
      "Samantha meets a new friend, Edward, who won't share the toys."
     ],
     [
      "2",
      "Playfair",
      "An autopsy reveals how to make the undead army; four test subjects are next."
     ],
     [
      "3",
      "Trithemius",
      "A legend of beings whose light cleansed the land after the Great Battle."
     ],
     [
      "4",
      "Navajo code",
      "Samantha receives another toy from \"M\"."
     ],
     [
      "5",
      "AMSCO",
      "Someone kills a babbling reporter to get a sealed crate holding an artifact."
     ],
     [
      "6",
      "Homophonic substitution",
      "Peter's mission log: a strange aurora below, and an experimental weapon in hand."
     ],
     [
      "7",
      "Flag semaphore",
      "Division 9 starts phase two at its island facility."
     ],
     [
      "8",
      "Base64",
      "Some beings can cross dimensions without teleporters."
     ],
     [
      "9",
      "Purple",
      "A soldier who survives every suicide mission is handed over."
     ],
     [
      "10",
      "Ubchi",
      "\"M\" can't appear directly, only help the crew along."
     ],
     [
      "11",
      "Formulas",
      "Division 9 has revived ancient beasts for the Eastern Front."
     ],
     [
      "Scrap",
      "Takeo's letter",
      "Takeo warns his Emperor about Division 9 and Group 935's experiments."
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Media and lore",
   "title": "Trophies and achievements",
   "level": "Beginner",
   "body": "Still to be added. VERIFY"
  }
 ],
 "references": [
  "SegmentNext: Der Eisendrache Easter egg guide. https://segmentnext.com/black-ops-3-zombies-der-eisendrache-easter-egg-steps-guide-how-to-complete",
  "GGRecon: The story of Call of Duty Zombies, part 3. https://www.ggrecon.com/articles/the-story-of-call-of-duty-zombies-part-3-the-alternate-dimension",
  "The Global Gaming: The complete story of Call of Duty Zombies. https://theglobalgaming.com/call-of-duty/zombies-complete-story",
  "Game Rant: Call of Duty Zombies Easter eggs in Black Ops 2 and Black Ops 3 (2021). https://gamerant.com/call-duty-zombies-easter-eggs-black-ops-2-black-ops-3/",
  "r/CODZombies wiki: Der Eisendrache complete map breakdown, maintained by /u/voidbowaintthatbad (community guide)"
 ],
 "chapterBlurbs": {
  "Map features": "How the castle works: power, Pack-a-Punch, getting around, anti-gravity, traps and what you can build.",
  "Game features": "Perks, weapons, the Mystery Box and GobbleGum.",
  "Easter eggs and quests": "The main quest in four parts, every side Easter egg and known glitches.",
  "Media and lore": "The story, cutscenes, radios, ciphers and trivia."
 }
});

  // ======================= Gorod Krovi =======================
  A({
 "title": "Gorod Krovi",
 "features": {
  "note": "Power is a single lever in Dragon Command. Perk locations aren't fully listed here yet.",
  "pap": "Reached by riding the dragon. You need three code cylinders and three pods. VERIFY.",
  "wonder": [
   [
    "Gauntlet of Siegfried",
    "from the dragon egg quest"
   ]
  ],
  "other": [
   [
    "Groph modules",
    "defend them to unlock areas"
   ],
   [
    "Dragon network",
    "ride a dragon between three landing pads"
   ],
   [
    "Valkyrie drones",
    "flying robots that attack in later rounds"
   ]
  ]
 },
 "summary": "A ruined, alternate-history Stalingrad with dragons in the sky, mechanised Manglers and Valkyrie drones. Released with the Descent DLC.",
 "facts": {
  "Game": "Black Ops III",
  "Release": "Jul 2016, Descent DLC",
  "Crew": "Primis",
  "Wonder weapon": "Gauntlet of Siegfried",
  "Main quest": "Yes (\"Love and War\")"
 },
 "sections": [
  {
   "title": "How the map works",
   "body": "Groph modules: zombies drop code cylinders that unlock and must be defended at modules in the Tank Factory, Dragon Command and Supply Depot.[ref:1]\n\nDragon network: once the circuits are in, players can ride a dragon from Dragon Command to the Hatchery, where Pack-a-Punch is, after a fight with the dragon.\n\nGuard of Fafnir: a buildable shield made of three parts that breathes dragon fire.\n\nGauntlet of Siegfried: the wonder weapon, earned from a dragon egg hatched in the Pack-a-Punch incubator. It lets the player call down the whelp dragon.\n\nEnemies: as well as zombies, players face Manglers (armoured soldiers with arm cannons) and Valkyrie drones.",
   "level": "Beginner",
   "chapter": "Map features"
  },
  {
   "chapter": "Map features",
   "title": "Lockdowns",
   "level": "Intermediate",
   "brief": "Two lockdowns happen in the **Hatchery** (the Pack-a-Punch building). The doors seal, kills give **no points**, no power-ups drop, and there's one **permanent Max Ammo** above Pack-a-Punch.",
   "tables": [
    {
     "title": "Dragon Strike lockdown: five waves of zombies and Manglers",
     "cols": [
      "Wave",
      "Where they come from"
     ],
     "rows": [
      [
       "1",
       "Bottom floor, right of Pack-a-Punch"
      ],
      [
       "2",
       "Bottom floor, left of Pack-a-Punch"
      ],
      [
       "3",
       "Bottom floor, both sides"
      ],
      [
       "4",
       "Top floor"
      ],
      [
       "5",
       "Every level and barrier"
      ]
     ]
    }
   ],
   "lists": [
    {
     "title": "Main quest lockdown",
     "items": [
      "Three waves of **Manglers only**.",
      "Nothing spawns on the **top floor**, where you come in."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Gorod Krovi complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Melee weapons",
   "level": "Intermediate",
   "brief": "Reach a round within a time limit to unlock a melee weapon. The game timer is in the pause menu. Collect it from the **board left of the Operations Bunker entrance** from Juggernog.",
   "table": {
    "cols": [
     "Weapon",
     "Reach",
     "Within",
     "Cost"
    ],
    "rows": [
     [
      "Wrench",
      "Round 5",
      "5 minutes",
      "100"
     ],
     [
      "Malice",
      "Round 10",
      "13 minutes",
      "200"
     ],
     [
      "Slash N' Burn",
      "Round 15",
      "24 minutes",
      "300"
     ],
     [
      "Fury's Song",
      "Round 20",
      "32 minutes",
      "500"
     ]
    ]
   },
   "warn": "In co-op, anyone going down fails every timed challenge for that game.",
   "sources": [
    [
     "r/CODZombies wiki: Gorod Krovi complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Helmets and wings",
   "level": "Intermediate",
   "brief": "Three wearable rewards, all collected on the **second floor of the Department Store**. You can only wear one at a time; picking up another swaps it.",
   "table": {
    "cols": [
     "Reward",
     "How to earn it",
     "What it does"
    ],
    "rows": [
     [
      "Mangler helmet",
      "Shoot the helmets off **5 Manglers** and the arm cannons off **5 Manglers**",
      "Take 50% less damage from Manglers and deal 30% more to them"
     ],
     [
      "Valkyrie helmet",
      "Shoot the arms off **5 Valkyrie drones** and the cameras off **5**",
      "Take 50% less damage from Valkyries and deal 30% more to them"
     ],
     [
      "Dragon wings",
      "Ride the dragon from **all three** platforms and earn the **Gauntlet of Siegfried**",
      "30% less fire and explosive damage, free dragon rides, and a quick trip to Pack-a-Punch"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Gorod Krovi complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Buildables",
   "level": "Beginner",
   "body": "Only the shield is built here. Its parts swap between a few spots each game, so check every spot listed. Room names differ between guides, so treat them as approximate.",
   "buildables": [
    {
     "name": "Guard of Fafnir (Dragon Shield)",
     "what": "Blocks zombies from the front, can melee, and breathes **green fire** that kills nearby zombies. Holding it slows you down.",
     "needs": "Buy the gate at the back of the **Operations Bunker** to reach part 1.",
     "parts": [
      {
       "name": "Part 1 (Armory)",
       "spawns": [
        "Upstairs from the Operations Bunker gate, on the floor by the boxes on the right",
        "On the bunk beds",
        "On the plank by the windowsill in the **Stamin-Up** room"
       ]
      },
      {
       "name": "Part 2 (Infirmary / Department Store)",
       "spawns": [
        "On the table in the **Juggernog** room, upstairs in the Department Store",
        "On the small truck with blue barrels outside",
        "On a wooden wall in the Infirmary, first floor, in the debris area"
       ]
      },
      {
       "name": "Part 3 (Operations Bunker / Supply Depot)",
       "spawns": [
        "Shelves opposite the build table in the bunker basement (glows faint orange)",
        "Left wall after crossing the bridge from the Stamin-Up room",
        "Two floors down, on the wall left of the **Wunderfizz** machine"
       ]
      }
     ],
     "tables": [
      "**Operations Bunker** basement lab: the lit wooden desk with blueprints on a corkboard above"
     ]
    },
    {
     "name": "Upgrade: Tiamat's Maw",
     "what": "Not built, but upgraded from the shield. VERIFY: steps from one guide only.",
     "parts": [],
     "tables": [
      "Kill 30 to 40 zombies with the shield",
      "Fire it at the **purple writing** at Dragon Command (left launch pad), the Supply Depot (broken rafters by the eye-beam trap) and the Tank Factory (the giant robot's arm)",
      "Stand in **dragon fire** holding the shield for 10 to 20 seconds",
      "Swap it at the **dead dragon** by the spawn GobbleGum machine"
     ]
    }
   ],
   "sources": [
    [
     "Accelerated Ideas: Gorod Krovi Dragon Shield parts",
     "https://www.accelerated-ideas.com/news/zombies-gorod-krovi-dragon-shield-zombie-shield-part.aspx"
    ],
    [
     "Gameranx: Guard of Fafnir shield",
     "https://gameranx.com/features/id/64353/article/black-ops-3-gorod-krovi-how-to-get-the-guard-of-fafnir-shield"
    ]
   ],
   "chapter": "Map features"
  },
  {
   "chapter": "Game features",
   "title": "Perks",
   "level": "Beginner",
   "body": "Perk locations are still to be added. VERIFY"
  },
  {
   "chapter": "Game features",
   "title": "Mystery Box",
   "level": "Beginner",
   "body": "Mystery Box locations are still to be added. VERIFY"
  },
  {
   "title": "Top 10 GobbleGums",
   "level": "Intermediate",
   "body": "Classic gums last until used; Mega gums are rarer and made with Liquid Divinium. The tag shows what each pick is best for.",
   "gums": [
    {
     "name": "Perkaholic",
     "type": "Mega",
     "why": "All perks at once. The machines are spread across a big map.",
     "goal": "Any"
    },
    {
     "name": "Shopping Free",
     "type": "Mega",
     "why": "Open the city before the Groph module defences.",
     "goal": "Easter egg"
    },
    {
     "name": "Near Death Experience",
     "type": "Mega",
     "why": "Three safe rounds for the Nikolai mech fight.",
     "goal": "Easter egg"
    },
    {
     "name": "Killing Time",
     "type": "Mega",
     "why": "Freeze the Manglers and the Sentinel drones.",
     "goal": "Any"
    },
    {
     "name": "Power Vacuum",
     "type": "Mega",
     "why": "Extra drops during module defences.",
     "goal": "Easter egg"
    },
    {
     "name": "Alchemical Antithesis",
     "type": "Classic",
     "why": "Points into ammo during long defences.",
     "goal": "High rounds"
    },
    {
     "name": "Wall Power",
     "type": "Mega",
     "why": "An upgraded wall gun before the dragon ride.",
     "goal": "Casual"
    },
    {
     "name": "In Plain Sight",
     "type": "Classic",
     "why": "Reposition during module defences.",
     "goal": "Any"
    },
    {
     "name": "Stock Option",
     "type": "Classic",
     "why": "Keep shooting through big hordes in the open streets.",
     "goal": "Any"
    },
    {
     "name": "Arms Grace",
     "type": "Classic",
     "why": "Keep your weapons if you go down in co-op.",
     "goal": "Co-op"
    }
   ],
   "gumNote": "Our picks, not an official ranking. We started from a general BO3 GobbleGum tier list and adjusted it for this map's layout and quest. No source ranks gums map by map, so treat this as a starting point. VERIFY.",
   "sources": [
    [
     "SegmentNext: BO3 GobbleGum tier list",
     "https://segmentnext.com/bo3-zombies-best-gobblegums"
    ],
    [
     "Call of Duty blog: GobbleGum 101 (Dec 2015)",
     "https://www.callofduty.com/blog/archives/call-of-duty-black-ops-3-zombies--gobblegum-101"
    ],
    [
     "SegmentNext: Black Ops 3 Zombies maps overview",
     "https://segmentnext.com/call-of-duty-black-ops-3/maps"
    ]
   ],
   "chapter": "Game features"
  },
  {
   "title": "Main Easter egg",
   "level": "Intermediate",
   "body": "Turn on the power, Pack-a-Punch, the Dragon Strike lockdown and the **Gauntlet of Siegfried** come first, and the whole map needs to be open. Whenever a button on SOPHIA or the big map screen opposite her turns **green**, press it to move to the next step. Checked against the community breakdown; where guides disagree it's marked VERIFY.",
   "needs": [
    "Solo or co-op",
    "Power on, Pack-a-Punch reached and the **whole map open**",
    "The **Gauntlet of Siegfried** and its dragon",
    "The **Guard of Fafnir** shield (for a trophy, and for the boss)",
    "Plenty of ammo for the lockdown and the boss"
   ],
   "phases": [
    {
     "name": "Phase 1: Power and the dragon network",
     "steps": [
      {
       "title": "Turn on the power",
       "do": [
        "From spawn, open the **Department Store**, then the **Operations Bunker** (second floor), then the **Armory** or **Infirmary**, and take the street to **Dragon Command**.",
        "In the big building with the **star on the front**, flip the **power switch** beside the **incubator machine** and green monitors."
       ],
       "warn": "One guide puts it to the right of the inside stairs. VERIFY"
      },
      {
       "title": "Charge the three Groph modules",
       "do": [
        "Kill zombies for **code cylinders** (one at a time).",
        "Put each cylinder in the module in the area it came from.",
        "Defend the pod for about **30 seconds** until a **network circuit** drops.",
        "Do it at **Dragon Command**, the **Supply Depot** and the **Tank Factory**."
       ]
      },
      {
       "title": "Ride the dragon",
       "do": [
        "Fit all three circuits into the machine in the **Operations Bunker**.",
        "Back at **Dragon Command**, go up to the platform by the **blue console** and jump on the dragon.",
        "It flies you to the roof of the **Pack-a-Punch bunker** (the Hatchery)."
       ]
      }
     ]
    },
    {
     "name": "Phase 2: The Gauntlet of Siegfried",
     "steps": [
      {
       "title": "Get the Dragon Strike controller",
       "do": [
        "Go **upstairs** to the **corner office** of the Pack-a-Punch bunker.",
        "Use the blue device and choose **Release the Crystal**.",
        "Survive the lockdown, then take the **Dragon Strike controller** from the crystal machine."
       ]
      },
      {
       "title": "Get the dragon egg",
       "do": [
        "By the basement **sewer chute**, look **up and slightly left**: the green egg sits on broken floorboards **above the chute**.",
        "Hit it with an explosive (the Ray Gun works). Pick it up and drop into the chute."
       ]
      },
      {
       "title": "Warm and incubate the egg",
       "do": [
        "Place the egg in the **nest** at the foot of the **Dragon Command steps**, just **right of the wooden signpost** by the ruined tank.",
        "Call a **Dragon Strike** on it and wait a few rounds for it to cool.",
        "At the **challenge tombstone** in spawn (green fire), pick **Incubate an Egg** and do all three: napalm kills, multi-kills with penetrating shots, and melee kills.",
        "Put the egg in the only working **incubator** in the Pack-a-Punch bunker basement, beside the **generator under the green tarp**, and kill zombies to charge it.",
        "After a round or two, take it back to the tombstone for the **Gauntlet of Siegfried**."
       ],
       "warn": "Nest spot from one guide; another says outside the Dragon Command entrance. VERIFY"
      }
     ]
    },
    {
     "name": "Phase 3: Shield, valves and trophies",
     "steps": [
      {
       "title": "Build the Guard of Fafnir",
       "do": [
        "Collect its three parts and build it at the **Operations Bunker** workbench. See Buildables for every part spot."
       ]
      },
      {
       "title": "Solve the valve puzzle",
       "do": [
        "Kill a **Valkyrie drone** right next to the **generator on the bottom floor of the Hatchery** (beside the machine in the middle). This wakes the six valves for a few minutes.",
        "Find the valve with the **green light** and the valve with the **pipe** (the cylinder spot).",
        "Use the **valve code finder** below to set the other valves.",
        "Take the **Master Command cylinder** that drops and put it in **SOPHIA** at Dragon Command."
       ],
       "spawns": [
        {
         "item": "Valves",
         "id": "valve",
         "fixed": true,
         "note": "All three guides place these differently. Check in game. VERIFY",
         "spots": [
          "**Dragon Command**: on the **right-hand corner balcony** of the upper level",
          "**Tank Factory**: **under the platform** outside",
          "**Infirmary**: directly **below the Stamin-Up** machine, by the second-floor window",
          "**Department Store**: **opposite the Kuda** wall-buy",
          "**Supply Depot**: **under the bookcase**",
          "**Armory**: by the **bridge control**, near the bridge to the Infirmary"
         ]
        }
       ],
       "tip": "The code works because each valve number points the air at one other valve. The right code sends it from the green light through all six valves and out at the pipe. We checked every one of the 30 codes against that rule."
      },
      {
       "title": "Collect the six trophies",
       "do": [
        "Get all six, in any order. You can do these any time, but you need them all before SOPHIA's trials. Each one shows up under the big monitor **opposite SOPHIA**."
       ],
       "spawns": [
        {
         "item": "Trophies",
         "id": "trophy",
         "fixed": true,
         "spots": [
          "**Dragon Command**: shoot the trophy in the **hand of the statue** you can see from the power area",
          "**Supply Depot**: fire the **giant robot's laser** (the eye-beam trap) to blast open the floor where a trophy is hidden",
          "**Tank Factory**: hit the **pipe just outside the Double Tap room, on the right**, with the shield's **fire**. The trophy appears by **Double Tap**",
          "**Speed Cola**: call a **Dragon Strike** on the **round puddle below the Speed Cola machine**. VERIFY: one guide says Stamin-Up",
          "**Hatchery**: as you leave down the **sewer**, look up and shoot the **red glowing orb**. Back in the Hatchery, the trophy is in the **statue opposite Pack-a-Punch**. VERIFY: another guide says the toilet beside Pack-a-Punch",
          "**Operations Bunker**: punch open the **vault** (it looks like Der Eisendrache's) with the **Gauntlet**"
         ]
        }
       ]
      }
     ]
    },
    {
     "name": "Phase 4: SOPHIA's trials",
     "steps": [
      {
       "title": "Enter the password",
       "do": [
        "Put the **Master Command cylinder** in SOPHIA (turn **right** inside Dragon Command).",
        "Shoot the letter dials to spell **KRONOS**, then confirm."
       ]
      },
      {
       "title": "Finish SOPHIA's trials",
       "do": [
        "SOPHIA hands out the trials one by one. The **keycard** trial is always last.",
        "Details for each are below."
       ]
      }
     ]
    },
    {
     "name": "Phase 5: The boss",
     "steps": [
      {
       "title": "Power Nikolai's mech",
       "do": [
        "Take the **power core** from SOPHIA.",
        "At **spawn**, use the Gauntlet's **dragon** to carry it over to **Nikolai's mech** outside the map."
       ]
      },
      {
       "title": "Drop into the arena",
       "do": [
        "Go back to SOPHIA. She flies away and uncovers a **sewer gate**. Everyone stands on it to drop into the arena.",
        "The fight doesn't start until you press the **button in the middle**."
       ]
      },
      {
       "title": "Defeat the dragon, then Nikolai",
       "do": [
        "**Dragon**: you can only hurt it where it **glows orange** (you'll see hit markers). Keep moving round the **edges and trenches**, and raise your shield when it breathes fire over the middle.",
        "**Nikolai**: shoot the **orange glowing parts** of his mech and the **orange cores** that pop out. Grey metal takes no damage. His attacks get stronger as he loses health: missiles, R.A.P.S. and turrets.",
        "The ending plays and you're sent back to spawn."
       ],
       "warn": "There's no way out until you win, no power-ups drop, and there's **one Max Ammo** in the middle of each fight. Grab it when you need it."
      }
     ]
    }
   ],
   "chapter": "Easter eggs and quests",
   "sources": [
    [
     "r/CODZombies wiki: Gorod Krovi complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ],
    [
     "Valve step tables adapted by /u/chrisd848 from /u/XPLJESUS's guide",
     ""
    ]
   ]
  },
  {
   "chapter": "Easter eggs and quests",
   "title": "Valve code finder",
   "level": "Intermediate",
   "brief": "Pick where your **green light** is and where the **pipe** (cylinder) is. The finder shows the number to set on every other valve. The pipe's own number doesn't matter.",
   "valves": {
    "order": [
     "Department Store",
     "Supply Depot",
     "Armory",
     "Infirmary",
     "Tank Factory",
     "Dragon Command"
    ],
    "codes": {
     "Department Store": {
      "Supply Depot": {
       "Department Store": 1,
       "Supply Depot": "T",
       "Armory": 2,
       "Infirmary": 3,
       "Tank Factory": 1,
       "Dragon Command": 1
      },
      "Armory": {
       "Department Store": 3,
       "Supply Depot": 2,
       "Armory": "T",
       "Infirmary": 2,
       "Tank Factory": 2,
       "Dragon Command": 3
      },
      "Infirmary": {
       "Department Store": 3,
       "Supply Depot": 2,
       "Armory": 2,
       "Infirmary": "T",
       "Tank Factory": 1,
       "Dragon Command": 1
      },
      "Tank Factory": {
       "Department Store": 2,
       "Supply Depot": 2,
       "Armory": 2,
       "Infirmary": 3,
       "Tank Factory": "T",
       "Dragon Command": 1
      },
      "Dragon Command": {
       "Department Store": 2,
       "Supply Depot": 1,
       "Armory": 1,
       "Infirmary": 2,
       "Tank Factory": 3,
       "Dragon Command": "T"
      }
     },
     "Supply Depot": {
      "Department Store": {
       "Supply Depot": 1,
       "Department Store": "T",
       "Armory": 3,
       "Infirmary": 2,
       "Tank Factory": 3,
       "Dragon Command": 3
      },
      "Armory": {
       "Supply Depot": 3,
       "Department Store": 1,
       "Armory": "T",
       "Infirmary": 3,
       "Tank Factory": 1,
       "Dragon Command": 2
      },
      "Infirmary": {
       "Supply Depot": 1,
       "Department Store": 1,
       "Armory": 2,
       "Infirmary": "T",
       "Tank Factory": 1,
       "Dragon Command": 2
      },
      "Tank Factory": {
       "Supply Depot": 2,
       "Department Store": 3,
       "Armory": 3,
       "Infirmary": 2,
       "Tank Factory": "T",
       "Dragon Command": 3
      },
      "Dragon Command": {
       "Supply Depot": 2,
       "Department Store": 3,
       "Armory": 2,
       "Infirmary": 1,
       "Tank Factory": 1,
       "Dragon Command": "T"
      }
     },
     "Armory": {
      "Department Store": {
       "Armory": 1,
       "Department Store": "T",
       "Supply Depot": 3,
       "Infirmary": 3,
       "Tank Factory": 1,
       "Dragon Command": 2
      },
      "Supply Depot": {
       "Armory": 2,
       "Department Store": 3,
       "Supply Depot": "T",
       "Infirmary": 1,
       "Tank Factory": 1,
       "Dragon Command": 1
      },
      "Infirmary": {
       "Armory": 2,
       "Department Store": 2,
       "Supply Depot": 1,
       "Infirmary": "T",
       "Tank Factory": 2,
       "Dragon Command": 2
      },
      "Tank Factory": {
       "Armory": 3,
       "Department Store": 2,
       "Supply Depot": 3,
       "Infirmary": 3,
       "Tank Factory": "T",
       "Dragon Command": 1
      },
      "Dragon Command": {
       "Armory": 3,
       "Department Store": 2,
       "Supply Depot": 1,
       "Infirmary": 2,
       "Tank Factory": 2,
       "Dragon Command": "T"
      }
     },
     "Infirmary": {
      "Department Store": {
       "Infirmary": 2,
       "Department Store": "T",
       "Supply Depot": 1,
       "Armory": 1,
       "Tank Factory": 3,
       "Dragon Command": 2
      },
      "Supply Depot": {
       "Infirmary": 2,
       "Department Store": 3,
       "Supply Depot": "T",
       "Armory": 3,
       "Tank Factory": 3,
       "Dragon Command": 1
      },
      "Armory": {
       "Infirmary": 2,
       "Department Store": 1,
       "Supply Depot": 1,
       "Armory": "T",
       "Tank Factory": 2,
       "Dragon Command": 2
      },
      "Tank Factory": {
       "Infirmary": 3,
       "Department Store": 1,
       "Supply Depot": 3,
       "Armory": 1,
       "Tank Factory": "T",
       "Dragon Command": 2
      },
      "Dragon Command": {
       "Infirmary": 1,
       "Department Store": 1,
       "Supply Depot": 1,
       "Armory": 2,
       "Tank Factory": 2,
       "Dragon Command": "T"
      }
     },
     "Tank Factory": {
      "Department Store": {
       "Tank Factory": 1,
       "Department Store": "T",
       "Supply Depot": 2,
       "Armory": 3,
       "Infirmary": 3,
       "Dragon Command": 1
      },
      "Supply Depot": {
       "Tank Factory": 3,
       "Department Store": 2,
       "Supply Depot": "T",
       "Armory": 3,
       "Infirmary": 3,
       "Dragon Command": 1
      },
      "Armory": {
       "Tank Factory": 2,
       "Department Store": 1,
       "Supply Depot": 1,
       "Armory": "T",
       "Infirmary": 1,
       "Dragon Command": 3
      },
      "Infirmary": {
       "Tank Factory": 2,
       "Department Store": 3,
       "Supply Depot": 2,
       "Armory": 3,
       "Infirmary": "T",
       "Dragon Command": 3
      },
      "Dragon Command": {
       "Tank Factory": 1,
       "Department Store": 1,
       "Supply Depot": 1,
       "Armory": 1,
       "Infirmary": 1,
       "Dragon Command": "T"
      }
     },
     "Dragon Command": {
      "Department Store": {
       "Dragon Command": 3,
       "Department Store": "T",
       "Supply Depot": 2,
       "Armory": 3,
       "Infirmary": 2,
       "Tank Factory": 2
      },
      "Supply Depot": {
       "Dragon Command": 2,
       "Department Store": 2,
       "Supply Depot": "T",
       "Armory": 1,
       "Infirmary": 2,
       "Tank Factory": 3
      },
      "Armory": {
       "Dragon Command": 2,
       "Department Store": 2,
       "Supply Depot": 2,
       "Armory": "T",
       "Infirmary": 2,
       "Tank Factory": 2
      },
      "Infirmary": {
       "Dragon Command": 1,
       "Department Store": 2,
       "Supply Depot": 3,
       "Armory": 3,
       "Infirmary": "T",
       "Tank Factory": 3
      },
      "Tank Factory": {
       "Dragon Command": 3,
       "Department Store": 1,
       "Supply Depot": 3,
       "Armory": 1,
       "Infirmary": 1,
       "Tank Factory": "T"
      }
     }
    }
   },
   "table": {
    "cols": [
     "Valve",
     "Set to 1 points at",
     "Set to 2 points at",
     "Set to 3 points at"
    ],
    "rows": [
     [
      "Armory",
      "Supply Depot",
      "Tank Factory",
      "Department Store"
     ],
     [
      "Department Store",
      "Armory",
      "Infirmary",
      "Dragon Command"
     ],
     [
      "Dragon Command",
      "Supply Depot",
      "Department Store",
      "Infirmary"
     ],
     [
      "Supply Depot",
      "Dragon Command",
      "Armory",
      "Tank Factory"
     ],
     [
      "Infirmary",
      "Department Store",
      "Tank Factory",
      "Dragon Command"
     ],
     [
      "Tank Factory",
      "Infirmary",
      "Supply Depot",
      "Armory"
     ]
    ]
   },
   "sources": [
    [
     "Valve step tables adapted by /u/chrisd848 from /u/XPLJESUS's guide",
     ""
    ],
    [
     "r/CODZombies wiki: Gorod Krovi complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Easter eggs and quests",
   "title": "SOPHIA's trials",
   "level": "Advanced",
   "body": "SOPHIA sets these during the main quest, one at a time.",
   "eggs": [
    {
     "name": "Defuse the bombs",
     "steps": [
      "Six bombs appear: **Dragon Command**, **Armory**, **Supply Depot**, **Infirmary**, **Tank Factory** and **Department Store**.",
      "The big map screen flashes the areas in order. Defuse them in that order before the timer runs out, about **one minute**. VERIFY: another guide says two."
     ],
     "warn": "Wrong order or out of time downs everyone who isn't in a safe area: **spawn**, the **bottom floor of Dragon Command**, or the **Hatchery**."
    },
    {
     "name": "Escort the Valkyrie",
     "steps": [
      "A broken **Valkyrie drone** with **no arms and green eyes** appears at spawn (Belinski Square).",
      "Stay near it and it drifts slowly to the **teleporter pad** at Dragon Command."
     ]
    },
    {
     "name": "Escort the Mangler",
     "steps": [
      "A **green-eyed Mangler** appears somewhere on the map.",
      "Stay near it and it walks to the **teleporter pad** at Dragon Command. Don't shoot it."
     ],
     "warn": "Everyone has to stay with it. If it loses you, it can wander off and you fail."
    },
    {
     "name": "Protect the Groph module",
     "steps": [
      "A **Groph module** lands outside the map. You can see it from Dragon Command, or follow its beam.",
      "No zombies spawn inside the map. Shoot every zombie heading for the module.",
      "When it's done, send the Gauntlet's **dragon** to fetch the power core and bring it to SOPHIA."
     ]
    },
    {
     "name": "Catch Gersh",
     "steps": [
      "Gersh appears as a **yellow orb** somewhere on the map (never in the Hatchery).",
      "Keep finding and shooting him. After about three voice lines he gives in and goes to SOPHIA."
     ]
    },
    {
     "name": "Download the data (always last)",
     "steps": [
      "In the **Hatchery**, everyone uses the **computer on the middle floor** to start the download. VERIFY: another guide says the basement.",
      "Hold off the waves of **Manglers** until it finishes.",
      "Take the **keycard** from that computer and put it in SOPHIA."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Gorod Krovi complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Easter eggs and quests",
   "title": "Side Easter eggs",
   "level": "Beginner",
   "body": "Three songs, upgraded Monkey Bombs and more.",
   "eggs": [
    {
     "name": "\"Dead Ended\" (music)",
     "reward": "Song",
     "steps": [
      "Hold interact on the **three vodka bottles**. There's no prompt: listen for the sound."
     ],
     "spawns": [
      {
       "item": "Vodka bottles",
       "id": "vodka",
       "fixed": true,
       "spots": [
        "**Department Store**, first floor: under the **wooden chair by the couch**, near the 500-point door",
        "Outside the **Operations Bunker** and Juggernog: by the **crates at the crashed truck** in the crater",
        "**Supply Depot**: on the **shelves** just inside the first room past the 1,500-point door"
       ]
      }
     ]
    },
    {
     "name": "\"Ace of Spades\" (music)",
     "reward": "Song",
     "steps": [
      "Use all three **Ace of Spades cards**.",
      "In the boss arena you can play it again by shooting the **three speakers** on top of the telephone poles."
     ],
     "spawns": [
      {
       "item": "Ace of Spades cards",
       "id": "ace",
       "fixed": true,
       "spots": [
        "**Double Tap room**: on a **chalkboard**, bottom left",
        "**Dragon Command**: in the **room on the right**, top floor",
        "**Hatchery**: lower level, inside a **bookshelf**"
       ]
      }
     ]
    },
    {
     "name": "\"Samantha's Lullaby\" (music)",
     "reward": "Song and a Max Ammo",
     "steps": [
      "Throw a **Monkey Bomb** into the dragon's fire at all three dragon call spots: **Dragon Command**, **Tank Factory** and **Supply Depot**.",
      "At spawn, left of the challenges, use **Samantha's toy** on the grave. It vanishes.",
      "Samantha's doll is now hiding somewhere. Listen for her and shoot her **five times** before time runs out. Each time, she moves to another spot.",
      "If you run out of time, use the grave again to retry.",
      "After the fifth hit she laughs. Use the grave again for a **Max Ammo** and the song."
     ],
     "spawns": [
      {
       "item": "Samantha's doll",
       "id": "samantha",
       "note": "She uses five of these each attempt. There may be more spots.",
       "spots": [
        "**Spawn**: on the **fallen electric pole** right of the challenges",
        "**Department Store**: from the 2nd floor look up; **under the broken beam** of the 3rd-floor stairs, upside down",
        "**Mule Kick**: on a **shelf behind the barrier** to the left, where zombies come in",
        "**Infirmary**: on the **cart between the two chairs** in front of **Stamin-Up**",
        "**Train between Supply Depot and Armory**: hanging from the **ceiling** of the other carriage",
        "**Supply Depot**: left of the **dragon console**, on the ground by the rubble in the hole in the wall",
        "**Outside Supply Depot**: upside down on a **billboard light** joined to the Department Store",
        "**Dragon Command**: on the **tank's barrel**, at the bottom of the stairs by the Infirmary and Armory signs",
        "**Dragon Command**, outside: upside down **under the metal balcony** on the left",
        "**Dragon Command**, inside: **above the big hole** in the ceiling",
        "**Tank Factory**: out front, in the **sewer** where zombies spawn"
       ]
      }
     ]
    },
    {
     "name": "Dubstep Monkey Bombs",
     "reward": "Upgraded Monkey Bombs",
     "what": "Each player sees **one** candle and **one** vase that nobody else can see.",
     "steps": [
      "Light your **candle** with the shield's fire.",
      "Pick up your **vase of flowers**.",
      "Get **50 Monkey Bomb kills**. A **flask** power-up drops: grab it.",
      "Throw a Monkey Bomb at **your challenge gravestone** at spawn. A skeleton hands you the upgraded Monkeys."
     ],
     "spawns": [
      {
       "item": "Candles",
       "id": "candle",
       "note": "One per player.",
       "spots": [
        "On the **left at the top of the stairs** to the second floor. VERIFY: which building",
        "**Supply Depot**: left of the **GobbleGum machine**",
        "**Tank Factory**: on the **table left of Double Tap**",
        "The **room below the Infirmary**, near the bunk beds and the finger trap"
       ]
      },
      {
       "item": "Vases",
       "id": "vase",
       "note": "One per player.",
       "spots": [
        "**Dragon Command**, top floor: on a **table in the office** on the left",
        "**Supply Depot** (library), top floor: on a **table**",
        "**Department Store** (the first, central building), lowest floor: on a **table**",
        "**Supply Depot** (library), bottom floor"
       ]
      }
     ]
    }
   ],
   "items": [
    "An upgraded shield, Tiamat's Maw: see Buildables."
   ],
   "sources": [
    [
     "r/CODZombies wiki: Gorod Krovi complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Notable glitches",
   "level": "Advanced",
   "body": "Glitches are grouped by type: Out of bounds (outside the playable map), God spot (somewhere zombies can't reach you) and Other. Each says whether it still works, as far as we can confirm.",
   "glitches": [
    {
     "name": "Under-map pile up",
     "type": "God spot",
     "difficulty": "Advanced",
     "status": "Forum labelled working (VERIFY on the current version)",
     "what": "Under the map, zombies pile up but can't reach you.",
     "how": [
      "Steps not written up yet. The forum thread and video hold the method.",
      "VERIFY: we couldn't open the thread to confirm the steps."
     ],
     "src": [
      [
       "Se7enSins forum: Gorod Krovi under-the-map pile up",
       "https://www.se7ensins.com/forums/threads/black-ops-3-zombies-glitches-gorod-krovi-under-the-map-pile-up-glitch-bo3-zombie-glitches.1536986/"
      ]
     ]
    }
   ],
   "none": null,
   "chapter": "Easter eggs and quests"
  },
  {
   "title": "Storyline",
   "brief": "A Stalingrad from another dimension, where the war never stopped and dragons circle the ruins. Primis come looking for this world's Nikolai. The quest ends with a dragon fight and a showdown with Nikolai in a mech suit.",
   "body": "Gorod Krovi (\"city of blood\") is a version of Stalingrad from another dimension, where the battle never ended and dragons fight over the ruins. VERIFY. Primis arrive looking for answers and find the city run by machines, with an AI called SOPHIA at the centre of the main quest.[ref:1]\n\nThe quest ends with the crew facing a giant dragon and then this dimension's Nikolai, who turns on them in a mech suit. Defeating him lets Primis move on with the next piece of their plan.[ref:1]\n\nIts target is the Ultimis Nikolai. After the dragon, Primis Nikolai kills his older self, and the story reveals how both Nikolais lost their wives.[ref:2]",
   "level": "Beginner",
   "chapter": "Media and lore"
  },
  {
   "title": "Cinematics and music",
   "level": "Beginner",
   "body": "Cutscenes and the map's Easter egg song. Nothing loads or plays until you click it.",
   "media": [
    {
     "kind": "intro",
     "title": "Gorod Krovi intro"
    },
    {
     "kind": "outro",
     "title": "Gorod Krovi ending",
     "spoiler": true
    },
    {
     "kind": "song",
     "title": "Dead Ended",
     "by": "Vocals by **Clark S. Nova**. Fan upload of the full audio (channel o1p3n).",
     "how": "Use the three hidden **vodka bottles** (see Side Easter eggs).",
     "yt": "bCe51DQKqKs"
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
  "SegmentNext: Gorod Krovi Easter egg guide. https://segmentnext.com/black-ops-3-zombies-gorod-krovi-easter-egg-steps-guide",
  "Game Rant: Call of Duty Zombies Easter eggs in Black Ops 2 and Black Ops 3 (2021). https://gamerant.com/call-duty-zombies-easter-eggs-black-ops-2-black-ops-3/",
  "r/CODZombies wiki: Gorod Krovi complete map breakdown, created by /u/chrisd848 (community guide)",
  "Valve step tables adapted by /u/chrisd848 from /u/XPLJESUS's guide"
 ],
 "chapterBlurbs": {
  "Map features": "How the map works, the lockdowns, melee weapons, helmets and the shield.",
  "Game features": "Perks, the Mystery Box and GobbleGum.",
  "Easter eggs and quests": "The main quest, the valve code finder, SOPHIA's trials, side Easter eggs and glitches.",
  "Media and lore": "The story and cutscenes. Radios and ciphers are still to come."
 }
});

  // ======================= Revelations =======================
  A({
 "title": "Revelations",
 "features": {
  "note": "Two secret perks, **Deadshot Daiquiri** and **Electric Cherry**, only come from Wunderfizz.",
  "perks": [
   [
    "Quick Revive",
    "back of spawn"
   ],
   [
    "Juggernog",
    "Nacht der Untoten, top floor by the Tesla panel"
   ],
   [
    "Speed Cola",
    "Verrückt, bottom floor, in the room with the jump pad to Kino"
   ],
   [
    "Double Tap II",
    "middle of Origins, near Generator 3 and the flogger trap"
   ],
   [
    "Stamin-Up",
    "middle of Shangri-La"
   ],
   [
    "Mule Kick",
    "Mob of the Dead cafeteria"
   ],
   [
    "Widow's Wine",
    "Kino der Toten projector room"
   ],
   [
    "Wunderfizz",
    "Der Eisendrache (middle room toward Kino); Verrückt top floor by the jump pad to Mob of the Dead; Origins middle near the wall-buy; Origins mound across from the Mystery Box"
   ]
  ],
  "pap": "Turn on all four Corruption Engines, then knock the giant Apothicon down from the terminal above Nacht. The machine is in its belly. VERIFY.",
  "wonder": [
   [
    "Apothicon Servant",
    "Mystery Box, once all four Corruption Engines are on"
   ]
  ],
  "other": [
   [
    "Dragon Shield",
    "buildable shield, comes upgraded"
   ],
   [
    "Corruption Engines",
    "500 points each, open the temple and portals"
   ],
   [
    "Keeper Protector",
    "summonable ally"
   ],
   [
    "Portals",
    "link the floating map fragments"
   ],
   [
    "Engine turrets",
    "2,000 points per use, next to the Spawn, Der Eisendrache, Verrückt and Mob of the Dead engines"
   ]
  ],
  "box": [
   "Spawn: at the back, near Quick Revive",
   "Nacht: its usual spot near the trial gravestones",
   "Shangri-La: next to the jump pad from spawn",
   "Der Eisendrache: Primis statue room, by the altar",
   "Kino: on the stage, by the ICR-1 wall-buy",
   "Verrückt: top floor, by the electric trap",
   "Mob of the Dead: inside the cafeteria",
   "Origins: middle, near the flogger trap and Double Tap II",
   "Origins: top of the mound, by Wunderfizz"
  ],
  "gum": "Nine machines: middle of spawn; Nacht top floor across from the build table; Shangri-La by the stairs to Der Eisendrache; Der Eisendrache left of the pyramid; Kino in the room before the jump pad to Verrückt; Verrückt balcony opposite the Mystery Box; Mob of the Dead at the bottom of the cell-block stairs; Origins by the flogger trap switch; Origins outside the jump-pad room",
  "traps": [
   "Electric trap in Verrückt (1,000 points)",
   "Flogger trap in Origins (1,000 points)"
  ]
 },
 "trending": true,
 "summary": "The finale of the original Aether storyline: a world stitched together from earlier maps, where Primis confront the Shadow Man. Released with the Salvation DLC.",
 "facts": {
  "Game": "Black Ops III",
  "Release": "Aug 2016, Salvation DLC",
  "Crew": "Primis",
  "Wonder weapon": "Apothicon Servant",
  "Main quest": "Yes: classic and super endings"
 },
 "sections": [
  {
   "chapter": "Map features",
   "title": "Area by area",
   "level": "Beginner",
   "brief": "Revelations is a ring of floating pieces of older maps. You can't walk between them: you use **jump pads**, or the **portals** in Nacht der Untoten. Door and debris costs below are for **co-op**; in **solo** each is **250 cheaper**.",
   "table": {
    "cols": [
     "Area",
     "How you get there",
     "Barriers",
     "Wall-buys",
     "Perk",
     "Also here"
    ],
    "rows": [
     [
      "Spawn (the House)",
      "Start here",
      "6",
      "RK5, Sheiva",
      "Quick Revive",
      "GobbleGum, Mystery Box, Corruption Engine (500), turret (2,000 a use). Doors: right to Shangri-La (750), left to Origins (750)."
     ],
     [
      "Nacht der Untoten",
      "Hub: a portal from every quarter",
      "7",
      "Vesper (1,250), L-CAR 9 (750)",
      "Juggernog (2,500)",
      "GobbleGum, Mystery Box, Tesla panel, the build table, four trial gravestones, four portals, and debris into the Apothicon's mouth"
     ],
     [
      "Shangri-La",
      "From spawn or Der Eisendrache",
      "5",
      "KRM-262 (750), L-CAR 9 (750)",
      "Stamin-Up (2,000)",
      "GobbleGum, Mystery Box. Debris to Der Eisendrache (1,000)."
     ],
     [
      "Der Eisendrache: Primis statues",
      "From Shangri-La or the main castle room",
      "7",
      "Kuda (1,250), VMP (1,300)",
      "None",
      "Wunderfizz, Mystery Box, a Keeper altar, Keeper and shield part spots. Doors: castle room (1,250), Kino (1,500)."
     ],
     [
      "Der Eisendrache: castle room",
      "From Nacht, Kino or the statue room",
      "6",
      "M8A7 (1,500)",
      "None",
      "GobbleGum, Corruption Engine (500), turret (2,000 a use), anti-gravity plates, Keeper and shield part spots"
     ],
     [
      "Kino der Toten",
      "From Der Eisendrache or Verrückt",
      "11",
      "ICR-1 (1,500), Bowie Knife (3,000)",
      "Widow's Wine (4,000)",
      "GobbleGum, Mystery Box, a Keeper altar, a Keeper part spot, hat mannequins. Two doors to Der Eisendrache (1,500 each) and a jump pad to Verrückt."
     ],
     [
      "Verrückt",
      "From Mob of the Dead or Kino",
      "19",
      "HVK-30 (1,600), KN-44 (1,400)",
      "Speed Cola (3,000)",
      "GobbleGum, Wunderfizz, Mystery Box, Corruption Engine, turret, electric trap (1,000), a Keeper altar, Keeper and shield part spots. Two doors (1,500 each), jump pads to Mob of the Dead and Kino."
     ],
     [
      "Mob of the Dead",
      "From Verrückt or Origins",
      "9",
      "HVK-30 (1,600), Argus (1,100)",
      "Mule Kick (4,000)",
      "GobbleGum, Mystery Box, Corruption Engine, turret, a Keeper part spot. A door (1,500); once its engine is on, the way to Origins is free."
     ],
     [
      "Origins mound",
      "Up from Mob of the Dead",
      "6",
      "KN-44 (1,400)",
      "None",
      "Mystery Box, Wunderfizz, a Keeper part spot. Door to Origins (1,250)."
     ],
     [
      "Origins",
      "From Mob of the Dead or spawn",
      "10",
      "Vesper (1,250), KRM-262 (750), Pharo (700)",
      "Double Tap II (2,000)",
      "GobbleGum, Wunderfizz, Mystery Box, a Keeper altar, flogger trap (1,000), Keeper and shield part spots. A door (1,000), and a free jump pad back to spawn."
     ]
    ]
   },
   "more": "Barrier counts and prices are from the community breakdown, which gives slightly different wall-buy prices in different places (for example the Pharo as 700 or 750). The Weapons table uses its main list.",
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Portals and jump pads",
   "level": "Beginner",
   "brief": "Jump pads between neighbouring areas are free. Each quarter also has a portal to **Nacht der Untoten**, which opens when you take over that quarter's Corruption Engine.",
   "lists": [
    {
     "title": "Nacht's portals (facing the Tesla panel)",
     "items": [
      "**Behind you**: spawn (the House)",
      "**Left**: Mob of the Dead",
      "**In front**: Verrückt",
      "**Right**: Der Eisendrache"
     ]
    }
   ],
   "tip": "The portals line up with the real layout: stand in spawn facing its Corruption Engine and the directions above match.",
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Power and Corruption Engines",
   "level": "Beginner",
   "brief": "There's no single power switch. The map is split into **four quarters**, and taking over a quarter's **Corruption Engine** powers it.",
   "lists": [
    {
     "title": "How to take one over",
     "items": [
      "Use the **skull panel** in the middle of the engine for **500 points**.",
      "A wave of enemies comes at you in front of it. They give **no points**.",
      "Survive it and the engine is yours: that quarter gets power and its portal to Nacht opens."
     ]
    },
    {
     "title": "Where the engines are",
     "items": [
      "**Spawn**",
      "**Der Eisendrache**: right from spawn, through Shangri-La",
      "**Mob of the Dead**: left from spawn, through Origins",
      "**Verrückt**: past Origins or Der Eisendrache"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Pack-a-Punch",
   "level": "Beginner",
   "lists": [
    {
     "items": [
      "Take over all **four Corruption Engines**.",
      "On the **top floor of Nacht**, wait for the giant **Apothicon** to fly past and fire the **Tesla beacons** from the control panel. It's stuck there for the rest of the game.",
      "Walk into its **mouth**. Pack-a-Punch is caught in its stomach: shoot **only the guts** holding it and it drops, ready to use (5,000 a use).",
      "Inside there are four exits and plenty of enemies."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Anti-gravity",
   "level": "Beginner",
   "brief": "In the Der Eisendrache pyramid room, stand on each of the **four platforms** round the pyramid until it glows blue. When all four are lit, gravity switches off for a short time. A shield part only shows up while it's on.",
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Trials",
   "level": "Intermediate",
   "brief": "Each player has a **gravestone in Nacht** with **three medals**. Each medal is one random challenge; finish it to earn its reward. Rewards pop out of the ground so you can re-roll or leave them.",
   "table": {
    "cols": [
     "Medal",
     "Reward"
    ],
    "rows": [
     [
      "Left",
      "A **Max Ammo** (always)"
     ],
     [
      "Bottom",
      "A **random perk**"
     ],
     [
      "Right",
      "A Pack-a-Punched **VMP**, **Man-O-War** or **Dingo**"
     ]
    ]
   },
   "lists": [
    {
     "title": "Challenges you might get",
     "items": [
      "Kill a Margwa in 3 hits",
      "Kill 3 Margwas inside the Apothicon",
      "Kill 5 spiders with the shield / kill 15 spiders",
      "Survive 15 minutes inside the Apothicon",
      "Survive 7 rounds in Nacht der Untoten",
      "Kill 5 zombies on each island in one round",
      "Kill 5 zombies with each trap",
      "Kill 5 zombies on an island you're not on",
      "Kill 10 zombies with the turret",
      "Kill 10 zombies with beam deflection / 15 with the beam",
      "Kill a Panzersoldat without taking damage",
      "Kill one of each elemental Margwa",
      "10 headshots on Furies",
      "Build the Keeper altar",
      "Equip the Dragon Shield"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Melee weapons",
   "level": "Intermediate",
   "brief": "Reach a round within a time limit to unlock a melee weapon. The game timer is in the pause menu next to your parts and trials. Collect it from the **board right of the entrance** to the Primis statue room from Shangri-La.",
   "table": {
    "cols": [
     "Weapon",
     "Reach",
     "Within",
     "Cost"
    ],
    "rows": [
     [
      "Nunchucks",
      "Round 5",
      "5 minutes",
      "100"
     ],
     [
      "Skull Splitter",
      "Round 10",
      "12 minutes",
      "200"
     ],
     [
      "Buzz Saw",
      "Round 15",
      "22 minutes",
      "300"
     ],
     [
      "Nightbreaker",
      "Round 20",
      "32 minutes",
      "500"
     ]
    ]
   },
   "warn": "In co-op, anyone going down fails every timed challenge for that game. Finishing the Takeo's katana Easter egg replaces whatever is on the board.",
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Enemies and special rounds",
   "level": "Beginner",
   "table": {
    "cols": [
     "Enemy",
     "What it does"
    ],
    "rows": [
     [
      "Margwa",
      "Big three-headed beast. Its slam can kill you outright. Shoot each head while its mouth is open. Comes in **fire** (shoots flames), **void** (opens portals that spit skulls) and plain versions."
     ],
     [
      "Panzersoldat",
      "Armoured soldier from Der Eisendrache. Its shock shot slows and disorients you, and its flamethrower kills fast."
     ],
     [
      "Fury",
      "Small Apothicon that teleports around you before attacking."
     ],
     [
      "Enslaved Keeper",
      "Plays like a normal zombie."
     ],
     [
      "Parasite",
      "Flies, dodges bullets and spits yellow goo that covers your screen."
     ]
    ]
   },
   "body": "**Special rounds** come every 4 to 8 rounds. Only Parasites, Furies and enslaved Keepers spawn, and clearing the round gives a **Max Ammo**.",
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
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
     "What it does",
     "Where",
     "Cost"
    ],
    "rows": [
     [
      "Electric",
      "Shocks and kills zombies",
      "Verrückt",
      "1,000"
     ],
     [
      "Flogger",
      "Swings round and kills zombies",
      "Origins",
      "1,000"
     ]
    ]
   },
   "warn": "Traps hurt players too.",
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "title": "Buildables",
   "level": "Beginner",
   "body": "Two things are built here: the **Dragon Shield** at the build table in Nacht, and the **Keeper Protector** at any altar. Each part appears at **one** of its three spots each game.",
   "buildables": [
    {
     "name": "Dragon Shield",
     "what": "A shield that can **breathe fire** at zombies in front of you. It comes already upgraded, so it doesn't go in Pack-a-Punch.",
     "needs": "Turn on the **Corruption Engine** near Nacht der Untoten to reach the build table.",
     "parts": [
      {
       "name": "Head (Origins part)",
       "spawns": [
        "On the **wall to the left of the spawn jump pad** as you land in Origins",
        "On the **crate beside the KRM-262** wall-buy",
        "On a **chair by the lower right-hand door**"
       ]
      },
      {
       "name": "Heart (Verrückt part)",
       "spawns": [
        "On the **counter on the top floor**",
        "By the **green lab tubes**",
        "On a **chair just after you come up the stairs**"
       ]
      },
      {
       "name": "Mouth (Der Eisendrache part)",
       "spawns": [
        "While **zero gravity** is on, on the **wall above the Pack-a-Punch area**",
        "On the **panels in the room above the pyramid**",
        "On the **wall between the pyramid and the Primis statue room**"
       ]
      }
     ],
     "tables": [
      "**Nacht der Untoten**, the only build table: go **up the spiral stairs**, straight through into the next room; the bench is directly in front of you, near the stairs down to the gravestone room"
     ]
    },
    {
     "name": "Keeper Protector",
     "what": "An ally like Shadows of Evil's Civil Protector. Build the altar once (free), then summon it from **any** altar for **5,000 points**. Players can chip in together.",
     "parts": [
      {
       "name": "Skull (Verrückt)",
       "spawns": [
        "On a **chair on the balcony / stairs** from the Corruption Engine",
        "On a **shelf to the right of Speed Cola**",
        "On a **chair by a table upstairs**, just outside the room with a shield heart spot"
       ]
      },
      {
       "name": "Stone (Kino / Der Eisendrache)",
       "spawns": [
        "**Kino**: on a **table near the jump pad**, outside on the left",
        "**Der Eisendrache**: in the **rubble around the pyramid**",
        "**Der Eisendrache**: in the **rubble by the Primis statues**"
       ]
      },
      {
       "name": "Flag (Origins / Mob of the Dead)",
       "spawns": [
        "**Origins**: on the wall of the **dirt mound across from the generator** and Double Tap II",
        "**Origins**: near the **entrance to the excavation site**, top of the mound",
        "**Mob of the Dead**: in the **cafeteria**, on the wall near **Mule Kick**"
       ]
      }
     ],
     "tables": [
      "**Der Eisendrache**: Primis statue room",
      "**Kino der Toten**",
      "**Verrückt**",
      "**Origins**"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ],
    [
     "SegmentNext: Revelations Dragon Shield parts",
     "https://segmentnext.com/black-ops-3-zombies-revelations-shield-parts-locations-build-dragon-shield-guide"
    ],
    [
     "Accelerated Ideas: Revelations shield part locations",
     "https://www.accelerated-ideas.com/news/zombies-revelations-shield-part-locations.aspx"
    ]
   ],
   "chapter": "Map features"
  },
  {
   "chapter": "Game features",
   "title": "Perks",
   "level": "Beginner",
   "brief": "Nine perks. Electric Cherry and Deadshot Daiquiri only come from a **Wunderfizz**, which can also give any of the others.",
   "table": {
    "cols": [
     "Perk",
     "Where",
     "Cost"
    ],
    "rows": [
     [
      "Quick Revive",
      "Back of spawn, by the House",
      "500 solo / 1,500 co-op"
     ],
     [
      "Juggernog",
      "Nacht, top floor by the Tesla panel",
      "2,500"
     ],
     [
      "Double Tap II",
      "Middle of Origins, by generator 3 and the flogger trap",
      "2,000"
     ],
     [
      "Speed Cola",
      "Verrückt, bottom floor, in the jump-pad room to Kino",
      "3,000"
     ],
     [
      "Stamin-Up",
      "Middle of Shangri-La",
      "2,000"
     ],
     [
      "Mule Kick",
      "Mob of the Dead cafeteria",
      "4,000"
     ],
     [
      "Widow's Wine",
      "Kino projector room",
      "4,000"
     ],
     [
      "Electric Cherry",
      "Wunderfizz only",
      "-"
     ],
     [
      "Deadshot Daiquiri",
      "Wunderfizz only",
      "-"
     ]
    ]
   },
   "lists": [
    {
     "title": "Wunderfizz machines",
     "items": [
      "**Der Eisendrache**: the middle room toward Kino",
      "**Verrückt**: top floor of the room with the jump pad to Mob of the Dead",
      "**Origins**: middle, near the Pharo wall-buy",
      "**Origins mound**: across from the Mystery Box"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Game features",
   "title": "Weapons",
   "level": "Beginner",
   "tables": [
    {
     "title": "Wall-buys (co-op prices)",
     "cols": [
      "Weapon",
      "Cost",
      "Where"
     ],
     "rows": [
      [
       "RK5",
       "500",
       "Spawn"
      ],
      [
       "Sheiva",
       "500",
       "Spawn"
      ],
      [
       "L-CAR 9",
       "750",
       "Shangri-La, Nacht"
      ],
      [
       "KRM-262",
       "750",
       "Shangri-La, Origins"
      ],
      [
       "Pharo",
       "750",
       "Origins"
      ],
      [
       "Argus",
       "1,100",
       "Mob of the Dead"
      ],
      [
       "Kuda",
       "1,250",
       "Der Eisendrache (statues)"
      ],
      [
       "Vesper",
       "1,250",
       "Nacht, Origins"
      ],
      [
       "VMP",
       "1,300",
       "Der Eisendrache (statues)"
      ],
      [
       "KN-44",
       "1,400",
       "Verrückt, Origins mound"
      ],
      [
       "ICR-1",
       "1,500",
       "Kino"
      ],
      [
       "M8A7",
       "1,500",
       "Der Eisendrache (castle room)"
      ],
      [
       "HVK-30",
       "1,600",
       "Mob of the Dead, Verrückt"
      ],
      [
       "M1927",
       "1,750",
       "Der Eisendrache pyramid. VERIFY"
      ],
      [
       "Bowie Knife",
       "3,000",
       "Kino"
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
       "Weevil, BRM, Dingo, 48 Dredge, Gorgon, Locus, Drakon, SVG-100, Man-O-War, 205 Brecci, Haymaker 12, XM-53, Ray Gun, Banshii, Rift E9, Peacekeeper Mk2, Li'l Arnies, Thundergun, Apothicon Servant"
      ]
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Game features",
   "title": "Wonder weapons and specials",
   "level": "Intermediate",
   "table": {
    "cols": [
     "Weapon",
     "How to get it",
     "Upgraded"
    ],
    "rows": [
     [
      "Thundergun",
      "Mystery Box, one player only. 2 shots a mag, 12 spare; reloads only when empty.",
      "Zeus Cannon (Pack-a-Punch): 4 a mag, 24 spare"
     ],
     [
      "Apothicon Servant",
      "Mystery Box, one player only. 1 shot a mag, 9 spare.",
      "Shoot five 115 cubes first (below), then Pack-a-Punch it: 1 a mag, 14 spare"
     ],
     [
      "Li'l Arnies",
      "Mystery Box; carry three, refilled by Max Ammo. They pull in zombies (and Margwas and Panzers) for 10 seconds, then explode.",
      "Side quest (see Side Easter eggs)"
     ],
     [
      "Ragnarok DG-4",
      "The map's special weapon. VERIFY: how it's earned here.",
      ""
     ]
    ]
   },
   "spawns": [
    {
     "item": "Element 115 cubes (Servant upgrade)",
     "id": "servant-cube",
     "fixed": true,
     "note": "Shoot each with the Servant after all four engines are on. The cube vanishes and your screen warps; sometimes it takes a few seconds.",
     "spots": [
      "**Spawn**: directly **above spawn**, toward the Corruption Engine",
      "**Shangri-La**: almost **above the stairs**, slightly left",
      "**Mob of the Dead**: **above the Corruption Engine**, in front of the blue 115 sun",
      "**Verrückt**: **above the jump pad** from Mob of the Dead",
      "**Verrückt**: **right of the portal** at the Corruption Engine"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
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
      "**Spawn**: at the back, near Quick Revive",
      "**Nacht**: its classic spot by the trial gravestones",
      "**Shangri-La**: next to the jump pad from spawn",
      "**Der Eisendrache**: Primis statue room, by the altar",
      "**Kino**: on the stage by the ICR-1",
      "**Verrückt**: top floor by the electric trap",
      "**Mob of the Dead**: in the cafeteria",
      "**Origins**: middle, near the flogger trap and Double Tap II",
      "**Origins mound**: on top, by the Wunderfizz"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
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
     "note": "All nine work every game.",
     "spots": [
      "**Spawn**: in the middle, by the power grid",
      "**Nacht**: top floor across from the build table",
      "**Shangri-La**: by the stairs to Der Eisendrache",
      "**Der Eisendrache**: left of the pyramid and Corruption Engine",
      "**Kino**: in the room before the jump pad to Verrückt",
      "**Verrückt**: on the balcony opposite the Mystery Box",
      "**Mob of the Dead**: bottom of the stairs from the cell block",
      "**Origins**: by the flogger trap switch",
      "**Origins**: outside the jump-pad room from spawn"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
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
     "why": "Gives every perk, including the two Wunderfizz-only ones.",
     "goal": "Any"
    },
    {
     "name": "Shopping Free",
     "type": "Mega",
     "why": "Opens doors and Corruption Engines across all the fragments.",
     "goal": "Easter egg"
    },
    {
     "name": "Near Death Experience",
     "type": "Mega",
     "why": "Safety for the Shadow Man fight.",
     "goal": "Easter egg"
    },
    {
     "name": "Killing Time",
     "type": "Mega",
     "why": "Freezes Margwas and Fury zombies.",
     "goal": "Any"
    },
    {
     "name": "Power Vacuum",
     "type": "Mega",
     "why": "More drops during Corruption Engine waves.",
     "goal": "Easter egg"
    },
    {
     "name": "Alchemical Antithesis",
     "type": "Classic",
     "why": "Ammo for long high-round games on a map many runners take to round 255.",
     "goal": "High rounds"
    },
    {
     "name": "Wall Power",
     "type": "Mega",
     "why": "An upgraded wall gun before Pack-a-Punch is open.",
     "goal": "Casual"
    },
    {
     "name": "In Plain Sight",
     "type": "Classic",
     "why": "Slip away in the tight Verrückt halls.",
     "goal": "Any"
    },
    {
     "name": "Stock Option",
     "type": "Classic",
     "why": "Long sprays without reloading.",
     "goal": "Any"
    },
    {
     "name": "Anywhere But Here!",
     "type": "Classic",
     "why": "Jumps you to another fragment if you're trapped.",
     "goal": "Casual"
    }
   ],
   "gumNote": "Our picks, not an official ranking. We started from a general BO3 GobbleGum tier list and adjusted it for this map's layout and quest. No source ranks gums map by map, so treat this as a starting point. VERIFY.",
   "sources": [
    [
     "SegmentNext: BO3 GobbleGum tier list",
     "https://segmentnext.com/bo3-zombies-best-gobblegums"
    ],
    [
     "Call of Duty blog: GobbleGum 101 (Dec 2015)",
     "https://www.callofduty.com/blog/archives/call-of-duty-black-ops-3-zombies--gobblegum-101"
    ],
    [
     "SegmentNext: Revelations perk locations",
     "https://segmentnext.com/black-ops-3-zombies-revelations-juggernog-perk-locations-upgraded-purple-juggernog-guide"
    ],
    [
     "SegmentNext: Black Ops 3 Zombies maps overview",
     "https://segmentnext.com/call-of-duty-black-ops-3/maps"
    ]
   ],
   "chapter": "Game features"
  },
  {
   "title": "Main Easter egg",
   "level": "Intermediate",
   "body": "Solo works, though the second audio reel is hard on ammo alone. Checked against the r/CODZombies community wiki and SegmentNext. Spots no source confirms are marked VERIFY.[ref:1]",
   "needs": [
    "Solo or co-op (doors cost 250 less in solo, and Quick Revive is 500 instead of 1,500)",
    "Power and **Pack-a-Punch** open",
    "The **Apothicon Servant**, upgraded",
    "**Li'l Arnies** from the Mystery Box",
    "A built **Keeper Protector** altar, with 5,000 points to summon it"
   ],
   "phases": [
    {
     "name": "Phase 1: Wake the map",
     "steps": [
      {
       "title": "Shoot the four gravestones",
       "do": [
        "Shoot each character's gravestone **once**, in the order below.",
        "They turn red and a voice line plays."
       ],
       "where": [
        "All four gravestones are outside the map to the **left of spawn**.",
        "Counting them **left to right** as 1 to 4, shoot them in the order **2, 3, 1, 4**."
       ],
       "warn": "Use **one bullet per stone**. A second hit or a wrong order fails the step."
      },
      {
       "title": "Turn on the four Corruption Engines",
       "do": [
        "Pay **500 points** at each engine and survive about **30 seconds**.",
        "All four lights on the ritual table at the front of the temple turn green."
       ],
       "where": [
        "**Verrückt**: outside the asylum, through the door by the **Speed Cola** room",
        "**Spawn**: by the temple",
        "**Der Eisendrache**: in the pyramid room",
        "**Mob of the Dead**: near the ritual area"
       ]
      },
      {
       "title": "Collect the three altar pieces",
       "do": [
        "Find the **skull**, the **stone** (a purple gem) and the **flag** (some guides call it a wheel).",
        "Each piece has **three** possible spots. Check them in order.",
        "You can carry all three at once."
       ],
       "spawns": [
        {
         "item": "Skull",
         "id": "altar-piece-1",
         "spots": [
          "**Verrückt, downstairs**: on the **shelf right beside the Speed Cola machine**",
          "**Verrückt, upstairs**: on the **wheelchair beside the stairs that lead out to the Corruption Engine**",
          "**Verrückt, upstairs**: on a **chair by a table, just outside the room** where a Dragon Shield part can spawn"
         ]
        },
        {
         "item": "Stone (purple gem)",
         "id": "altar-piece-2",
         "spots": [
          "**Der Eisendrache**: in the **rubble beside the anti-gravity pyramid**, on the side facing the Corruption Engine",
          "**Der Eisendrache**: in the **rubble by the Primis statues**, close to the Mystery Box",
          "**Kino der Toten**: on the **table in the small outdoor room by the jump pad** to Verrückt"
         ]
        },
        {
         "item": "Flag",
         "id": "altar-piece-3",
         "spots": [
          "**Mob of the Dead, cafeteria**: on the **wall by the Mule Kick machine**",
          "**Origins, top of the excavation mound**: in the **small alcove on your left** as you come up the tunnel from Mob of the Dead",
          "**Origins**: on the **dirt mound across from the generator and the Double Tap II machine**"
         ]
        }
       ],
       "tip": "Start in **Verrückt**: all three skull spots are there."
      },
      {
       "title": "Build the altar and summon the Keeper",
       "do": [
        "Take all three pieces to any **unfinished altar** (a **stone tablet on the wall** marks each one). Building is free.",
        "Pay **5,000 points** to summon the **Keeper Protector**. It follows you and revives you.",
        "Once built, the Keeper can be summoned from **any** altar."
       ],
       "spawns": [
        {
         "item": "Altar spots",
         "id": "altar-build",
         "fixed": true,
         "note": "Any one works. The community breakdown lists four altars; exact positions are VERIFY.",
         "spots": [
          "**Der Eisendrache**: in the **Primis statue room**, by the Mystery Box",
          "**Kino der Toten**: **on the stage, behind the teleporter**. VERIFY",
          "**Verrückt, upstairs**: near the **jump pad to Mob of the Dead**. VERIFY",
          "**Origins**: in the muddy area **opposite the generator**. VERIFY"
         ]
        }
       ]
      },
      {
       "title": "Open Pack-a-Punch",
       "do": [
        "Turn on all four Corruption Engines first.",
        "At the **control panel on the top floor of Nacht**, wait for the giant **Apothicon** to fly past and fire the **Tesla beacons** at it.",
        "When it's stunned, walk in through its **mouth**.",
        "Pack-a-Punch is stuck in its stomach: shoot the **guts holding it** to free it."
       ]
      }
     ]
    },
    {
     "name": "Phase 2: Wonder weapon and audio reels",
     "steps": [
      {
       "title": "Get the Apothicon Servant",
       "do": [
        "Once all four engines are on, get the **Apothicon Servant** from the **Mystery Box**.",
        "Shoot the **five floating Element 115 cubes** in the sky with it, then Pack-a-Punch it. The cubes appear inside the machine as you go."
       ],
       "spawns": [
        {
         "item": "Element 115 cubes",
         "id": "servant-crystal",
         "fixed": true,
         "spots": [
          "**Spawn**: directly **above spawn**, toward the Corruption Engine",
          "**Shangri-La**: almost **above the stairs**, slightly to the **left**",
          "**Mob of the Dead**: **above the Corruption Engine**, in front of the blue 115 sun",
          "**Verrückt**: **above the jump pad** from Mob of the Dead",
          "**Verrückt**: to the **right of the portal** at the Corruption Engine"
         ]
        }
       ]
      },
      {
       "title": "Audio reel 1",
       "do": [
        "Find the **triangular stone** at the **back of a jump pad** (easiest to spot when the pad glows red).",
        "Bring the summoned **Keeper Protector** to that pad and use the pad, then use the pad **opposite** it.",
        "Zombies go for the Keeper during the ritual. **Defend it**, or the ritual restarts.",
        "Play the reel on the **player upstairs in Nacht, opposite the Tesla panel**."
       ]
      },
      {
       "title": "Audio reel 2",
       "do": [
        "Get **Li'l Arnies** from the Mystery Box.",
        "Inside the Apothicon, throw one into each of the **nine holes**.",
        "Grab the reel on the **bridge above the acid pool** inside the Apothicon."
       ]
      },
      {
       "title": "Shoot and pull the six stones",
       "do": [
        "Shoot each stone, then pull it in with the **upgraded Servant**."
       ],
       "spawns": [
        {
         "item": "Stones",
         "id": "stone",
         "fixed": true,
         "spots": [
          "**Shangri-La**: above the **Stamin-Up** machine",
          "**Verrückt**: outside the map by the **Corruption Engine**",
          "**Der Eisendrache**: at the bottom of the **wall-run wall**",
          "**Spawn**: between the floating rocks by the **church**",
          "**Origins**: in the fire next to the **Keeper terminal**",
          "**Nacht**: under the ceiling, below the **red beam**"
         ]
        }
       ]
      },
      {
       "title": "Audio reel 3",
       "do": [
        "Go **upstairs in Nacht, near Juggernog**.",
        "Shoot the **bones** twice with the upgraded Servant: the first shot reveals Sophia, the second drops the reel.",
        "Play it in **Origins**, then go back to Nacht."
       ]
      }
     ]
    },
    {
     "name": "Phase 3: Sophia, the runes and the key",
     "steps": [
      {
       "title": "Align the turrets for Sophia",
       "do": [
        "At each of the four **Corruption Engines**, turn its turret to point at the **pale, diamond-shaped rock** in the sky.",
        "You're kicked off the turret when it's lined up."
       ]
      },
      {
       "title": "Samantha's house",
       "do": [
        "Take **Sophia's teleporter** from Nacht to Kino.",
        "In **Samantha's bedroom**, pick up the **Kronium book**.",
        "Put it on the **reading desk in Kino**."
       ]
      },
      {
       "title": "Hatch four eggs and dig four runes",
       "do": [
        "Find an **Apothicon egg**. Each egg appears at one of the spots below.",
        "Carry it into the Apothicon, put it in a **pod** and kill **15 to 20 zombies**.",
        "Follow the **beeping** to the loudest spot and dig up a **Rune of Creation**.",
        "Stand in the glowing symbol in the **Kino projector area**.",
        "Repeat until all **four runes** are done."
       ],
       "spawns": [
        {
         "item": "Apothicon egg",
         "id": "egg",
         "note": "Eggs appear at one of these spots at a time.",
         "spots": [
          "**Spawn**: inside a **wooden barrel**",
          "**Shangri-La**: at the back, **by the jump pad**",
          "**Shangri-La**: **in the fire**",
          "**Der Eisendrache**: at the **feet of the Primis Dempsey statue**",
          "**Der Eisendrache**: **by the anti-gravity pyramid**",
          "**Kino der Toten**: in the **top-right theatre seats** when you face the stage",
          "**Kino der Toten**: on the **lower middle walkway near the Bowie Knife** wall-buy",
          "**Origins**: near the **fire by the old Speed Cola spot**",
          "**Origins**: at the **entrance to the Mob of the Dead tunnel**",
          "**Verrückt**: in the **green tubes** (the Zetsubou-style lab tubes)",
          "**Verrückt**: outside, on the **far side of the clearing from the waterfall**",
          "**Verrückt**: **by the jump pad to Mob of the Dead**",
          "**Origins**: **opposite the KN-44 wall-buy**. VERIFY: one guide only, may be one of the Origins spots above.",
          "**Shangri-La**: on the **temple stairs**. VERIFY: one guide only."
         ]
        }
       ]
      },
      {
       "title": "Win the Summoning Key",
       "do": [
        "Stand in the big **purple symbol** in the Kino projector area to teleport.",
        "Memorise the symbols in the **book** on the far side and enter them in order.",
        "Beat **four Margwa fights** (fire, the Crazy Place, purple, zero gravity).",
        "The **Summoning Key** drops from the sky."
       ]
      },
      {
       "title": "Throw the key at seven targets",
       "do": [
        "Throw the key at each target and catch it as it comes back."
       ],
       "spawns": [
        {
         "item": "Key targets",
         "id": "key-target",
         "fixed": true,
         "spots": [
          "**Kino**: the large **chandelier**",
          "**Nacht**: the **red barrel** between spawn and Der Eisendrache",
          "**Der Eisendrache**: the **clock** opposite the Corruption Engine",
          "**Verrückt**: the **water fountain**",
          "**Origins**: the **gravestone** on top of the dig site, behind the Mob of the Dead tunnel",
          "**Shangri-La**: the **pole with a blue ball** at the top of the stairs",
          "**Mob of the Dead**: from the base of the bridge (away from the engine), the **poster in the cell**"
         ]
        }
       ]
      },
      {
       "title": "Defeat the Shadow Man",
       "do": [
        "Go back to the room with the **book** from the key step.",
        "Place the key on a **green light** and kill zombies to charge it.",
        "Throw it at **Sophia** so she knocks the Shadow Man into the Apothicon's mouth.",
        "Interact with the **book** to finish."
       ],
       "tip": "Completing every map's Easter egg first unlocks the **super ending**. For the fight: **Near Death Experience** in co-op or **Self Medication** solo, upgraded **Li'l Arnies** to pull Margwas off you, and the **Ragnarok DG-4s** to stay safe while reading the book."
      }
     ]
    }
   ],
   "chapter": "Easter eggs and quests",
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
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
     "name": "Upgraded Li'l Arnies",
     "reward": "Stronger Arnies for everyone who has them",
     "steps": [
      "Get **Li'l Arnies** from the Mystery Box.",
      "Get **100 to 150 kills** with them, shared across the team.",
      "Have at least **one** left, then go to the **church** at spawn and throw it into the **open bell tower**.",
      "Land it and you get all three back, upgraded."
     ]
    },
    {
     "name": "Nacht radio (classic songs)",
     "reward": "A jukebox of old Zombies songs",
     "steps": [
      "In **Nacht der Untoten**, press the **four hidden buttons** in the bunker quickly until you hear a chime.",
      "Shoot the **radio** that appears next to the **weapon table** in the trials room to change songs. VERIFY: button spots."
     ]
    },
    {
     "name": "\"The Gift\" (music)",
     "reward": "Song",
     "steps": [
      "VERIFY: trigger still to be added."
     ]
    }
   ],
   "items": [
    "Free perk: zero-gravity platforming in the Der Eisendrache section.[ref:4]",
    "Weapon-share table: unlocked by writing chalk phrases in set places.[ref:4]",
    "Masks with small buffs, and melee weapons from timed challenges.[ref:4]"
   ],
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "title": "Notable glitches",
   "level": "Advanced",
   "body": "Glitches are grouped by type: Out of bounds (outside the playable map), God spot (somewhere zombies can't reach you) and Other. Each says whether it still works, as far as we can confirm.",
   "glitches": [],
   "none": "No out-of-bounds glitch or god spot is known for this map yet. Know one? Add it with a video link.",
   "chapter": "Easter eggs and quests"
  },
  {
   "title": "Storyline",
   "brief": "The finale of the Black Ops III story, set on a broken world stitched together from older Zombies maps. Doctor Monty sends Primis to defeat the Shadow Man and the Apothicons. The ending closes the Primis story arc and loops it back to the Great War.",
   "body": "Revelations takes place in a patchwork world built from pieces of earlier maps (Kino der Toten, Nacht der Untoten, Verrückt, Shangri-La, Mob of the Dead, Origins and Der Eisendrache) floating around a giant Apothicon.[ref:1][ref:2]\n\nDoctor Monty, a Keeper, has a plan to rid the universe of the Apothicons. He sends Primis to gather what they need, then releases the Shadow Man from the summoning key so the Apothicons can be destroyed.[ref:3] Three audio reels found during the quest fill in the backstory, and the AI Sophia takes on a physical form to help fight the Shadow Man.[ref:1]\n\nThe quest ends with the Shadow Man dragged into the mouth of the Apothicon. Completing the full cycle of Easter eggs across the Black Ops III maps unlocks the super ending, after which Primis carry the corrupted souls through a portal and become trapped in a loop back at the original Great War.[ref:1][ref:3]\n\nThe ending reveals that events form a cycle, as in Mob of the Dead, unless something changes. Finishing earlier main quests unlocks Takeo's katana and a better starting pistol.[ref:4]",
   "level": "Beginner",
   "chapter": "Media and lore",
   "more": "The crew teleports to the dimension where the children live: a perfect world. Samantha, Eddie and child versions of Dempsey, Takeo and Nikolai are in the House, safe because of the souls Richtofen collected. In the basement, Maxis meets the crew and, with Richtofen, destroys the teleporter. Later a voice begging for help tempts Maxis to touch the Summoning Key. That frees the Shadow Man, who traps Maxis in the key and lets the Apothicons in to tear the dimension apart."
  },
  {
   "title": "Cinematics and music",
   "level": "Beginner",
   "body": "Cutscenes and the map's Easter egg song. Nothing loads or plays until you click it.",
   "media": [
    {
     "kind": "intro",
     "title": "Revelations intro"
    },
    {
     "kind": "outro",
     "title": "Revelations ending",
     "spoiler": true
    },
    {
     "kind": "song",
     "title": "Radio of classic songs",
     "by": "Songs from earlier Zombies maps.",
     "how": "Override the Corruption Engine to reach **Nacht der Untoten**, press the **four hidden buttons** in the bunker quickly until you hear a chime, then shoot the **radio** that appears **next to the Weapon Swap table** in the Tombstone challenge room to change songs."
    }
   ],
   "chapter": "Media and lore"
  },
  {
   "chapter": "Media and lore",
   "title": "Map facts and trivia",
   "level": "Beginner",
   "table": {
    "cols": [
     "Fact",
     ""
    ],
    "rows": [
     [
      "Setting",
      "What's left of the House, floating in the Aether"
     ],
     [
      "Crew",
      "Primis: Dempsey, Nikolai, Takeo and Richtofen"
     ],
     [
      "Story order",
      "After Gorod Krovi"
     ],
     [
      "Release order",
      "22nd Zombies map"
     ],
     [
      "Internal map name",
      "zm_genesis"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Media and lore",
   "title": "Radios",
   "level": "Intermediate",
   "body": "Thirteen radios, plus three audio reels unlocked in the main quest. Each summary is our own short version.",
   "tables": [
    {
     "title": "Radios",
     "cols": [
      "#",
      "Where",
      "What you hear"
     ],
     "rows": [
      [
       "1",
       "Origins",
       "Maxis waits for the crew while Monty mocks him; the children are sent to the basement as sirens sound."
      ],
      [
       "2",
       "Der Eisendrache",
       "Robert McNamara hides in a Pentagon closet during an attack by a sick, unknown enemy."
      ],
      [
       "3",
       "Verrückt",
       "Monty recites a famous Shakespeare speech about everything fading away."
      ],
      [
       "4",
       "Verrückt",
       "Monty recites the opening of Dante's Inferno."
      ],
      [
       "5",
       "Verrückt",
       "A woman tells Peter the asylum was lost and urges him to find Richtofen and Maxis."
      ],
      [
       "6",
       "Verrückt",
       "A soldier rhymes about his failed mission as his partner turns."
      ],
      [
       "7",
       "Shangri-La",
       "A Hollywood agent on the vanished Call of the Dead film crew."
      ],
      [
       "8",
       "Shangri-La",
       "She reads the crew's research and can't believe the four heroes' story."
      ],
      [
       "9",
       "Shangri-La",
       "She ends up trapped in the jungle, dying and coming back again."
      ],
      [
       "10",
       "Shangri-La",
       "She traps Brock and Gary, the explorers, and keeps trying to survive."
      ],
      [
       "11",
       "Mob of the Dead",
       "A reporter hears the story of the Alcatraz escape plan from a night guard."
      ],
      [
       "12",
       "Mob of the Dead",
       "How the plan fell apart and the inmates turned on the Weasel."
      ],
      [
       "13",
       "Mob of the Dead",
       "The reporter, working for \"Mr. Rapt\", heads for Morg City."
      ]
     ]
    },
    {
     "title": "Audio reels",
     "cols": [
      "Reel",
      "Where",
      "What you hear"
     ],
     "rows": [
      [
       "Reel 1",
       "A jump pad (main quest)",
       "Sophia records Maxis's breakthrough, and admits she was attacked by a test subject."
      ],
      [
       "Reel 2",
       "Inside the giant Apothicon (main quest)",
       "Maxis confronts Sophia about her arm, then drugs her tea."
      ],
      [
       "Reel 3",
       "Nacht der Untoten (main quest)",
       "Maxis switches on S.O.P.H.I.A., with Sophia's mind inside the machine."
      ]
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Media and lore",
   "title": "Ciphers",
   "level": "Advanced",
   "body": "There are 14 ciphers. Only the first is summarised so far; the rest are VERIFY.",
   "table": {
    "cols": [
     "#",
     "Type",
     "What it says"
    ],
    "rows": [
     [
      "1",
      "Substitution",
      "The last surviving hero says goodbye, hoping the children will finally be safe now that they're all gone."
     ],
     [
      "2 to 14",
      "",
      "VERIFY: still to be added"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide)",
     "https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
    ]
   ]
  },
  {
   "chapter": "Media and lore",
   "title": "Trophies and achievements",
   "level": "Beginner",
   "body": "Still to be added. VERIFY"
  }
 ],
 "references": [
  "SegmentNext: Revelations Easter egg guide. https://segmentnext.com/black-ops-3-zombies-revelations-easter-egg-steps-guide",
  "Accelerated Ideas: Revelations, all Easter egg steps. https://www.accelerated-ideas.com/news/zombies-revelations-all-easter-egg-steps.aspx",
  "GGRecon: The story of Call of Duty Zombies, part 3. https://www.ggrecon.com/articles/the-story-of-call-of-duty-zombies-part-3-the-alternate-dimension",
  "Game Rant: Call of Duty Zombies Easter eggs in Black Ops 2 and Black Ops 3 (2021). https://gamerant.com/call-duty-zombies-easter-eggs-black-ops-2-black-ops-3/",
  "Gameranx: Revelations secret song guide (2016). https://gameranx.com/features/id/72984/article/black-ops-3-revelations-secret-easter-egg-song-guide/",
  "r/CODZombies wiki: Revelations complete map breakdown, created by /u/chrisd848 (community guide). https://axebps-redlib.hf.space/r/CODZombies/wiki/revelations"
 ],
 "chapterBlurbs": {
  "Map features": "Each area, the portals, power, Pack-a-Punch, trials, enemies and what you can build.",
  "Game features": "Perks, weapons, wonder weapons, the Mystery Box and GobbleGum.",
  "Easter eggs and quests": "The main quest, side Easter eggs and known glitches.",
  "Media and lore": "The story, cutscenes, radios, ciphers and trivia."
 }
});

  // ======================= The Giant =======================
  A({ title: "The Giant", features: {"note": "Six perk machines are fixed in place, but **which perk is in each machine changes every game**. A hidden sixth machine appears once all three teleporters are linked using Monkey Bombs.", "perks": [["Quick Revive, Juggernog, Speed Cola, Double Tap II, Mule Kick", "shuffled between five machines"], ["Stamin-Up or Deadshot Daiquiri", "hidden machine in the courtyard"]], "pap": "Link all three teleporters to the mainframe. The door behind the mainframe opens to Pack-a-Punch.", "wonder": [["Annihilator", "hidden revolver from a side quest, special slot. VERIFY"]], "gum": "Corner near spawn", "other": [["Teleporters", "link three to the mainframe for power-ups and Pack-a-Punch"], ["Radios", "eight to find"], ["Fly trap", "a hidden target behind the side Easter eggs. VERIFY"]]},
    trending: true,
    summary: "A remake of Der Riese, World at War's Group 935 factory, rebuilt for Black Ops III with teleporters, a secret perk machine and the Annihilator pistol.",
    facts: { Game: "Black Ops III", Release: "Nov 2015 (season pass / bonus map, VERIFY)", Crew: "Primis", "Wonder weapon": "Wunderwaffe DG-2 (returns)", "Main quest": "Short quest ending in the Annihilator (VERIFY)" },
    sections: [
      { title: "Lore", brief: "A return to Der Riese, the Group 935 factory where the teleporters and wonder weapons were born. Maxis comments on each step as the crew works through it. The quest is short and works as a prologue to the larger story.", body: "The Giant revisits Der Riese, the Group 935 factory where the company built its teleporters and wonder weapons.[ref:3] Primis arrive here from Origins. VERIFY. The map's quest points back to the Maxis and Richtofen rivalry, with Maxis's voice commenting as each step is completed.[ref:1]" },
      {"title": "Media", "level": "Beginner", "body": "Cutscenes and the map's Easter egg song. Nothing loads or plays until you click it.", "media": [{"kind": "intro", "title": "The Giant intro"}, {"kind": "outro", "title": "The Giant ending", "spoiler": true}, {"kind": "song", "title": "Beauty of Annihilation (remix)", "by": "Kevin Sherwood and Elena Siegman. VERIFY", "how": "Activate the three hidden **teddy bears**. VERIFY"}]},
      { title: "In-game mechanics", body: "Teleporters: three teleporters must be linked to the mainframe, as in the original map. With them linked, monkey bombs thrown into each teleporter in turn unlock a hidden, random perk machine behind the snow to the left of spawn.[ref:1]\n\nAnnihilator: a special pistol that doesn't take a weapon slot and recharges over time. While it is out you can't buy perks or wall weapons.[ref:1]" },
      {"title": "Top 10 GobbleGums", "level": "Intermediate", "body": "Classic gums last until used; Mega gums are rarer and made with Liquid Divinium. The tag shows what each pick is best for.", "gums": [{"name": "Perkaholic", "type": "Mega", "why": "All perks, including the hidden one.", "goal": "Any"}, {"name": "Shopping Free", "type": "Mega", "why": "Open the whole factory in a minute on a small map.", "goal": "Easter egg"}, {"name": "Near Death Experience", "type": "Mega", "why": "A safety net while you learn the training spots.", "goal": "Any"}, {"name": "Alchemical Antithesis", "type": "Classic", "why": "Endless ammo for the courtyard high rounds.", "goal": "High rounds"}, {"name": "Power Vacuum", "type": "Mega", "why": "Extra drops while you link the teleporters.", "goal": "Easter egg"}, {"name": "Killing Time", "type": "Mega", "why": "Freeze the hellhound rounds.", "goal": "Any"}, {"name": "Wall Power", "type": "Mega", "why": "A Pack-a-Punched wall gun right away.", "goal": "Casual"}, {"name": "In Plain Sight", "type": "Classic", "why": "Get out of the catwalk corners.", "goal": "Any"}, {"name": "Stock Option", "type": "Classic", "why": "No reloads while training in the courtyard.", "goal": "Any"}, {"name": "Coagulant", "type": "Classic", "why": "Longer bleedout in co-op.", "goal": "Co-op"}], "gumNote": "Our picks, not an official ranking. We started from a general BO3 GobbleGum tier list and adjusted it for this map's layout and quest. No source ranks gums map by map, so treat this as a starting point. VERIFY.", "sources": [["SegmentNext: BO3 GobbleGum tier list", "https://segmentnext.com/bo3-zombies-best-gobblegums"], ["Call of Duty blog: GobbleGum 101 (Dec 2015)", "https://www.callofduty.com/blog/archives/call-of-duty-black-ops-3-zombies--gobblegum-101"], ["SegmentNext: The Giant perks", "https://segmentnext.com/call-of-duty-black-ops-3/maps/the-giant/perks"], ["SegmentNext: Black Ops 3 Zombies maps overview", "https://segmentnext.com/call-of-duty-black-ops-3/maps"]]},
      {"title": "Buildables", "level": "Beginner", "body": "The Giant has **no buildables**. The nearest things are ten blueprint fragments (a collectible) and the hidden Annihilator revolver.", "sources": [["SegmentNext: Black Ops 3 Zombies maps overview", "https://segmentnext.com/call-of-duty-black-ops-3/maps"]]},
      {"title": "Main Easter egg", "level": "Advanced", "body": "The Giant's quest is short: it ends with the Annihilator pistol. Steps follow SegmentNext and Gfinity; spots only one source gives are marked VERIFY.[ref:1]", "needs": ["Solo or co-op", "5,000 points for Pack-a-Punch", "A Pack-a-Punched **sniper** or other long-range gun"], "phases": [{"name": "Phase 1: Power and Pack-a-Punch", "steps": [{"title": "Turn on the power", "do": ["Flip the **power switch** on the big generator in the courtyard."]}, {"title": "Link the teleporters", "do": ["Link **Teleporter A**, **Teleporter B** and the third teleporter to the **mainframe** pad.", "This opens **Pack-a-Punch**."]}, {"title": "Upgrade a long-range gun", "do": ["Pack-a-Punch a **sniper** or other long-range gun. You'll shoot the targets from far away."]}]}, {"name": "Phase 2: The Annihilator", "steps": [{"title": "Shoot the control panel", "do": ["Go to the **red-brick wall to the left of spawn**, **across from the animal testing lab** entrance.", "Aim **through the grill** and shoot the **control panel** on the pillar in the distance.", "Maxis speaks and green orbs fly off."]}, {"title": "Shoot the three hidden targets", "do": ["Shoot all three, in any order, with the upgraded gun."], "spawns": [{"item": "Hidden targets", "id": "giant-target", "fixed": true, "spots": ["**Cymbal monkey**: go **prone** in front of the **unlit furnace below Teleporter A** and shoot into its **back-right corner**", "**Teddy bear 1**: from the **power switch**, look **left**, outside the map, at the **top of the fire escape**. VERIFY: one older guide says the scaffolding beside the switch.", "**Teddy bear 2**: at **Teleporter B**, jump and look down into the **left-hand vat**; the bear is under the liquid"]}], "tip": "Turn your brightness up for the monkey; the furnace is very dark."}, {"title": "Take the Annihilator", "do": ["Go to the furnace that is now **lit** and take the **Annihilator** like a wall-buy.", "It doesn't take a weapon slot and recharges as you get kills. VERIFY: guides disagree on which furnace (downstairs right of spawn, or in the hangar)."]}]}]},
      { title: "Side Easter eggs", body: "Music Easter egg: hold the button on the three glass containers (the same places as in Der Riese), in any order, to start the song.[ref:1]\n\nSecret perk: see the teleporter trick under In-game mechanics.\n\n" + PENDING_SIDE },
      {"title": "Notable glitches", "level": "Advanced", "body": "Glitches are grouped by type: Out of bounds (outside the playable map), God spot (somewhere zombies can't reach you) and Other. Each says whether it still works, as far as we can confirm.", "glitches": [{"name": "Under-map invincibility", "type": "Out of bounds", "difficulty": "Advanced", "status": "Forum labelled working in 2015 (VERIFY on the current version)", "what": "Puts you under the map, where zombies can't hurt you.", "how": ["Steps not written up yet. The forum thread and video hold the method.", "VERIFY: we couldn't open the thread to confirm the steps."], "src": [["Se7enSins forum: The Giant under-map invincibility", "https://www.se7ensins.com/forums/threads/new-insane-black-ops-3-zombie-under-map-invincibility-glitch-the-giant.1409663/"]]}, {"name": "Solo or team pile up", "type": "God spot", "difficulty": "Advanced", "status": "Patched (forum label)", "what": "A raised spot where zombies piled up below without reaching you. Patched, so it's here as history.", "how": ["Steps not written up yet. The forum thread and video hold the method.", "VERIFY: we couldn't open the thread to confirm the steps."], "src": [["Se7enSins forum: The Giant pile up", "https://www.se7ensins.com/forums/threads/black-ops-3-zombie-glitch-solo-team-pile-up-on-map-the-giant.1407933/"]]}], "none": null}
    ],
    references: ["The Nerd Stash: Black Ops 3 The Giant Easter eggs (Dec 2015). https://thenerdstash.com/black-ops-3-the-giant-zombies", "Gameranx: Black Ops 3 Zombies Easter eggs. https://gameranx.com/features/id/31507/article/call-of-duty-black-ops-3-zombies-mode-easter-eggs", GG] });
  const GR = "Game Rant: Call of Duty Zombies Easter eggs in Black Ops 2 and Black Ops 3 (2021). https://gamerant.com/call-duty-zombies-easter-eggs-black-ops-2-black-ops-3/";
  const SNM = "SegmentNext: Black Ops 3 Zombies maps overview. https://segmentnext.com/call-of-duty-black-ops-3/maps";

  // ======================= Shadows of Evil =======================
  A({
 "title": "Shadows of Evil",
 "features": {
  "note": "Three perk machines **change district every game**. The broken bottle at each district gate shows which perk is inside.",
  "perks": [
   [
    "Quick Revive",
    "spawn"
   ],
   [
    "Stamin-Up",
    "the Junction"
   ],
   [
    "Widow's Wine",
    "underground, through the Rift"
   ],
   [
    "Mule Kick",
    "underground, up the stairs toward the Junction"
   ],
   [
    "Juggernog",
    "a district machine; red bottle at the gate"
   ],
   [
    "Speed Cola",
    "a district machine; green bottle"
   ],
   [
    "Double Tap II",
    "a district machine; orange bottle"
   ]
  ],
  "pap": "In the Rift. Opened by the four rituals and the fifth altar (Main Easter egg, steps 1 and 2).",
  "box": [
   "Waterfront: down the central stairs, through the door right of the train line",
   "Canals: left of the Ruby Rabbit entrance",
   "Footlight: to the left of the Footlight perk machine",
   "Rift: left of Widow's Wine"
  ],
  "wonder": [
   [
    "Apothicon Servant",
    "buildable"
   ],
   [
    "Apothicon Sword",
    "main quest, part 2"
   ]
  ],
  "gum": "Junction (by the KRM-262), Waterfront (by the Kuda), Footlight (by the Vesper), the Footlight train station, Canals (on the path to the Ruby Rabbit), and the Rift",
  "walls": [
   "RK5 (spawn)",
   "L-CAR 9 and KRM-262 (Junction)",
   "Kuda (Waterfront)",
   "Vesper, VMP and KN-44 (Footlight)",
   "HVK-30 and Trip Mines (path to the boxing gym)",
   "M8A7 (Canals)",
   "Bootlegger (inside the tram)"
  ],
  "traps": [
   "Chain traps at the Waterfront, Footlight and Rift entrances (1,000 points)"
  ],
  "other": [
   [
    "Beast mode fountains",
    "25 seconds as the Beast, recharges each round"
   ],
   [
    "Train",
    "500 points, loops the three districts"
   ],
   [
    "Civil Protector",
    "robot ally, see Buildables"
   ],
   [
    "Fumigator",
    "opens purple pods for parts and loot"
   ],
   [
    "Power boxes",
    "shock as the Beast to open shortcuts"
   ]
  ]
 },
 "featured": true,
 "trending": true,
 "summary": "The launch map: 1940s Morg City, four strangers bound by a deal with the Shadow Man, and Beast mode. Its main quest ends with the Shadow Man trapped in the Summoning Key.",
 "facts": {
  "Game": "Black Ops III",
  "Release": "Nov 2015 (launch)",
  "Crew": "Nero, Jessica, Jack, Floyd",
  "Wonder weapon": "Apothicon Servant; Apothicon Sword",
  "Main quest": "Yes: steps 1–6 solo, 7–8 need four players"
 },
 "sections": [
  {
   "chapter": "Map features",
   "title": "Beast mode",
   "level": "Beginner",
   "brief": "Flaming chalices around the city turn you into the Beast for a short time. You need it to turn on power, open shortcuts and do most of the main quest.",
   "lists": [
    {
     "title": "What the Beast can do",
     "items": [
      "**Shock**: zap fuse boxes to power things, stun Margwas and send zombies away",
      "**Melee**: swing your tentacles to kill zombies and smash chained boxes and doors",
      "**Grapple**: zip to hooks around the city to reach places without buying doors",
      "**Speed**: run faster than a normal sprint, without running out of stamina",
      "**Hidden**: zombies ignore you while you're the Beast"
     ]
    },
    {
     "title": "How charges work",
     "items": [
      "The Apothicon symbol on your screen is **blue** when you have a charge and **red** when you don't.",
      "You get a charge back **every round**. Solo players can store up to **three**."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Power and shortcuts",
   "level": "Beginner",
   "brief": "There's no single power switch. As the Beast, you shock fuse boxes to power each perk machine and open shortcuts that stay open for the rest of the game.",
   "lists": [
    {
     "title": "Permanent shortcuts",
     "items": [
      "**Junction / spawn**: as the Beast, look up from spawn and grapple to **Nero's loft**. Follow the path outside and shock the fuse box to open a **staircase from spawn** to the loft.",
      "**Canals**: grapple up, turn back on yourself, go through the **red room** and down the stairs, and shock the fuse box to open the staircase.",
      "**Waterfront**: grapple up, turn **right** and shock the fuse box to open the staircase.",
      "**Footlight**: grapple up, turn round, head for the **stairs past the perk machine** and shock the fuse box.",
      "**Rift to Junction**: as the Beast anywhere in the Rift, climb **all the stairs** and shock the fuse box. You can then walk between the Junction and the Rift without the teleporters."
     ]
    }
   ],
   "tip": "Every perk machine has a fuse box right beside it that you shock once, as the Beast, before you can buy the perk.",
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Fumigator",
   "level": "Beginner",
   "brief": "The Fumigator opens the pods that grow around the city. Every player can carry one, and you keep it all game.",
   "spawns": [
    {
     "item": "Fumigator: spawn",
     "id": "fumigator-spawn",
     "any": true,
     "spots": [
      "**Directly in front of** the Beast mode chalice",
      "In the **back of the truck** in front of **Quick Revive**",
      "**Behind where you spawn**, against the wall"
     ]
    },
    {
     "item": "Fumigator: Junction",
     "id": "fumigator-junction",
     "any": true,
     "spots": [
      "On a **fruit stand** near the Canals entrance",
      "On the **chair next to Stamin-Up**",
      "On a **box right next to the GobbleGum machine**",
      "On a small box **in front of the ice-cream shop**"
     ]
    },
    {
     "item": "Fumigator: Canals",
     "id": "fumigator-canals",
     "any": true,
     "spots": [
      "As you enter the Canals, turn **right**: it's **next to the Beast mode chalice**",
      "On a **crate by the GobbleGum machine** on the path to the Ruby Rabbit"
     ]
    },
    {
     "item": "Fumigator: Waterfront",
     "id": "fumigator-waterfront",
     "any": true,
     "spots": [
      "Just **through the Waterfront door**, on the floor in the rubble",
      "Toward the **middle of the district**, on the floor by the **GobbleGum machine**",
      "Up the Waterfront **Beast shortcut stairs**, on a **barrel on your left**"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Pods",
   "level": "Intermediate",
   "brief": "Pods grow in fixed spots and change colour as the rounds go up. Open one with the Fumigator for a random reward; the rarer the colour, the better the loot.",
   "table": {
    "cols": [
     "Stage",
     "What can drop"
    ],
    "rows": [
     [
      "Green / yellow (early)",
      "Grenade, a zombie, a Parasite, or a gun: Locus, Bloodhound, RK5, L-CAR 9"
     ],
     [
      "Red (mid game)",
      "Most green drops, 500 points, Kuda, Bootlegger, KRM-262, Haymaker 12"
     ],
     [
      "Purple / pink (late)",
      "Most red drops, 1,000 points, Man-O-War, Ray Gun, other power-ups, and the **Margwa tentacle** for the Apothicon Servant"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Special enemies",
   "level": "Beginner",
   "table": {
    "cols": [
     "Enemy",
     "What it does"
    ],
    "rows": [
     [
      "Keepers (Apothicons)",
      "Floating figures that attack up close like zombies. They **ignore your shield**."
     ],
     [
      "Margwa",
      "A three-headed beast. It can kill you in one slam if you're right under it, and shooting a head can spawn Parasites."
     ],
     [
      "Parasites",
      "Flying creatures that spit yellow goo for small damage."
     ],
     [
      "Meatballs",
      "Balls of flesh that drop from the sky and roll into you. They drop **Xenomatter** for the Apothicon Servant."
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "title": "Buildables",
   "level": "Beginner",
   "body": "Three things are built here, at any of the three build tables. Each part appears at **one** of its spots each game. The district perk machines are named by district because the perk inside changes every game.",
   "buildables": [
    {
     "name": "Rocket Shield",
     "what": "Blocks hits from behind while it's on your back. Hold it to melee or take cover, and press the fire button to **rocket-boost** through zombies.",
     "parts": [
      {
       "name": "Waterfront part",
       "spawns": [
        "On the **small bridge outside the room** with the **Waterfront perk machine**",
        "On the floor **opposite the Beast mode chalice**, near the Waterfront perk machine",
        "A little **further down the hall**, in the room that looks like it's **on fire**"
       ]
      },
      {
       "name": "Footlight part",
       "spawns": [
        "**Directly opposite** the **Footlight perk machine**, leaning on a **bench**",
        "**Next to** the Footlight perk machine, against the **metal fence**",
        "**Around the corner** from the perk machine toward the **Burlesque**, on a small bench"
       ]
      },
      {
       "name": "Canals part",
       "spawns": [
        "In the room with the **lion heads**, against the wall",
        "On the **bridge** between the lion-head room and the perk room",
        "**Opposite** the **Canals perk machine**, against the **window**"
       ]
      }
     ],
     "tables": [
      "**Waterfront**: **directly behind the Boxing Gym**",
      "**Footlight**: **up the stairs on the left** before the train",
      "**Canals**: **directly in front of the Ruby Rabbit**, by the stairs"
     ]
    },
    {
     "name": "Upgrade: Goddard Apparatus",
     "what": "The upgraded shield looks the same but has **four rocket boosts** instead of one and takes more hits.",
     "parts": [],
     "tables": [
      "Rocket-boost through **10 zombies at once**, **three times**",
      "When the upgraded shield breaks, do it again to get it back"
     ]
    },
    {
     "name": "Apothicon Servant",
     "what": "The map's **wonder weapon**: fires a black hole that pulls zombies in. It takes a weapon slot, holds **10 shots** and must reload after each one. Only **one player** can own it.",
     "needs": "A **Fumigator** for the tentacle.",
     "parts": [
      {
       "name": "Margwa heart",
       "spawns": [
        "Dropped by **any Margwa** you kill (a yellow heart)"
       ]
      },
      {
       "name": "Margwa tentacle",
       "spawns": [
        "A random drop from a **purple / pink pod** (late game)"
       ]
      },
      {
       "name": "Xenomatter",
       "spawns": [
        "Dropped only by **Meatballs**: a bright green cluster of eggs"
       ]
      }
     ],
     "tables": [
      "Any build table (see Rocket Shield above)"
     ]
    },
    {
     "name": "Civil Protector",
     "what": "A **robot ally** that kills zombies and **revives teammates**. In solo, being revived by it doesn't cost you Quick Revive. Finishing the main quest gives it a Pack-a-Punched KN-44.",
     "needs": "Call it in at any district for **2,000 points**.",
     "parts": [
      {
       "name": "Fuse (Footlight)",
       "spawns": [
        "On the **corner of the rail** along the walkway from the **Footlight perk machine** (Juggernog, Speed Cola or Double Tap II this game)",
        "On the **railing just before the build table**",
        "On the ground to the **left after you turn right at the build table**"
       ]
      },
      {
       "name": "Fuse (Waterfront)",
       "spawns": [
        "**Left of the first steps** up from the pod-plant door",
        "On a **railing corner**, to the **left near the wall-buy**",
        "On **boxes on the right** before the door to the tram steps"
       ]
      },
      {
       "name": "Fuse (Canals)",
       "spawns": [
        "Just **outside the 1,250-point door** from the perk room, on the **right**",
        "On a **cart by the window**, on the left",
        "On the **right of that same window**"
       ]
      }
     ],
     "tables": [
      "Put all three fuses in the **MCPD box in the Rift**, underground.",
      "Call-in spots: **Waterfront**, on the top level near the **Mystery Box**; **Canals**, on the top walkway near the **KN-44** wall-buy and the train station; **Footlight**, on the top walkway near the **HVK-30** and the doughnut cart"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ],
    [
     "SegmentNext: Shadows of Evil buildable parts",
     "https://segmentnext.com/black-ops-3-zombies-shadow-of-evil-buildable-parts-locations-guide"
    ],
    [
     "CallofDutyZombies.com forum: Shadows of Evil buildables parts",
     "https://callofdutyzombies.com/topic/185781-shadows-of-evil-buildables-parts"
    ]
   ],
   "chapter": "Map features"
  },
  {
   "chapter": "Game features",
   "title": "Perks",
   "level": "Beginner",
   "brief": "Shock the fuse box beside each machine as the Beast before you can buy it. Three of the perks move between the districts every game.",
   "table": {
    "cols": [
     "Perk",
     "Where"
    ],
    "rows": [
     [
      "Quick Revive",
      "Spawn"
     ],
     [
      "Stamin-Up",
      "The Junction"
     ],
     [
      "Widow's Wine",
      "Underground, through the Rift"
     ],
     [
      "Mule Kick",
      "Underground, up the stairs toward the Junction"
     ],
     [
      "Juggernog",
      "One of the three district machines. Look for the **red** broken bottle at a district gate."
     ],
     [
      "Speed Cola",
      "One of the three district machines: the **green** bottle"
     ],
     [
      "Double Tap II",
      "One of the three district machines: the **orange** bottle"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
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
      "Where",
      "In the box?",
      "Weapon kit?"
     ],
     "rows": [
      [
       "RK5",
       "500",
       "Spawn (Easy Street)",
       "No",
       "Yes"
      ],
      [
       "Sheiva",
       "500",
       "Spawn (Easy Street)",
       "Yes",
       "Yes"
      ],
      [
       "L-CAR 9",
       "750",
       "Junction, by the fruit stalls",
       "No",
       "Yes"
      ],
      [
       "KRM-262",
       "750",
       "Junction, by the GobbleGum machine",
       "No",
       "Yes"
      ],
      [
       "VMP",
       "1,100",
       "Footlight, by the Beast statue",
       "Yes",
       "Yes"
      ],
      [
       "Kuda",
       "1,200",
       "Waterfront, by the GobbleGum machine",
       "No",
       "Yes"
      ],
      [
       "Vesper",
       "1,200",
       "Footlight, by the GobbleGum machine",
       "No",
       "Yes"
      ],
      [
       "KN-44",
       "1,400",
       "Middle of Footlight",
       "Yes",
       "Yes"
      ],
      [
       "M8A7",
       "1,400",
       "Canals, near the burlesque entrance / Waterfront bridge VERIFY",
       "Yes",
       "Yes"
      ],
      [
       "HVK-30",
       "1,600",
       "Floor before the Waterfront Boxing Gym",
       "Yes",
       "Yes"
      ],
      [
       "Bootlegger",
       "1,600",
       "Inside the tram",
       "Yes",
       "No"
      ],
      [
       "Trip Mines",
       "1,000",
       "Path to the Waterfront Boxing Gym",
       "Yes",
       "Yes"
      ]
     ]
    },
    {
     "title": "Mystery Box only",
     "cols": [
      "Weapon",
      "Weapon kit?"
     ],
     "rows": [
      [
       "ICR-1",
       "Yes"
      ],
      [
       "Argus",
       "Yes"
      ],
      [
       "Pharo",
       "Yes"
      ],
      [
       "Weevil",
       "Yes"
      ],
      [
       "BRM",
       "Yes"
      ],
      [
       "Dingo",
       "Yes"
      ],
      [
       "48 Dredge",
       "Yes"
      ],
      [
       "Gorgon",
       "Yes"
      ],
      [
       "Locus",
       "Yes"
      ],
      [
       "Drakon",
       "Yes"
      ],
      [
       "SVG-100",
       "Yes"
      ],
      [
       "Man-O-War",
       "Yes"
      ],
      [
       "205 Brecci",
       "Yes"
      ],
      [
       "Haymaker 12",
       "Yes"
      ],
      [
       "XM-53",
       "Yes"
      ],
      [
       "Ray Gun",
       "No"
      ],
      [
       "Li'l Arnies",
       "No"
      ]
     ]
    },
    {
     "title": "Special weapons",
     "cols": [
      "Weapon",
      "Upgraded",
      "How to get it"
     ],
     "rows": [
      [
       "Apothicon Servant",
       "None",
       "Build it (see Buildables)"
      ],
      [
       "Apothicon Sword",
       "Keeper's Redeemer",
       "Main quest, parts 2"
      ],
      [
       "Li'l Arnies",
       "Upgraded Li'l Arnies",
       "Mystery Box, then a side quest"
      ]
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Game features",
   "title": "Power-ups",
   "level": "Beginner",
   "table": {
    "cols": [
     "Power-up",
     "What it does",
     "Lasts"
    ],
    "rows": [
     [
      "Insta-Kill",
      "Every normal zombie dies in one hit",
      "30 seconds"
     ],
     [
      "Max Ammo",
      "Refills every player's reserve ammo",
      "Instant"
     ],
     [
      "Double Points",
      "Double points for every player",
      "30 seconds"
     ],
     [
      "Nuke",
      "Kills every normal zombie on the map, plus 400 points",
      "Instant"
     ],
     [
      "Carpenter",
      "Rebuilds every barrier, plus 200 points",
      "Instant"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
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
      "**Waterfront**: through the door to the **right of the train line**",
      "**Waterfront**: **down the stairs in the middle** of the district",
      "**Canals**: **opposite the Rift door**",
      "**Canals**: on the **left of the Ruby Rabbit entrance**",
      "**Footlight**: to the **left of** the **Footlight perk machine**",
      "**Footlight**: a second spot. VERIFY: our sources don't name it.",
      "**Rift**: to the **left of the Widow's Wine** machine"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Game features",
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
      "Chain trap",
      "Waterfront district entrance",
      "1,000"
     ],
     [
      "Chain trap",
      "Footlight district entrance",
      "1,000"
     ],
     [
      "Chain trap",
      "Rift entrance, underground",
      "1,000"
     ]
    ]
   },
   "body": "Chain traps slice up any zombie that runs into them.",
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Game features",
   "title": "Train",
   "level": "Beginner",
   "brief": "The tram loops the three districts. It costs **500 points** to ride or call, and you can change where it goes.",
   "lists": [
    {
     "items": [
      "It starts in one of the three districts. The **maps** at each station show where it is.",
      "After each trip it needs a few seconds to cool down.",
      "Zombies already on board ride with you until you kill them, and **Margwas can teleport on** before it leaves.",
      "The **Bootlegger** wall-buy is inside the tram."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
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
     "why": "Every perk at once, so you skip hunting the three rotating machines.",
     "goal": "Any"
    },
    {
     "name": "Shopping Free",
     "type": "Mega",
     "why": "Free doors for a minute. Morg City has a lot of expensive doors and the train.",
     "goal": "Easter egg"
    },
    {
     "name": "Near Death Experience",
     "type": "Mega",
     "why": "Revive yourself and keep perks for three rounds. Safety net for the Shadow Man fight.",
     "goal": "Easter egg"
    },
    {
     "name": "Alchemical Antithesis",
     "type": "Classic",
     "why": "Points turn into ammo, which helps when the Apothicon Servant runs dry.",
     "goal": "High rounds"
    },
    {
     "name": "Power Vacuum",
     "type": "Mega",
     "why": "More power-up drops for four rounds. Handy for Max Ammos during the flag step.",
     "goal": "Easter egg"
    },
    {
     "name": "Killing Time",
     "type": "Mega",
     "why": "Freezes everything for 20 seconds. Buys time when Margwas corner you.",
     "goal": "Any"
    },
    {
     "name": "In Plain Sight",
     "type": "Classic",
     "why": "Zombies ignore you for 10 seconds. Escape the tight ritual rooms.",
     "goal": "Easter egg"
    },
    {
     "name": "Wall Power",
     "type": "Mega",
     "why": "Your next wall-buy comes Pack-a-Punched. Pair it with the Bootlegger or KN-44.",
     "goal": "Casual"
    },
    {
     "name": "Stock Option",
     "type": "Classic",
     "why": "Fires from your reserve ammo, so you don't reload mid-wave.",
     "goal": "Any"
    },
    {
     "name": "Anywhere But Here!",
     "type": "Classic",
     "why": "Teleports you somewhere random. Gets you out of dead-end alleys.",
     "goal": "Casual"
    }
   ],
   "gumNote": "Our picks, not an official ranking. We started from a general BO3 GobbleGum tier list and adjusted it for this map's layout and quest. No source ranks gums map by map, so treat this as a starting point. VERIFY.",
   "sources": [
    [
     "SegmentNext: BO3 GobbleGum tier list",
     "https://segmentnext.com/bo3-zombies-best-gobblegums"
    ],
    [
     "Call of Duty blog: GobbleGum 101 (Dec 2015)",
     "https://www.callofduty.com/blog/archives/call-of-duty-black-ops-3-zombies--gobblegum-101"
    ],
    [
     "SegmentNext: Shadows of Evil perk locations",
     "https://segmentnext.com/black-ops-3-zombies-shadows-of-evil-perks-locations-guide-how-to-activate"
    ],
    [
     "r/CODZombies wiki: Shadows of Evil breakdown (mirror)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ],
   "chapter": "Game features"
  },
  {
   "title": "Main Easter egg",
   "level": "Intermediate",
   "body": "Parts 1 to 4 work solo and end with the Shadow Man trapped in the Summoning Key. Part 5 needs exactly four players. Checked against the r/CODZombies community guide, SegmentNext and GameRant; gaps are marked VERIFY.[ref:1]",
   "needs": [
    "About an hour for a first attempt",
    "Solo or co-op for parts 1 to 4; **exactly four players** for part 5 (and the in-game completion screen)",
    "Know where the **Beast mode chalices** are (the first is at spawn)",
    "A Pack-a-Punched weapon before the boss fight"
   ],
   "phases": [
    {
     "name": "Part 1: The Beginning of the End",
     "steps": [
      {
       "title": "Get the Summoning Key",
       "do": [
        "Use the **Beast mode chalice** at spawn.",
        "As the Beast, **melee the box** at spawn to break it open.",
        "Pick up the **Summoning Key**."
       ]
      },
      {
       "title": "Collect the four ritual items",
       "do": [
        "Each item is in a fixed spot and needs **Beast mode**.",
        "Picking one up spawns **two Keepers**: kill them."
       ],
       "spawns": [
        {
         "item": "Ritual items",
         "id": "ritual-item",
         "fixed": true,
         "spots": [
          "**Lawyer's Pen** (Junction): as the Beast, shock the **fuse box on the crane outside spawn**. The crane drops a crate with the pen.",
          "**Detective's Badge** (Canals): as the Beast, shock the fuse box you can see **through the glass wall by the Ruby Rabbit stairs**, then break the **box to the left of those stairs**, facing back toward Junction.",
          "**Championship Belt** (Waterfront): in the **middle of the district, before the Boxing Gym stairs**, grapple up to the **small grated ledge** and melee the box. The belt drops inside the gym.",
          "**Producer's Toupee** (Footlight): grapple up, cross the **ramp opposite the **Footlight perk machine** (Juggernog, Speed Cola or Double Tap II this game)**, jump the ledge and knock the box off. The toupee lands on the floor below."
         ]
        }
       ]
      },
      {
       "title": "Do the four rituals",
       "do": [
        "Take each item to its ritual room and place it on the **altar**.",
        "Survive the wave (about **30 seconds**).",
        "Each ritual gives a **Gateworm**. A **Margwa** spawns after every second ritual."
       ],
       "spawns": [
        {
         "item": "Ritual rooms",
         "id": "ritual-room",
         "fixed": true,
         "spots": [
          "**Nero, Junction**: **Nero's Landing**, the house above the spawn alley. As the Beast, grapple up **above the launderette** and shock the fuse box to open it from the spawn room.",
          "**Jackie, Canals**: **upstairs in the Ruby Rabbit**. As the Beast, shock the fuse box by the **front door** to open the stairs.",
          "**Floyd, Waterfront**: inside the **Boxing Gym**. As the Beast, melee its **front door**.",
          "**Jessica, Footlight**: inside the **Black Lace Burlesque**, the tall building on the main square. As the Beast, grapple above its entrance and shock the fuse box **behind the sign**."
         ]
        }
       ]
      },
      {
       "title": "Open Pack-a-Punch",
       "do": [
        "As the Beast, break any of the **three rift doors** and step through the portal behind it.",
        "In the Rift, walk up to the **wall of symbols**. It vanishes if all four rituals are done.",
        "Put a **Gateworm** in each of the four **chalices**. After the first two, a wall appears so you can **wall-run** to the other two.",
        "Use the **ritual table** in the middle for the fifth ritual.",
        "**Pack-a-Punch** is across the wall-run. A **Margwa** spawns when the ritual ends."
       ],
       "spawns": [
        {
         "item": "Rift doors",
         "id": "rift-door",
         "note": "Any one works; each leads to the Subway.",
         "fixed": true,
         "spots": [
          "**Footlight** rift door",
          "**Waterfront** rift door",
          "**Canals** rift door"
         ]
        }
       ],
       "tip": "The Shadow Man then betrays you, the sky turns red and a giant Apothicon appears overhead."
      }
     ]
    },
    {
     "name": "Part 2: The Sword in the Stone",
     "steps": [
      {
       "title": "Read the three red symbols",
       "do": [
        "Ride the **train** round all three districts.",
        "Look out of the windows for **three red symbols**. They are different every game.",
        "Write them down in the order you see them."
       ],
       "where": [
        "Leaving **Waterfront**: on the **right**, shortly after the station",
        "Leaving **Footlight**: on the **left**, just after a **sharp corner**",
        "Leaving **Canals**: on the **left**, through the **round window**",
        "They're only in view for a moment. Ride the loop again if you miss one."
       ]
      },
      {
       "title": "Enter the symbols",
       "do": [
        "Go to the Rift and become the Beast.",
        "At the **archway**, shock **only your three symbols**.",
        "The wall opens on a shrine with **four swords** and **four Arch-Ovums** (eggs). Take one."
       ],
       "warn": "Get it wrong and you try again next round. The symbols stay the same."
      },
      {
       "title": "Hatch the egg at the four statues",
       "do": [
        "As the Beast, smash the **chained box** at each statue to reveal it.",
        "Put the egg in the statue and kill zombies nearby until the egg **shines white**.",
        "Take it to the next statue. When all four are done, put it back in the shrine for the **Apothicon Sword**."
       ],
       "spawns": [
        {
         "item": "Apothicon statues",
         "id": "statue",
         "fixed": true,
         "spots": [
          "**Rift**: **directly opposite** the sword shrine",
          "**Canals**: **behind the entrance** to the Ruby Rabbit",
          "**Waterfront**: in the **fiery-looking room** past the **Waterfront perk machine**",
          "**Footlight**: as you walk in, **right next to the stairs shortcut**, just **under the balcony**"
         ]
        }
       ]
      },
      {
       "title": "Upgrade the sword",
       "do": [
        "Take a **corrupted Arch-Ovum** from your character's ritual room: Nero at Nero's Landing, Jessica at the Burlesque, Jack at the Ruby Rabbit, Floyd at the Boxing Gym.",
        "Place it in each **red ritual ring**. Each one spawns **one or two Margwas**; kill them to finish that ring.",
        "When all four are done the egg turns **orange**. Take it back to your ritual table for the **Keeper's Redeemer** sword."
       ],
       "spawns": [
        {
         "item": "Red rings",
         "id": "red-ring",
         "fixed": true,
         "spots": [
          "**Junction**: on the ground **in front of the spawn-room door** to Nero's Landing",
          "**Waterfront**: right **outside the Boxing Gym entrance**",
          "**Canals**: right **outside the Ruby Rabbit entrance**",
          "**Footlight**: right **outside the Black Lace Burlesque entrance**"
         ]
        }
       ],
       "tip": "A **book** now appears in Nero's room. You need it next.",
       "warn": "Go down during a ring and you redo that ring in a later round."
      }
     ]
    },
    {
     "name": "Part 3: Capture the Flag",
     "steps": [
      {
       "title": "Summon and charge the flag",
       "do": [
        "In **Nero's Landing**, use the **book**. It starts to float.",
        "Take the **flag** from the **middle of the Rift**. This starts a round with only **Meatballs and Parasites**.",
        "Plant the flag on **two lightning-like spots** and guard it. Enemies go for the flag, not you.",
        "The **Shadow Man** appears around the flag to drain it: shoot him **once** to send him away.",
        "Take the charged flag to a character's **ritual table** to bring a **Keeper** into the world.",
        "Repeat until all **four Keepers** are summoned (eight spots in all)."
       ],
       "where": [
        "There are **two spots** in each of the **Junction**, **Waterfront**, **Footlight** and **Canals**. VERIFY: no source gives exact positions yet."
       ],
       "tip": "Have the **Civil Protector**, **Li'l Arnies** and the **Apothicon Servant** ready. The **Fear in the Headlights** GobbleGum makes this much easier, especially solo."
      }
     ]
    },
    {
     "name": "Part 4: Apocalypse Averted (boss fight)",
     "steps": [
      {
       "title": "Defeat the Shadow Man",
       "do": [
        "In the **Pack-a-Punch** room, a Keeper sits on each **chalice**. Use all four quickly to start the fight. You're locked in until it ends.",
        "The Shadow Man can't hurt you, but **Margwas, Parasites, Meatballs, Keepers and zombies** all attack at once. Train them rather than fighting each one.",
        "Use the four chalices again to **drop his shield**.",
        "Shoot him as he teleports until he's **directly over the Summoning Key altar**, then use the altar to **trap him in the key**."
       ],
       "tip": "**Li'l Arnies** or **Fear in the Headlights** help you focus on shooting him.",
       "warn": "Miss the chance and he spawns another Margwa; break the shield and try again."
      }
     ]
    },
    {
     "name": "Part 5: Finish Him (four players only)",
     "steps": [
      {
       "title": "Face the giant worm",
       "do": [
        "After the Shadow Man is trapped, a **huge Gateworm** appears **over the altar**.",
        "Purple-eyed Margwas spawn; killing them makes a **purple fountain** in the middle of the room that gives **unlimited Beast mode**. VERIFY"
       ],
       "warn": "Purple-eyed Margwas can still hurt you in Beast mode.",
       "coop": "Needs exactly four players."
      },
      {
       "title": "Shock the worm",
       "do": [
        "Three players stand at the **Waterfront**, **Footlight** and **Canals** train stations; one stays at the **Junction**.",
        "The Junction player calls the **train** across the Junction to hit the worm.",
        "Each station player, as the Beast, shocks the **small white box in the corner by the station stairs**.",
        "The Junction player, as the Beast, shocks the **three keepers** around the worm.",
        "VERIFY: the community guide we checked hasn't finished this part, so these steps come from other guides."
       ],
       "coop": "Needs exactly four players, one per station."
      }
     ]
    }
   ],
   "chapter": "Easter eggs and quests",
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Easter eggs and quests",
   "title": "Side Easter eggs",
   "level": "Beginner",
   "body": "Smaller secrets, from free points to a sepia filter.",
   "eggs": [
    {
     "name": "500 points (a nod to Mob of the Dead)",
     "reward": "500 points",
     "steps": [
      "Open the first door from Easy Street into the Junction and go into the **launderette**.",
      "Turn **right**: there's a **note** among the shirts hanging at the back.",
      "Hit it with a grenade cooked for about **four ticks**, or a **Widow's Wine** grenade.",
      "It drops onto the **small box to the right of the window**. Pick it up."
     ]
    },
    {
     "name": "Free Mega GobbleGum",
     "reward": "A free Mega gum",
     "steps": [
      "Buy **Widow's Wine**.",
      "In the Canals, go into the **Ladies' Secrets** building and find the room with **four lion statues**.",
      "Throw a Widow's Wine grenade into **each lion's mouth**. A **plain white gumball** appears in one: take it.",
      "Put it in the **window of the sweet shop next to Stamin-Up**.",
      "Play one full round, then collect your Mega gum from the window."
     ]
    },
    {
     "name": "Noire mode",
     "reward": "A sepia filter",
     "what": "Turns the screen a faint sepia for the rest of the game. It can't be turned off.",
     "steps": [
      "Go upstairs in the **Waterfront Boxing Gym**.",
      "Find the row of **portraits** on the wall that look out over the ring.",
      "Crouch in front of the portrait and **hold interact**."
     ]
    },
    {
     "name": "Upgraded Trip Mines",
     "reward": "Doughnut explosions",
     "steps": [
      "Buy **Trip Mines** from the outside wall of the **Boxing Gym**.",
      "Kill a zombie with a trip mine at each of the three **Holly's Cream Cakes** carts.",
      "A sound plays when it's done."
     ],
     "spawns": [
      {
       "item": "Cream cake carts",
       "id": "cake-cart",
       "fixed": true,
       "spots": [
        "**Canals**: on the route to the **Ruby Rabbit** door",
        "**Junction**: **opposite Stamin-Up**",
        "**Footlight**: **opposite** the **Footlight perk machine**"
       ]
      }
     ]
    },
    {
     "name": "\"Snakeskin Boots\" (music)",
     "reward": "Song",
     "what": "Plays the song from the map's reveal trailer. Works once per game.",
     "steps": [
      "Use all three **wooden clocks**."
     ],
     "spawns": [
      {
       "item": "Wooden clocks",
       "id": "clock",
       "fixed": true,
       "spots": [
        "**Canals**: in the **Ruby Rabbit**, on a table to the **left of the entrance**",
        "**Footlight**: in the **train station**, on a bench **between a barrier and the GobbleGum machine**",
        "**Waterfront**: in the **Boxing Gym**, on a table on the **top level**"
       ]
      }
     ]
    },
    {
     "name": "\"Cold Hard Cash\" (music)",
     "reward": "Song",
     "what": "A slow, jazzy song. Works once per game.",
     "steps": [
      "Collect the **three microphone parts**.",
      "Take them to the **Burlesque** in Footlight and **hold interact**."
     ],
     "spawns": [
      {
       "item": "Microphone parts",
       "id": "mic",
       "fixed": true,
       "spots": [
        "**Mic stand**: in **Nero's lair**, against the wall on the **right**, in the middle of the room",
        "**Mic cable**: in the Canals, on the **slab under the stairs** by the \"Only the cursed survive\" sign",
        "**Microphone**: in the **Rift**, **next to a bench** near the Waterfront rift portal"
       ]
      }
     ]
    },
    {
     "name": "Margwa mask",
     "reward": "A Margwa head for every player",
     "what": "Changes how you look, and stops a Margwa's slam from killing you or leaving you on a red screen.",
     "steps": [
      "From the train, shoot all **nine Margwa hearts** hidden around the city.",
      "Four **sparkles** appear around the map. Each player takes one."
     ],
     "warn": "Heart positions still to be added. VERIFY"
    },
    {
     "name": "Jump scare",
     "steps": [
      "Take any **sniper rifle** to the front of the **Boxing Gym** on the docks.",
      "Aim through the scope at the right spot and the scare appears. VERIFY: exact spot still to be added."
     ]
    },
    {
     "name": "Upgraded Li'l Arnies",
     "reward": "Stronger Arnies",
     "what": "Upgraded Arnies glow purple, last longer, have more health and kill faster.",
     "steps": [
      "Get **Li'l Arnies** from the Mystery Box and kill **100 zombies** with them.",
      "Throw an Arnie at each of three items (below).",
      "Finish by throwing one at the **ritual table in the Burlesque** for a short animation."
     ],
     "spawns": [
      {
       "item": "Arnie targets",
       "id": "arnie",
       "fixed": true,
       "spots": [
        "**Top hat**: in **Nero's lair**, on the **left** of the room",
        "**Cane**: in the **Ruby Rabbit**, on the **left of the chamber**, bottom floor",
        "**Bow tie**: on a **shelf in the back room** of the Boxing Gym"
       ]
      }
     ]
    }
   ],
   "advanced": "The round skip (see In-game mechanics) also counts as a side Easter egg. It trades early-round safety for a fast start.",
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "title": "Notable glitches",
   "level": "Advanced",
   "none": null,
   "body": "Glitches change between game versions. Each one says whether it still works, as far as we can confirm.",
   "glitches": [
    {
     "name": "Human grapple",
     "type": "Other",
     "difficulty": "Intermediate",
     "status": "Reported working in 2023 (VERIFY on the current version)",
     "what": "Lets you use the **Beast mode grapple** while you're back in **human form**, so you can zip to grapple points with your guns out.",
     "why": "The grapple belongs to Beast mode, so being able to use it as a human means the game hasn't fully switched you back. We haven't found a written source for the exact cause yet. VERIFY.",
     "how": [
      "Steps still being confirmed. The video below shows the method.",
      "VERIFY: we couldn't find a written guide yet."
     ],
     "src": [
      [
       "YaBoyBadger on YouTube: How to human grapple on Shadows of Evil (Feb 2023)",
       "https://www.youtube.com/watch?v=EBCmfnTgh-g"
      ]
     ]
    },
    {
     "name": "Teleport out of map",
     "type": "Out of bounds",
     "difficulty": "Advanced",
     "status": "Forum labelled working in 2016 (VERIFY on the current version)",
     "what": "Uses a teleport to put you outside the playable map.",
     "how": [
      "Steps not written up yet. The forum thread and video hold the method.",
      "VERIFY: we couldn't open the thread to confirm the steps."
     ],
     "src": [
      [
       "Se7enSins forum: Shadows of Evil teleport out of map",
       "https://www.se7ensins.com/forums/threads/new-black-ops-3-zombie-glitches-shadows-of-evil-teleport-out-of-map-glitch-method.1421445/"
      ]
     ]
    },
    {
     "name": "Out-of-map pile up",
     "type": "God spot",
     "difficulty": "Advanced",
     "status": "Forum labelled working in 2016 (VERIFY on the current version)",
     "what": "A spot outside the map where zombies pile up below you but can't reach you.",
     "how": [
      "Steps not written up yet. The forum thread and video hold the method.",
      "VERIFY: we couldn't open the thread to confirm the steps."
     ],
     "src": [
      [
       "Se7enSins forum: Shadows of Evil out-of-map pile up",
       "https://www.se7ensins.com/forums/threads/black-ops-3-zombie-glitches-out-of-map-pile-up-on-shadows-of-evil.1445325/"
      ]
     ]
    }
   ],
   "chapter": "Easter eggs and quests"
  },
  {
   "title": "Storyline",
   "brief": "Four criminals in a 1940s noir city are tricked into rituals by the Shadow Man. A Keeper helps them trap him inside the Summoning Key. In the last moments, Richtofen steps through a portal and steals the key, pulling Morg City into the main story.",
   "level": "Beginner",
   "body": "Shadows of Evil is set in Morg City, a fictional 1940s noir city. It follows four strangers, each with blood on their hands: Nero Blackstone, a magician; Jessica Rose, a burlesque dancer; Jack Vincent, a corrupt detective; and Floyd Campbell, a boxer. A figure calling himself Mr. Rapt, really the Shadow Man, lures them to a club and makes them perform rituals.[ref:2]\n\nThe map introduces the Apothicons, the alien beings behind Element 115 and the source of the whole Zombies outbreak. For most of the map it seems separate from the main story.[ref:3]\n\nIn the ending, the four help a Keeper trap the Shadow Man inside the Summoning Key. Then a portal opens and Richtofen steps through to steal the key, tying Morg City into the Primis story.[ref:2][ref:3]",
   "chapter": "Media and lore"
  },
  {
   "title": "Cinematics and music",
   "level": "Beginner",
   "body": "Cutscenes and the map's Easter egg song. Nothing loads or plays until you click it.",
   "media": [
    {
     "kind": "intro",
     "title": "Shadows of Evil intro",
     "yt": "-nusN4tZYoo",
     "by": "Official prologue, Call of Duty channel"
    },
    {
     "kind": "outro",
     "title": "Shadows of Evil ending",
     "spoiler": true
    },
    {
     "kind": "song",
     "title": "Snakeskin Boots",
     "by": "Kevin Sherwood. VERIFY: the official soundtrack listing credits Jack Wall.",
     "how": "Use the three **wooden clocks** (see Side Easter eggs)."
    }
   ],
   "chapter": "Media and lore"
  },
  {
   "chapter": "Media and lore",
   "title": "Characters",
   "level": "Beginner",
   "body": "Four strangers, each hiding a crime. Each has a ritual room and a ritual item.",
   "table": {
    "cols": [
     "Character",
     "Who they are",
     "Ritual room and item"
    ],
    "rows": [
     [
      "Nero Blackstone",
      "A once-famous magician whose career collapsed. Buried in his wife's debts, he staged her death for the insurance money.",
      "Nero's Landing (Junction), the lawyer's pen"
     ],
     [
      "Jessica Rose",
      "A burlesque dancer at the Black Lace who wants Hollywood. She killed a photographer who tried to blackmail her.",
      "Black Lace Burlesque (Footlight), the producer's toupee"
     ],
     [
      "Jack Vincent",
      "A crooked Morg City detective. Facing an investigation, he silenced the criminals who could expose him.",
      "Ruby Rabbit (Canals), the detective's badge"
     ],
     [
      "Floyd Campbell",
      "A boxer who hid brass knuckles in his gloves to win a title eliminator, fatally injuring his opponent.",
      "Boxing Gym (Waterfront), the championship belt"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Media and lore",
   "title": "Map facts and trivia",
   "level": "Beginner",
   "table": {
    "cols": [
     "Fact",
     ""
    ],
    "rows": [
     [
      "Setting",
      "Morg City, a fictional 1940s American city"
     ],
     [
      "Date",
      "Some time after 21 April 1944"
     ],
     [
      "Before and after",
      "Comes after Origins and before The Giant in release order"
     ],
     [
      "Internal map name",
      "zm_zod"
     ],
     [
      "Reveal",
      "Shown off in a live-action-style reveal trailer before launch"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Media and lore",
   "title": "Radios",
   "level": "Intermediate",
   "body": "Twelve radios tell the backstory. Each summary below is our own short version of the recording.",
   "table": {
    "cols": [
     "#",
     "Where",
     "What you hear"
    ],
    "rows": [
     [
      "1",
      "Footlight station",
      "A reporter tells his employer, \"Mr. Rapt\", about a meteor shower, a strange mould and people falling sick."
     ],
     [
      "2",
      "Canals station",
      "The reporter hears about a secret order called the Keepers holding back a dark force under the city."
     ],
     [
      "3",
      "Waterfront station",
      "The reporter is uneasy about six months of strange errands for a boss he has never met."
     ],
     [
      "4",
      "Junction",
      "Nero's lawyer is told his client owes a fortune on loans his wife signed."
     ],
     [
      "5",
      "Canals high street",
      "An internal affairs officer questions Jack's partner about whether Jack is corrupt."
     ],
     [
      "6",
      "Waterfront high street",
      "A journalist grills Floyd's promoter about using Floyd as a last-minute substitute."
     ],
     [
      "7",
      "Footlight high street",
      "A film director asks Jessica's producer about casting her."
     ],
     [
      "8",
      "Nero's Landing",
      "Nero's lawyer has good news: the loan papers were forged while Nero was in hospital."
     ],
     [
      "9",
      "Ruby Rabbit",
      "Jack's partner tells him he said nothing to internal affairs and has his back."
     ],
     [
      "10",
      "Boxing Gym",
      "Floyd's promoter says the investigations are gone and Floyd has his title shot."
     ],
     [
      "11",
      "Black Lace Burlesque",
      "Jessica's producer turned the director away and has a Broadway lead lined up for her."
     ],
     [
      "12",
      "The Rift",
      "Maxis apologises to the people of this dimension he can't save."
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Media and lore",
   "title": "Ciphers",
   "level": "Advanced",
   "body": "Five ciphers and ten scraps of Richtofen's journal are hidden around the map. The meanings below are short summaries of the solved messages.",
   "table": {
    "cols": [
     "#",
     "Type",
     "Where",
     "What it says"
    ],
    "rows": [
     [
      "1",
      "Four-square",
      "Under a brick in the room after the Waterfront perk machine",
      "Says M is wasting effort on these people."
     ],
     [
      "2",
      "Straddling checkerboard",
      "Left side of the altar in the Pack-a-Punch room",
      "Someone vows the plan must not fail."
     ],
     [
      "3",
      "Porta",
      "Under a mirror near Stamin-Up, and under the stairs in the Canals",
      "The elders keep seeding space and time."
     ],
     [
      "4",
      "Trifid",
      "Behind a frame in the Waterfront Boxing Gym",
      "Says Primis will fail."
     ],
     [
      "5",
      "Tupper's formula",
      "On a table near the swords in the Rift",
      "Names the formless one as their downfall."
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  },
  {
   "chapter": "Media and lore",
   "title": "Trophies and achievements",
   "level": "Beginner",
   "table": {
    "cols": [
     "Name",
     "What to do",
     "Tip"
    ],
    "rows": [
     [
      "The Beginning of the End",
      "Complete all the rituals",
      "Finish all five Gateworm rituals"
     ],
     [
      "From the Shadows",
      "Spot the Shadow Man five times in one game",
      "After any ritual, run outside the ritual area; he watches from above"
     ],
     [
      "Other achievements",
      "VERIFY: still to be added",
      ""
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide)",
     "https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
    ]
   ]
  }
 ],
 "references": [
  "SegmentNext: Shadows of Evil Easter egg guide (2024). https://segmentnext.com/call-of-duty-black-ops-3/maps/shadows-of-evil/easter-egg",
  "GGRecon: The story of Call of Duty Zombies, part 3. https://www.ggrecon.com/articles/the-story-of-call-of-duty-zombies-part-3-the-alternate-dimension",
  "Game Rant: Call of Duty Zombies Easter eggs in Black Ops 2 and Black Ops 3 (2021). https://gamerant.com/call-duty-zombies-easter-eggs-black-ops-2-black-ops-3/",
  "SegmentNext: Black Ops 3 Zombies maps overview. https://segmentnext.com/call-of-duty-black-ops-3/maps",
  "Gameranx: Black Ops 3 Zombies Easter eggs (2015). https://gameranx.com/features/id/31507/article/call-of-duty-black-ops-3-zombies-mode-easter-eggs",
  "r/CODZombies wiki: Shadows of Evil complete map breakdown (community guide). https://r.enesgenc.dev/r/CODZombies/wiki/shadows-of-evil"
 ],
 "chapterBlurbs": {
  "Map features": "How the map works: Beast mode, power, pods, enemies and what you can build.",
  "Game features": "Perks, weapons, the Mystery Box, traps and the train.",
  "Easter eggs and quests": "The main quest in five parts, every side Easter egg and known glitches.",
  "Media and lore": "The story, the cast, cutscenes, radios, ciphers and trophies."
 }
});

  // ======================= Zetsubou No Shima =======================
  A({
 "title": "Zetsubou No Shima",
 "features": {
  "note": "Most perk machines move every game. Temporary power in each lab, then permanent power in the bunker.",
  "perks": [
   [
    "Quick Revive",
    "spawn"
   ],
   [
    "Mule Kick",
    "lower bunker, by the docks"
   ],
   [
    "Widow's Wine",
    "the giant spider's cave"
   ],
   [
    "Juggernog, Double Tap II, Speed Cola, Stamin-Up",
    "random each game"
   ]
  ],
  "pap": "Find three parts in the bunker, then drain its pool.",
  "box": [
   "Next to the plane trap",
   "Inside Lab A",
   "The docks",
   "Upper bunker",
   "Outside Lab B, by the green water",
   "The ritual site"
  ],
  "wonder": [
   [
    "KT-4",
    "buildable, upgrades to the Masamune"
   ],
   [
    "Skull of Nan Sapwe",
    "four skulls on four altars"
   ]
  ],
  "other": [
   [
    "Gas Mask",
    "buildable, for spore gas and longer breath"
   ],
   [
    "Plants",
    "grow seeds with coloured water"
   ],
   [
    "Spider webs",
    "knife or shoot to clear"
   ]
  ],
  "gum": "Four machines: spawn, Lab A, the bunker entrance, Lab B",
  "traps": [
   "Propeller (the plane)",
   "Fan (bunker entrance)"
  ]
 },
 "summary": "An overgrown Japanese research island in the Pacific with spiders, man-eating plants and the KT-4. Released with the Eclipse DLC; its quest centres on Takeo.",
 "facts": {
  "Game": "Black Ops III",
  "Release": "Apr 2016, Eclipse DLC",
  "Crew": "Primis",
  "Wonder weapon": "KT-4, upgraded to the Masamune",
  "Main quest": "Yes, solo or co-op"
 },
 "sections": [
  {
   "chapter": "Map features",
   "title": "Map layout",
   "level": "Beginner",
   "brief": "The island is one big loop, like Kino der Toten or The Giant. From spawn, **left** leads to **Lab A** and **right** to **Lab B**. Both paths meet at the **bunker**. In solo, 1,250 and 1,500 doors are **250 cheaper**.",
   "lists": [
    {
     "title": "Lab A side (left)",
     "items": [
      "First door: **500**.",
      "Then either the **plane trap room** (750) or the area round Lab A (1,000).",
      "Two more doors past that, and the lab itself (**1,000**), which you need for power."
     ]
    },
    {
     "title": "Lab B side (right)",
     "items": [
      "First door: **500**.",
      "Then either the **ritual site** with the challenge pillars (750) or the area round Lab B (1,000).",
      "Three more doors past that, and the lab itself (**1,000**)."
     ]
    },
    {
     "title": "The bunker",
     "items": [
      "The bunker door opens for free once **temporary power** is on.",
      "Inside on the **right**: the **AA gun room** (1,250). On the **left**: the elevator used in the main quest.",
      "**Pack-a-Punch** is in the middle, with a **1,500** door on each of three sides.",
      "**Left**: the power room, with another 1,500 door out to the **docks**.",
      "**Right**: the cocoon room with the **purple water**.",
      "**Back**: the test subject room. Downstairs is the **KT-4 bench** and a 1,500 door to the **underwater caves**."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Power",
   "level": "Beginner",
   "brief": "Power comes in two stages: temporary power in each lab, then permanent power in the bunker.",
   "lists": [
    {
     "title": "Temporary power",
     "items": [
      "Grab a **bucket** and fill it with water (any colour).",
      "Pour it into the power machine in **Lab A**, then do the same in **Lab B**.",
      "Each lab's power runs for a few minutes, then switches off again."
     ]
    },
    {
     "title": "Permanent power",
     "items": [
      "With temporary power on in **both labs**, open the bunker door.",
      "Go **left** into the power room and swim to the bottom. Cut the **webs on the vent**.",
      "You're locked in while zombies spawn. Kill them all, and watch your air.",
      "The power comes on and the first **Pack-a-Punch part** drops from the vent."
     ]
    }
   ],
   "spawns": [
    {
     "item": "Buckets",
     "id": "bucket",
     "note": "One bucket at each spot.",
     "fixed": true,
     "spots": [
      "**Spawn**",
      "**Lab A** area",
      "**Lab B** area",
      "**Bunker** area"
     ]
    }
   ],
   "table": {
    "cols": [
     "Water",
     "Where to fill your bucket"
    ],
    "rows": [
     [
      "Blue",
      "Behind **Lab A**, by the spider cave and cobwebs"
     ],
     [
      "Green",
      "Below **Lab B**, by the sewer entrance"
     ],
     [
      "Purple",
      "In the **lower bunker** (the cocoon room)"
     ],
     [
      "Rainbow",
      "Inside the **sewer pipe**, from the blue rocks"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Pack-a-Punch",
   "level": "Beginner",
   "brief": "Find **three parts**, then use the three white lights round the machine to drain its pool. Pack-a-Punch is open for the rest of the game.",
   "spawns": [
    {
     "item": "Pack-a-Punch parts",
     "id": "pap-part",
     "fixed": true,
     "note": "Stand past Juggernog in the main bunker room, facing Pack-a-Punch.",
     "spots": [
      "**Left door, power room**: swim around until you see it shine. It only appears after **permanent power**, from the vent.",
      "**Right door, cocoon room**: knife the **cocoons** on the ceiling and kill the zombies that fall out, until a glowing part drops.",
      "**Back door**: go all the way down, through the **1,500 door by Mule Kick**, turn **right** past the **M8A7** and swim until you spot it."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Getting around",
   "level": "Beginner",
   "table": {
    "cols": [
     "Route",
     "From",
     "To",
     "Cost"
    ],
    "rows": [
     [
      "Zipline",
      "Lab A (on top)",
      "Docks / lower bunker",
      "250"
     ],
     [
      "Zipline",
      "Docks / lower bunker",
      "Lab A (on top)",
      "250"
     ],
     [
      "Sewer",
      "Lower bunker",
      "Outside Lab B, by the green water",
      "500"
     ],
     [
      "Secret door",
      "Main bunker (the AA gun room side)",
      "Outside Lab B",
      "500 to clear"
     ]
    ]
   },
   "body": "The secret door is in the room past the 1,250 door on your right as you enter the bunker: go straight, then right, into the room with a shield part. The planks on the wall cost 500 to clear and lead back down to Lab B.",
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
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
     "What it does",
     "Where",
     "Cost"
    ],
    "rows": [
     [
      "Propeller",
      "Drops a spinning propeller on zombies",
      "The plane",
      "1,000"
     ],
     [
      "Fan",
      "Sucks zombies into a fan",
      "Bunker entrance",
      "1,000"
     ]
    ]
   },
   "warn": "Traps can hurt players too.",
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Enemies, spores and webs",
   "level": "Beginner",
   "table": {
    "cols": [
     "Enemy",
     "What it does"
    ],
    "rows": [
     [
      "Thrasher",
      "Comes every few rounds, or when a zombie walks through a fully grown spore. Hits hard and can **swallow a downed player**, who can't be revived until it dies. Shoot its **orange spores**; it speeds up as it's hurt and leaves a cloud of gas when it dies."
     ],
     [
      "Spider",
      "Fast and fragile. **Spider rounds** come every 5 to 7 rounds and end with a Max Ammo. After about round 20 they also mix into normal rounds."
     ]
    ]
   },
   "lists": [
    {
     "title": "Spores",
     "items": [
      "Orange balls round the map. Fully grown ones burst when anyone walks past and can turn zombies into Thrashers.",
      "Shooting one releases gas that slows zombies and makes you cough and unable to shoot, unless you wear the **gas mask**.",
      "Shoot one with the **KT-4** for a short speed boost. Underwater, a spore gives you air."
     ]
    },
    {
     "title": "Webs",
     "items": [
      "Spiders web over doors, perks and GobbleGum machines.",
      "Knife the web to clear it, or use the KT-4, a grenade or the Ray Gun."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Challenges",
   "level": "Intermediate",
   "brief": "Each player has a pillar at the **ritual site**. Finish its challenges for rewards; finishing all three tiers unlocks the **electrified shield**.",
   "table": {
    "cols": [
     "Tier",
     "Reward",
     "Possible challenges"
    ],
    "rows": [
     [
      "1",
      "Max Ammo",
      "Water 5 plants; water one plant three times; shoot 5 spores; use a spore for air underwater; break 5 webs with explosives"
     ],
     [
      "2",
      "Dingo, SVG-100 or 205 Brecci (you can re-roll)",
      "Kill a Thrasher before it's enraged; kill 15 zombies drawn to plants; kill 20 zombies underwater; get a power-up from a plant; 10 headshots on spore-infested zombies; 20 kills with the fan trap"
     ],
     [
      "3",
      "A free perk slot",
      "Kill 3 zombies as they turn into Thrashers; kill 8 spiders with spores; shoot the heads off 5 Thrashers; eat a fruit from a plant; 30 kills with the plane trap"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Buildables",
   "level": "Beginner",
   "body": "Three things are built at any of the three tables, plus the KT-4 at its own bench. Each part appears at **one** of its spots each game.",
   "buildables": [
    {
     "name": "Zombie Shield",
     "what": "Sits on your back and blocks hits from behind. Hold it to melee or take cover. When it breaks, build another at a table.",
     "parts": [
      {
       "name": "Bunker part",
       "spawns": [
        "In the **AA gun room** (the 1,250 door on your right as you enter the bunker), somewhere in that room only",
        "Same room, in the corner under the broken roof"
       ]
      },
      {
       "name": "Lab B part",
       "spawns": [
        "On a **tree** just outside the Lab B stairs on the spawn side",
        "In a **clump of bushes** nearby. It's hard to spot.",
        "By the **wooden crates** at the small pond outside Lab B"
       ]
      },
      {
       "name": "Lab A part",
       "spawns": [
        "Next to the **Kuda** wall-buy, under Lab A",
        "On the wall near the Kuda and a **zombie barrier**",
        "Hanging on the **west pillar** under Lab A"
       ]
      }
     ],
     "tables": [
      "**Lab A**: inside the lab",
      "**Lab B**: inside the lab",
      "**Bunker**: inside the bunker"
     ]
    },
    {
     "name": "KT-4",
     "what": "The map's **wonder weapon**. It takes a weapon slot and holds 42 shots (6 in the mag). A quick shot kills one zombie; a charged shot uses three and leaves a pool of acid that kills about a dozen. It also fertilises plants and pops spores for speed. Once built, it's in the Mystery Box for everyone.",
     "needs": "Patience: the test tube can drop any time from round 1 to about round 31.",
     "parts": [
      {
       "name": "Spider venom",
       "spawns": [
        "In **Lab A**, lower the **cage** from the control panel, lure a spider in, then raise it. The machine draws the venom: take it."
       ]
      },
      {
       "name": "Green vial",
       "spawns": [
        "Dropped by a **glowing zombie** near the **green water** below Lab B. It can take many rounds to appear."
       ]
      },
      {
       "name": "Red plant",
       "spawns": [
        "Dive in the water past **Mule Kick** and follow the **blue rocks and orange spore** right to the bottom. Use the spore for air."
       ]
      }
     ],
     "tables": [
      "The **KT-4 bench** downstairs near **Mule Kick**"
     ]
    },
    {
     "name": "Gas Mask",
     "what": "Stops spore gas from blocking your guns and lets you hold your breath longer underwater. You must wear it to ride down to the boss.",
     "parts": [
      {
       "name": "Lab B part",
       "spawns": [
        "Behind **Lab B**, where you leave the sewer and fill **green water**",
        "Up the stairs to the left by the **ICR-1** wall-buy, same area"
       ]
      },
      {
       "name": "Plane part",
       "spawns": [
        "In or around the **plane**, near the propeller trap and the Mystery Box",
        "On the **gas pipe** on the rocks near the plane trap"
       ]
      },
      {
       "name": "Docks part",
       "spawns": [
        "At the **docks** under the bunker, around the **zipline** or the challenge statue"
       ]
      }
     ],
     "tables": [
      "Any build table"
     ]
    },
    {
     "name": "Upgrade: electrified shield",
     "what": "Kills zombies that hit it, halves the price of anything you shock with it (perks, machines, buyables), and shocks the Lab A cage for a random power-up. Needed for the main quest.",
     "parts": [],
     "tables": [
      "Build the shield and finish **all your challenges**.",
      "Wait at the ritual site for **lightning** to hit you while you hold it."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ],
    [
     "SegmentNext: Zetsubou No Shima buildable parts",
     "https://segmentnext.com/black-ops-3-zombies-zetsubou-no-shima-buildable-parts-locations-guide"
    ],
    [
     "SegmentNext: Zetsubou No Shima shield",
     "https://segmentnext.com/how-to-build-black-ops-3-zombies-zetsubou-no-shima-shield"
    ]
   ],
   "chapter": "Map features"
  },
  {
   "chapter": "Map features",
   "title": "Skull of Nan Sapwe",
   "level": "Intermediate",
   "brief": "The special weapon. It doesn't use a gun slot. **Mesmerise** freezes zombies and reveals hidden things; **Decimate** kills. It runs on a 100-point charge.",
   "lists": [
    {
     "title": "How to get it",
     "items": [
      "At the ritual site (right of spawn, past two doors), the stone in the middle holds **four skulls**, each with a symbol.",
      "Take each skull to the **altar** with its symbol, put it down and defend it from zombies until it's cleansed.",
      "With all four back, the tree beside the stone floats away and reveals a staircase.",
      "Downstairs, start the ritual and kill the **Keepers** near the skull. You're locked in until it's done. Then take the skull."
     ]
    }
   ],
   "spawns": [
    {
     "item": "Skull altars",
     "id": "skull-altar",
     "fixed": true,
     "spots": [
      "**Spawn**",
      "**The plane**: by the propeller trap and a gas mask part",
      "**Docks / lower bunker**: by the **zipline**",
      "**Lower bunker**: by the KT-4 bench, near **Mule Kick**"
     ]
    }
   ],
   "tip": "A charged KT-4 shot at the foot of an altar kills most zombies walking in.",
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Map features",
   "title": "Plants",
   "level": "Advanced",
   "brief": "Zombies drop **seeds**. Plant one and water it each round for up to three rounds; the water colour decides what grows. Shoot it with the KT-4 each time to grow an **upgraded** plant.",
   "tables": [
    {
     "title": "What grows",
     "cols": [
      "Plant",
      "Water",
      "What it does",
      "Upgraded"
     ],
     "rows": [
      [
       "Bad pod",
       "None",
       "Low-tier rewards",
       ""
      ],
      [
       "Reward pod",
       "Blue",
       "Mid-tier rewards (high-tier when upgraded)",
       "Better rewards"
      ],
      [
       "Zombie holder",
       "Green",
       "Holds zombies and spiders for 5 minutes",
       "Holds them for an hour"
      ],
      [
       "Zombie killer",
       "Purple",
       "Pulls in nearby zombies and kills them",
       "Pulls more in, kills faster"
      ],
      [
       "Fruit plant",
       "Mixed colours, or rainbow",
       "50% chance of a random perk (or you throw up)",
       "100% perk"
      ],
      [
       "Random plant",
       "Rainbow",
       "",
       "Any upgraded plant"
      ],
      [
       "Imprint plant",
       "Fertilised (rare)",
       "",
       "Use it to clone yourself; if you bleed out you return with your guns, perks and points"
      ]
     ]
    },
    {
     "title": "Rewards by tier",
     "cols": [
      "Low",
      "Medium",
      "High"
     ],
     "rows": [
      [
       "A zombie, a grenade, 500 points (one player)",
       "A random power-up, 500 points (everyone)",
       "A random power-up, a **perk bottle**, the **AA gun shell** (main quest)"
      ],
      [
       "MR6, Sheiva, Locus, XM-53",
       "Razorback, HG-40, MX Garand, Man-O-War, Gorgon, Haymaker 12, 205 Brecci",
       "Monkey Bombs, Marshal 16, Ray Gun, Bowie Knife"
      ]
     ]
    },
    {
     "cols": [
      "Water",
      "Where to fill your bucket"
     ],
     "rows": [
      [
       "Blue",
       "Behind **Lab A**, by the spider cave and cobwebs"
      ],
      [
       "Green",
       "Below **Lab B**, by the sewer entrance"
      ],
      [
       "Purple",
       "In the **lower bunker** (the cocoon room)"
      ],
      [
       "Rainbow",
       "Inside the **sewer pipe**, from the blue rocks"
      ]
     ]
    }
   ],
   "lists": [
    {
     "title": "How growth works",
     "items": [
      "One watering of a colour gives a 1-in-3 chance of that plant, two give 2-in-3, three make it certain.",
      "No water at all grows a bad pod at the end of the round.",
      "Blue, green and purple mixed: 25% fruit plant, 25% each of the others.",
      "Three rounds of rainbow water: an equal chance of any plant, including fruit."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "chapter": "Game features",
   "title": "Perks",
   "level": "Beginner",
   "brief": "Most perk machines **move every game**. Only **Quick Revive** (spawn), **Mule Kick** (lower bunker, by the docks and the KT-4 bench) and **Widow's Wine** (the giant spider's cave) stay put.",
   "table": {
    "cols": [
     "Perk",
     "Where"
    ],
    "rows": [
     [
      "Quick Revive",
      "Spawn"
     ],
     [
      "Mule Kick",
      "Lower bunker, by the docks"
     ],
     [
      "Widow's Wine",
      "The giant spider's cave"
     ],
     [
      "Juggernog, Double Tap II, Speed Cola, Stamin-Up",
      "Random each game"
     ],
     [
      "Electric Cherry, Deadshot Daiquiri",
      "No machine: GobbleGum or Easter eggs only"
     ]
    ]
   },
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
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
       "Spawn"
      ],
      [
       "Sheiva",
       "500",
       "Spawn"
      ],
      [
       "L-CAR 9",
       "750",
       "Room before the challenges"
      ],
      [
       "KRM-262",
       "750",
       "Room before the challenges"
      ],
      [
       "Argus",
       "1,100",
       "Underwater, by the green water"
      ],
      [
       "Kuda",
       "1,200",
       "The plane"
      ],
      [
       "Vesper",
       "1,200",
       "Outside the bunker"
      ],
      [
       "KN-44",
       "1,400",
       "Lab B"
      ],
      [
       "ICR-1",
       "1,400",
       "Green water walkway"
      ],
      [
       "M8A7",
       "1,400",
       "Bunker"
      ],
      [
       "HVK-30",
       "1,600",
       "Lab A (on top)"
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
       "VMP, Pharo, Weevil, BRM, Dingo, 48 Dredge, Gorgon, Locus, Drakon, SVG-100, Man-O-War, 205 Brecci, Haymaker 12, XM-53, Ray Gun, and the KT-4 once someone has built it"
      ]
     ]
    },
    {
     "title": "New on this map (no weapon kits)",
     "cols": [
      "Weapons"
     ],
     "rows": [
      [
       "Razorback, Marshal 16, HG-40, MX Garand"
      ]
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
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
      "Next to the **plane trap**",
      "Inside **Lab A**",
      "At the **docks**",
      "Upper **bunker**",
      "Outside **Lab B**, by the green water",
      "At the **ritual site** with the challenges"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
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
      "**Spawn**, between the two doors",
      "Inside **Lab A**",
      "Inside the **bunker**, right by the entrance",
      "Inside **Lab B**"
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
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
     "why": "All perks without the long walk to each machine across the island.",
     "goal": "Any"
    },
    {
     "name": "Shopping Free",
     "type": "Mega",
     "why": "Open the bunker and both labs quickly.",
     "goal": "Easter egg"
    },
    {
     "name": "Near Death Experience",
     "type": "Mega",
     "why": "Survive the Thrasher boss fight more easily.",
     "goal": "Easter egg"
    },
    {
     "name": "Power Vacuum",
     "type": "Mega",
     "why": "More drops while you wait for the KT-4 test tube.",
     "goal": "Easter egg"
    },
    {
     "name": "Alchemical Antithesis",
     "type": "Classic",
     "why": "Ammo for the long KT-4 and plant grinds.",
     "goal": "High rounds"
    },
    {
     "name": "Killing Time",
     "type": "Mega",
     "why": "Freeze Thrashers before they grab you.",
     "goal": "Any"
    },
    {
     "name": "Wall Power",
     "type": "Mega",
     "why": "A Pack-a-Punched gun before the machine tools are in.",
     "goal": "Casual"
    },
    {
     "name": "In Plain Sight",
     "type": "Classic",
     "why": "Escape spiders in the bunker.",
     "goal": "Any"
    },
    {
     "name": "Stock Option",
     "type": "Classic",
     "why": "No reloads in the tight lab rooms.",
     "goal": "Any"
    },
    {
     "name": "Coagulant",
     "type": "Classic",
     "why": "More time for teammates to reach you across the island.",
     "goal": "Co-op"
    }
   ],
   "gumNote": "Our picks, not an official ranking. We started from a general BO3 GobbleGum tier list and adjusted it for this map's layout and quest. No source ranks gums map by map, so treat this as a starting point. VERIFY.",
   "sources": [
    [
     "SegmentNext: BO3 GobbleGum tier list",
     "https://segmentnext.com/bo3-zombies-best-gobblegums"
    ],
    [
     "Call of Duty blog: GobbleGum 101 (Dec 2015)",
     "https://www.callofduty.com/blog/archives/call-of-duty-black-ops-3-zombies--gobblegum-101"
    ],
    [
     "SegmentNext: Black Ops 3 Zombies maps overview",
     "https://segmentnext.com/call-of-duty-black-ops-3/maps"
    ]
   ],
   "chapter": "Game features"
  },
  {
   "title": "Main Easter egg",
   "level": "Intermediate",
   "body": "Solo works. You'll need everything from the map first: the challenges, the skull, the KT-4 and Masamune, the gas mask and the electrified shield. Checked against the community breakdown; where guides still disagree it's marked VERIFY.",
   "needs": [
    "Solo or co-op",
    "All your **challenges** done and an **electrified shield**",
    "The **Skull of Nan Sapwe**, the **KT-4** upgraded to the **Masamune**, and the **gas mask**",
    "**Anywhere But Here!** GobbleGum for one cog"
   ],
   "phases": [
    {
     "name": "Phase 1: Power",
     "steps": [
      {
       "title": "Power Lab A",
       "do": [
        "Pick up the **bucket** on the ground at spawn, just past the **GobbleGum machine**.",
        "Clear the **vines** to reach **Lab A**.",
        "Fill the bucket at the **blue water pool** to the **left of Lab A**.",
        "Go **upstairs** in Lab A and pour it on the power."
       ]
      },
      {
       "title": "Power Lab B",
       "do": [
        "Refill the bucket and take the **right-hand path** to **Lab B**.",
        "Pour the water on the **generator** inside."
       ],
       "warn": "Each lab's power only lasts a few minutes, so do both labs close together."
      },
      {
       "title": "Turn on the bunker power",
       "do": [
        "Open the **bunker entrance** between Lab A and Lab B.",
        "Inside, turn **left** to the **Power Room**.",
        "Swim to the **webbed fan** **opposite the power switch** and cut the web.",
        "Survive the lockdown (**20 zombies**), surfacing for air.",
        "Take the **gold part** that drops from the fan, then flip the **power switch**."
       ]
      }
     ]
    },
    {
     "name": "Phase 2: Pack-a-Punch",
     "steps": [
      {
       "title": "Fix the pump",
       "do": [
        "Find the **three parts**, then use the **three white lights** round Pack-a-Punch to drain its pool."
       ],
       "spawns": [
        {
         "item": "Pack-a-Punch parts",
         "id": "machine-tool",
         "fixed": true,
         "spots": [
          "**Power room** (left of Pack-a-Punch): in the water. It only appears after permanent power.",
          "**Cocoon room** (right of Pack-a-Punch): knife the hanging **cocoons** until it drops",
          "**Past Mule Kick**: through the 1,500 door, turn **right** past the **M8A7** and swim"
         ]
        }
       ],
       "tip": "Optional for the quest, but it's the only way to get Pack-a-Punch."
      }
     ]
    },
    {
     "name": "Phase 3: Skull of Nan Sapwe",
     "steps": [
      {
       "title": "Cleanse the four skulls",
       "do": [
        "Note the **symbol** on a pedestal in the central ritual area.",
        "Carry the matching skull to the **altar with the same symbol**.",
        "Defend it from zombies, spiders and Thrashers until it's cleansed.",
        "Return it to its pedestal. Repeat for all four."
       ],
       "spawns": [
        {
         "item": "Skull altars",
         "id": "skull-altar",
         "fixed": true,
         "spots": [
          "**Spawn**",
          "**The plane**: by the propeller trap",
          "**Docks**: by the **zipline**",
          "**Lower bunker**: by the KT-4 bench, near **Mule Kick**"
         ]
        }
       ]
      },
      {
       "title": "Take the Skull of Nan Sapwe",
       "do": [
        "Go down the staircase that rises after the last cleanse.",
        "Use the skull and survive the **Keepers** until they vanish.",
        "Pick up the skull."
       ]
      },
      {
       "title": "Find the secret elevator room",
       "do": [
        "In the bunker room with **purple water**, aim the skull (**aim button**) at the **half poster** on the wall **across from the water**.",
        "In the **first room inside the bunker**, aim the skull at the **left wall**.",
        "Walk into the room it reveals: the broken **elevator** is there."
       ]
      }
     ]
    },
    {
     "name": "Phase 4: The KT-4",
     "steps": [
      {
       "title": "Collect the three KT-4 parts",
       "do": [
        "**Spider venom**: on a spider round, lure a spider into the cage lowered by the **green panel in Lab A**, at the **bottom of the stairs**, then use the console upstairs.",
        "**Green vial**: kill a **glowing green zombie** around **Lab B**.",
        "**Red plant**: in the Operations Room, go down to **Mule Kick**, swim through the cave (shoot spores for air) and take the plant at the **end of the cave**."
       ]
      },
      {
       "title": "Build the KT-4",
       "do": [
        "Build it at the **KT-4 bench** downstairs near **Mule Kick**."
       ],
       "tip": "Once built, everyone can also get it from the Mystery Box."
      }
     ]
    },
    {
     "name": "Phase 5: The Masamune",
     "steps": [
      {
       "title": "Complete the altar trials",
       "do": [
        "Finish all your **challenges** at your pillar in the ritual site.",
        "Wait there with your shield: **lightning** strikes and electrifies it."
       ]
      },
      {
       "title": "Kill the giant spider",
       "do": [
        "At the **pool behind Lab A**, melt the **blue web** with the KT-4.",
        "Drop into the cavern and shoot the spider's **mouth** until it dies.",
        "Take the **tooth** from its mouth. VERIFY: an older guide calls this a green liquid."
       ]
      },
      {
       "title": "Get the blue vial",
       "do": [
        "Take the electrified shield to **Lab B** and melee the **electric panel**.",
        "In the cage, take the **vial** from the skeleton."
       ]
      },
      {
       "title": "Grow the special plant",
       "do": [
        "Use the panel by the **sewer tunnel** at the Operations Room stairs and ride to the **third green pipe** for the **rainbow water**.",
        "Go **past Mule Kick** to the deepest cave. Aim the skull at the wall on your **right** to reveal a planter.",
        "Plant a seed, water it for **three rounds** with rainbow water, and harvest on round four."
       ]
      },
      {
       "title": "Build the Masamune",
       "do": [
        "Take the three upgrade parts to the **KT-4 workbench** and build it."
       ]
      }
     ]
    },
    {
     "name": "Phase 6: Three cogs",
     "steps": [
      {
       "title": "Cog 1: the dragon room",
       "do": [
        "Chew **Anywhere But Here!** until it drops you in the **dragon room**.",
        "Take the **cog** from the hay at the **back of the room**, by the egg."
       ],
       "warn": "Only works after the elevator room is open."
      },
      {
       "title": "Cog 2: under the zipline",
       "do": [
        "**Solo**: shock the **zipline control panel** with the electrified shield, then ride straight away. Over the little bridge, **melee** to drop onto the platform.",
        "**Co-op**: ride without shocking it; a teammate shocks the panel as you pass over the bridge to drop you.",
        "Take the cog."
       ],
       "warn": "Timing matters: miss and you can die."
      },
      {
       "title": "Cog 3: shoot down the plane",
       "do": [
        "Grow plants with **blue water**, shooting them with the KT-4 each round. Upgraded blue plants can drop the **AA gun shell**.",
        "In the **AA gun room**, hold interact to load the shell and listen for the sound.",
        "Wait for a big plane to fly in range and fire.",
        "The cog lands somewhere random: look for **smoke**."
       ],
       "spawns": [
        {
         "item": "Plane crash site",
         "id": "cog-3",
         "note": "Guides disagree on where it lands. VERIFY",
         "spots": [
          "On the ground by **Lab A** or **Lab B**",
          "Near the **bunker entrance**",
          "At the **Lab A zipline**",
          "In the **green water behind Lab B**"
         ]
        }
       ],
       "tip": "A missed shot means growing a new shell."
      }
     ]
    },
    {
     "name": "Phase 7: The boss",
     "steps": [
      {
       "title": "Fix the elevator",
       "do": [
        "In the secret elevator room, fit all **three cogs** into the machine.",
        "Put the **gas mask** on before you ride down, or you die."
       ]
      },
      {
       "title": "Defeat the plant",
       "do": [
        "Burn the **vines** blocking the path with the KT-4 or Masamune.",
        "Hit the boss's **arms** with the Masamune when they open. Kill Thrashers fast: they drop Max Ammo.",
        "Keep moving. Destroy all **four arms**.",
        "You get a free **Perkaholic** and the ending."
       ],
       "tip": "Finish the round before you save or quit."
      }
     ]
    }
   ],
   "chapter": "Easter eggs and quests",
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Side Easter eggs",
   "level": "Beginner",
   "body": "Smaller secrets.",
   "items": [
    "Music Easter egg: the hidden song is \"Dead Flowers\". VERIFY how it is triggered.[ref:3]",
    "A jump scare with fake teammates.[ref:3]",
    "A giant monster rises in the swamp at round 50.[ref:3]"
   ],
   "chapter": "Easter eggs and quests",
   "eggs": [
    {
     "name": "Spider Bait",
     "reward": "Turn into a spider once a round",
     "what": "Press right on the D-pad to become a spider and shoot webs for about a minute.",
     "steps": [
      "You need the **skull**, the **electrified shield** and all your challenges.",
      "On a spider round, mesmerise the spiders. Keep the one with a **red glow** alive and kill the rest.",
      "Lead it to the **blue**, **purple** and **green** water. It drinks at each.",
      "Lead it into the **Lab A cage**, raise the cage, hit it with your shield, and lower it again.",
      "Two rounds later every spider glows red: kill them all.",
      "Raise the cage and take the **Spider Bait** from the cocoon."
     ]
    },
    {
     "name": "Golden Bucket",
     "reward": "A bucket that never runs dry and switches water colour",
     "steps": [
      "First grow one of each: reward pod, zombie holder, zombie killer and fruit plant.",
      "Below **Lab B**, mesmerise the **vines** over a planter with the skull.",
      "Plant your **bucket** there. Three planters appear.",
      "Plant seeds in them; they grow into zombie killers. Feed them zombies until they vanish.",
      "Everyone can take a golden bucket."
     ]
    }
   ],
   "sources": [
    [
     "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)",
     ""
    ]
   ]
  },
  {
   "title": "Notable glitches",
   "level": "Advanced",
   "body": "Glitches are grouped by type: Out of bounds (outside the playable map), God spot (somewhere zombies can't reach you) and Other. Each says whether it still works, as far as we can confirm.",
   "glitches": [],
   "none": "No out-of-bounds glitch or god spot is known for this map yet. Know one? Add it with a video link.",
   "chapter": "Easter eggs and quests"
  },
  {
   "title": "Storyline",
   "brief": "A jungle research base where the Imperial Japanese Army experimented with Element 115. Primis come for the soul of this world's Takeo. The ending reveals his loyalty was built on a lie.",
   "level": "Beginner",
   "body": "Zetsubou No Shima (\"island of despair\") is an overgrown Division 9 research base in the Pacific, where the Imperial Japanese Army experimented with Element 115. It takes place after Der Eisendrache and everything in it relates to Takeo's past.[ref:2][ref:3]\n\nPrimis come to collect the soul of the Ultimis Takeo. The final boss is a special Thrasher holding him. In the ending, Takeo learns that the Emperor he served was corrupt and that his life was built on a lie, and he takes his own life.[ref:3]",
   "chapter": "Media and lore",
   "more": "After Griffin Castle, the crew wakes up aboard a Japanese ship and is taken prisoner by Division 9. During the interrogation a huge wave hits, Takeo kills the officer holding the Summoning Key and catches it as it rolls away, and the four jump overboard before the ship explodes. They swim to the island, where Element 115 experiments have mutated plants and animals. Deep in the facility they fight a giant Thrasher: this world's Takeo. He learns the Emperor sent him there to be experimented on, and young Takeo offers him a chance at redemption. The older Takeo ends his own life with young Takeo at his side, Richtofen takes his soul into the key, and the crew teleports away."
  },
  {
   "title": "Cinematics and music",
   "level": "Beginner",
   "body": "Cutscenes and the map's Easter egg song. Nothing loads or plays until you click it.",
   "media": [
    {
     "kind": "intro",
     "title": "Zetsubou No Shima intro"
    },
    {
     "kind": "outro",
     "title": "Zetsubou No Shima ending",
     "spoiler": true
    },
    {
     "kind": "song",
     "title": "Song name to be confirmed",
     "by": "VERIFY"
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
  "SegmentNext: Zetsubou No Shima Easter egg guide (2024). https://segmentnext.com/call-of-duty-black-ops-3/maps/zetsubou-no-shima/easter-egg",
  "GGRecon: The story of Call of Duty Zombies, part 3. https://www.ggrecon.com/articles/the-story-of-call-of-duty-zombies-part-3-the-alternate-dimension",
  "Game Rant: Call of Duty Zombies Easter eggs in Black Ops 2 and Black Ops 3 (2021). https://gamerant.com/call-duty-zombies-easter-eggs-black-ops-2-black-ops-3/",
  "SegmentNext: Black Ops 3 Zombies maps overview. https://segmentnext.com/call-of-duty-black-ops-3/maps",
  "r/CODZombies wiki: Zetsubou No Shima complete map breakdown, created by /u/chrisd848 (community guide)"
 ],
 "chapterBlurbs": {
  "Map features": "The layout, power, Pack-a-Punch, enemies, challenges, what you can build, the skull and plants.",
  "Game features": "Perks, weapons, the Mystery Box and GobbleGum.",
  "Easter eggs and quests": "The main quest, side Easter eggs and known glitches.",
  "Media and lore": "The story, cutscenes, radios, ciphers and trophies."
 }
});

  // ---------- Side Easter eggs, levels and story endings for the other four maps ----------
  const sec = (t, name) => S.articles.find(x => x.title === t && x.game === G).sections.find(s => s.title === name);
  const addRef = (t, r) => { const a = S.articles.find(x => x.title === t && x.game === G); a.references.push(r); return a.references.length; };
  ["The Giant"].forEach(t => {
    sec(t, "Lore").level = "Beginner"; sec(t, "In-game mechanics").level = "Intermediate"; sec(t, "Main Easter egg").level = "Intermediate";
    sec(t, "Side Easter eggs").level = "Beginner"; sec(t, "Notable glitches").level = "Advanced";
  });
  { const n = addRef("The Giant", GR);
    sec("The Giant", "Lore").body += `\n\nThe opening cutscene shows Primis Richtofen killing his evil Ultimis self. Samantha is no longer the villain, and her father Ludvig Maxis guides the quest as a game of hide-and-seek.[ref:${n}]`;
    Object.assign(sec("The Giant", "Side Easter eggs"), { body: "Smaller secrets:", items: [`Music Easter egg: hold the button on three glass containers to play a remix of "Beauty of Annihilation".[ref:1][ref:${n}]`, `A free perk bottle at the mainframe, and a random power-up each time a teleporter is linked.[ref:${n}]`, `Ten blueprint fragments and eight radios to collect.[ref:${n}]`, `The secret sixth perk machine (see In-game mechanics).[ref:1]`] }); }


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
  })(["Zetsubou No Shima", "The Giant"]);
})(window.SITE);
