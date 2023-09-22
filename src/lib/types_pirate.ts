export interface Stat {
	title: 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma';
	value: number;
	modifier: number;
	save: boolean;
}

export type CharacterStats = {
	str: Stat;
	dex: Stat;
	con: Stat;
	int: Stat;
	wis: Stat;
	cha: Stat;
};

export interface Skill {
	training: boolean;
	mastery: boolean;
}

export type CharacterSkills = {
	acrobatics: Skill;
	animal_handling: Skill;
	arcana: Skill;
	athletics: Skill;
	deception: Skill;
	history: Skill;
	insight: Skill;
	intimidation: Skill;
	investigation: Skill;
	medicine: Skill;
	nature: Skill;
	perception: Skill;
	performance: Skill;
	persuasion: Skill;
	religeon: Skill;
	sleight_of_hand: Skill;
	stealth: Skill;
	survival: Skill;
};

export interface Clock {
	title: string;
	effect: string;
	max: 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 15 | 20;
	current: number;
}

export interface Status {
	hp_cap: number;
	hp_current: number;
	hp_temp: number;
	bulk_cap: number;
	stress: number;
	boost: number;
	conditions: string[];
	fallout: string[];
	armor: number;
	initiative_mod: number;
	evasion: number;
	tech_attack: number;
	tech_defense: number;
	additional_resources: Clock[];
}

type Dice = {
	sides: number;
	count: number;
	mod: number;
};

type Damage = {
	dice: Dice;
	type:
		| 'Acidic'
		| 'Kinetic'
		| 'Cold'
		| 'Heat'
		| 'Electric'
		| 'Necrotic'
		| 'Toxic'
		| 'Psychic'
		| 'Energy'
		| 'Explosive';
	//     Acid / Bludgeoning / Cold / Fire / Lightning / Necrotic / Poison / Psychic / Radiant / Thunder
	description: string;
};

type Range = {
	shoot?: string[]; // N/A, DIS-, STD, ADV+
	throw?: number;
	strike?: number;
	threat?: number;
	blast?: number;
	line?: number;
	cone?: number;
};

interface Weapon {
	name: string;
	description: string;
	slot: 'Auxiliary' | 'Main' | 'Heavy' | 'Superheavy';
	bulk: 0 | 1 | 2 | 3;
	group:
		| 'Axe'
		| 'Blade'
		| 'Bludgeon'
		| 'Cannon'
		| 'CQB'
		| 'Grenade'
		| 'Lance'
		| 'Launcher'
		| 'Rifle';
	system_cost: number;
	damage_types: Damage[];
	range: Range;
	ammunition: Clock | false;
	is_damaged: boolean;
	is_equipped: boolean;
}

export interface Trait {
	name: string;
	description: string;
	beats?: string[];
	powers?: Power[];
	stat_boosts?: string[];
	stat_curses?: string[];
}

export interface Role extends Trait {
	name: string;
	hit_die?: number;
	domains?: string[];
	specialization_options?: Power[];
	bond_options?: Bond[];
	core_power?: Power;
	power_options?: Power[];
	item_options?: Item[];
}

export interface Power {
	name: string;
	description: string;
	requirements?: string[];
	action_cost?: number | string; // 0-3 | reaction
	action_type?: string; // boost, always-on, limited #
	effect?: number; // 2, 4, 6, 8, 10, 12
	type?: string; // Trait, Role, Background, Equipment, Spell, etc.
	tier?: string; // 1-11(minor), 12-20(major), 21+(zenith)
	boost_options?: string[];
	clocks?: Clock[];
	upgrades?: Upgrade[];
}

export interface Upgrade extends Power {
	unlocked: boolean;
}

export interface Item extends Power {
	slot: string;
	bulk: 0 | 1 | 2 | 3;
	special_armor: boolean;
	system_cost: number;
	charges: Clock;
	is_damaged: boolean;
	is_equipped: boolean;
}

export interface Bond {
	contact_name: string;
	positive_trait: Trait;
	negative_trait: Trait;
	favor: number;
	strings: number; // influence, leverage
}

