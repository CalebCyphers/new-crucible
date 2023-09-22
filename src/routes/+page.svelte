<script lang="ts">
  // IDEA:
  // For balance, a character's stats all begin at 10.
  // stat_traits increase or decrease your stats while giving you descriptive traits and rules

  const character_stats = {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
  };

  const combat_data = {
    stamina: 10,
    actions: {
      move: 0,
      shoot: 0,
      strike: 0,
      recover: 0,
      defend: 0,
      use: 0,
    },
    powers: [],
  };

  class Boost {
    name: string;
    description: string;
    action: string;

    constructor(name: string, description?: string, action?: string) {
      this.name = name;
      (this.description = description ?? ""), (this.action = action ?? "");
    }
  }
</script>

<main class="[ box stack ]">
  <table class="[ table ]">
    <thead>
      <tr>
        <th>Status</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr
        ><td>Hidden</td><td
          >Cannot be targeted by hostile actions, don't cause engagement, and
          enemies only know their approximate location.</td
        ></tr
      >
      <tr
        ><td>Invisible</td><td
          >All attacks against you have a 50% chance to miss. You may always
          Hide.</td
        ></tr
      >
      <tr
        ><td>Prone</td><td
          >You are Slowed. All attacks against you gain advantage</td
        ></tr
      >
      <tr
        ><td>Exposed</td><td
          >Take double standard (bludgeoning, slashing, piercing) damage.</td
        ></tr
      >
      <tr><td>Immobilized</td><td>Cannot make voluntary movements</td></tr>
      <tr
        ><td>Impaired</td><td
          >Receive disadvantage on all attacks, saves, and skill checks.</td
        ></tr
      >
      <tr
        ><td>Jammed</td><td
          >Can't talk to others, make attacks other than Improvised Attack,
          Grapple, and Ram, can't take reactions, and can't benefit from spells
          or powers.</td
        ></tr
      >
      <tr
        ><td>Lock On</td><td
          >Hostile characters can choose to consume Lock On to either gain
          advantage on their next attack roll or activate a spell or power.</td
        ></tr
      >
      <tr
        ><td>Shredded</td><td>No longer benefit from Armor or Resistance.</td
        ></tr
      >
      <tr
        ><td>Slowed</td><td
          >Can only move their Standard Move. Can't boost or make any special
          moves from talents, systems, or weapons.</td
        ></tr
      >
      <tr
        ><td>Stunned</td><td
          >STUNNED characters cannot OVERCHARGE, move, or take any actions –
          including free actions and reactions. STUNNED creatures have a maximum
          AC of 5, and automatically fail all STR, DEX, and CON checks and
          saves.</td
        ></tr
      >
      <tr
        ><td>Ruptured</td><td
          >Each time you get hit while ruptured, increase ruptured and take Xd6
          damage where X is your level of ruptured.</td
        ></tr
      >
    </tbody>
  </table>

  <table class="[ table ]">
    <thead>
      <tr>
        <th>Damage Type</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr
        ><td>Burn</td><td
          >Immediately causes damage that ignores Armor. At the end of the
          target's turn, they make an Engineering check or take that burn again.
          Success clears all burn. Multiple sources of burn are cumulative, but
          all resolve with the same roll.</td
        ></tr
      >
      <tr
        ><td>Armor</td><td
          >Each point of Armor reduces incoming damage by 1. Armor never goes
          above 4.</td
        ></tr
      >
      <tr
        ><td>Resistance</td><td
          >Reduces all damage of a type or source by half.</td
        ></tr
      >
      <tr
        ><td>Immunity</td><td
          >All damage and Effects of a type or source are ignored.</td
        ></tr
      >
      <tr><td>Leech</td><td>Attacker heals for damage dealt</td></tr>
    </tbody>
  </table>

  <table class="[ table ]">
    <thead>
      <tr>
        <th>Damage Type Boost</th>
        <th>Effect</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Acid</td><td>Causes shredded</td></tr>
      <tr><td>Bludgeon</td><td>Causes STUNNED</td></tr>
      <tr><td>Cold</td><td>Causes SLOWED</td></tr>
      <tr><td>Fire</td><td>Causes BURN</td></tr>
      <tr><td>Force</td><td>Causes STUNNED</td></tr>
      <tr><td>Lightning</td><td>Causes IMPAIRED</td></tr>
      <tr><td>Necrotic</td><td>Causes LEECH</td></tr>
      <tr><td>Poison</td><td>Causes IMPAIRED</td></tr>
      <tr><td>Piercing</td><td>Ignored ARMOR</td></tr>
      <tr><td>Radiant</td><td>Causes JAMMED</td></tr>
      <tr><td>Slashing</td><td>Causes RUPTURED</td></tr>
      <tr><td>Thunder</td><td>PUSH target 1 area</td></tr>
    </tbody>
  </table>
</main>
