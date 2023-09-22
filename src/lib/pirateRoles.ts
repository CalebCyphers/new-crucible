// IDEA:
// Structure checks = WOUND CHECKS and give WOUND PENALTIES

// POTENCY = roll the DAMAGE or EFFECT twice and take the better

const commander = {
  name: "Commander",
  description: "",
  seaOfDeadMen: [
    {
      name: "Master and Commander",
      description:
        "When you lead you minions, hirelings, summons, or cohorts in combat, the first time they would be taken out, they in stead fight on. They get potency and 1 armor.",
    },
    {
      name: "Nobody's Fool",
      description: "You can always tell when somebody is lying.",
    },
    {
      name: "Ready for Anything",
      description:
        "You pay 1 less stress (minimum 0) for flashbacks. When you gather info to anticipate possible threats, you get ADVANTAGE.",
    },
    {
      name: "Self-Control",
      description:
        "When you indulge your vice, you may adjust the outcome by up to 2 stress (up or down). An ally who joins in your vice may do the same.",
    },
    {
      name: "Sharpshooter",
      description:
        "You can push yourself to make a ranged attack at extreme distance beyond what's normal for the weapon, or to unleash a barrage of fire to suppress the enemy.",
    },
    {
      name: "Tenacious",
      description: "Wound penalties are one level less severe",
    },
    {
      name: "Focused",
      description:
        "You may expend your BOOST to resist a consequence of surprise or mental harm (fear, confusion, etc.), or to push yourself when directing your subordinates.",
    },
  ],
  unbound: [
    {
      name: "Combat Medic",
      type: "Limited 2",
      description: "Make a Use action to let an ally in your area heal 10.",
      advanced:
        "You may heal yourself or an additional ally 5 when you use COMBAT MEDIC.",
    },
    {
      name: "Guardian Angel",
      type: "Limited 3",
      description:
        "When you make a Shoot or Strike action, an ally in the target area gains 2 temporary stamina. Unlike other sources of temporary stamina, this stacks with any existing temporary stamina that the target possesses.",
      advanced:
        "If at the end of their turn your ally has no temporary stamina, make an additional Shoot or Strike action against an adversary in their area.",
    },
    {
      name: "On Your Feet",
      type: "Always on",
      description:
        "You may nominate a target other than yourself for Recover actions. When you do so, the target heals the damage from their discard pile, rather than replenishing it from their character deck.",
      advanced: "When you use this power, black cards restore +1 stamina.",
    },
    {
      name: "Martyr",
      type: "Always on",
      description:
        "When an ally in your area takes a wound, you may take half of the damage (rounding up) yourself. Any other effects are still applied to the original target.",
      advanced:
        "If the attacking adversary is within 2 areas, they take damage equal to half of their initial wound value.",
    },
    {
      name: "We Stand Together",
      type: "Limited 2",
      description:
        "As a Use action, deal a stack of 4 cards in the centre of the table; when you or an ally in your or an adjacent area takes damage, treat this stack as though it was temporary stamina.",
      advanced: "As a Use action, add 1 card to the We Stand Together stack.",
    },
  ],
};

