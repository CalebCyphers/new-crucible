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
