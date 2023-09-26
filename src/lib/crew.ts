const crew = {
  name: "",
  description:
    "You aren't bad people, necessarily, but they end up on the wrong side of the authorities - thieves, killers, bandits, morally grey professionals, dealers and heretics. Outlaw adventures are about breaking the law, for good or bad reasons, and dealing with the fallout.",
  reputation: "", // Ambitious | Brutal | Daring | Honorable | Professional | Savvy | Strange | Subtle
  harm: "",
  frame: {
    type: "craft", // "craft" | "station"
    condition: 10,
    defenseRating: 10,
  },
  powerSystem: {
    name: "Chemical Engine",
    speed: 0,
    outputPower: 7,
    availability: "", // can be "available", "unavailable", or any other statuses you want to specify
  },
  modules: [],
  cred: {
    coffers: {
      current: 0,
      max: 4,
    },
  },
  tier: {
    current: 2,
    max: 6,
  },
  rep: {
    current: 0,
    max: 12,
  },
  specialAbilities: [],
  cohorts: [
    {
      type: "", // "craft" | "agent"
      condition: "", // can be "Weak", "Impaired", or "Broken"
    },
  ],
  factions: [
    {
      name: "",
      tier: 1,
      favor: {
        current: 0,
        max: 8,
      },
    },
  ],
  heat: {},

  minorBeats: [
    "Charm someone with tales of your exploits.",
    "Engage in reckless abandon with drink, drugs or sex.",
    "Slay a beast and harvest valuable resources from it.",
    "Discover a hidden outpost or refuge in The Crucible.",
    "Survive a space skirmish with significant damage to your ship.",
    "ecure a valuable treasure but at great personal risk.",
    "Outduel a rival pirate crew.",
    "Help an important or influential figure in outpost.",
    "Stand your ground against a syndicate when diplomacy would be safer.",
    "Forge an alliance with another group or crew.",
    "Get in trouble with the authorities.",
    "Rescue someone from peril.",
    "Make a dramatic entrance that's a Risky action.",
    "Claim a valuable resource from a dangerous location.",
    "Defend a ship or outpost from attack.",
    "Have at least three outposts know your name, for good or ill.",
    "Rush into danger before anyone else.",
    "Have a cocktail, fighting move, or legendary beast named after you.",
    "Go somewhere where no-one else has stepped foot for at least a century.",
    "Win an unarmed brawl in an outpost.",
    "Eject someone into the void of space (they really deserved it).",
  ],
  majorBeats: [
    "Successfully assault a ship, fortress, or other valuable target",
    "Acquire a unique rare or powerful item, preferably magic.",
    "Slay a beast that's at least five times your size.",
    "Have a landmark or connection named after you.",
    "Upgrade a haunt to max level.",
    "Save an outpost from destruction or doom.",
    "Establish secure space routes connecting multiple outposts / hideouts.",
    "Successfully perform a disadvantaged or extremely unlikely action that saves the day.",
    "Document your adventures in a holo-diary, or a shanty.",
    "Lead a group or organisation (other than your crew).",
    "Lead and get full credit for an expedition into the deepest parts of The Crucible (Tier 3 or deeper)",
  ],
};