const mariner = {
  name: "Mariner",
  description:
    "You're used to station engineering - the kind that regularly requires crawling through nightmarishly tight vents, squeezing past boiling-hot steam pipes, and tapping on thin panes of sheet metal that lie between you and certain death. After that, keeping this lousy lot up and running is nothing.",
  specialAbilities: [
    {
      name: "In Fine Condition",
      description:
        "Pick one aspect of your flagship (cannons, sails, grapnels, etc.) that you've personally maintained. When you make a roll using that part of the ship, you get ADVANTAGE. You can change your selection during downtime.",
    },
    {
      name: "No Rest For the Weary",
      description:
        "During downtime, you may take an additional downtime action.",
    },
    {
      name: "Saboteur",
      description:
        "When you circumspectly cause damage to a ship, building, or other structure, the work is much quieter than it should be and the damage is hidden from casual inspection.",
    },
    {
      name: "Sawbones",
      description:
        "You can Patch up crewmates during a score to let them temporarily mitigate penalties from harm. The crew gets ADVANTAGE to recovery rolls.",
    },
    {
      name: "Shipshape",
      description: "Traveling between regions costs 1 less cred (minimum 0).",
    },
    {
      name: "Side Jobs",
      description:
        "You may spend a downtime action in port doing odd jobs. You gain 1 cred for your troubles, and the GM will tell you of any rumors floating around the port.",
    },
    {
      name: "To the Brink",
      description:
        "You can push yourself to ignore harm to the ship, or to ignore the difference in quality between your ship and an enemy's.",
    },
    {
      name: "Sturdy",
      description:
        "You may expend your BOOST to reduce harm to your ship or its sailors, or to push yourself in controlling the ship.",
    },
    {
      name: "Veteran",
      description: "Choose a special ability from another source.",
    },
  ],
  unbound: [
    {
      name: "Centre of Attention",
      type: "Limited 3",
      description:
        "After you make a Move or Recover action, Pull 1 and inflict 1 damage to all adversaries within 1 area.",
      advanced: "As above, but you may choose to Push or Pull the targets.",
    },
    {
      name: "Get Down!",
      type: "Limited 4",
      description:
        "When an ally within 1 area takes damage, you take the damage instead. If the ally is in an adjacent area, Move to their area as an immediate action before taking the damage.",
      advanced: "As above, but the damage is halved.",
    },
    {
      name: "Iron Constitution",
      type: "Always on",
      description:
        "When you take a wound, you may gain up to 3 temporary stamina.",
      advanced:
        "As above, and all allies in your area gain 1 temporary stamina.",
    },
    {
      name: "Line in the Sand",
      type: "Limited A",
      description:
        "When you make a Recover action, mark the area you are occupying. In that area, you and your allies gain +1 stamina on Recover actions and inflict +1 damage on Strike or Shoot attacks. When you are no longer in this area or take a wound, this power ends.",
      advanced:
        "The area you occupy during Line in the Sand becomes Damaging 2 to adversaries.",
    },
    {
      name: "Marked",
      type: "Limited Special",
      description:
        "When you hit with a Strike or Shoot action, use this power. The target deals half basic damage when it makes Strike or Shoot actions that do not include you as a target until you take a wound. When you take a wound, this power recharges.",
      advanced: "When you use Marked, gain 2 temporary stamina.",
    },
  ],
};

const reaver = {
  name: "Reaver",
  description: "",
  specialAbilities: [
    {
      name: "Savage",
      description:
        "When you unleash physical violence, it's especially frightening. When you Command a frightened target, you get ADVANTAGE.",
    },
    {
      name: "Armed to the Teeth",
      description:
        "It's nigh-impossible to catch you without a weapon. Your load limits are higher - Light: 5, Normal: 7, Heavy: 8.",
    },
    {
      name: "Bodyguard",
      description:
        "When you protect a teammate, you get ADVANTAGE to your resistance roll. When you take harm, clear 1 stress.",
    },
    {
      name: "Fearsome Reputation",
      description:
        "For good or ill, everybody's heard of you. You get increased position when you intimidate someone who only knows you by name.",
    },
    {
      name: "Not Without a Fight",
      description:
        "When you mark a trauma, you may retaliate against any and all enemies within range. Say how you bring ruin to your foes before they take you down. You may mark a trauma prematurely to use this ability.",
    },
    {
      name: "Resilient",
      description:
        "You recover from harm faster. Permanently fill one segment on your healing clock. You get +1 to healing treatment rolls.",
    },
    {
      name: "Right Bastard",
      description:
        "You get ADVANTAGE when you exploit a target's vulnerability or weakness. When you blatantly violate the rules of engagement - killing an enemy during negotiations or surrender, cheating in a duel, holding a civilian hostage, etc. - you get increased effect.",
    },
    {
      name: "Battleborn",
      description:
        "You may expend your BOOST to reduce harm from an attack in combat or to push yourself in a fight.",
    },
    {
      name: "Veteran",
      description: "Choose a special ability from another source.",
    },
  ],
  unbound: [
    {
      name: "Blood in the Eyes",
      type: "Limited 2",
      description:
        "When you inflict damage on an adversary, declare you are using this power. That adversary takes Bleed 2, and until they remove the Bleed, their Proficiency is 0.",
      advanced:
        "Until the target of this power removes the Bleed, they inflict -1 damage to a minimum of 0.",
    },
    {
      name: "Bring It On",
      type: "Always on",
      description:
        "When you use a red card to make a Strike action, inflict +1 damage. When you use a red face card to make a Strike action, inflict +2 damage in addition to the effects of the boost.",
      advanced:
        "[Always on] When you have 0 stamina, you no longer take damage from using red cards to make Strike actions, and red face cards inflict +3 damage instead of +2.",
    },
    {
      name: "I Like Those Odds",
      type: "Always on",
      description:
        "When you are surrounded – when there are more adversaries than allies in your area – your Strike proficiency is 3.",
      advanced:
        "If there are three or more adversaries in your area, inflict +1 damage.",
    },
    {
      name: "Shock and Awe",
      type: "Always on",
      description:
        "Once per turn when you inflict a wound, all other adversaries in the same area take 2 damage. If there are no adversaries in your area, Pull 1 an adversary within 1 area.",
      advanced: "When you use Shock and Awe, you gain 2 temporary stamina.",
    },
  ],
};

