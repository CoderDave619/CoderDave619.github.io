// Black Ops III Zombies speedrun and high-round records.
// Source: Zombies World Records (zwr.gg) leaderboards, read 23 Nov 2026. speedrun.com refuses automated reads, so it is linked but not used.
// Kept separate from the map/story pages on purpose: nothing here links to a map article, and map articles don't link here.
(function () {
  const S = window.SITE;
  const yt = id => "https://www.youtube.com/watch?v=" + id;
  const ZWR = "https://zwr.gg/leaderboards/bo3/";
  // [rank, [runners], time or round, video url, flag("" | "UNVERIFIED")]
  const ee = (id, map, slug, boards) => ({ id, kind: "ee", map, name: `${map}: Easter egg speedrun`, short: "Main Easter egg", gum: "Mega GobbleGum (VERIFY: inferred from the board's default tab)",
    src: ZWR + "ee-speedrun/" + slug + "/", boards });
  const hr = (id, map, slug, boards) => ({ id, kind: "hr", map, name: `${map}: highest round`, short: "High round", gum: "Classic GobbleGum",
    src: ZWR + "high-rounds/" + slug + "/", boards });

  const categories = [
    ee("ee-soe", "Shadows of Evil", "shadows-of-evil", {
      "Solo": [[1, ["ASSEM158"], "19:26", yt("J5fohbRmJqI")], [2, ["Scoot"], "19:30", yt("X_PddJpWWE4")], [3, ["Scottydogs007"], "19:35", yt("4mtJXoXB-EY")]],
      "2 players": [[1, ["Penguine", "Lukewarm"], "19:31", yt("KfGR7UNUZOs")]] }),
    ee("ee-de", "Der Eisendrache", "der-eisendrache", {
      "Solo": [[1, ["Freckleston"], "25:48", yt("Je2jEcsZ0b8")], [2, ["Penguine"], "25:58", yt("X8PJx26khJQ")], [3, ["sable"], "25:59", yt("w742IqEe20A")], [3, ["Tdotmott"], "25:59", yt("B4vqMCfvZX4")]],
      "2 players": [[1, ["Penguine", "AxY-"], "23:33", yt("-YcjL4qE0Jc"), "UNVERIFIED"]] }),
    ee("ee-zns", "Zetsubou No Shima", "zetsubou-no-shima", {
      "Solo": [[1, ["Invisible Hole"], "20:06", yt("ZbVMCg-hF_w")], [2, ["cbrnn"], "21:00", yt("vWKeyFH1WPE")], [3, ["Tdotmott"], "21:16", yt("AQjcYsFPKag")]],
      "2 players": [[1, ["Invisible Hole", "cbrnn"], "16:57", yt("NymRrH8-5lc")]],
      "3 players": [[1, ["Mikey0006", "Kooky", "Freckleston"], "17:01", yt("ARcZEDxy1Vg")]],
      "4 players": [[1, ["Invisible Hole", "Kooky", "Freckleston", "Mikey0006"], "16:29", yt("zCNTKFJFino")]] }),
    ee("ee-gk", "Gorod Krovi", "gorod-krovi", {
      "Solo": [[1, ["Invisible Hole"], "31:01", yt("yjOnj40kQgY")], [2, ["ASSEM158"], "31:29", yt("EKceI50JPS8")], [3, ["Tdotmott"], "31:36", yt("igPtO-EyWqo")]],
      "2 players": [[1, ["Invisible Hole", "Mikey0006"], "27:44", yt("lXNIEHOeDdE")]],
      "3 players": [[1, ["ClouDz KK", "Barela", "AstroV22299"], "27:01", yt("rKETjJbyIos")]],
      "4 players": [[1, ["Mikey0006", "Freckleston", "Scrappy", "Invisible Hole"], "26:52", yt("HkhIJjT2JRA"), "UNVERIFIED"]] }),
    ee("ee-rev", "Revelations", "revelations", {
      "Solo": [[1, ["sable"], "23:04", yt("eJbF06wM0AQ")], [2, ["DallasH24"], "23:14", yt("T9YfbSEf_Sk")], [3, ["Zo Raptr"], "23:29.95", "https://www.twitch.tv/videos/2724354289"]],
      "2 players": [[1, ["Benja", "GanjahManPorros"], "17:36", "https://www.twitch.tv/videos/2523700056"]],
      "3 players": [[1, ["Elosho", "GanjahManPorros", "whatever"], "15:08", yt("TI4Vi1w3swY"), "UNVERIFIED"]] }),
    ee("ee-giant", "The Giant", "the-giant", {
      "Solo": [[1, ["scottiei3"], "1:03", yt("E6REc9d5BKU")], [2, ["Elosho"], "1:05", yt("OJrb_C2Om-U")], [3, ["IlSteveIl"], "1:06", yt("NhZvOS3e0cw")], [3, ["Veiizuh"], "1:06", yt("BnxPSXT2t_w")]],
      "2 players": [[1, ["Pedruscohg", "Luisete2105"], "0:47", yt("qXIOwmtb6xo")]],
      "3 players": [[1, ["Itzs Nukez", "Luisete2105", "Pedruscohg"], "0:46", yt("r_jvQ_SP-MI")], [1, ["SalomonV", "GanjahManPorros", "Benja"], "0:46", yt("SYsFeulPatQ")]],
      "4 players": [[1, ["Luisete2105", "Pedruscohg", "Itzs Nukez", "UltimateZenith1"], "0:46", yt("SjYY1VGck-A")]] }),
    hr("hr-de", "Der Eisendrache", "der-eisendrache", {
      "Solo": [[1, ["Ashyfutftw"], "Round 255", yt("mJq_V-lzH_s"), "", "First listed of a 21-way tie at the round cap"]],
      "2 players": [[1, ["FadedZ", "oJumpy"], "Round 223", yt("Noh6O8k-BW8")]],
      "3 players": [[1, ["zQ_Shady", "JxstTacTicaL", "En3RgY"], "Round 143", yt("EPZU1AvaFnQ")]],
      "4 players": [[1, ["Strive of JK", "Mr.moli", "shinku", "pastoryan"], "Round 107", yt("_suMGx2gmqY")]] }),
    hr("hr-rev", "Revelations", "revelations", {
      "Solo": [[1, ["CrashMyBandicoot"], "Round 255", yt("cUqsLlYP4rI"), "", "First listed of a 62-way tie at the round cap"]],
      "2 players": [[1, ["oJumpy", "Deffened"], "Round 255", yt("E5zAmqI147Y")]],
      "3 players": [[1, ["NoTex", "zQ_Shady", "JxstTacTicaL"], "Round 195", yt("cV94tfFOjUk")]],
      "4 players": [[1, ["Strive of JK", "Mr.moli", "shinku", "pastoryan"], "Round 122", yt("EFNAwwn1gzo")]] }),
    hr("hr-soe", "Shadows of Evil", "shadows-of-evil", {
      "Solo": [[1, ["TheGamerzEnd"], "Round 255", yt("c8-fJrb9r6s"), "", "One of many runs tied at the round cap"]] }),
  ];

  S.speedruns = S.speedruns || {};
  S.speedruns.bo3 = {
    game: "Call of Duty: Black Ops III", gid: "bo3", status: "active", read: "23 Nov 2026",
    intro: "Black Ops III Zombies still has one of the busiest record scenes in the series, ten years after release. Runners race each map's main Easter egg from spawn to the final cutscene, push for the round cap of 255, or chase round-based splits (30, 50, 70, 100). This section only covers records; for how each quest works, see the map guides elsewhere on The Codex.",
    kinds: { ee: "Easter egg speedruns", hr: "High rounds", round: "Round speedruns" },
    categories,
    recent: [
      { text: "Gorod Krovi, round 70 speedrun (Classic GobbleGum)", runner: "Tacos", time: "1:58:12", src: "https://zwr.gg/" },
      { text: "Gorod Krovi, round 70 speedrun (No GobbleGum)", runner: "Tacos", time: "2:01:35", src: "https://zwr.gg/" },
      { text: "Ascension (Zombies Chronicles), round 100 speedrun (Mega GobbleGum)", runner: "deusadigital", time: "2:35:25", src: "https://zwr.gg/" },
    ],
    roundCats: ["Round 30", "Round 50", "Round 70", "Round 100", "Round 255", "Super 30"],
    rules: [
      "Each run is tracked separately for Solo, 2, 3 and 4 players.",
      "Boards are split by GobbleGum use: Classic only, Mega allowed, No GobbleGum, and Any%.",
      "Easter egg timing runs from the start of the game to the end of the main quest.",
      "Every submission needs a full, unedited video.",
      "From February 2026, PC world-record submissions must be played on the BOIII Community Client version 1.0.8 or newer. Console runs and Easter egg speedruns are exempt.",
      "Extra boards cover challenges such as No Man's Land, First Room, No Power, No Perks and No Jugg, plus Flawless, No AATs and Dead Ops Arcade.",
    ],
    rulesNote: "This is a short summary in our own words. The full, current rules live on the leaderboard sites; check them before submitting a run.",
    strategy: {
      ee: ["Learn the route solo first: most top runs follow one fixed order of steps and weapon pickups.", "Strong runs lean on Mega GobbleGums that skip waiting, such as round-skipping and power-up gums.", "Co-op runs split the steps between players, which is why 2 to 4 player times are often faster than solo."],
      hr: ["High-round runs are about survival over many hours, not speed, so safe training spots and reliable wonder weapons matter most.", "Round 255 is the game's cap; many players have reached it, so solo boards on some maps show long ties.", "Co-op high rounds are rarer because one player's mistake can end the game for everyone."],
    },
    sources: [
      { title: "Zombies World Records: Black Ops III leaderboards", url: "https://zwr.gg/leaderboards/bo3/" },
      { title: "Zombies World Records: news #92, PC client requirement (1 Feb 2026)", url: "https://zwr.gg/" },
      { title: "speedrun.com: Call of Duty: Black Ops III (not read automatically)", url: "https://www.speedrun.com/" },
    ],
  };

  S.srUrl = (gid, c) => (document.body.dataset.root || "") + (c ? `pages/speedrun-category.html?g=${gid}&c=${c}` : `pages/speedruns.html?g=${gid}`);

  // Every record a runner holds or shares, across all games with speedrun data
  S.runnerRecords = name => {
    const k = String(name || "").toLowerCase().trim(); if (!k) return [];
    const out = [];
    Object.values(S.speedruns).forEach(sr => sr.categories.forEach(c => Object.entries(c.boards).forEach(([pl, rows]) => rows.forEach(r => {
      const hit = r[1].find(x => x.toLowerCase() === k);
      if (hit) out.push({ runner: hit, game: sr.game, gid: sr.gid, map: c.map, cat: c.id, catName: c.short, players: pl, rank: r[0], time: r[2], video: r[3], flag: r[4] || "" });
    }))));
    return out;
  };

  // Hub table on the BO3 game page: one row per map, solo Easter egg world record
  if (S.hubs && S.hubs.bo3) S.hubs.bo3.speedruns = categories.filter(c => c.kind === "ee").map(c => {
    const r = c.boards["Solo"][0]; return { category: `${c.map} Easter egg (solo)`, time: r[2], runner: r[1].join(" + "), note: r[4] || "", cat: c.id };
  });
})();
