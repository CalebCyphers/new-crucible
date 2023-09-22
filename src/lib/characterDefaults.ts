export const characterDefaults = {
  name: "",
  race: {
    name: "",
    subtype: "",
    traits: [],
  },
  image: {
    url: "",
    alt: "character avatar",
    caption: "character avatar",
  },
  class: "",
  classes: [
    {
      name: "",
      subtype: "",
      level: 1,
      hit_die: 6,
      spellcasting: "int",
      features: [],
    },
  ],
  proficiency_mod: 0,
  hit_points: {
    max: 10,
    current: 10,
    temp: 0,
  },
  conditions: {
    Blinded: false,
    Charmed: false,
    Deafened: false,
    Exhaustion: false,
    Frightened: false,
    Grappled: false,
    Incapacitated: false,
    Invisible: false,
    Necrotic: false,
    Paralyzed: false,
    Petrified: false,
    Poisoned: false,
    Prone: false,
    Restrained: false,
    Stunned: false,
    Unconscious: false,
  },
  domains: {
    arcana: false,
    academia: false,
    celestial: false,
    labor: false,
    daemonic: false,
    corpro: false,
    commerce: false,
    high_society: false,
    low_society: false,
    military: false,
    nature: false,
    criminal: false,
  },
  ability_scores: {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
  },
  skills: {
    Athletics: ["str", false, 0],

    Acrobatics: ["dex", false, 0],
    SleightOfHand: ["dex", false, 0],

    Stealth: ["dex", false, 0],

    Arcana: ["int", false, 0],

    History: ["int", false, 0],

    Investigation: ["int", false, 0],

    Nature: ["int", false, 0],

    Religion: ["int", false, 0],

    AnimalHandling: ["wis", false, 0],

    Insight: ["wis", false, 0],

    Medicine: ["wis", false, 0],

    Perception: ["wis", false, 0],

    Survival: ["wis", false, 0],

    Deception: ["cha", false, 0],

    Intimidation: ["cha", false, 0],

    Performance: ["cha", false, 0],

    Persuasion: ["cha", false, 0],
  },
  armor_class: {
    value: 10,
    description: "",
  },
  saving_throws: {
    str: false,
    dex: false,
    con: false,
    int: false,
    wis: false,
    cha: false,
  },
};