const scoundrel = {
  name: "Scoundrel",
  description: "",
  seaOfDeadMen: [
    {
      name: "Jack of All Trades",
      description:
        "Take 2 stress to roll your best action rating while performing a different action. Say how you adapt your skill to this use.",
    },
    {
      name: "Ambush",
      description:
        "When you spring a trap or attack from hiding, you get increased effect.",
    },
    {
      name: "Honest Face",
      description:
        "You gain ADVANTAGE when you deceive a target who you have never lied to before.",
    },
    {
      name: "I Know a Guy",
      description:
        "During downtime, you get +1 result level when you acquire an asset or reduce heat.",
    },
    {
      name: "Lead From Behind",
      description:
        "You get ADVANTAGE when you participate in a group action in combat, or when you set up another character for violence.",
    },
    {
      name: "Set the Stage",
      description:
        "When you set up or assist an ally's action, it only costs 1 stress for them to push themselves.",
    },
    {
      name: "Weaving the Web",
      description:
        "You gain ADVANTAGE to Consort when you gather information on a target for a score. You get ADVANTAGE to the engagement roll for that mission.",
    },
    {
      name: "Weasel",
      description:
        "You may expend your BOOST to resist a consequence from suspicion or detection, or to push yourself when trying to get out of trouble.",
    },
    {
      name: "Veteran",
      description: "Choose a special ability from another source.",
    },
  ],
  unbound: {
    name: "DIRTY FIGHTER",
    description:
      "Fighting fair is for chumps. You’re a master of the hidden razor, the backstab, the kick to the balls, the salt-in-the-eyes, the twelve-mates-hiding-with-clubs-down-an-alley. You’ve been kicked out of more bars than most people have had hot dinners.",
    abilities: [
      {
        name: "Limited 3",
        type: "Limited 3",
        description:
          "You make things difficult for your enemies – traps, caltrops, fire, poison gas, all the old standards. At the beginning of your turn, use this power on the area you are currently occupying to make it Damaging 1 for your adversaries. If you use this power more than once on the same area, it stacks, to a maximum of Damaging 4.",
        advanced:
          "The first time you use this power on an area, it becomes Damaging 2.",
      },
      {
        name: "Gang Up",
        type: "Always on",
        description:
          "“You hold him, I’ll work the body.” When you make a Strike action when another ally is in your area, deal +1 damage.",
        advanced:
          "Once per round, when you miss with a Strike action, an ally in your area may make an immediate Strike action.",
      },
      {
        name: "Feign Innocence",
        type: "Limited 2",
        description:
          "You make yourself appear harmless, luring your adversaries into a false sense of security. Make a contested Use action against an adversary in your or an adjacent area. They may not attack you until the end of your next turn, though effects directed against all targets in an area may still hurt you.",
        advanced: "You may make the Use action as an interrupt.",
      },
      {
        name: "Take Advantage",
        type: "Always on",
        description:
          "Put them on the back foot, and keep up the pressure. When you inflict a wound on a target, attacks against that target deal +1 damage until the end of your next turn.",
        advanced:
          "Until the end of your next turn, if the target misses with a Shoot or Strike action, they take 2 damage.",
      },
    ],
  },
};

