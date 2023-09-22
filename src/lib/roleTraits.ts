import type { Item } from "./equipment";

type roleTrait = {
  name: string;
  description: string;
};

export const roleTraits: roleTrait[] = [
  {
    name: "Abandoned",
    description:
      "Describe the war-torn planet where you learned to live on nothing and fight to survive as a child. Advance if you adequately contributed your part to the mission without anybody else's help.",
  },
  {
    name: "Amnesiac",
    description:
      "Describe the most recent event you remember (like waking up in a vat a week ago, or learning your name from the unfamiliar wallet in your coat). Advance if your understanding of yourself or the world changes dramatically over the course of the mission.",
  },
  {
    name: "Avenger",
    description:
      "Describe someone who wronged you, and what they did. Advance if something you did brought you closer to exacting your revenge, or decisively stopped a similar injustice.",
  },
  {
    name: "Chessmaster",
    description:
      "Describe what you plan to do with absolute power. Advance if something you did brought you closer, on a long-term scale, to holding a position of extreme power over a large group of people.",
  },
  {
    name: "Cleanup",
    description:
      "Describe a far-reaching and complex catastrophe which you are responsible for. Advance if you meaningfully healed some piece of its aftermath, or the aftermath of a similar catastrophe.",
  },
  {
    name: "Crusader",
    description:
      "Describe an ethical ideal you hold dear that is difficult to achieve. Advance if something you did aligned with that ethical ideal, even though sticking to your scruples made your life harder.",
  },
  {
    name: "Cultist",
    description:
      "Describe the esoteric religious sect to which you belong, and the chilling prophecy in which you believe. Advance if you drafted someone of significant importance or power into your cult, or if you turned the cosmic clock closer to your hallowed day of reckoning.",
  },
  {
    name: "Dealmaker",
    description:
      "Describe the foolproof strategy you have devised to close any deal. Advance if you end the mission with significantly more wealth, influence, or capital than you had coming in.",
  },
  {
    name: "Diplomat",
    description:
      "Describe the types of relationships you like to form. Advance if you forged a brand new one or kept a relationship in jeopardy intact, and it changed the course of the mission.",
  },
  {
    name: "Enemy",
    description:
      "Describe the front of plausible deniability which you maintain in order to keep working for FIST. Advance if you completed the mission objective relayed to you by CYCLOPS (divulged to you by the referee in secret when the mission begins) without outing yourself to the team.",
  },
  {
    name: "Firebrand",
    description:
      "Describe your hot-blooded hopes for the future. Advance if an event during the mission was a key moment in your coming-of-age, or if you proved your competence to a more experienced teammate.",
  },
  {
    name: "Flux",
    description:
      'Describe why your motivations and worldview are in a constant state of flux. When each mission begins, roll a random role (D66), answer the “describe" section as succinctly as possible, and play as though that role were yours for the duration of the mission.',
  },
  {
    name: "Fugitive",
    description:
      "Describe a high-caliber crime: one that you did commit, or one that you actually didn't commit (and if so, who framed you). Advance if something you did made significant progress towards clearing your name, or if you fought off the long arm of the law.",
  },
  {
    name: "Gladiator",
    description:
      "Describe an honorable, legendary warrior whom you admire and aspire to emulate. Advance if you fought and bested a powerful enemy using their combat philosophy.",
  },
  {
    name: "Healer",
    description:
      "Describe your medical philosophy, and tell the table the story of your teacher, a renowned and unconventional practitioner of medicine. Advance if none of your teammates died under your watch.",
  },
  {
    name: "Icon",
    description:
      "Describe how you want to go down in history. Advance if something you did brought you closer to becoming a legend, or ensured a group of people would never forget your name.",
  },
  {
    name: "Mask",
    description:
      "Describe your vice as you would for the WILDCARD trait, and describe why you pretend to be eccentric and unpredictable. Advance if you took off the mask to protect someone in your path of chaos, without giving your true nature away to your enemies.",
  },
  {
    name: "Maverick",
    description:
      "Describe the moment you lost your faith in everyone else. Advance if you did something during a mission that no one else did, in a way that no one will ever forget.",
  },
  {
    name: "Mercenary",
    description:
      "Describe how you ended up working with the rest of these bleeding-heart weirdos. Advance if you completed the mission according to its original parameters—no funny business—and made sure to collect your pay.",
  },
  {
    name: "Muddler",
    description:
      "Describe a piece of simple, common knowledge which is in fact wrong, and attempt to describe the infinitely more complex correct answer. Advance if you made things more complicated in a major way, or catastrophically obfuscated the truth about something important.",
  },
  {
    name: "Nihilist",
    description:
      "Describe how you arrived at the ultimate conclusion—nothing truly matters. Advance if you showed no fear of death and no self-preservation instinct at any point during the mission.",
  },
  {
    name: "Partisan",
    description:
      "Describe your experiences with the creation, mistreatment, or erasure of ultrahuman beings. Advance if you proved that ultrahumans can and should stand on their own, or if you created a new ultrahuman.",
  },
  {
    name: "Peacemaker",
    description:
      "Describe your vision for a world without war, and your opinion on the use of violence. Advance if you prevented, stopped, or eased a violent geopolitical conflict.",
  },
  {
    name: "Punk",
    description:
      "Describe a long-standing oppressive establishment that hurt you. Advance if something you did weakened that establishment, or meaningfully helped people who are also being oppressed by it.",
  },
  {
    name: "Provider",
    description:
      "Describe the person or entity which cannot survive without you and your work. Advance if you found something that would make them deeply happy and brought it to the end of the mission.",
  },
  {
    name: "Repentant",
    description:
      "Describe a shameful and horrible decision from your past. Advance if something you did atoned for your sins in a meaningful way, or completely changed the context in which you view your past deeds.",
  },
  {
    name: "Representative",
    description:
      "Describe your vision for a world where the ultrahuman condition has been publicized and normalized. Advance if you created empathy and understanding between ultrahumans and the world.",
  },
  {
    name: "Return",
    description:
      "Describe the faraway place or time from which you hail, and the improbable circumstances that found you stranded here. Advance if you made progress in your quest to go home, or if you made contact with someone from the place-before.",
  },
  {
    name: "Retired",
    description:
      "Describe your past exploits, your retirement, how you ended up back in action, and why you can't go home just yet. Advance if you made significant progress toward returning home, or if you showed how an old dog can still learn new tricks.",
  },
  {
    name: "Scholar",
    description:
      "Describe the esoteric and obscure subject you are most curious about. Advance if something you learned brought you closer to unlocking the ultimate secrets of that subject, or if you brought a prize specimen to the end of the mission.",
  },
  {
    name: "Unknown",
    description:
      "Describe how difficult it is to find a cause, a purpose, or something to fight for. Advance if you overcame a challenge or secured a valuable item far beyond your expected level of ability.",
  },
  {
    name: "Wanderer",
    description:
      "Describe the event which sent you drifting from place to place. Advance if you have left behind no lasting trace of your presence by the end of a mission, or if someone you met will always miss you.",
  },
  {
    name: "Wildcard",
    description:
      "Describe your primary vice or source of pleasure, such as money, romance, thrills, or pain. Advance if you got your fix during a mission in a way nobody, including yourself, expected.",
  },
  {
    name: "Wretch",
    description:
      "Describe the uniquely horrible misfortune which has befallen you. Advance if something happens to you which makes your suffering poetically worse, or if you give your misery some company.",
  },
];
