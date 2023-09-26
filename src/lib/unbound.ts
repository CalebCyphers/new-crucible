const PROTECTOR = {
  name: "The Protector",
  boosts: [
    {
      name: "Keep your head down",
      type: "Move",
      effect: "Gain +2 temporary stamina.",
    },
    {
      name: "Covering fire",
      type: "Shoot",
      effect: "An ally in the target area gains +2 temporary stamina.",
    },
    {
      name: "Get back",
      type: "Strike",
      effect: "You or an ally in your area gains +2 temporary stamina.",
    },
    {
      name: "Inspire",
      type: "Recover",
      effect: "All allies in your area heal 2.",
    },
    {
      name: "Distract",
      type: "DEFENCE",
      effect:
        "Until the start of your next turn, attacks against the adversary inflict +1 damage.",
    },
  ],
  powers: [
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

const WARDEN = {
  name: "The Warden",
  description:
    "You specialise in taking hits and walking away from dangerous situations intact.",
  boosts: [
    {
      name: "Get moving",
      type: "Move",
      effect: "One ally within 2 areas may make an immediate escape move.",
    },
    {
      name: "Come here",
      type: "Shoot",
      effect: "Pull the target one area towards you.",
    },
    {
      name: "Face me",
      type: "Strike",
      effect:
        "Until the start of your next turn, your target's attacks must include you.",
    },
    {
      name: "You're trapped in here with me",
      type: "Recover",
      effect: "All adversaries in your area take 1 damage.",
    },
    {
      name: "Call that a hit?",
      type: "DEFENCE",
      effect:
        "Until the start of your next turn, when you take damage, take 1 less damage to a minimum of 1.",
    },
  ],
  powers: [
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

const BRAWLER = {
  name: "The Brawler",
  description:
    "You're tough, and you excel at close-range combat. You're good at giving out punishment and absorbing a�acks that would take down weaker members of your team.",
  boosts: [
    {
      name: "Tear it up",
      type: "Move",
      effect: "All adversaries in your starting and target area take 1 damage.",
    },
    {
      name: "Get in there",
      type: "Shoot",
      effect: "Make an immediate escape move towards your target.",
    },
    {
      name: "Make it hurt",
      type: "Strike",
      effect: "You inflict +2 damage.",
    },
    {
      name: "Keep going",
      type: "Recover",
      effect:
        "If you inflict damage before the end of your next turn, gain 2 temporary stamina.",
    },
    {
      name: "Surprise attack",
      type: "DEFENCE",
      effect:
        "If the attacker misses with their attack, inflict damage against them as dictated by the card's suit.",
    },
  ],
  powers: [
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
        "When you are surrounded - when there are more adversaries than allies in your area - your Strike proficiency is 3.",
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

const DEADEYE = {
  name: "The Deadeye",
  description:
    "You are a master of ranged combat; accurate and deadly, with a focus on speed and mobility.",
  boosts: [
    {
      name: "Dive for cover",
      type: "Move",
      effect: "Regain 2 stamina.",
    },
    {
      name: "Make it count",
      type: "Shoot",
      effect: "If your attack is successful, it inflicts a wound.",
    },
    {
      name: "Slip away",
      type: "Strike",
      effect: "Make an immediate escape move after this action is triggered.",
    },
    {
      name: "Reload",
      type: "Recover",
      effect: "Your Shoot proficiency is 4 until the end of your next turn.",
    },
    {
      name: "Go to Ground",
      type: "Defence",
      effect:
        "You cannot be targeted with Shoot actions until the start of your next turn.",
    },
  ],
  powers: [
    {
      name: "Boom",
      type: "Limited 3",
      description:
        "When you Shoot, also attack all other adversaries in the target's area - these extra attacks inflict half damage if they hit.",
      advanced:
        "When you use Boom, all adversaries in the target area may not make Move actions until the end of your next turn. Escape moves function as normal.",
    },
    {
      name: "Extreme Range",
      type: "Limited special",
      description:
        "When you Shoot, you may attack a target up to 4 areas away. This power recharges when you make a Move or Recover action, and you may recharge it on the turn you use it.",
      advanced:
        "When you attack a character that is 3 or more areas away from you, inflict +1 damage.",
    },
    {
      name: "Overwatch",
      type: "Limited 2",
      description:
        "When an adversary hits an ally in an area you can reach with a Shoot action, make an immediate Shoot action against that adversary. If you hit, your ally takes half damage from the attack. If you wound, your ally takes no damage from the attack. If you miss, your ally gains 1 temporary stamina.",
      advanced:
        "As above, but your ally takes no damage from the attack if you hit. If you miss, your ally takes half damage but gains no temporary stamina.",
    },
    {
      name: "Running Battle",
      type: "Limited 4",
      description:
        "During your turn, make an escape move or Recover as a free action.",
      advanced:
        "You may use this power at the start of any character's turn as an interrupt, not just your own.",
    },
  ],
};

const STRIKER = {
  name: "The Striker",
  description:
    "You hit hard and fast. You're not the toughest around, but you make up for it with with unparalleled mobility and the fact that dead adversaries can't fight back.",
  boosts: [
    {
      name: "Dash",
      type: "Move",
      effect: "Move an additional area at the end of your turn.",
    },
    {
      name: "Suppressing fire",
      type: "Shoot",
      effect: "Push or Pull the target 1 area.",
    },
    {
      name: "Hit the weak point",
      type: "Strike",
      effect: "If your attack is successful, it inflicts a wound.",
    },
    {
      name: "Get behind someone",
      type: "Recover",
      effect:
        "If there is another friendly character in your area, adversary attacks must include them until the start of your next turn.",
    },
    {
      name: "Counter",
      type: "DEFENCE",
      effect:
        "Your Strike proficiency against your attacker is 4 until the end of your next turn.",
    },
  ],
  powers: [
    {
      name: "Smoke Bomb",
      type: "Limited A",
      description:
        "At the end of your turn, declare you're using this power on the area you are occupying. Until the end of your next turn: That area is Challenging; Adversaries may not Shoot into or through the area; Adversaries cannot use their Proficiencies while in the area.",
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

export const unbound_roles = {
  brawler: BRAWLER,
  protector: PROTECTOR,
  deadeye: DEADEYE,
  striker: STRIKER,
  warden: WARDEN,
};