const swashbuckler = {
  name: "Swashbuckler",
  description: "",
  specialAbilities: [
    {
      name: "Daredevil",
      description:
        "When you roll a desperate action, you get ADVANTAGE to your roll if you also take -1d to any resistance rolls against consequences from your action.",
    },
    {
      name: "Against the Odds",
      description:
        "You can push yourself to perform a nigh-impossible feat of acrobatics, or to engage a small mob of enemies on an even footing.",
    },
    {
      name: "Cloak and Dagger",
      description:
        "When you use a disguise or other form of covert misdirection, you get increased effect. When you throw off your disguise, the resulting surprise gives you the initiative in the situation.",
    },
    {
      name: "Momentum",
      description:
        "When you roll a critical on an action roll, clear 1 stress.",
    },
    {
      name: "Nemesis",
      description: "You get ADVANTAGE when confronting an opponent who has.",
    },
    {
      name: "One of Us",
      description:
        "You gain potency when Consorting with characters who share your heritage or background.",
    },
    {
      name: "Reflexes",
      description:
        "When there's a question about who acts first, the answer is you. Two characters with Reflexes act simultaneously.",
    },
    {
      name: "Irrepressible",
      description:
        "You may expend your BOOST to resist a consequence from a verbal or physical duel, or to push yourself in a feat of derring-do.",
    },
  ],
  unbound: [
    {
      name: "Smoke Bomb",
      type: "Limited A",
      description:
        "At the end of your turn, declare you’re using this power on the area you are occupying. Until the end of your next turn: That area is Challenging; Adversaries may not Shoot into or through the area; Adversaries cannot use their Proficiencies while in the area.",
      advanced:
        "Smoke Bomb now affects the area you are occupying and one connected area.",
    },
    {
      name: "Mobile Assault",
      type: "Limited 3",
      description:
        "At any point during your turn, make an immediate escape move and gain 2 temporary stamina.",
      advanced:
        "All adversaries in your starting area take 2 damage before you Move.",
    },
    {
      name: "Stay Down",
      type: "Limited 2",
      description:
        "When you inflict a wound, declare you are using this power. The adversary you wounded makes 1 fewer action on its next turn. Troop-level adversaries under the effect of this power may not act on their next turn.",
      advanced:
        "Adversaries affected by the power lose 2 actions on their next turn.",
    },
    {
      name: "Momentum",
      type: "Always on",
      description:
        "At the end of your turn, gain temporary stamina equal to the number of wounds you inflicted that turn.",
      advanced:
        "When you inflict damage, inflict extra damage equal to your temporary stamina.",
    },
    {
      name: "Duel",
      type: "Limited 3",
      description:
        "When you successfully Strike a target, and you and the target are the only characters in your area, inflict a wound.",
      advanced: "When you use Duel, gain 2 temporary stamina.",
    },
  ],
};

