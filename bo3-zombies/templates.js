// ------------------------------------------------------------
// Article templates: the standard section outline for each article type.
// An article in data.js can supply its own `sections` and `references`
// to replace these; otherwise the page fills in the outline below with
// placeholder text so the wiki layout is visible.
//
// Section format: { title, body (HTML string), sub: [ { title, body } ] }
// In body text, write [ref:1] to cite reference 1.
// ------------------------------------------------------------
window.TEMPLATES = {
  characters: ["Appearance", "Personality", "Biography|Early life|Events of the game", "Abilities|Combat style|Skills", "Relationships", "Quotes", "Trivia"],
  locations:  ["Description", "Geography|Areas|Points of interest", "History", "Inhabitants", "Items found here", "Enemies", "Trivia"],
  items:      ["Description", "Acquisition", "Stats|Base stats|Upgrades", "Usage", "Lore", "Trivia"],
  lore:       ["Overview", "History|Origins|Key events", "Significance", "Related figures", "Theories", "Trivia"],
  quests:     ["Overview", "Requirements", "Walkthrough|Part 1|Part 2", "Rewards", "Choices and outcomes", "Trivia"],
  enemies:    ["Description", "Locations", "Behavior|Attacks|Phases", "Strategy", "Drops", "Lore", "Trivia"],
  missions:   ["Overview", "Walkthrough", "Collectibles", "Choices", "Trivia"],
  mpmaps:     ["Overview", "Layout", "Callouts", "Spawns", "Strategy|By mode", "Trivia"],
  weapons:    ["Overview", "Stats", "Attachments", "Recommended setups", "Comparison", "Trivia"],
  scorestreaks: ["Overview", "Usage", "Counters", "Trivia"],
  perks:      ["Overview", "Effect", "Best uses", "Trivia"],
  modes:      ["Overview", "Rules", "Strategy", "Competitive use", "Trivia"],
  zombies:    ["Overview", "Layout", "Perks and Pack-a-Punch", "Easter egg", "Survival strategy", "Trivia"],
  gods:       ["Overview", "Abilities|Passive|Abilities", "Aspects", "Builds", "Lore", "Trivia"],
  roles:      ["Overview", "Responsibilities", "Recommended picks", "Tips"],
  classes:    ["Overview", "Action skill", "Skill trees", "Builds", "Trivia"],
  chambers:   ["Overview", "Solution", "Least portals", "Trivia"],
  coop:       ["Overview", "Mechanics", "Tips"],
  mechanics:  ["Overview", "How it works", "Tips", "Trivia"],
  dlc:        ["Overview", "Content", "Reception", "Trivia"],
  nations:    ["Overview", "Starting position", "National ideas", "Strategy", "Formables", "Trivia"],
  ideas:      ["Overview", "Ideas", "Best uses"],
  achievements: ["Requirements", "Strategy", "Trivia"],
  fighters:   ["Overview", "Move list", "Combos", "Frame data", "Kameo pairings", "Fatalities", "Trivia"],
  combos:     ["Overview", "Routes", "Notes"],
  fatalities: ["Inputs", "Range", "Trivia"],
  villagers:  ["Overview", "Personality", "House", "Gifts", "Trivia"],
  critters:   ["Overview", "Availability", "Location", "Price", "Trivia"],
  diy:        ["Overview", "Materials", "How to get", "Trivia"],
  events:     ["Overview", "Dates", "Rewards", "Trivia"],
  tech:       ["Overview", "Techniques"],
  competitive: ["Overview", "Events", "Teams and players", "Terminology"]
};

window.buildSections = function (article) {
  if (article.sections) return article.sections;
  const filler = [
    "This section is a placeholder. Long-form text goes here: a few paragraphs written in an encyclopedic voice, describing the subject in detail and linking to related pages.",
    "Contributors should cite in-game sources, official guides or developer interviews wherever a claim isn't obvious from playing the game.[ref:1]",
    "Spoilers should be marked, and speculation belongs in a Theories section rather than in the main text.[ref:2]"
  ];
  return (window.TEMPLATES[article.category] || window.TEMPLATES.lore).map((spec, i) => {
    const [title, ...subs] = spec.split("|");
    return {
      title,
      body: `<p>${filler[i % 3]}</p>` + (i === 0 ? `<p>${filler[(i + 1) % 3]}</p>` : ""),
      sub: subs.map((s, j) => ({ title: s, body: `<p>${filler[(i + j + 2) % 3]}</p>` }))
    };
  });
};

window.buildReferences = function (article) {
  return article.references || [
    "Placeholder source: in-game text, codex entry or dialogue.",
    "Placeholder source: official guide, interview or developer post."
  ];
};
