type Damage = {
  dice: number;
  type: string;
};

export type Item = {
  name: string;
  description?: string;
  recharge?: string;
  magic?: boolean;
  weapon_group?: string;
  range?: string;
  damages?: Damage[];
};

// IDEA maybe split this up into weapons, armor, and gear?

export const equipment: Item[] = [];