const mechanic = {
  title: "Mechanic",
  description:
    "A gearhead and hacker. Whether it’s fixing up the ship’s engines or constructing a specialized safecracker to break into a Hegemonic vault, a mechanic is an invaluable asset on most jobs...",
  xpTrigger:
    "When you play a Mechanic, you earn xp when you address challenges with technical skill or ingenuity.",
  prompt:
    "Did you make your own drone? How’d you learn your technical skills? Where’d you find your pet and what is it? Are you unassuming, fading into a crowd, or hard to miss, covered in tattoos?",
  colorfulFriends: [
    {
      name: "Slice",
      description:
        "a junkyard owner. What parts do they save for you? Or did you boost something of theirs?",
    },
    {
      name: "Nisa",
      description:
        "a previous employer. A captain or a business owner? Did it end well?",
    },
    {
      name: "Stev",
      description:
        "a gambler of ill repute. Are you long-standing friends? Did you cheat at their table?",
    },
    {
      name: "Len",
      description:
        "a black market dealer. Do they get you the parts no one else can? Did you fail to deliver something you promised?",
    },
    {
      name: "Kenn",
      description:
        "a family member. Are they also a mechanic? Were you both vying for a parent’s attentions?",
    },
  ],
  startingAbility: {
    name: "TINKER",
    description:
      "When you work on a clock with HACK OR FIX, or when you STUDY a schematic, fill +1 segment.",
    notes:
      "You get this bonus segment regardless of whether this is a downtime action or not. This means that bypassing security on a job or doing an emergency patch while escaping a chasing ship is easier for you than others.",
  },
  specialAbilities: [
    {
      name: "BAILING WIRE AND MECH-TAPE",
      description:
        "You get an extra downtime activity to repair, and the repair activity costs you 0 CREd.",
      notes:
        "The repair downtime activity usually takes 1 CREd to perform. With this ability, you can take the activity at no CREd cost. The free repairs can’t be “saved up.” You get one per downtime.",
    },
    {
      name: "CONSTRUCT WHISPERER",
      description:
        "Machines speak to you when you STUDY them. The first time you roll a critical while fixing or building a particular machine, you may add a simple modification to it (see Crafting, page 282).",
      notes:
        "How do machines whisper their secrets to you? Is it intuitive? Do you feel what they feel? You do not gain the modification if you improve the result with CREd.",
    },
    {
      name: "JUNKYARD HUNTER",
      description:
        "When you acquire parts or equipment during downtime, you may either gain two assets or one asset at +1 quality.",
      notes:
        "Your junkyard contacts can get what you need refurbished or on special offer. If you gain two assets, they both have the same quality as your roll.",
    },
    {
      name: "HACKER",
      description:
        "You may expend your special armor to resist the consequences of HACKing, or to push yourself when HACKing or gathering info electronically.",
      notes:
        "When you use this ability, tick the special armor box on your playbook sheet. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored when you select your load at the start of a job.",
    },
    {
      name: "FIXED",
      description:
        "You may expend your BOOST to resist a consequence from machines breaking or being damaged, or to push yourself when repairing or building a machine.",
      notes:
        "When you use this ability, tick the special armor box on your playbook sheet. Machines can include your ship, so you can use this as special armor for your ship if you are onboard dealing with the damage. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored when you select your load at the start of a job.",
    },
    {
      name: "MECHANIC’S HEART",
      description:
        "When you speak from your heart, your words can reach even the most hardened criminal, and you gain ADVANTAGE.",
      notes:
        "This ability works in all situations without restriction. As long as you speak genuinely and sincerely, your words will be heard.",
    },
    {
      name: "OVERCLOCK",
      description:
        "When you spend BOOST on a RIG roll to repair or upgrade, the system you worked on has ADVANTAGE for the remainder of the job.",
      notes:
        "You may make a RIG roll during a job to simply get more out of a system, but such temporary boosts are only situational and need to be backed out the next time you hit drydock. You can overclock systems that aren’t ships, enhancing the system’s quality.",
    },
    {
      name: "ANALYST",
      description:
        "When you HACK a system, you may also ask a question about the owner or location of the system as though you had rolled a 6 on gather info. When you resist the consequences of HACKing, roll +1d.",
      notes:
        "Regardless of the purpose for which you are HACKing, you learn something about the systems you’re manipulating. If you were gathering information, you may roll to learn a second thing, or you can simply accept the 6 for what you wanted to know.",
    },
  ],
  items: [
    {
      name: "Fine hacking rig.",
      description:
        "Visualization goggles, unpublished exploits, overclocked non-market chips, optical vampire taps...",
      notes:
        "Who maintains your gear? Do you write your own programs or does someone hook you up with the latest? Any decorations on your kit?",
      load: 1,
    },
    {
      name: "Fine ship repair tools.",
      description:
        "Power-assisted wrenches, a sonic drill, testing probes, power calibrators, a rivet gun.",
      notes: "Is this a set of items, or did you pick them up piecemeal?",
      load: 2,
    },
    {
      name: "Small drone.",
      description:
        "Small, remote-controlled drone with cameras. May be able to carry something light.",
      notes:
        "Did you make this or buy it? Does it fly, slither, or crawl? What nickname did you give it? Do you have several drones on the ship, or just a bunch of chassis and repair bits you use to repair one drone?",
      load: 0,
    },
    {
      name: "Vision-enhancing goggles",
      description:
        "Eyewear with settings for thermal and ultraviolet, and magnification levels in the thousands. Even tints when required.",
      notes: "What do they look like?",
      load: 1,
    },
    {
      name: "Spare parts",
      description:
        "Usually for ship repairs and electronics. Often forgotten in a pocket or tool belt. Although it’s usually nothing overly expensive, you end up carrying parts you’re working on and pieces for fixing ships. If you ever need a wire, solder, or a piece of tape, you have it on hand. Anything rare or more complex might take a lifestyle roll (see page 49) to have on you.",
      notes: null,
      load: 1,
    },
    {
      name: "Genius pet",
      description:
        "Incapable of speaking, but can understand language and assist with basic tasks. Likes you. Really cute. Anticipates your actions.",
      notes:
        "Is it something familiar (like a dog or a cat) or a small alien creature? What is its name? Who did you get it from (legally or illegally)?",
      load: 0,
    },
  ],
};

