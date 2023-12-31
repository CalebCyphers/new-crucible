import type { Item } from "./equipment";

// IDEA - CHOKE checks?

type statTrait = {
  name: string;
  description: string;
  item: Item;
  stat: "CON" | "INT" | "STR" | "CHA" | "DEX" | "WIS" | "";
  // constitution | Intelligence | Strength | Charisma | Dexterity | Wisdom
  adjustment: 3 | 2 | 1 | -1 | -2;
};

export const stat_traits: statTrait[] = [
  {
    name: "ACCOUNTANT",
    description:
      "Financial number-crunching is your raison d'être. You may identify inconsistencies in ledgers without rolling the dice, and you can always spot a counterfeit bill. Once per mission, you may ask the GM where and how a given entity is spending its resources, and receive an honest answer (including offworld accounts, cred-laundering, and employee embezzlement). If you notice and correct an inconsistency in your CRUCIBLE game, like lost HP that was never marked or a BOOST someone forgot they had, gain BOOST.",
    item: {
      name: "Coffee thermos",
      description: "+1D6 HP, one use",
    },
    stat: "CHA",
    adjustment: -2,
  },
  {
    name: "ACE",
    description:
      "You can do tricky vehicular maneuvers, like drifting or doing a barrel roll, without rolling the dice. If it's something really difficult, like flying sideways through a small opening or riding a motorcycle across a tightrope, you can do it, but a key component of your vehicle will be destroyed—the GM will tell you what. When you have downtime to repair it, you can use it again.",
    item: {
      name: "Fuzzy Dice",
      description: "gives any vehicle +2 MAX HP",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "ACHILLES",
    description:
      "In exchange for great power, you have a terrible weakness to a common substance, such as salt, iron, or silver. It could also be something considered uncommon (like a specific mineral from space), but the GM will make sure it appears often enough to be a problem. If this substance physically touches you, you are completely incapacitated until you have downtime to receive medical care.",
    item: {
      name: "Substance Detector",
      description: "(pings on proximity)",
    },
    stat: "CON",
    adjustment: 3,
  },
  {
    name: "AIMBOT",
    description:
      "You can only attack one target at a time. You are unable to engage another until your target has either left your line of sight or died. While attacking your target, partial successes become full ones.",
    item: {
      name: "Hand cannon",
      description: "1d6+1 DAMAGE",
    },
    stat: "INT",
    adjustment: -1,
  },
  {
    name: "ANALYST",
    description:
      "You are trained in the art of war, and your judgment in the field of combat analysis is impeccable. When a fight breaks out, you may always ask the GM for any nearby exits, as well as what tactics your enemies plan to use (e.g. flanking, a bum rush, or picking off the weak), and receive an honest answer.",
    item: {
      name: "Bolt-action rifle",
      description: "1D6+1 DAMAGE",
    },
    stat: "INT",
    adjustment: 2,
  },
  {
    name: "ANIMUS",
    description:
      "Your touch grants sapience. Once per mission, you may touch an object or animal to give it human intelligence, movement, and speech. Those you “awaken” in this way are under no obligation to take it well.",
    item: {
      name: "Lighter",
      description: "your longtime companion",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "AQUATIC",
    description:
      "You're a water-breather—perhaps due to spliced-on fish genes or cybernetic gills—and you may stay submerged indefinitely with no ill effects. When you roll the dice to do something risky underwater, roll 3D6 and take the best two. On land, roll 3D6 and take the worst two.",
    item: {
      name: "Heavy harpoon launcher",
      description: "1D6+2 DAMAGE",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "ARMORED",
    description:
      "You are fused with a cumbersome suit of power armor that you cannot remove. Once per mission, you can completely ignore any amount of DAMAGE dealt to you.",
    item: {
      name: "Power armor",
      description: "2 ARMOR, cannot be unequipped",
    },
    stat: "DEX",
    adjustment: -2,
  },
  {
    name: "ARTIST",
    description:
      "If you have a reasonable amount of time and complete safety, you can create something with your art supplies and it will become real until the end of the mission.",
    item: {
      name: "Art supplies",
      description: "one use",
    },
    stat: "CHA",
    adjustment: 2,
  },
  {
    name: "ASSASINATION",
    description:
      "Once per mission, you may instantly kill up to three weak enemies (3 HP or less) who are completely unaware of your presence, without rolling the dice. If you do not have a way of measuring an enemy's HP, you may have to gauge their condition based upon GM description.",
    item: {
      name: "Wristblade",
      description: "3 DAMAGE, does not count as equipped",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "ATMOKINESIS",
    description:
      "You can always change the weather within a mile of you. Once per mission, you can make it something particularly severe/dangerous (tornadoes, extreme heat, freezing blizzards, etc.) Once changed, it's difficult to undo.",
    item: {
      name: "Lightning grenade",
      description: "1D6 DAMAGE, one use",
    },
    stat: "INT",
    adjustment: -1,
  },
  {
    name: "AURA",
    description:
      "You can see the auras of yourself and others; their colors are up to your interpretation. You may also regulate and amplify your aura to conduct it between bodies—while doing so, NPCs who are touching you won't CHOKE, and anyone who remains in constant physical contact with you for about ten minutes regains 1D6 HP.",
    item: {
      name: "Psionic grenade",
      description: "scrambles emotions, one use",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "BERZERKER",
    description:
      "For you, there are no tactics—only the thrill of battle. If you rush into combat with no precaution or pre-planning, your first attack will deal double DAMAGE.",
    item: {
      name: "Minigun",
      description: "1D6+2 DAMAGE",
    },
    stat: "INT",
    adjustment: -2,
  },
  {
    name: "BOMBER",
    description:
      "If you have a reasonable amount of prep time, you can use your bomb kit and attempt to destroy any structure by rolling +INT. You may also spend a WAR DIE at any time to create a small, throwable explosive that deals 1D6 DAMAGE.",
    item: {
      name: "Bomb kit",
      description: "one use",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "BOTTLENECK",
    description:
      "If you put yourself between something you are defending and a large amount of enemies, you deal +1 DAMAGE per 5 enemies attempting to harm you for as long as you hold your position. You may sacrifice yourself to ensure that an oncoming horde does not pass.",
    item: {
      name: "Antique short sword",
      description: "1D6+1 DAMAGE",
    },
    stat: "INT",
    adjustment: -1,
  },
  {
    name: "BOUNCE",
    description:
      "When you deal damage to an enemy in melee combat, they are tossed with enough force to knock them clear through a wall (when you BOOST an attack, you may always PUSH 1 in addition to other effects).",
    item: {
      name: "Kinetic gauntlet",
      description: "1D6 DAMAGE",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "BREAKDOWN",
    description:
      "Your mind is paranormally sensitive to the cacophony of the outside world (or perhaps is a cacophonous world in and of itself). When you take this trait, randomly roll a CHOKE score for your character (D66, p. 148)—and roll against it when appropriate, as the GM would with an NPC. If you CHOKE, you must either drop everything you're doing to perform the listed action, or immediately create a psionic shockwave from your skull, ten feet in diameter with the concussive force of a frag grenade. This shockwave deals 1D6+2 DAMAGE to everyone caught inside (including yourself).",
    item: {
      name: "Needle gun",
      description: "1D6+1 DAMAGE",
    },
    stat: "INT",
    adjustment: -1,
  },
  {
    name: "BUDDY",
    description:
      "You and another player who possesses the BUDDY trait are best friends. When you work together, you become an unstoppable force of nature, adding +1 whenever you apply a WAR DIE to your buddy's roll. If your buddy dies, your MAX HP is halved by grief (rounded down) until you dedicate a mission to delivering a special possession, such as their gun, their dog tags, or their favorite book, to a proper final resting place.",
    item: {
      name: "Friendship Bracelet",
      description: "matches another",
    },
    stat: "CHA",
    adjustment: 2,
  },
  {
    name: "BUILDER",
    description:
      "Given enough time, the right materials, and relative safety, you can build any common structure (guaranteed to be sound, sturdy, and reliable) without rolling the dice. You build things simple, solid, and square, so special structures and rush jobs will have complications—the GM will tell you what.",
    item: {
      name: "Toolbelt",
      description: "produce any hardware store tool, one use",
    },
    stat: "CHA",
    adjustment: -1,
  },
  {
    name: "CAMOUFLAGE",
    description:
      "You have an impressive collection of face paints and situationally-appropriate patterned fatigues, and you know how to use them. When you begin a mission, describe your current camo pattern, such as “desert,” “forest,” “jungle,” or “urban.” Take +1 to your roll whenever you roll to avoid detection in the corresponding environment.",
    item: {
      name: "Camouflage fatigues",
      description: "multiple patterns",
    },
    stat: "DEX",
    adjustment: 2,
  },
  {
    name: "CHAMPION",
    description:
      "You live for the righteous thrill of triumph. When you are the only one left standing in a fight, immediately gain 2D6 MAX HP and fully heal.",
    item: {
      name: "Spear",
      description: "1D6+1 DAMAGE",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "CHARM",
    description:
      "You can always manipulate people into doing what you want without rolling the dice, but you will have to make a significant sacrifice or maintain a difficult lie—the GM will tell you how.",
    item: {
      name: "Combat tuxedo",
      description: "1 ARMOR",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "CHEF",
    description:
      "You can cook a good meal in almost any situation without rolling the dice. When you need to cook an exquisite meal, roll +WIS and choose one of the following effects on a partial success, or two on a full success: grants +1 to any attribute for one roll, heals 1D6+CRE HP, pacifies and nourishes those who eat it.",
    item: {
      name: "Meat cleaver",
      description: "1D6 DAMAGE",
    },
    stat: "WIS",
    adjustment: 1,
  },
  {
    name: "CHEMIST",
    description:
      "If you have a reasonable amount of prep time and complete safety, you can set up your portable lab and synthesize any common chemical, such as isopropyl alcohol, lighter fluid, or chloroform. Synthesizing esoteric or experimental compounds will require special supplies—the GM will tell you what.",
    item: {
      name: "Portable lab",
      description: "three uses",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "CLASSY",
    description:
      "You are well-versed in the aesthetics, logistics, and mores of high society. Your name always ends up on VIP lists, and rich socialites tend to share gossip with you freely. Lower-class people will never trust you, and you struggle to hide the sticky psychic stench of wealth.",
    item: {
      name: "Diamond jewelery",
      description: "Quietly bribe someone, one use",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "CLIMBER",
    description:
      "You can climb surfaces with hand- and footholds without rolling the dice, and stick to smooth surfaces by rolling +DEX. If you do so during a dangerous situation, you must roll +DEX again to unstick yourself without falling or getting hurt.",
    item: {
      name: "Grapple gun",
      description: "50 feet of cable",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "COMMANDO",
    description:
      "You're a real life action hero. You deal +1 DAMAGE during any solo fight where you are visibly outmatched, but take a -2 DAMAGE penalty when someone is fighting alongside you.",
    item: {
      name: "Rocket launcher",
      description: "1D6+2 DAMAGE",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "CONCEAL",
    description:
      "You can always take weapons and contraband through pat-downs, checkpoints, and metal detectors without rolling the dice. Once per mission, if you have no weapon equipped and no weapons in your inventory, you may reveal a random weapon (roll D66 on the weapons table, p. 83) and say that you had it hidden away the whole time.",
    item: {
      name: "Leather trenchcoat",
      description: "1 ARMOR",
    },
    stat: "DEX",
    adjustment: -1,
  },
  {
    name: "CONTORTIONIST",
    description:
      "You can always fit through small openings and perform feats of flexibility without rolling the dice. If you contort yourself in a particularly difficult way, you've pulled something—decrease your DEX attribute by 2 until the end of the mission.",
    item: {
      name: "Skin-tight suit",
      description: "1 ARMOR",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "CRUEL",
    description:
      "Merely shooting, burning, or stabbing someone is never enough for you—without fail, you always double down and twist the knife. While dealing DAMAGE, you may reroll any dice which show up as 1.",
    item: {
      name: "Micro-blade stiletto",
      description: "1D6 + RFX DAMAGE",
    },
    stat: "",
    adjustment: "+1 DMG vs fleeing targets",
  },
  {
    name: "CUT",
    description:
      "You can easily cut any mundane object (such as a tree, a dumpster, or an oil tanker) into several pieces given enough time. You may also instantly cut something perfectly in half, as long as you identify its unique fracture point by rolling 1D6 and correctly predicting the result. When someone damages you, and you're wielding a cutting weapon, you may roll DAMAGE to counter theirs. On a mismatch, they hurt you as usual and your damage roll means nothing, but on a tie, you are unscathed... and your opponent is revealed to have been cut in half.",
    item: {
      name: "Katana",
      description: "1D6+1 DAMAGE",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "CYBORG",
    description:
      "You have augmented ultrahuman agility. You can reroll one damage die—dealing or receiving—once per fight.",
    item: {
      name: "Cyborg exoskeleton",
      description: "1 ARMOR",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "DEBATEUR",
    description:
      "If you change an NPC's mind or convincingly win an argument against them, you may immediately deal 6 DAMAGE to them (ignoring armor) in a psychic attack.",
    item: {
      name: "Debate notes",
      description: "Use to cite inarguable statistics, one use",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "DEFUSE",
    description:
      "When you would attempt to defuse a bomb or bomb-like device, you may open it up to reveal a mess of wires. Ask the GM to roll 1D6 and choose an amount of wire colors equal to the number rolled (the ref should choose from the following list: red, orange, yellow, green, blue, purple). The GM should secretly decide which wire, when cut, defuses the bomb, assuming that all others will detonate it. You may roll 1D6 to receive a list of that many wire colors which are unsafe to cut. If you roll equal to or over the amount of wire colors, you have no idea.",
    item: {
      name: "Wire cutters",
      description: "3 DAMAGE",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "DETECTIVE",
    description:
      "At the beginning of each mission, the GM will privately tell you a secret, such as the identity of a killer or the truth behind a conspiracy. Every time you do something which produces conclusive, show-stopping evidence towards revealing the secret, gain a WAR DIE.",
    item: {
      name: "Notepad",
      description: "provides details about someone, three uses",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "Director",
    description:
      "Once per mission, you may firmly announce, 'CUT!' The camera pulls back, revealing a set, and you may give direction to the other characters and NPCs as if they were actors in a movie. When ready to play again, say “ACTION!” and start again from the beginning of the scene or fight (essentially rewinding time, allowing characters to make different decisions and rolls).",
    item: {
      name: "Stupid hat",
      description: "",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "DISGUISE",
    description:
      "You can disguise yourself as anyone as long as you have a reasonable amount of prep time; however, your cover will be blown if you either speak, move quickly, or get hurt—the GM decides which.",
    item: {
      name: "Bulletproof vest",
      description: "1 ARMOR",
    },
    stat: "INT",
    adjustment: 1,
  },
  //   {
  //     name: "DRUID",
  //     description:
  //       "You are a perceptive lorekeeper who uses your surroundings for divination. When you enter a new area, you may ask the GM one question about the topography or ecosystem's relevance to the mission, and receive an honest answer.",
  //     item: {
  //       name: "Medicinal herb",
  //       description: "cures an ailment, one use",
  //     },
  //     stat: "INT",
  //     adjustment: 1,
  //   },
  {
    name: "DUELIST",
    description:
      "You deal +1 DAMAGE during a fair fight with a single opponent. You deal another +1 DAMAGE if you attempt to intimidate, taunt, or seduce that opponent.",
    item: {
      name: "Laser katana",
      description: "1D6+2 DAMAGE",
    },
    stat: "",
    adjustment: "+1 DAMAGE with melee weapons",
  },
  {
    name: "ECHO",
    description:
      "You can create 1D6 shadow-clones of yourself at will. Doing so stretches you thin, and costs you HP equal to the amount summoned. The clones appear incorporeal, but can physically affect the world as you can. Each clone has MAX HP equal to your MAX HP minus the number of clones, does not think or feel, and behaves roughly as you behave.",
    item: {
      name: "Quantum duplicator",
      description: "copies any object, one use",
    },
    stat: "CON",
    adjustment: 1,
  },
  {
    name: "EMPATHY",
    description:
      "You can sense how anyone is feeling without rolling the dice. Whenever you do something risky to prevent needless pain and death, roll with +1. Any time you do something violent or harmful, roll with -1.",
    item: {
      name: "Invisibility cloak",
      description: "room for two people",
    },
    stat: "STR",
    adjustment: -1,
  },
  {
    name: "EXPERT",
    description:
      "Your encyclopedic knowledge of a scientific discipline exceeds professional and borders on obsessive. When you take this trait, choose an “-ology,” such as sociology, entomology, or cryptozoology. When you roll the dice to do something risky related to your field of expertise, roll 3D6 and take the best two.",
    item: {
      name: "Textbook",
      description: "answer any field-related question, one use",
    },
    stat: "CHA",
    adjustment: -1,
  },
  {
    name: "FASHIONABLE",
    description:
      "You may combine multiple pieces of body-sized armor and wear them all at once to gain their cumulative ARMOR score, if you can convincingly explain how they work together as a cohesive outfit.",
    item: {
      name: "Leather jacket",
      description: "1 ARMOR",
    },
    stat: "DEX",
    adjustment: -2,
  },
  {
    name: "FATALITY",
    description:
      "Once per mission, you may describe the WIS and brutal finishing move you perform on an enemy with less than 3 HP (if you do not have a way of measuring an enemy's HP, you may have to gauge their condition based upon GM description). Once you've performed your finisher, the enemy is permanently killed and cannot be revived by any means.",
    item: {
      name: "Kunai chain",
      description: "1D6 DAMAGE",
    },
    stat: "INT",
    adjustment: -1,
  },
  {
    name: "FATE",
    description:
      "You are able to manipulate the threads of chance, perhaps through careful study of reality's emergent properties or by some connection to the divine. When you would roll a WAR DIE, roll two instead and use either one as your result. If you roll doubles, use both.",
    item: {
      name: "Loaded dice",
      description: "difficult to detect",
    },
    stat: "INT",
    adjustment: -2,
  },
  {
    name: "FIELD",
    description:
      "Once per mission, you may project a bubble of solid psionic force ten feet in diameter which is centered on you and provides anyone inside 3 ARMOR against outside attacks. If you roll the dice +WIS, you may attempt to fashion the field into a different shape. Failing this roll or getting hurt while projecting the field immediately dissipates it.",
    item: {
      name: "Paint gun",
      description: "clearly marks a surface or area",
    },
    stat: "STR",
    adjustment: 2,
  },
  {
    name: "FIEND",
    description:
      "You utilize amphetamines to enhance your focus. When you have a second free, you can pop some pills and take +2 to your next INT roll.",
    item: {
      name: "Pill bottle",
      description: "one use",
    },
    stat: "WIS",
    adjustment: 1,
  },
  {
    name: "FIGHTER",
    description:
      "Your study of hand-to-hand, the basis of all combat, has made your body itself into a lethal weapon. You may choose to deal 1D6 DAMAGE when attacking with no weapon equipped. Once per mission, you may launch a special, unarmed super attack which deals 1D6+2 DAMAGE and knocks most living things unconscious. When you do, state the name of your super attack.",
    item: {
      name: "Flashy outfit",
      description: "1 ARMOR",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "FLIGHT",
    description:
      "You have the ability to fly, perhaps using wings, a jetpack, or telekinetic levitation. If you take damage while in the air, you must roll +DEX to avoid a dangerous fall or collision with something nearby.",
    item: {
      name: "AR goggles",
      description: "lets you see enemies' HP",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "FLURRY",
    description:
      "Once per mission, you may enter a “flurry state” during combat. In your flurry state, you may choose to instantly roll DAMAGE against anyone who hurts you; doing so ends the state. When you leave your flurry state, take 1D6 DAMAGE from overexertion.",
    item: {
      name: "Energy drink",
      description: "+1D6 HP, one use",
    },
    stat: "DEX",
    adjustment: 2,
  },
  {
    name: "FOCUS",
    description:
      "When you have a moment of utter tranquility to rest and digest the day's events (like a drink at an empty bar or a gorgeous view), gain a WAR DIE. You lose this WAR DIE if you fail to use it during this mission.",
    item: {
      name: "Stress ball",
      description: "squeeze for +1 to any WAR DIE roll",
    },
    stat: "CHA",
    adjustment: -1,
  },
  {
    name: "FORAGE",
    description:
      "When you have some prep time, you can ask the GM about the local flora and fauna. If you present a convincing reason why one of these things could work for the ailment you're trying to treat, you may heal yourself or someone else for 1D6 HP.",
    item: {
      name: "Machete",
      description: "1D6 DAMAGE",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "FREEZE",
    description:
      "Once per mission, you may freeze time for ten minutes and move around freely. You may not harm or otherwise alter any living things (as this would cause a superposition-collapse cascade), but you can do anything else that fits in the span of ten minutes, such as constructing a barricade, moving to a different location, or taking a short rest. To outside observers, you will look like a blur, and your actions will appear to have happened almost instantly. Your stasis grenade creates a zone of frozen time ten feet in diameter which stops anything that enters it.",
    item: {
      name: "Stasis grenade",
      description: "ten minute duration, one use",
    },
    stat: "INT",
    adjustment: -1,
  },
  {
    name: "GADGETS",
    description:
      "You always carry a treasure trove of bulky, delicate electronics. If you have space to work, you can use your electronics kit to create a device (equivalent in function to a trait-granted item of your choice), or a robot (has a trait of your choice, 3 HP, and 1 ARMOR).",
    item: {
      name: "Electronics kit",
      description: "three uses",
    },
    stat: "DEX",
    adjustment: -2,
  },
  {
    name: "GANGSTER",
    description:
      "You are part of an organized crime group such as a mafia syndicate, a yakuza clan, a cartel, or a triad. The GM will always tell you where to find illegal items. You can intimidate enemies without rolling, but cops and law-abiding civilians will always mistrust you.",
    item: {
      name: "Silencer",
      description: "attach to any gun",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "GENIUS",
    description:
      "You're really smart. You have to make sure everyone else knows it. Whenever you correct someone, especially on something pedantic (and you're actually right), heal 1 HP.",
    item: {
      name: "Glasses",
      description: "you can't see without them",
    },
    stat: "INT",
    adjustment: 2,
  },
  {
    name: "GOONS",
    description:
      "You begin each mission accompanied by 1D6 disposable goons. Each goon comes with 3 MAX HP and all standard issue items. You can roll +INT to command your goons. They tend to misinterpret commands, shoot themselves in the foot (figuratively or literally), and often make bizarre non-sequitur decisions under pressure.",
    item: {
      name: "Walkie-talkie",
      description: "summons goons to your position",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "GROUND",
    description:
      "You know how to cut through the noise, for better or for worse. Once per mission, you may plant yourself firmly and beckon your team to “form up” on you. If they do, mark the occasion with a firm gesture (like pointing forward or reloading your shotgun) and choose a bonus to activate for the next ten minutes: everyone in the area adds +2 to their DAMAGE dealt and adds +2 when rolling to do something risky, or all anomalous abilities and phenomena in the area are nullified.",
    item: {
      name: "Pump-action shotgun",
      description: "1D6+1 DAMAGE",
    },
    stat: "CHA",
    adjustment: -1,
  },
  {
    name: "GROW",
    description:
      "You may double your size at will, as long as your spatial manipulator belt is intact. Each time you do, increase your MAX HP by 1D6, increase your STR score by 1, and decrease your DEX score by 1. While enlarged, you may also add your current HP to any unarmed or melee DAMAGE you deal.",
    item: {
      name: "Spatial manipulator belt",
      description: "accessory",
    },
    stat: "CON",
    adjustment: -2,
  },
  {
    name: "HACKER",
    description:
      "If you have a reasonable amount of prep time and direct access, you can attempt to gain control of any computer or electronic machine by rolling the dice +INT. If you do not have direct access, you can attempt to hack in from a safe place using your briefcase computer.",
    item: {
      name: "Briefcase computer",
      description: "remotely access electronics",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "HAPPY",
    description:
      "You don't let anything get you down. You have +1 on all rolls to make a person or situation happier (but not necessarily better). If you ask the GM “What does this character enjoy?”, they will always answer truthfully.",
    item: {
      name: "Bundle of lollipops",
      description: "heal 1 HP, three uses",
    },
    stat: "STR",
    adjustment: -1,
  },
  {
    name: "HARVEST",
    description:
      "When you would deal a killing blow with a melee weapon, you may roll 1D6 to attempt to harvest an internal organ before death—on a 4 or above, consume it, and choose to a) gain a WAR DIE, or b) heal for 1D6 HP. On a 3 or below, your killing blow doesn't land.",
    item: {
      name: "Bloody axe",
      description: "1D6 DAMAGE",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "HATE",
    description:
      "Something about you just rubs people the wrong way, and you don't mind that at all. When you meet someone, roll +WIS—on anything but a success, they hate or strongly dislike you. When you attack someone because you truly hate them—not just for money, or because they were a threat, but because you hate them, and you can explain why—they will be absolutely obliterated, HP notwithstanding.",
    item: {
      name: "Bubblegum",
      description: "funny comic included",
    },
    stat: "CHA",
    adjustment: -1,
  },
  {
    name: "HAZARD",
    description:
      "You are unusually hardy when faced with toxins and pathogens. Once per mission, you may expose yourself to a hazardous substance and either a) suffer no ill effects at all, or b) receive a useful fact from the GM about the substance's effects, nature, or origin.",
    item: {
      name: "Gas mask",
      description: "ignore breathing-based damage",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "HEADSPACE",
    description:
      "You walk softly among the myriad glimmering beauties and horrors of the subconscious mind made manifest. Once per mission, you (and anyone physically touching you) may leap into the subconscious of a thinking being and explore it as a physical space, complete with objects, flora, fauna, and in some cases enemies. Even the slightest alteration to this physicalized headspace can have rippling consequences on the gestalt consciousness above, so it is imperative that any psychonaut be deliberate and controlled during their expedition into thought.",
    item: {
      name: "Psycho-recorder",
      description: "makes a mind backup tape, one use",
    },
    stat: "STR",
    adjustment: -2,
  },
  {
    name: "HEAVYWEIGHT",
    description:
      "You can tear through most inanimate obstacles with ease. If it's something really tough, like solid concrete or metal, it will be more difficult and complicated—the GM will explain how.",
    item: {
      name: "Break-action shotgun",
      description: "1D6+1 DAMAGE",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "HENSHIN",
    description:
      "Using your device, you can take on another form. This alternate form has one additional trait and 1D6 HP (reroll each time). If you reach 0 HP while transformed, you're knocked out for a few minutes, revert to normal, and can't transform again until the next mission.",
    item: {
      name: "Mystery device",
      description: "wearable",
    },
    stat: "armor",
    adjustment: -1,
  },
  {
    name: "HEX",
    description:
      "You can place any being under a hex, depriving them of good luck. For as long as you hold someone in your web of tainted fate, something of your choice always goes wrong—guns always jam, vehicles always fail to start, etc. Until you break the hex, it applies to you as well.",
    item: {
      name: "Ritual dagger",
      description: "1D6 DAMAGE, double vs. divine beings",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "HIGHLANDER",
    description:
      "When you kill someone important, you may gain a trait, but not the associated stat bonus or item, based on any special abilities they may have. The GM decides who is important.",
    item: {
      name: "Ancient longsword",
      description: "1D6+1 DAMAGE",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "HIJACK",
    description:
      "You can take control of any occupied vehicle and toss aside its operator without rolling the dice, as long as the operator is exposed. For closed and/or armored vehicles, the process of hijacking will be more difficult and complicated—the GM will tell you how.",
    item: {
      name: "Hotwiring kit",
      description: "hotwire any inert vehicle, one use",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "HOLY",
    description:
      "You may be a god, an angel, a pious believer, or a power-drunk zealot—whatever your relationship is to the divine, choose a conceptual domain to which you belong (such as balance, love, or war). Once per mission, you may trace a holy circle upon the ground (ten feet in diameter), over which all things antithetical to your domain cannot cross. The GM has the final say on which things are truly antithetical, unless you spend one WAR DIE to preach over them.",
    item: {
      name: "Bow of solid light",
      description: "1D6+CRE DAMAGE",
    },
    stat: "",
    adjustment: "+1 DMG vs Antithetical",
  },
  {
    name: "HUNTER",
    description:
      "You can track anything that leaves a trail, as though the ability were instinctual. When you find it, you can roll +INT to observe it without detection.",
    item: {
      name: "Compound bow",
      description: "1D6 damage, silent",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "HYBRID",
    description:
      "You are genetically spliced with an animal of your choice. You gain +1 to an attribute that you and the GM agree makes sense for your animal (+1 STR for a shark, +1 DEX for a hummingbird, etc.). Animals of the same type will always see you as one of their own, and tend towards trusting anyone you're with. Unfortunately, all armor is 1 point less effective due to its incorrect fit.",
    item: {
      name: "Animal feed",
      description: "+1D6 HP, one use",
    },
    stat: "chosen_attribute",
    adjustment: 1,
  },
  {
    name: "HYPNOSIS",
    description:
      "You are locked in a permanent state of self-hypnosis which maximizes your efficiency but suppresses your sense of self. Any time you roll the dice to do something risky, you can reroll one die (use the new result even if it's lower). You cannot speak or use facial expressions.",
    item: {
      name: "Nutrient slurry",
      description: "+2D6 HP, one use",
    },
    stat: "CHA",
    adjustment: -2,
  },
  {
    name: "ICEBREAKER",
    description:
      "You know how to get the party started. When you land the first strike in a fight, gain a WAR DIE and deal double DAMAGE. Take double DAMAGE whenever you are struck by an unexpected attack.",
    item: {
      name: "INT battleaxe",
      description: "1D6+1 DAMAGE",
    },
    stat: "STR",
    adjustment: 2,
  },
  {
    name: "ILLUSION",
    description:
      "If you have a free hand, you can attempt to manipulate another person into hallucinating anything of your choice by rolling +WIS. Rolling higher creates a more believable illusion, and illusions borne of lower rolls may be influenced by the contents of the victim's psyche.",
    item: {
      name: "Whip",
      description: "1D6 DAMAGE",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "IMPROVISE",
    description:
      "You can improvise a weapon from two or more common objects to instantly kill a single enemy once per mission. You can always create this makeshift weapon discreetly and quickly, even while restrained or otherwise incapacitated, without rolling the dice.",
    item: {
      name: "Slingshot",
      description: "3 DAMAGE",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "INJECTION",
    description:
      "You are addicted to an experimental serum that increases your combat ability. During combat, you can inject and deal double damage until the fight is won. Each time you inject, decrease your MAX HP by 3. At the end of a mission, your MAX HP returns to its normal amount.",
    item: {
      name: "Automatic injection suit",
      description: "2 ARMOR",
    },
    stat: "DEX",
    adjustment: -1,
  },
  {
    name: "INSURANCE",
    description:
      "When you take this trait, write your “will.” Your will may be modified, but only once per mission. If you die permanently, your traits (not including this one), skill modifiers (positive and negative), and items are distributed to other characters according to your will.",
    item: {
      name: "Briefcase full of cash",
      description: "a small fortune",
    },
    stat: "chosen_attribute",
    adjustment: 1,
  },
  {
    name: "INTERROGATION",
    description:
      "You can lock an unsuspecting enemy in a chokehold and ask them one question, which they will always answer truthfully before trying to escape.",
    item: {
      name: "Combat knife",
      description: "1D6 DAMAGE",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "JANITOR",
    description:
      "You can clean up any mess in minutes and always have the supplies on hand to do so. If someone interrupts your cleaning or makes the mess worse, you have +2 on DAMAGE rolls against them.",
    item: {
      name: "Mop",
      description: "3 DAMAGE",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "JINX",
    description:
      "Bad luck has followed you for your entire life. Once per mission, you can say “I feel like something really bad is about to happen” or an equivalent phrase, and it does. It will be bad for you and all nearby characters. The resulting catastrophe completely interrupts the scene and can cancel incoming damage, disorient enemies, etc.",
    item: {
      name: "Mirror",
      description: "break to reroll any roll and take the lower result",
    },
    stat: "CON",
    adjustment: 1,
  },
  {
    name: "JOKER",
    description:
      "You never take anything too seriously. If you choose to do something risky not because it is right or good, but because it would be funny (and everyone playing agrees), roll 3D6 and take the best two.",
    item: {
      name: "Joke pistol",
      description: "shoots “BANG!” flag",
    },
    stat: "INT",
    adjustment: -2,
  },
  {
    name: "KNIGHT",
    description:
      "You follow a strict code of honor and unquestioningly serve a powerful person or organization of your choice (note that FIST is not a powerful organization). You deal +1 DAMAGE if you have not yet broken your code of honor during a mission. Your role is irrelevant: you can only advance by increasing the wealth, power, or status of those you serve. Should your superiors die, your role becomes WANDERER.",
    item: {
      name: "Medieval helmet",
      description: "1 ARMOR, accessory",
    },
    stat: "CHA",
    adjustment: -1,
  },
  {
    name: "LIMBS",
    description:
      "You have many appendages (additional arms, spider-like legs, tentacles, etc.) When you are attempting to catch something or grapple someone, roll twice and take the best result.",
    item: {
      name: "Many knives",
      description: "1D6+1 DAMAGE",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "LIMIT",
    description:
      "When pushed to the brink of your capacity for punishment, you unlock new wells of power. If you have already fulfilled your role during the course of a mission and your HP is equal to 1, you may immediately advance now, instead of when the mission ends.",
    item: {
      name: "Mercury-core executioner's sword",
      description: "1D6+FRC DAMAGE",
    },
    stat: "CON",
    adjustment: 2,
  },
  {
    name: "LINK",
    description:
      "Touching someone's skin bonds their soul to yours. When you take damage, they take the same amount and vice versa. You may speak telepathically and share each other's five senses (one at a time).",
    item: {
      name: "Thick gloves",
      description: "must be removed to establish link",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "LISTEN",
    description:
      "You have incredibly sensitive and specific hearing, but a tumultuous relationship with the rest of your senses. You may always perfectly eavesdrop on conversations, listen for tell-tale sounds, and approximate the locations of things you can't see without rolling the dice, but loud noises, bright lights, strong smells, grating textures, and intense tastes all deal 1 DAMAGE when you are first exposed to them.",
    item: {
      name: "Blindfold",
      description: "helps you focus",
    },
    stat: "DEX",
    adjustment: 2,
  },
  {
    name: "LOVER",
    description:
      "If you and another player both have this trait, you can choose, together, to become lovers. If you rescued your lover from the brink of death during the mission, you both gain 1 WAR DIE at the end. There is no limit to how many lovers you can have, but if a lover of yours dies, your character can no longer gain new traits when advancing.",
    item: {
      name: "Silver handgun",
      description: "1D6 damage, double vs. undead",
    },
    stat: "",
    adjustment: "+1 ARMOR when defending someone",
  },
  {
    name: "LUSH",
    description:
      "You prefer to fight at least half in the bag. When you have some free time, you can tip back your liquor bottle and take +2 to your next STR roll.",
    item: {
      name: "Liquor bottle",
      description: "one use",
    },
    stat: "WIS",
    adjustment: 1,
  },
  {
    name: "LYCANTHROPE",
    description:
      "At night, you transform and gain the HYBRID trait (but not the associated item). If you have transformed during a mission, your role becomes irrelevant, and you can only advance by fulfilling a specific animal desire—roll 1D6 to let it wash over you (1-2: Challenge yourself as hunter or prey, 3-4: Consume the lifeforce of several sentient beings, 5-6: Stage a grand sacrifice to the gods of the Moon.)",
    item: {
      name: "Handcuffs",
      description: "titanium-reinforced",
    },
    stat: "",
    adjustment: "+6 MAX HP while transformed",
  },
  {
    name: "MECHANIC",
    description:
      "With a reasonable amount of prep time, you can use your toolbox to repair any machine for 1D6+INT HP.",
    item: {
      name: "Toolbox",
      description: "repair 1D6+TAC HP, three uses",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "MEDIC",
    description:
      "With a reasonable amount of prep time, you can use your medkit to heal any living thing for 1D6+INT HP.",
    item: {
      name: "First aid kit",
      description: "heal 1D6+TAC HP, three uses",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "MERCY",
    description:
      "When you would deal a killing blow to a non-player character, you may choose to instead approach them, help them up, and show them mercy. Characters who have been shown your mercy can never take DAMAGE again, and will always treat you (but not necessarily anyone else) as a trustworthy and reliable friend.",
    item: {
      name: "Halo",
      description: "make someone change their ways, one use",
    },
    stat: "STR",
    adjustment: -1,
  },
  {
    name: "MIMIC",
    description:
      "You can shapeshift, but only into inanimate objects. Once per mission, you may transform into a single item no larger than a car. If you transform into a tool, machine, etc., you are fully functional and may be used as such by others.",
    item: {
      name: "Varnish",
      description: "+1D6 HP while mimic, one use",
    },
    stat: "CON",
    adjustment: 2,
  },
  {
    name: "MINDREADER",
    description:
      "You can read anyone's thoughts and general state of mind without rolling. You may roll +WIS to scan for specific information, such as names, passwords, memories, and images. Unfortunately, you are particularly susceptible to interference, and the thoughts of others often cloud your psyche. Your mindreading ability is neutralized in the presence of another mindreader, and vice versa.",
    item: {
      name: "X-ray specs",
      description: "see through walls",
    },
    stat: "CHA",
    adjustment: -1,
  },
  {
    name: "MOBILITY",
    description:
      "Your customized mobility aid (e.g. titanium cane with spring-loaded feet or a wheelchair with adaptive tank treads) is tricked out with additional gadgets and features. Choose one of the following add-ons, active when you're using the aid: 1) +1 to an attribute of your choice, 2) an always-concealable weapon that deals 1D6 DAMAGE, or 3) +1 to your ARMOR. If you roll the dice to do something risky that would normally involve your mobility aid, but you don't have access to it, roll 3D6 and take the worst two. When you advance, you can get another add-on instead of taking one of the usual advancement rewards.",
    item: {
      name: "Mobility aid",
      description: "comes with an add-on",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "MOMENTUM",
    description:
      "You are able to enter a state of cumulative momentum at will, harnessing inertia to your advantage. Each time you succeed on a DEX roll, gain +1 DEX. This bonus accumulates until you stop moving, at which point your DEX attribute reverts back to normal. Rolling a failure with a cumulative bonus from this trait will incur DAMAGE equal to the bonus, and cause you to stop moving.",
    item: {
      name: "Rail-grinding boots",
      description: "grind on any edge",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "MONOLOGUE",
    description:
      "When you give an impassioned ethical, political, or philosophical speech, roll +WIS. On a partial success, you engage your target in the melodramatic speech temporarily, distracting them. On a full success, they see your line of reasoning and make an effort to join your school of thought.",
    item: {
      name: "Yorick's skull prop",
      description: "very realistic",
    },
    stat: "CHA",
    adjustment: 2,
  },
  {
    name: "MONSTERS",
    description:
      "Once per mission, you may use your computerized monster index to summon and command a monster from the barcode of any real-life object you have with you. Arrange the numbers in the barcode from lowest to highest and derive your monster's stats as follows: DAMAGE equal to 1D6 + the lowest number, HP equal to the highest number, and ARMOR equal to the middle number (if there are two, split the difference and round down). State and record the monster's appearance and name, and work out a special power with the GM that reflects the origin object (e.g. belches of flame from a bottle of hot sauce or answering any one question from a library card).",
    item: {
      name: "Monster index",
      description: "hold aloft with both hands to summon",
    },
    stat: "DEX",
    adjustment: -1,
  },
  {
    name: "MORBID",
    description:
      "You have some kind of relationship with death. Describe how, and what form death takes. If you or another character dies, you can call death to your side. Death will give you some task or challenge and a time limit, then the dead character is healed by 1D6. If you don't complete the task within the time limit, death takes you both.",
    item: {
      name: "Gifted scythe",
      description: "2D6 DAMAGE",
    },
    stat: "CON",
    adjustment: -2,
  },
  {
    name: "MURDER",
    description:
      "You're followed by a heckling murder of crows that spout various ominous phrases (some helpful). The crows circle when someone is soon to die, foreshadowing danger. You may command the crows to circle around an enemy, who takes +1 DAMAGE from all sources until the crows get bored and leave.",
    item: {
      name: "Birdseed",
      description: "guarantee a helpful omen, one use",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "MUTANT",
    description:
      "You are a picture of evolution in microcosm, always changing form as your unstable genome shifts. At the beginning of each mission, roll 1D6. On a 4+, drop any one trait you already have (except MUTANT), and permanently replace it with another, recalculating your attributes.",
    item: {
      name: "Toxic grenade",
      description: "1D6+2 damage, one use",
    },
    stat: "INT",
    adjustment: -1,
  },
  {
    name: "NEUROMANCER",
    description:
      "Given a few hours in a quiet place, you can remove brains from their bodies and put them in new ones. Body transplantation is not a perfect science, and those who have undergone the process may not always come back the same.",
    item: {
      name: "Brain jar",
      description: "keeps one brain alive",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "NINJA",
    description:
      "Due to your training in the dark arts of subterfuge, any acrobatic or athletic action you take will always be completely silent, even when you roll failures. You may choose your current ninja weapon at the beginning of each mission: shuriken (1D6 DAMAGE), kunai (3 DAMAGE, usable for climbing), or smoke bomb (temporarily disorient 1D6 targets).",
    item: {
      name: "Ninja weapon",
      description: "six uses",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "NOIR",
    description:
      "You're from the old days, when crime ran the streets, the cigarettes were plentiful, and hard work meant something. You gain +1 on rolls you provide an appropriate monologue for.",
    item: {
      name: "Trenchcoat",
      description: "1 ARMOR",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "NUMBERS",
    description:
      "All numbers have meaning. At the beginning of each mission, roll 1D6. Once per mission, you may replace any number with the number rolled. This can be another roll (such as damage) or a number-based fact spoken by the GM (five enemies, ten days, six stars, etc.).",
    item: {
      name: "Sudoku workbook",
      description: "keep someone occupied, one use",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "OBJECTS",
    description:
      "You may attack with any non-weapon object within reach—if you describe a unique, WIS way of causing harm with this object, it functions as a weapon which deals 1D6 DAMAGE. Subsequent objects you attack with add a cumulative +1 DAMAGE bonus per new object; this cumulative bonus resets to 0 when you roll a failure, reuse an attack description, or switch to a conventional weapon.",
    item: {
      name: "Leather belt",
      description: "3 DAMAGE",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "OOZE",
    description:
      "You can transform into a gelatinous substance at will. While in your gelatinous form, you have -2 DEX and -2 STR, but you can squeeze through grates, fit inside containers, and split into pieces.",
    item: {
      name: "Bucket",
      description: "5 gallon",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "PAINLESS",
    description:
      "You cannot feel pain, and being hurt will never cause you to flinch or stop what you're doing. At the beginning of each mission, the GM will roll 1D6 and keep the result hidden from you. The first time you reach 0 HP during the mission, you will regain HP equal to the result.",
    item: {
      name: "Wrist and ankle weights",
      description: "1 ARMOR, accessory",
    },
    stat: "DEX",
    adjustment: -2,
  },
  {
    name: "PARKOUR",
    description:
      "You can easily swing, jump, and free-run across rooftops and rafters without rolling the dice. If it's something really precarious, like barrels floating in toxic waste or a rope bridge full of people shooting at you, you can still do it, but you'll drop one of your items in an inconvenient spot—the GM decides what, and where.",
    item: {
      name: "Baseball bat",
      description: "1D6 DAMAGE",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "PATHETIC",
    description:
      "You are entirely unintimidating and almost universally pitied. Enemies often underestimate you. Once per mission, before you take damage, you may look into an enemy's eyes and nullify it.",
    item: {
      name: "Box of tissues",
      description: "hides a pistol inside, 1D6 DAMAGE",
    },
    stat: "STR",
    adjustment: -1,
  },
  {
    name: "PET",
    description:
      "You have a small pet (3 HP) which you always keep on your person—perhaps in a shirt pocket, on your shoulder, or leashed to your belt. Describe your pet and choose a bonus for them: 1) grants 1 ARMOR and functions as an accessory, 2) grants +1 to an attribute of your choice for a single roll when fed a treat, 3) deals 3 DAMAGE to an enemy when fed a treat. If your pet dies, you can start the next mission with a new one, but not with the same bonus as before.",
    item: {
      name: "Pet treats",
      description: "three uses",
    },
    stat: "DEX",
    adjustment: -1,
  },
  {
    name: "PHONE",
    description:
      "You may make telepathic “calls” to anyone regardless of time, distance, or interdimensional status—these calls may be routed through local telephones and radios, or may simply appear as a disembodied voice. Those you call are not guaranteed to answer. Sometimes, you'll receive calls you'd prefer not to.",
    item: {
      name: "Rolodex",
      description: "3 strange and important people are listed",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "POCKET",
    description:
      "You can fit pretty much anything into your personal pocket dimension (and retrieve it at will) as long as you have free appendages with which do so. Your pocket-space might be accessed through a bottomless bag, a door that follows you between rooms, or a wormhole you can summon with a wish.",
    item: {
      name: "Refrigerator",
      description: "well-stocked",
    },
    stat: "DEX",
    adjustment: -1,
  },
  {
    name: "POLYGLOT",
    description:
      "You can understand and communicate in any mundane language, written or verbal. You can also roll +INT to understand languages which are supernatural in origin.",
    item: {
      name: "Universal phrasebook",
      description: "can teach anyone one phrase",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "PRECOGNITION",
    description:
      "Once per mission, before you roll the dice to do something risky, you may declare a state of precognition—have everyone mark down where they are, their HP and items, and any other useful notes to capture the current situation. Roll the dice and continue play as normal. Next time you're prompted to roll the dice, decide if what's happened was your destined path, or in fact a mere possible future—if so, rewind the story using everyone's notes, keeping in mind that small distortions in reality are a normal consequence of precognitive radiation.",
    item: {
      name: "Stopwatch",
      description: "waterproof",
    },
    stat: "INT",
    adjustment: -2,
  },
  {
    name: "PREPPER",
    description:
      "You are perpetually awaiting the moment when the world goes to shit. When each mission starts, choose a specific survival skill you've been practicing (e.g. knot-tying, finding water, or securing shelter). Add +2 whenever you roll the dice to do something risky involving your current survival skill, and gain an additional +1 HP whenever you heal from eating MREs or other non-perishables.",
    item: {
      name: "Hatchet",
      description: "3 DAMAGE",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "PROJECTION",
    description:
      "You can project your spirit from your body to view any faraway place remotely, as long as your physical body is safe. You can also cheat death and keep 1 HP once per mission by abandoning your body, but you will be stuck in spirit form until it gets medical attention.",
    item: {
      name: "Flowing garment",
      description: "1 ARMOR",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "PROSTHETIC",
    description:
      "One of your limbs is replaced with any weapon you own, and you can equip another weapon to use. When you roll the maximum damage possible with an equipped weapon, you can roll damage again with your limb-weapon for an extra powerful combo attack.",
    item: {
      name: "Light machine gun",
      description: "1D6+1 DAMAGE",
    },
    stat: "DEX",
    adjustment: -1,
  },
  {
    name: "PSYCHOMETRY",
    description:
      "Once per mission, you can ask any inanimate object you are touching a psychic question. Objects will answer truthfully, but are limited by their experience—a photograph cannot comprehend the passage of time, and a gun can only think in terms of killing.",
    item: {
      name: "Scrapbook",
      description: "contains one mission-relevant photo",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "PUNCTUAL",
    description:
      "You always know what time it is, down to the second. When you need to get to a time-sensitive event, appointment, or meeting, you will always get there in the nick of time. If arriving on time is particularly unlikely, the GM will tell you in what way you are unprepared for it when you get there.",
    item: {
      name: "Gold stopwatch",
      description: "always works",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "PUPPETMASTER",
    description:
      "You can implant a command in someone's brain by rolling the dice +STR. If you succeed, they are forced to comply.",
    item: {
      name: "Strappy leather harness",
      description: "1 ARMOR",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "PYROMANIAC",
    description:
      "If there is something flammable nearby, you can always ignite it, but the fire will uncontrollably spread somewhere inconvenient— the GM will tell you where.",
    item: {
      name: "Flamethrower",
      description: "1D6+2 DAMAGE",
    },
    stat: "STR",
    adjustment: 2,
  },
  {
    name: "QUANTUM",
    description:
      "If another player's character dies, you may rewind time to shortly before their death and permanently swap characters with them, giving you a second chance to save their life. Swapping back into a body you've inhabited before kills the one you're leaving.",
    item: {
      name: "Quantum stabilizer suit",
      description: "2 ARMOR",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "QUILLS",
    description:
      "You are covered in quills, spines, or thorns. When an enemy deals damage to you in melee combat, they take 1 DAMAGE in return. In addition, you may shoot the spines out of your body for 1D6 DAMAGE to everyone in the area, though you'll need a day to grow them back.",
    item: {
      name: "Ripped jacket",
      description: "1 ARMOR",
    },
    stat: "CON",
    adjustment: 2,
  },
  {
    name: "RADIOACTIVE",
    description:
      "When you aren't wearing your treated bandages, radiation bursts forth from your body and deals 2D6 DAMAGE to anyone near you. When this occurs, you may attempt to direct the attack at a single target by rolling +STR. After the damage is dealt, the radiation temporarily dissipates, but you will quickly waste away and die if your treated bandages are not reapplied.",
    item: {
      name: "Treated bandages",
      description: "accessory",
    },
    stat: "STR",
    adjustment: -2,
  },
  {
    name: "RAGE",
    description:
      "Whenever you do something risky that's loud, bloody, and violent, roll 3D6 and take the best two. Any other time you do something risky, roll 3D6 and take the worst two. Enemies who you hurt have a 1 in 6 chance of immediately attempting to flee the scene.",
    item: {
      name: "Ultra-shotgun",
      description: "2D6 DAMAGE",
    },
    stat: "CHA",
    adjustment: -1,
  },
  {
    name: "RECRUIT",
    description:
      "If you bring an unconscious enemy back to base with you at the end of a mission, you may take them with you on future missions as another character you control. Recruits retain their currently equipped weapon and armor and may have up to one trait, decided by the GM. Recruits start with 1D6 MAX HP and gain 3 MAX HP for each mission they complete alongside you.",
    item: {
      name: "Tranq pistol",
      description: "0 DAMAGE, 3-in-1D6 chance to knock out",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "RELOAD",
    description:
      "When you're about to attack with a ranged weapon, you can choose to dig in your heels, slam in another mag, and unload a whole clip. You will deal double DAMAGE, but any damage you take until finding cover will also be doubled.",
    item: {
      name: "Grenade",
      description: "1D6 DAMAGE, one use",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "RETREAT",
    description:
      "You have a place in your head (a cozy cabin, a crystal palace, a concrete cell, etc.) that you can manifest physically. Once per mission, you may roll +WIS to transport yourself and up to four other people there. The specifics of the retreat may be changed at will, resting there heals 1D6 HP, and you or your guests may leave at any time.",
    item: {
      name: "Polaroid camera",
      description: "for memories",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "RIVAL",
    description:
      "Choose any other player to be your rival. Each time you spectacularly one-up or humiliate your rival, heal 1D6 HP. If your rival thoroughly one-ups you, you lose any WAR DICE you have. When you take this trait, you gain a new aesthetic quirk, like a streak of dyed hair, an eyepatch, or a cool scar.",
    item: {
      name: "Carbine",
      description: "1D6 DAMAGE, +1 damage when showing off",
    },
    stat: "",
    adjustment: 0,
  },
  {
    name: "ROBOT",
    description:
      'You are a man-made automaton bound by your rigid programming. When you take this trait, select another player to be your programmer (or allow all of the players to program you democratically). When a mission begins, your programmer(s) should define a three-word core directive for you to follow, such as “ELIMINATE ALL HOSTILES," “SEARCH NEW AREAS," or “PROTECT THE TEAM." Your programmer(s) should also select a broad concept which “does not compute," such as love, music, or peace. When you roll the dice to do something risky while acting on your core directive, roll 3D6 and take the best two. When you are exposed to something which does not compute, drop what you\'re doing and shut down for ten minutes, or take 1D6 DAMAGE.',
    item: {
      name: "Laser rifle",
      description: "1D6+1 DAMAGE",
    },
    stat: "CHA",
    adjustment: -1,
  },
  {
    name: "RUNNER",
    description:
      "You possess ultrahuman speed. Once per mission, you may outpace someone or something. If it's something really fast, like a hunting cheetah or a flying bullet, there will be a complication from over-exertion—the GM will tell you what.",
    item: {
      name: "Experimental sneakers",
      description: "indestructible",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "SAWBONES",
    description:
      "You're a doctor, but you don't have a medical license. Once per mission, when a player character dies, you can roll +WIS to perform surgery and resurrect them with full health. You must swap out one of their traits for a new one as part of your experimental surgery, and explain why your operation changed their trait.",
    item: {
      name: "Bone saw",
      description: "1D6+1 DAMAGE",
    },
    stat: "CON",
    adjustment: -2,
  },
  {
    name: "SCAVENGER",
    description:
      "You understand that everything can be repurposed and that nothing need go to waste. If the GM narrates that you've run out of a finite resource (like ammo, medicine, or food), you may spend a WAR DIE and roll it to negate the GM and reveal your backup reserves, equal to the result rolled (e.g. 2 clips of ammo, 4 doses of antivenom, or 6 MREs).",
    item: {
      name: "Semi-automatic rifle",
      description: "1D6+1 DAMAGE",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "SCOUT",
    description:
      "You always get the lay of the land before starting a mission. You can find a good vantage point or hiding place anywhere, any time. The GM will always tell you about ambushes and hidden traps.",
    item: {
      name: "Ghillie suit",
      description: "disguise self as plant",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "SEAL",
    description:
      "You are a living lock for the cage of something horrible (you don't know what). You have complex tattoos and carvings across your entire body. If you die before the appointed time (also unknown), you release whatever you're holding back into the world.",
    item: {
      name: "Wards and charms",
      description: "accessory",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "Security",
    description:
      "If you have a reasonable amount of prep time and the coast is clear, you can use your anti-security kit and attempt to breach any lock or crack any safe by rolling +DEX. You may also disarm traps you know about and can physically reach by rolling +INT.",
    item: {
      name: "Anti-security kit",
      description: "three uses",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "Seduce",
    description:
      "When someone wants to get with you, you can fade to black and get with them too. After you return from a nearby private retreat, roll +WIS and choose one result on a partial success, or two on a full success: they want to help you, they trust you with their secrets, or they want to get with you again. On a failure, you're old news, and they'll dislike your company from now on.",
    item: {
      name: "Little black dress",
      description: "0 ARMOR, stand out anywhere",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "Seer",
    description:
      "When you have a moment of peace and quiet, you may read your divination tool (perhaps a deck of playing cards or a set of polyhedral dice) and roll +WIS. If you succeed, the GM will answer one question about the current mission honestly. If it's a partial success, they'll answer vaguely. A failure brings a grim and terrible omen.",
    item: {
      name: "Divination tool",
      description: "",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "Sexy",
    description:
      "You're so hot, and everyone knows it, you most of all. When you're wearing your fetching outfit, you can stun another person with your beauty without rolling the dice. If you take damage in the outfit, you have to stay out of the fight until it's over to attend to chipped nails, untucked shirts, and messed up hairdos.",
    item: {
      name: "Fetching outfit",
      description: "0 ARMOR",
    },
    stat: "DEX",
    adjustment: -1,
  },
  {
    name: "Sharpshooter",
    description:
      "If you name a specific body part, possession, or component of something you're attacking with a ranged weapon, you will always hit it, temporarily disabling that part but dealing 0 DAMAGE.",
    item: {
      name: "Revolver",
      description: "1D6+1 DAMAGE",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "Shield",
    description:
      "You can use any shield as a weapon which bashes enemies for 1D6 DAMAGE plus the shield's ARMOR bonus. If you throw the shield as a ranged weapon, you can roll +DEX to ricochet it back to you.",
    item: {
      name: "Combat shield",
      description: "0 ARMOR, accessory",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "Show",
    description:
      "Your performance art (perhaps music, dance, acrobatics, or comedy) has inexplicable mind-altering effects on those who view it. While performing, choose one of the following: your allies have +1 to an attribute of your choice, enemies are dazed (they deal -1 DAMAGE), or one enemy gives in to fun. You take -1 to any rolls made while performing.",
    item: {
      name: "Performing accoutrement",
      description: "e.g. instrument, baton, mic",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "Shrink",
    description:
      "Your unique atomic structure allows you to compress yourself down to a millimeter tall without rolling the dice. If you go smaller, you must roll +INT to avoid slipping through a hole in the quantum foam. Those who slip through the foam suffer mind-bending consequences, like becoming marooned or losing their sense of time (GM's call).",
    item: {
      name: "Stainless steel syringe",
      description: "contains a miniature submarine",
    },
    stat: "CON",
    adjustment: 2,
  },
  {
    name: "Skeleton",
    description:
      "You have no flesh—explain why. You have 2 ARMOR against weapons that pierce or slash, and take +1 DAMAGE from weapons that bludgeon. If you reach 0 HP but all your bones are intact, you may rise with 1 HP after someone else completely reassembles you.",
    item: {
      name: "Ownerless femur",
      description: "1D6 DAMAGE",
    },
    stat: "STR",
    adjustment: -2,
  },
  {
    name: "Slacker",
    description:
      "You abide by the universe in all things and appreciate simple pleasures. In addition to the single rendezvous point all player characters can use, you may always access an additional, second rendezvous point which is typically easy to reach and additionally contains snacks, substances, a hammock, or similar amenities.",
    item: {
      name: "Shabby clothes",
      description: "0 ARMOR, always unthreatening",
    },
    stat: "INT",
    adjustment: -1,
  },
  {
    name: "Sleeper",
    description:
      "Your personality is but a programmed front to hide the dormant sleeper agent beneath (or maybe it's the other way around). When you take this trait, everyone at the table but you should come to a consensus on what your activation phrase is (like “the woman in white walks backwards through Prague,” or “Epsilon orange Manila seventeen”). Once it's decided, write it down, and create a new, second FIST character who shares none of your traits—this is your sleeper persona (if you have already advanced, advance the persona an equal number of times, but do not choose the same advancement options). Any time you hear your activation phrase, you swap between personas, but the items in your inventory do not change to match your traits until you start a new mission.",
    item: {
      name: "Taperecorder",
      description: "plays activation phrase",
    },
    stat: "CHA",
    adjustment: -1,
  },
  {
    name: "Slow-Mo",
    description:
      "You may slow time to a crawl (at a 1-to-1 seconds-to-minutes ratio) at will, turning volleys of gunfire into glittering armadas of hot lead ships. Doing so costs you 1 HP for every second of time you slow. Slow-time affects your actions and physical processes but does not change the speed of your thoughts, giving you lightning-fast cognition relative to those around you. During slowed time, your DEX score is increased by 4.",
    item: {
      name: "Machine pistol",
      description: "1D6 DAMAGE",
    },
    stat: "DEX",
    adjustment: -2,
  },
  {
    name: "Smash",
    description:
      "You break things. You deal +1 DAMAGE against any man-made construct, and another +1 DAMAGE against anything that is grossly expensive or has exquisitely fragile components.",
    item: {
      name: "Sledgehammer",
      description: "1D6+1 DAMAGE",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "Smith",
    description:
      "You may deploy your portable workbench once per mission to add a new effect to an existing weapon (you can choose a premade weapon tag or negotiate a custom effect with the GM). The effect will be successfully added if you leave the weapon at the workbench, acquire three integral but difficult-to-reach components, and return to combine the components and weapon. The GM will tell you what and where the components are; they are usually scattered throughout the mission area. You may also employ a similar process of deploying your workbench and collecting materials to forge new pieces of armor.",
    item: {
      name: "Portable workbench",
      description: "one use",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "Smoker",
    description:
      "You are addicted to nicotine. When you have some downtime, you can calm your nerves with a cigarette and take +2 to your next DEX roll.",
    item: {
      name: "Cigarette case",
      description: "one use, +1 WAR DIE per mission",
    },
    stat: "DEX",
    adjustment: 2,
  },
  {
    name: "Snatcher",
    description:
      "You are an alien poorly puppeteering a technically dead human body, with a killing touch. If you do not consume one human brain without anyone finding out once per mission, you will melt into a puddle and die.",
    item: {
      name: "Poison fingertips",
      description: "2D6 damage, don't count as equipped",
    },
    stat: "CHA",
    adjustment: -2,
  },
  {
    name: "Sneak",
    description:
      "If you hold still in a good hiding spot, no one will see you until you make your presence known. You can also easily fit into small containers like barrels and cardboard boxes.",
    item: {
      name: "Sneaking suit",
      description: "1 ARMOR",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "Sniper",
    description:
      "If you have prep time, the enemy is unaware of your presence, and you remain stationary, you can roll 3D6 to attack and use the best two dice. If you succeed, you deal the maximum possible DAMAGE for your weapon.",
    item: {
      name: "Sniper rifle",
      description: "1D6+2 DAMAGE",
    },
    stat: "damage",
    adjustment: 1,
  },
  {
    name: "Soak",
    description:
      "You know how to grin and bear it. When you take damage, you may roll a WAR DIE and subtract that much from the DAMAGE taken. You may also apply this effect to anyone standing immediately behind you.",
    item: {
      name: "Kinetic shock shield",
      description: "2 ARMOR, equip as weapon",
    },
    stat: "DEX",
    adjustment: -2,
  },
  {
    name: "Social",
    description:
      "You have a likable personality and a familiar face. Take +1 to your roll whenever you do something risky that involves a social interaction.",
    item: {
      name: "Cyanide pill",
      description: "one use",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "Spy",
    description:
      "You are a dashing and clever international person of mystery. Major antagonists tend to behave in contrived and theatrical ways around you. If you are captured, you may ask the GM to give you an easy opportunity to escape and they will give it to you.",
    item: {
      name: "Laser watch",
      description: "3 DAMAGE, can cut any restraints",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "Stand",
    description:
      "You command a flamboyant spirit with its own trait, tangible only to you but able to affect the corporeal world. Roll a random trait for your stand (D666) and choose a hyper-specific additional bonus, like “can be used twice per mission if my blood is removed and replaced” or “deals double DAMAGE if the target is left-handed.” Everyone else at the table should democratically decide on a hyper-specific condition or downside, such as “can only be used when Mercury is in retrograde” or “causes a random bone in the user's body to break when used.”",
    item: {
      name: "Stand",
      description: "immortal and invisible",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "Static",
    description:
      "You can enter and travel between electronic screens of any kind as long as the screen isn't too “busy” (plain backgrounds and static work best).",
    item: {
      name: "Chaff grenade",
      description: "disables electronics, one use",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "STATUESQUE",
    description:
      "You're made of something hard (stone, metal, gems, etc.) Once per mission, you can reflect any projectile back at the attacker. If you are also wearing armor, decrease your DEX score by 2.",
    item: {
      name: "Tough exterior",
      description: "2 ARMOR, doesn't count as equipped",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "STICKY",
    description:
      "You can secrete a sticky substance from your hands which dries in seconds and is comparable in strength to the most powerful mundane adhesives. It can only be dissolved with a common substance of your choice (water, alcohol, blood, etc).",
    item: {
      name: "Flask of dissolving fluid",
      description: "8 ounces",
    },
    stat: "DEX",
    adjustment: -1,
  },
  {
    name: "STONER",
    description:
      "You function much better while high. When you have the time, you can enjoy your favorite strain using any method of your choice. State the name of the strain (e.g. 'Green Giant' or 'Nuclear Winter'), and choose a bonus: +1D6 HP, or +2 to your next roll.",
    item: {
      name: "Personal stash",
      description: "one use",
    },
    stat: "WIS",
    adjustment: 1,
  },
  {
    name: "STRETCH",
    description:
      "You can stretch any of your limbs to a length of ten feet × your MAX HP by rolling the dice +DEX. Stretched out limbs can be pushed even further, but will incur 1 DAMAGE for every additional ten feet of stretch. You take +1 DAMAGE when enemies specifically target stretched-out limbs.",
    item: {
      name: "Elastic bodysuit",
      description: "0 ARMOR, up to 1000 sq. ft. of fabric",
    },
    stat: "STR",
    adjustment: -1,
  },
  {
    name: "STUBBORN",
    description:
      "You're one tough son of a bitch, and not even God can keep you down for long. When you roll a failure and the GM narrates what happens next, you can spend a WAR DIE and declare that it doesn't, forcing the GM to narrate an entirely different failure outcome instead.",
    item: {
      name: "Special cigar",
      description: "+1D6 HP, one use",
    },
    stat: "CHA",
    adjustment: -2,
  },
  {
    name: "SUMMONER",
    description:
      "You know the deepest, truest names of two phantasmagoric entities (demons, elementals, Platonic ideals, etc.) and their domains of power (such as grief, fire, or logic). You can summon them via fire-circle with ten minutes of unbroken ritual, or instantly by spending a WAR DIE. Each of these spirits will carry out a single magical command related to their domain of power before vanishing, and tend towards bad-faith or misguided interpretations of vaguely worded instructions. Magical attacks from summoned spirits deal 2D6 DAMAGE, and double DAMAGE if their domain is well-suited to the attack (like fire against ice, or silver against werewolves). When you advance, you may add another spirit to your roster instead of taking one of the usual advancement rewards.",
    item: {
      name: "Box of tea lights",
      description: "one circle's worth, one use",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "SUNDER",
    description:
      "Using your psionic powers, you may sunder the mind of anyone you presently perceive, dealing 1D6 DAMAGE which ignores ARMOR. You may roll additional six-sided dice and add them to the total DAMAGE at will. Opening a psionic channel strains your body (perhaps causing nosebleeds, shaking, or confusion), and you will always take DAMAGE equal to half of what you deal, rounded down.",
    item: {
      name: "Grippy socks",
      description: "prevent you from slipping",
    },
    stat: "STR",
    adjustment: -2,
  },
  {
    name: "SUPPLY",
    description:
      "You know secret frequencies and can use your radio to get any item delivered in a pinch; however, there will be a catch, like an inconvenient pickup spot or a fault with the item—the GM decides.",
    item: {
      name: "Supply radio",
      description: "three uses",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "SURVEILLANCE",
    description:
      "You can install your camera drone somewhere stationary and surveil without detection. You can also keep it mobile and control it at will, but it will be exposed to enemy attacks.",
    item: {
      name: "Camera drone",
      description: "1 HP, one use",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "SYMBIOTE",
    description:
      "You're bonded to a violent symbiotic lifeform with whom you share a tumultuous and intimate relationship. The constant commentary by a chorus of alien voices makes it difficult to hold on to your thoughts or focus on tasks. Your role is irrelevant—you can only advance by following the whims of the creature (roll D6, 1-2: Trust no one, not even for a moment, 3-4: Destroy something important, 5-6: Backstab a teammate before they backstab you).",
    item: {
      name: "In-vivo symbiote",
      description: "+2 ARMOR vs. attacks from behind",
    },
    stat: "INT",
    adjustment: -1,
  },
  {
    name: "SYNTHETIC",
    description:
      "You are a human-like android. Your positronic brain can make thousands of calculations per second, and you never have to roll the dice for tasks like solving equations and calculating trajectories. You take 1D6 DAMAGE when your innards are exposed to water.",
    item: {
      name: "Infantry-scale railgun",
      description: "1D6+2 DAMAGE",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "TACTICIAN",
    description:
      "If you explain an elaborate plan of action to the team, all partial success rolls count as total success rolls while the plan is being executed—until someone rolls a failure, at which point the plan falls apart catastrophically.",
    item: {
      name: "Night vision goggles",
      description: "can see at night",
    },
    stat: "INT",
    adjustment: 2,
  },
  {
    name: "TEACHER",
    description:
      "You are a wise mentor who fosters an inquisitive and confident attitude in your pupils. You can take on any player as a pupil—they can ask the GM for one useful fact of any type, once per mission. When you complete a mission, lose 1D6 MAX HP if you did not have a teachable moment with every pupil.",
    item: {
      name: "Pins and medals",
      description: "command respect",
    },
    stat: "INT",
    adjustment: 2,
  },
  {
    name: "TECHNIQUE",
    description:
      "Your special technique targets a series of critical pressure points. When you would deal DAMAGE, you can choose to roll 2D6 and execute your technique instead—on a 9 or below, you deal no damage. If you roll 10 or more, the victim instantly dies.",
    item: {
      name: "Tattered gi",
      description: "1 ARMOR",
    },
    stat: "STR",
    adjustment: -1,
  },
  {
    name: "TELEKINETIC",
    description:
      "You have telekinetic control over a single substance of your choice—it could be something simple like water or metal, or something more esoteric like blood or flies. You have a unique talisman, such as a mask or a pendant, through which you channel your power. If this psychic amplifier is damaged or lost, you are no longer telekinetic until you repair or replace it.",
    item: {
      name: "Psychic amplifier",
      description: "accessory",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "TELEPORT",
    description:
      "You can teleport yourself (and any items you are wearing or holding) to a safe location within your line of sight at will. If you want to teleport under fire or to somewhere you can't see, roll +INT to avoid accidents.",
    item: {
      name: "Flare gun",
      description: "1D6 DAMAGE",
    },
    stat: "DEX",
    adjustment: 2,
  },
  {
    name: "THEATRICS",
    description:
      "You command attention. When you enter a room, everyone inside is guaranteed to look at you. When you're trying to cause a distraction, partial successes count as full successes.",
    item: {
      name: "Sweeping cape",
      description: "1 ARMOR, accessory",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "THIEF",
    description:
      "You may roll +DEX to teleport an object you can see into your hands. On a failure, you take something else as well—the GM will tell you what.",
    item: {
      name: "Smoke grenade",
      description: "one use",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "THRALL",
    description:
      "You are bound to an anomalous artifact, a weapon which drives you to commit evil. When you start a mission, roll 1D6 to receive its command (1-2: Make a good person suffer. 3-4: Spread chaos and permanent destruction. 5-6: Sabotage your teammates.) Your role is irrelevant—you can only advance if you have completed this task. All damage dealt with your anomalous weapon is increased +1D6.",
    item: {
      name: "Anomalous weapon",
      description: "choose any",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "TRAPS",
    description:
      "You are an expert in the art of trapping and misdirection. Whenever you create or set a trap (e.g. covering a hole with leaves or wiring a grenade to a doorknob), you may declare that one passing enemy who is completely unaware of you becomes hurt or ensnared.",
    item: {
      name: "Claymore mine",
      description: "2D6 DAMAGE, one use",
    },
    stat: "STR",
    adjustment: -1,
  },
  {
    name: "TRIPPER",
    description:
      "You are a psychedelics enthusiast. When you have some time to relax, you can drop a tab to expand your consciousness and take +2 to your next WIS roll.",
    item: {
      name: "Acid tab",
      description: "one use",
    },
    stat: "WIS",
    adjustment: 1,
  },
  {
    name: "TRUTH",
    description:
      "Through rigorous meditation and study of the natural world, you have determined that your reality is merely a consensus illusion enjoyed by beings from a 'realer' reality as a leisurely game. Once per session, if you have a completely serene moment to achieve lucidity, you may speak through your 'player' and contact the 'GM' with requests for assistance (such as HP, items, or the sudden death of your enemies). Keep in mind that even if you are able to appeal to the GM's guilt or curiosity to get what you want, overuse of this power may see you branded 'broken,' 'gimmicky,' or 'unfair' by the higher beings, spelling the end of your existence as a playable character.",
    item: {
      name: "Copy of FIST: Ultra Edition",
      description: "",
    },
    stat: "CHA",
    adjustment: 2,
  },
  {
    name: "TURNCOAT",
    description:
      "At one point, you belonged to an enemy faction of your choice. You no longer serve them. When you run up against this faction, the GM will tell you something INTly important about them.",
    item: {
      name: "Enemy uniform",
      description: "1 ARMOR, blend in with faction",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "TURRET",
    description:
      "You have a portable mini-turret which can be deployed on any flat surface without rolling the dice. If it's somewhere difficult like a ceiling or dangerous outcropping, placing it will be more difficult and arduous—the GM will tell you how. Your mini-turret begins with 3 MAX HP and 1 ARMOR, but you may increase its HP by 1D6 or its ARMOR by 1 as an alternative reward when you advance. Whenever you or one of your allies successfully deal DAMAGE, you may command the turret to deal DAMAGE as well to any target within its line of sight.",
    item: {
      name: "Mini-turret",
      description: "1D6+TAC DAMAGE",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "UNARMED",
    description:
      "You are skilled in general unarmed self-defense, as well as one or more styles of martial art. You can silently knock any enemy unconscious, but they might make noise on the way down, or wake up at an inconvenient time—the GM will tell you the downside.",
    item: {
      name: "Hand wraps",
      description: "3 DAMAGE",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "UNDEAD",
    description:
      "That which should kill you only makes your rotting flesh weaker. When you would die, lower all of your attributes by 1 and revive next mission with full health. Each time this happens, you gain a new aesthetic quirk, like bolts in your neck or stitched-together skin. You may still die voluntarily.",
    item: {
      name: "Full-body bandages",
      description: "1 ARMOR",
    },
    stat: "CHA",
    adjustment: -2,
  },
  {
    name: "UNFEELING",
    description:
      "You experience no emotional interoception, and must rely on some other rationale to motivate your decisions under pressure. When you would roll WIS to deal with something emotional, you may describe how you're using a different attribute and roll using that instead, adding your inverted WIS score on top (e.g. +1 if you have -1 CRE, or -2 if you have +2 CRE).",
    item: {
      name: "Brain teaser puzzle",
      description: "e.g. Rubik's cube",
    },
    stat: "CHA",
    adjustment: -1,
  },
  {
    name: "VAMPIRE",
    description:
      "You are pale and shadowy, starved for blood. If you have recently fed on a new victim, your next roll will be one degree of success higher. If you are currently exposed to sunlight, all your rolls will be one degree of success lower.",
    item: {
      name: "Gothic amulet",
      description: "used to turn into a bat and back",
    },
    stat: "STR",
    adjustment: -2,
  },
  {
    name: "VEHICLE",
    description:
      "You have a customized civilian vehicle of your choice. It could be a common vehicle like a motorcycle or pickup truck; it could be something unique like a snowmobile or horse. You can permanently mount any of your weapons on the vehicle, for yourself and for secondary gunners. You can also permanently scrap any armor you have and add it to your vehicle's armor rating. At 0 HP, the vehicle is unusable, but you can repair 1D6 HP between missions.",
    item: {
      name: "Signature vehicle",
      description: "player's choice of type",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "VENOMOUS",
    description:
      "You can excrete a substance (perhaps as spit, or from your skin) that corrodes most materials and is fatal if ingested. Doing so is unpleasant and strenuous, and pushing out large amounts (i.e. more than a few drops, or a thin coating on a surface) will cost you 3 HP.",
    item: {
      name: "Indestructible vial",
      description: "easily concealed",
    },
    stat: "STR",
    adjustment: -1,
  },
  {
    name: "VETERAN",
    description:
      "You've seen war, plenty of it, and you know in your gut where to start looking when there's a target on your head. Whenever you enter a new area, you can ask the GM if there is a hidden danger and get an honest answer.",
    item: {
      name: "Assault rifle",
      description: "1D6+1 DAMAGE",
    },
    stat: "armor",
    adjustment: 1,
  },
  {
    name: "VOLATILE",
    description:
      "Your menagerie of ultrahuman abilities is virtually infinite in scope, but which powers manifest themselves (and when) is completely unpredictable. At the beginning of each mission, roll a trait (D666). That trait replaces this trait (VOLATILE) until the end of the mission (although you also retain VOLATILE's containment armor and -2 INT penalty). Reroll your trait when you rest, use a WAR DIE, or take 6+ DAMAGE.",
    item: {
      name: "Containment armor",
      description: "2 ARMOR",
    },
    stat: "INT",
    adjustment: -2,
  },
  {
    name: "WALLBANG",
    description:
      "You can shoot any form of ammunition through solid matter as though it were air. When you do so, there is a 3-in-1D6 chance that the shot will ricochet and harm someone else (possibly yourself) instead.",
    item: {
      name: "Laser sight",
      description: "attach to weapon for +1 on attack rolls",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "WEAPONMASTER",
    description:
      "At the beginning of each mission, declare a specific type of weapon which you are currently training yourself to defend against. It shouldn't be too vague; pick something like “bolt-action rifles” or “two-handed swords.\" If an enemy attacks you with the weapon type you chose, their DAMAGE is cut in half, rounded down. You cannot choose the same weapon type twice in a row.",
    item: {
      name: "Arms handbook",
      description: "see enemies' DAMAGE",
    },
    stat: "INT",
    adjustment: 1,
  },
  {
    name: "WEB",
    description:
      "Your web-shooters spray pressurized jets of sticky, artificial fiber with high tensile strength and a slow-dissolving chemical makeup. You may roll +DEX to incapacitate anyone by wrapping them in webs, and you may always deftly hang or swing from your webs without rolling the dice.",
    item: {
      name: "Web-shooters",
      description: "accessory",
    },
    stat: "DEX",
    adjustment: 1,
  },
  {
    name: "WEIGHTLIFTER",
    description:
      "You can always easily lift things close to your own weight. If it's something really heavy, like a huge tank or part of a crumbling building, there will be a complication from over-exertion—the GM will tell you what.",
    item: {
      name: "Heavy riot shield",
      description: "2 ARMOR, equip as weapon",
    },
    stat: "STR",
    adjustment: 1,
  },
  {
    name: "WHISPERER",
    description:
      "You can understand the thoughts of animals, and ask them for information or favors. They are not obligated to comply, and may not always have the necessary context to communicate with you effectively.",
    item: {
      name: "Fur cloak",
      description: "pacifies nearby animals, accessory",
    },
    stat: "CHA",
    adjustment: 1,
  },
  {
    name: "WINNER",
    description:
      "You can always win low-stakes contests of skill, mettle, or chance without rolling the dice. If it's a high-stakes game (like five- finger fillet, Russian roulette, or an all-in poker hand), you can push yourself to win automatically at the cost of 1D6 MAX HP.",
    item: {
      name: "Platinum chip",
      description: "extremely valuable",
    },
    stat: "WIS",
    adjustment: 1,
  },
  {
    name: "WITTY",
    description:
      "If you deliver a clever (or cheesy) one-liner that makes the other players laugh, groan, or cheer after overcoming a particularly difficult challenge, your HP is refilled to maximum.",
    item: {
      name: "Old sunglasses",
      description: "see through disguises",
    },
    stat: "CHA",
    adjustment: +1,
  },
];
