// ------------------------------------------------------------
// Every Call of Duty Zombies map, by game, for the series-wide Zombies index
// (pages/zombies.html). [name, year, mainQuest] — mainQuest: true / false.
// Maps with a full page are matched by title against S.articles.
// Treyarch titles only for the classic mode; Cold War onward include Dark Aether maps.
// Release years are of the map, not the game. VERIFY years and main-quest flags.
// ------------------------------------------------------------
(function (S) {
  S.zombiesMaps = [
    ["Call of Duty: World at War", [["Nacht der Untoten", 2008, false], ["Verrückt", 2009, false], ["Shi No Numa", 2009, false], ["Der Riese", 2009, false]]],
    ["Call of Duty: Black Ops", [["Nacht der Untoten", 2010, false], ["Verrückt", 2011, false], ["Shi No Numa", 2011, false], ["Der Riese", 2011, false], ["Kino der Toten", 2010, false], ["Five", 2010, false], ["Dead Ops Arcade", 2010, false], ["Ascension", 2011, false], ["Call of the Dead", 2011, false], ["Shangri-La", 2011, false], ["Moon", 2011, true]]],
    ["Call of Duty: Black Ops II", [["TranZit", 2012, true], ["Nuketown Zombies", 2012, false], ["Die Rise", 2013, true], ["Mob of the Dead", 2013, true], ["Buried", 2013, true], ["Origins", 2013, true]]],
    ["Call of Duty: Black Ops III", [["Shadows of Evil", 2015, true], ["The Giant", 2015, true], ["Der Eisendrache", 2016, true], ["Zetsubou No Shima", 2016, true], ["Gorod Krovi", 2016, true], ["Revelations", 2016, true],
      ["Nacht der Untoten", 2017, false, "chronicles"], ["Verrückt", 2017, false, "chronicles"], ["Shi No Numa", 2017, false, "chronicles"], ["Kino der Toten", 2017, false, "chronicles"],
      ["Ascension", 2017, false, "chronicles"], ["Shangri-La", 2017, false, "chronicles"], ["Moon", 2017, true, "chronicles"], ["Origins", 2017, true, "chronicles"]]],
    ["Call of Duty: Black Ops 4", [["IX", 2018, true], ["Voyage of Despair", 2018, true], ["Blood of the Dead", 2018, true], ["Classified", 2018, false], ["Dead of the Night", 2019, true], ["Ancient Evil", 2019, true], ["Alpha Omega", 2019, true], ["Tag der Toten", 2019, true]]],
    ["Call of Duty: Black Ops Cold War", [["Die Maschine", 2020, true], ["Firebase Z", 2021, true], ["Outbreak", 2021, true], ["Mauer der Toten", 2021, true], ["Forsaken", 2021, true]]],
    ["Call of Duty: Vanguard", [["Der Anfang", 2021, false], ["Terra Maledicta", 2022, false], ["Shi No Numa (Vanguard)", 2022, true], ["The Archon", 2022, true]]],
    ["Call of Duty: Modern Warfare III", [["Operation Deadbolt", 2023, false]]],
    ["Call of Duty: Black Ops 6", [["Liberty Falls", 2024, true], ["Terminus", 2024, true], ["Citadelle des Morts", 2024, true], ["The Tomb", 2025, true], ["Shattered Veil", 2025, true], ["Reckoning", 2025, true]]],
    ["Call of Duty: Black Ops 7", [["Ashes of the Damned", 2025, true]]]
  ];

  // ---- One page per map per game ----
  // A map that appears in several games gets one page per version, titled "Map (Game)".
  // A map found in only one game keeps its plain name. Reimagined maps (new name, same idea) are linked through S.zmRemakes.
  S.zmRemakes = { "The Giant": "Der Riese", "Blood of the Dead": "Mob of the Dead", "Classified": "Five", "Tag der Toten": "Call of the Dead", "Shi No Numa (Vanguard)": "Shi No Numa" };  // VERIFY
  const shortG = t => t.replace(/^Call of Duty: /, "");
  S.zmBase = name => S.zmRemakes[name] || name;
  // Every appearance of a map: [{ name, game, year, quest, tag, title }]
  S.zmVersions = name => {
    const base = S.zmBase(name), out = [];
    S.zombiesMaps.forEach(([game, maps]) => maps.forEach(([n, year, quest, tag]) => { if (S.zmBase(n) === base) out.push({ name: n, game, year, quest, tag: tag || (n !== base ? "reimagined" : ""), title: "" }); }));
    const sameName = n => out.filter(v => v.name === n).length;
    out.forEach(v => v.title = sameName(v.name) > 1 ? `${v.name} (${shortG(v.game)})` : v.name);
    return out;
  };
  S.zmPageTitle = (name, game) => (S.zmVersions(name).find(v => v.name === name && v.game === game) || { title: name }).title;
  S.zmMapUrl = name => (document.body.dataset.root || "") + "pages/zombies-map.html?m=" + encodeURIComponent(S.zmBase(name));
})(window.SITE);