const muscle = {
  name: "MUSCLE",
  description:
    "A dangerous and intimidating fighter. Most crews have one. The Procyon sector isn’t a safe place, and when negotiations and slick words fail, it’s time for blasters, ship cannons, and close, swift violence. You are the crew’s ability to apply force. Your presence dissuades drawn weapons and your strength ends violent conversations. You can be a protector, enforcer, boarder, or quiet threat on the back burner. But you cannot be ignored.",

  xp_trigger: "When you address challenges with force or threats.",
  prompt:
    "Make sure everyone knows that violence and intimidation are always options, and you stand ready to deliver. When things fall apart, show them how it’s done.",

  notes:
    "Do you have a personal code that you follow? Times you won’t apply violence no matter the cost? What caused you to throw your lot in with the crew and not seek employment as a soldier?",

  deadly_friends: [
    {
      name: "Krieger",
      description: "a blaster pistol",
      prompt:
        "Is this your favorite sidearm? Or is a rival carrying it to use on you?",
    },
    /* ... other friends go here ... */
  ],

  starting_ability: {
    name: "UNSTOPPABLE",
    description:
      "You can push yourself to do one of the following: perform a feat of physical force that verges on the superhuman—engage a small gang on equal footing in close combat.",
    notes:
      "When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) in addition to the special ability.",
  },
  specialAbilities: [
    {
      name: "WRECKING CREW",
      description:
        "Your strength and ferocity are infamous. When striking in melee, you gain +1d. Whenever you spend a gambit in combat, you also gain +1 effect on that action.",
      notes:
        "Whether you are a master of martial arts, or raised by mystics to fight with antique weapons, your martial prowess in close combat is legendary (and may attract those that wish to learn from or challenge you). If you spend a gambit in combat, take +1 effect on that action. This can hit a single opponent harder or offset penalties from scale or quality. This also stacks with the +1d from the gambit and the +1d from the core Wrecking Crew ability.",
    },
    {
      name: "BACKUP",
      description:
        "An ally’s push costs 1 stress (not 2) on any action you set up or assist. The set up and assist actions (see page 158) still grant their bonus dice or effect as usual.",
    },
    {
      name: "BATTLEBORN",
      description:
        "You may expend your special armor to reduce harm from an attack in combat, or to push yourself during a fight.",
      notes:
        "When you use this ability, tick the special armor box on your sheet. “Reducing harm” means reducing the harm one level. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but don’t take 2 stress. Your special armor is restored when you select your load at the start of a job.",
    },
    {
      name: "BODYGUARD",
      description:
        "When you protect a crewmate, resist with +1d. When you take harm, clear 1 stress.",
      notes:
        "The protect teamwork maneuver (see page 158) lets you face a consequence for a teammate.",
    },
    {
      name: "FLESH WOUND",
      description:
        "If you’re wounded at the beginning of downtime, mark +3 segments on your healing clock. When you push yourself to ignore wound penalties, it takes only 1 stress (not 2).",
      notes:
        "Whether naturally tough or augmented in some way, wounds don’t keep you down. See Recover on page 187 for more information.",
    },
    {
      name: "PREDATOR",
      description:
        "Take +1d to rolls against weakened or vulnerable targets. Whenever you gather information on a weakness or vulnerability, the worst you can get is a 4/5 result.",
      notes:
        "You know how to leverage fear, pain, and vulnerability to get your way. When trying to suss out such things in a person, you usually come up with something, even if the information isn’t immediately useful or is incomplete. Someone in a vulnerable state might be drugged, trusting, badly wounded, or frightened.",
    },
    {
      name: "READY FOR ANYTHING",
      description:
        "When being ambushed, you gain potency to all actions during a flashback, and your first flashback costs 0 stress.",
      notes:
        "You always expect ambushes and prepare for them. Flash back to such preparation when an ambush happens. If your preparation requires action rolls, you gain potency on them.",
    },
    {
      name: "SCARY",
      description:
        "You have an air of menace and danger obvious to even the most unobservant. You gain potency when trying to intimidate someone. If done immediately after a show of force, also take +1d.",
      notes:
        "You instill fear in those around you, particularly when you get violent. How they react depends on them. Some will flee from you, some will be impressed, some will get violent in return. The GM judges the response of a given NPC. Intimidation is usually handled with a COmmAnd roll, and your efforts to do so are more successful if you show you mean business.",
    },
  ],

  items: [
    {
      name: "Krieger, a fine blaster pistol",
      description:
        "As a friend or ally, this signature pistol can be used during downtime to threaten or intimidate. As an enemy, someone else owns it and it’s carrying a bullet for you.",
      notes: "You know this gun intimately—from where or why?",
      load: 1,
    },
    /* ... other items go here ... */
  ],
};