export interface Domains {
	arcana: boolean;
	academia: boolean;
	celestial: boolean;
	labor: boolean;
	daemonic: boolean;
	corpro: boolean;
	commerce: boolean;
	high_society: boolean;
	low_society: boolean;
	military: boolean;
	nature: boolean;
	criminal: boolean;
}

export class Character {
	name: string;
	class: Role | null;
	look: { description: string | null; portrait_url: string | null; banner_url: string | null };
	stats: CharacterStats;
	skills: CharacterSkills;
	domains: Domains; // Arcane, Academic, Celestial, Labor, Cult, Guild, Military, Noble, Syndicate
	key_stat: Stat;
	tech_stat: Stat;
	status: Status;
	weapons: Weapon[];
	equipment: Item[];
	traits?: Trait[];
	powers?: Power[];
	bonds?: Bond[];
	// foundation?: [Trait, Trait, Role]; // Ancestry, Background, Role

	constructor(
		name: string,
		stats?: CharacterStats,
		skills?: CharacterSkills,
		domains?: Domains,
		key_stat?: Stat,
		status?: Status,
		weapons?: Weapon[],
		equipment?: Item[]
	) {
		this.name = name;
		this.class = null;
		this.look = {
			description: null,
			portrait_url: null,
			banner_url: null
		};
		this.stats = stats ?? {
			str: {
				title: 'Strength',
				value: 10,
				modifier: 0,
				save: false
			},
			dex: {
				title: 'Dexterity',
				value: 10,
				modifier: 0,
				save: false
			},
			con: {
				title: 'Constitution',
				value: 10,
				modifier: 0,
				save: false
			},
			int: {
				title: 'Intelligence',
				value: 10,
				modifier: 0,
				save: false
			},
			wis: {
				title: 'Wisdom',
				value: 10,
				modifier: 0,
				save: false
			},
			cha: {
				title: 'Charisma',
				value: 10,
				modifier: 0,
				save: false
			}
		};
		this.skills = skills ?? {
			acrobatics: {
				training: false,
				mastery: false
			},
			animal_handling: {
				training: false,
				mastery: false
			},
			arcana: {
				training: false,
				mastery: false
			},
			athletics: {
				training: false,
				mastery: false
			},
			deception: {
				training: false,
				mastery: false
			},
			history: {
				training: false,
				mastery: false
			},
			insight: {
				training: false,
				mastery: false
			},
			intimidation: {
				training: false,
				mastery: false
			},
			investigation: {
				training: false,
				mastery: false
			},
			medicine: {
				training: false,
				mastery: false
			},
			nature: {
				training: false,
				mastery: false
			},
			perception: {
				training: false,
				mastery: false
			},
			performance: {
				training: false,
				mastery: false
			},
			persuasion: {
				training: false,
				mastery: false
			},
			religeon: {
				training: false,
				mastery: false
			},
			sleight_of_hand: {
				training: false,
				mastery: false
			},
			stealth: {
				training: false,
				mastery: false
			},
			survival: {
				training: false,
				mastery: false
			}
		};
		this.domains = domains ?? {
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
			criminal: false
		};
		this.key_stat = key_stat ?? this.stats.int;
		this.tech_stat =
			this.key_stat.title === 'Wisdom' || this.key_stat.title === 'Charisma'
				? this.key_stat
				: this.stats.int;
		this.status = status ?? {
			hp_cap: this.stats.con.value,
			hp_current: this.stats.con.value,
			hp_temp: 0,
			bulk_cap: this.stats.str.value,
			stress: 0,
			boost: 0,
			conditions: [],
			fallout: [],
			armor: 0,
			initiative_mod: this.stats.dex.modifier,
			evasion: 10 + this.stats.dex.modifier,
			tech_attack: this.tech_stat.modifier,
			tech_defense: 10 + this.tech_stat.modifier,
			additional_resources: [] // ki, sorcery points, rage, etc...
		};
		this.weapons = weapons ?? [];
		this.equipment = equipment ?? [];
		this.traits = [];
		this.bonds = [];
		this.powers = [];
	}
}