const Pilot = {
  description: "A ship-handling wizard and danger addict",
  intro:
    "You are the crew’s speed demon and “get out of trouble” card. When the chips are down and the Legion is on your tail, there’s nobody else they’d rather turn to. There’s no vehicle you can’t overdrive, no canyon on an alien planet you can’t navigate through. You might be a hot-rodding show-off or calm and cool behind the helm. You might take desperate risks or thrive when the chips are down. But you’re always ahead of the pack.",
  xpTrigger:
    "When you play a Pilot, you earn xp when you address challenges with speed or flair.",
  backgroundQuestions: [
    "How’d you get so good with ships?",
    "What’s the most risky stunt you’ve pulled off—and who knows about it?",
    "How did you get an Urbot?",
    "Are you fearless, or just very, very good?",
  ],
  fastFriends: {
    Yattu:
      "a gang boss. Did you use to fly for them? Did you leave them in the lurch on a job?",
    Triv: "a ship mechanic. Have they always helped you with your ship? Did you “forget” to pay them for a big upgrade?",
    Choss:
      "a professional racer. Do you have hot tips for each other? Or are you always striving to outdo each other?",
    Meris:
      "a scoundrel. Have you been on jobs together? Have they double-crossed you before?",
    Mav: "a former mentor. What tricks did they teach you? Are they now jealous of your skill?",
  },
  startingAbility: {
    name: "ACE PILOT",
    effect:
      "You have potency on all speed-related rolls. When you roll to resist the consequences of piloting, gain +1d.",
    notes:
      "Your potency might be balanced out by their better quality (if their ship engines are better than yours, for instance). Remember that the consequences of piloting are not always ship damage but can often be resisted just the same.",
  },
  specialAbilities: [
    {
      name: "KEEN EYE",
      description:
        "You have sharp eyes and notice small details many might overlook. Gain +1d when firing ship guns or making trick shots.",
      notes:
        "This can be used as a basis for resistance rolls to act first. Also, trick shots can be performed with almost any kind of ranged weapon, not just ship weapons.",
    },
    {
      name: "SIDE JOB",
      description:
        "You may spend a downtime activity in port doing odd jobs. Gain 1 CREd. If there are rumors floating about, the GM will tell you of them.",
      notes:
        "The GM should treat this as a gather information roll, where you roll a 6 to learn about whatever is in the news and gossip at that port.",
    },
    {
      name: "EXCEED SPECS",
      description:
        "While onboard a ship, you may damage a ship system you have access to in order to gain +1d or +1 effect to a roll.",
      notes:
        "Overload a system for a short-term boost. After the roll, the system fries out and the quality is reduced.",
    },
    {
      name: "LEAF ON THE WIND",
      description:
        "When you push yourself, you may spend +1 stress (3 stress total) to gain both +1 effect and +1d instead of one or the other.",
      notes:
        "Normally it takes two separate pushes (4 stress total) to achieve the same effect. This can be used on any roll.",
    },
    {
      name: "HEDONIST",
      description:
        "When you indulge your vice, you may adjust the dice outcome by +/-2. An ally who joins you may do the same.",
      notes:
        "Any ally must join you in whatever vice you’re indulging. You can adjust the outcome by less than 2, or not adjust it at all. You can also recover more than 6 stress on a vice roll this way.",
    },
    {
      name: "COMMANDER",
      description:
        "Whenever you lead a group action, gain +1 scale. If you lead a group action in combat, you may count multiple 6s from different rolls as a critical.",
      notes:
        "A group action is one where multiple PCs perform the same action. If two or more players roll a 6, then the result of the roll for everyone is a crit. You must still suffer stress costs from any participant whose result is a 1-3.",
    },
    {
      name: "TRAVELER",
      description:
        "You’re comfortable around unusual cultures and xenos. You gain potency when attempting to COnSORT with or SWAy them.",
      notes:
        "This ability represents a wide swath of experience and understanding with xeno cultures.",
    },
    {
      name: "PUNCH IT!",
      description:
        "When you spend a gambit on a desperate roll, it counts as risky instead.",
      notes:
        "Because you spent a gambit on the roll, the roll may not itself generate a gambit. This can be used on any roll, not just piloting ones.",
    },
  ],
};

const scoundrel_scum = {
  name: "SCOUNDREL",
  description:
    "A scrappy and lucky survivor. Neither the most reputable nor the one to choose the safe route, you’re a smooth-talking criminal and luck is just one of your many skills.",
  notes: [
    "When you play a Scoundrel, you earn xp when you address challenges with charm or audacity.",
    "Who was the last person you cheated out of their due? Are you loyal to this crew, or are they just a means to an end? How many times have you been left for dead?",
  ],
  friends: [
    {
      name: "Nyx",
      role: "a moneylender",
      options: ["Are you a favorite client?", "Or a deadbeat with a debt?"],
    },
    {
      name: "Ora",
      role: "an info broker",
      options: ["Always coming to you with juicy tip?"],
    },
    {
      name: "Jal",
      role: "a ship mechanic",
      options: [
        "Have they always helped you with your ship?",
        "Or is the ship theirs, and they want their due?",
      ],
    },
    {
      name: "Rhin",
      role: "a smuggler",
      options: [
        "A trustworthy source that passes on tips?",
        "A rogue that came up in the ranks with you?",
        "Or a rival in your line of work?",
      ],
    },
    {
      name: "Battro",
      role: "a bounty hunter",
      options: [
        "Have they let you go before?",
        "Are they looking for you now?",
      ],
    },
  ],
  startingAbility: {
    name: "SERENDIPITOUS",
    description: "Your crew starts with +1 gambit when the pool resets.",
    notes:
      "This increases the crew’s starting gambits on a job. You’re just plain luckier than other people.",
  },
  specialAbilities: [
    {
      name: "NEVER TELL ME THE ODDS",
      description:
        "You generate gambits on desperate rolls. You may also generate gambits even if you spent a gambit.",
      notes:
        "Normally you only generate gambits on risky rolls for which you have not spent a gambit. Your ability to “stretch” gambits, regenerating them on rolls you have already spent them on, gives you the ability to put yourself in situations others might not even want to consider.",
    },
    {
      name: "I KNOW A GUY",
      description:
        "When you first dock at a port after being away, pick one and ask the GM about a job: it’s not deadly—it pays well enough—it’s not a rush job—it comes from a faction you trust—it targets an enemy you have. You may spend 1 CREd per additional feature.",
      notes:
        "Though you keep an ear to the ground, sufficient time has to pass for new jobs to crop up at a port (usually a downtime or two). The GM will tell you how you hear about the work; it might be a publicly available bounty or something a contact reaches out about.",
    },
    {
      name: "TENACIOUS",
      description:
        "Penalties from harm are one level less severe (though level 4 harm is still fatal).",
      notes:
        "When harm penalties are applied to action rolls, treat them as one level less than you’d expect, so level 1 harm is ignored, and level 3 harm is -1d. Level 4 harm, also called lethal harm, is still lethal unless you can use armor or a resistance roll to reduce it first.",
    },
    {
      name: "WHEN THE CHIPS ARE DOWN",
      description:
        "You gain a second use of special armor between each downtime.",
      notes:
        "This allows you to use a second special armor OR use the same special armor twice.",
    },
    {
      name: "DEVIL’S OWN LUCK",
      description:
        "You may expend your special armor to resist the consequences of blaster fire, or to push yourself when talking your way out of (or running from) trouble.",
      notes:
        "When you use this ability, tick the special armor box on your playbook sheet. Blaster fire can extend to pistols and being shot in any way, and running from trouble can be via spaceship as much as your feet. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored when you select your load at the start of a job.",
    },
    {
      name: "DAREDEVIL",
      description:
        "When you make a desperate roll, you may take +1d. If you do so, do not mark xp in that action’s attribute.",
      notes:
        "You need to make the decision before your roll. You may only take this extra die if the final position of the roll is desperate, so if you use a setup to change the position to risky, for example, you may not take the extra die.",
    },
    {
      name: "SHOOT FIRST",
      description:
        "When you attack from hiding or spring a trap, take +1d. When there’s a question about who acts first, the answer is you (two characters with Shoot First act simultaneously).",
      notes:
        "To attack from hiding, your target must be unaware of you. If you’re springing a trap, your target must be unaware of the trap.",
    },
    {
      name: "ASK QUESTIONS LATER",
      description:
        "When you COnSORT to gather info, you gain +1 effect and can in addition ask: Who might this benefit?",
      notes:
        "When you ask your own question, you learn the answer to that, as well as to the question “who might this benefit?” Since you gain potency, the worst a normal gather information roll can produce would be standard results.",
    },
  ],
};

export const pirateJobs = [commander, mariner, reaver, scoundrel, swashbuckler];
