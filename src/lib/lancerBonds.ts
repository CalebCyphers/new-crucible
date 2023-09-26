export const THE_HARLEQUIN = {
  name: "The Harlequin",
  majorIdeals: [
    "I addressed challenges with cunning, subterfuge, or deceit.",
    "I expressed my heritage, background, or beliefs through my actions.",
    "I struggled with issues from my burdens or background.",
  ],
  minorIdeals: [
    "I struggled against or humiliated the powerful.",
    "I pretended to be someone else for a time.",
    "I charmed my way out of a charged situation.",
    "I obtained a guarded, hidden, or secret object or piece of information.",
  ],
  powerSource: [
    "A high-tech stealth rig.",
    "A tattered patchwork of a cape stuffed with magician's trinkets.",
    "Years of streetwise swindling.",
    "A deal you once made in a dream.",
  ],
  quirks: [
    "You can change your eye color, your hair color, and your height by up to 3 inches in either direction.",
    "You weigh almost nothing if you choose not to. You sometimes float an inch off the ground.",
    "Your can swap your clothing's coloration, material, fit, cut, and type completely when you enter any scene.",
  ],
  bondPowers: [
    {
      name: "Masquerade",
      description:
        "You can always tell if someone is lying, though you don't know the exact nature or extent of their lie.",
    },
    {
      name: "Ridi Pagliacci",
      description:
        "Every session, you can invoke your burdens once each for ADVANTAGE to any roll.",
    },
    {
      name: "Gallows Humor",
      description:
        "If you break during a session, all other characters clear 2 STRESS.",
    },
    {
      name: "Mockingbird",
      description:
        "You can mimic voices and sounds you've heard in the last day or so almost perfectly, granting your actions ADVANTAGE and increased effect where this is relevant.",
    },
    {
      name: "Slip",
      uses: "2/session",
      description:
        "You can instantly disappear from sight and reappear somewhere within ten meters or so. You don't have to be able to see where you are going.",
    },
    {
      name: "Fast Friends",
      description:
        "When someone can hear and understand you, you can make them friendly to you for a minute. They'll let you into areas, vouch for you, do small favors for you, and so on. Social rolls against them gain ADVANTAGE and increased effect. After a minute, they realize they were manipulated and it won't work on them again in the same session. This power only works on one person at a time.",
    },
    {
      name: "Spectacular Flourish",
      description:
        "When you roll 20+ on any skill check, you amaze everyone present with your skill and daring. Anyone watching is stunned momentarily, granting ADVANTAGE and increased effect to the next action you or another PC takes in the same scene.",
    },
    {
      name: "Mercurial",
      uses: "1/session",
      description:
        "If nobody else is looking, you can completely change your physical appearance, looking and sounding like an entirely new person (height, weight, build, hair/ clothes, and gender). Whether this physically changes you or is an illusory effect created by visual trickery is up to you. If you're trying to impersonate someone else, your disguise holds up perfectly unless someone knows that person intimately, and even then you get ADVANTAGE on all skill checks to keep the disguise up. You're stuck in this form until you next eat or drink.",
    },
    {
      name: "Exuent",
      description:
        "When you and your allies need to escape a bad situation right away, name your escape route and what you're taking with you. There's no roll required, and you always escape, but the GM chooses one: You leave something behind (a weapon, a friend, evidence). You end up somewhere perilous or uncomfortable (a garbage chute, a cliff side, a seedy bar). You pick something up on your way out (a hanger-on, pursuers, STRESS). You can back out when you learn the cost and name another escape route (the GM might answer differently depending on how you phrase things).",
    },
    {
      name: "Quickfingers",
      uses: "1/session",
      description:
        "Name a visible nearby object that you could fit or carry in one or both hands. By the start of the next scene, you have possession of it. If you stole it, the person you stole it from will find out within the hour",
    },
    {
      name: "Boon of Chaos",
      description:
        "If you have two or more powers from this bond, you can choose a power from any other bond instead of one from this bond when you would gain a power. You can do this twice. If you have at least one veteran power, gain the Boon of Chaos. At the end of the session, if there was a particularly funny or chaotic moment or scene, describe it. Give someone who was part of the fun or chaos 1 XP.",
    },
    {
      name: "Silver Tongue",
      uses: "1/session",
      requirement:
        "You may only gain this power If you've taken four powers from this bond, including the Veteran Power.",
      description:
        "Tell a lie to someone. If it's wild and outlandish, anyone who listens wholeheartedly believes it for a minute. If it's merely unbelievable, an hour. If it's plausible, a day. If they want to believe it, a week. They realize it was a lie after the effect wears off.",
    },
  ],
};

export const THE_TITAN = {
  name: "The Titan",
  majorIdeals: [
    "I addressed challenges with strength, leadership, or force.",
    "I expressed my heritage, background, or beliefs through my actions.",
    "I struggled with issues from my burdens or background.",
  ],
  minorIdeals: [
    "I protected someone weaker than myself.",
    "I led from the front.",
    "I won a competition, friendly or otherwise.",
    "I took harm, blame, penance, or burden for someone else.",
  ],
  powerSource: [
    "A voice and heart of iron, passed down from your mentor.",
    "Cybernetic augmentation, laced through your limbs.",
    "Years of training, sweat, blood, and discipline.",
  ],
  weapons: [
    "My own flesh and sinews.",
    "A hereditary blade.",
    "A carefully curated arsenal.",
    "A thick and heavy shield.",
    "A battered old rifle.",
  ],
  bondPowers: [
    {
      name: "True Grit",
      description:
        "The first time in a session you break due to Stress, you don't lose control and can still act for the rest of the scene without hindrance.",
    },
    {
      name: "Nothing to Fuck With",
      description:
        "If anyone causes one of your allies to take Stress in your presence, take ADVANTAGE on all actions against that person for the rest of the session.",
    },
    {
      name: "Nerve",
      description:
        "The first time you take any amount of Stress in a session, ignore it.",
    },
    {
      name: "Ironjaw",
      description: "Increase your maximum Stress by 1",
    },
    {
      name: "Hammerhand",
      description:
        "When you use your fists to solve a problem, you roll with ADVANTAGE and increased effect.",
    },
    {
      name: "The Wall",
      description:
        "If you stand in defense of another person, they cannot take Stress while you are still conscious and you remain within arm's reach. Instead, you take Stress each time they would take stress. You can't take any action or concentrate on anything else while defending someone.",
    },
    {
      name: "Absolute Meat",
      description:
        "If you concentrate and grit your teeth, your personal strength verges on superhuman. You can take 2 Stress and roll a skill check to do one of the following: Bust through a wall, door, or floor, even reinforced, with nothing but your body. Lift, push, or drag a vehicle, mech, or other tremendous weight a short distance. Withstand forces far beyond the human body such as gale force winds, a mech's strength, or the pull of the void. Your action has increased effect if successful.",
    },
    {
      name: "Force of Will",
      uses: "1/session",
      description:
        "Command someone to flee, stop and drop what they're holding, or come to you. They must do so. If the GM decides they are too strong-willed for this to work on them, regain your use of this ability and clear 1 Stress.",
    },
    {
      name: "Half Light",
      description:
        "When you enter a charged or tense scene, you may ask the GM one of both of the following and receive a truthful answer: Who's really in charge here? What's the biggest danger here? You or an ally of your choice gets + 1 Accuracy on their next skill check acting on the answer.",
    },
    {
      name: "Strengt Beyond Strength",
      uses: "1/session",
      description:
        "You can call on your inner reserves of willpower to act with incredible athleticism, speed, or strength. For the rest of the scene, you can't roll less than a 10 on any checks involving physical activity (e.g., running, jumping, climbing, hand-to-hand combat, etc). Treat any roll of 9 or lower as if you rolled a 10.",
    },
    {
      name: "Boon of Iron",
      description:
        "If you have two or more powers from this bond, you can choose a power from any other bond instead of one from this bond when you would gain a power. You can do this twice. If you have at least one veteran power, gain the Boon of Iron. At the end of the session, if anyone (yourself included) performed an extraordinary or inspiring feat of athleticism, acrobatics, or physical force, describe it. Give someone who witnessed or participated in it 1 XP.",
    },
    {
      name: "Unbreakable",
      uses: "1/session",
      requirement:
        "You may only gain this power If you've taken four powers from this bond, including the Veteran Power.",
      description:
        "For the rest of this scene, nobody you extend your protection over, can take Stress. Instead, you take 1 Stress when they would take Stress. If this causes you to break, you gain a burden as normal but stay in the scene and don't lose control. For you to extend your protection over someone, they must remain within speaking distance of you.",
    },
  ],
};

export const THE_PATHFINDER = {
  name: "The Pathfinder",
  majorIdeals: [
    "I addressed challenges with curiosity, exploration, or understanding.",
    "I expressed my heritage, background, or beliefs through my actions.",
    "I struggled with issues from my burdens or background.",
  ],
  minorIdeals: [
    "I smelled, heard, or tasted something new.",
    "I learned a new skill or trade, or gained a new level of mastery in one I already knew.",
    "I met and conversed with an expert.",
    "I beheld a unique, interesting, or beautiful sight.",
  ],
  powerSource: [
    "A star map given to you long ago by an old friend.",
    "Years spent out in the wilderness, mapping the mountains.",
    "Many years on a freighter, and many worlds passed by.",
  ],
  dreamDestinations: [
    "The edge of the world.",
    "Deep into the molten core of a supernova.",
    "A still, black pool in the deep forest.",
    "An endless expanse of desert.",
  ],
  bondPowers: [
    {
      name: "Momentum",
      uses: "2/session",
      description:
        "When you survey a situation, ask one of the following questions and get a truthful answer from the GM: How do I think I can get around this obstacle? What's the most direct way forward? Which way do I feel I should be moving? You or an ally of your choice gets + 1 Accuracy on their next skill check acting on the answer.",
    },
    {
      name: "Saddleborn",
      description:
        "Gain ADVANTAGE and increased effect to all skill checks related to the use, driving, piloting, and upkeep of vehicles or mounts of any kind. This includes animals like horses.",
    },
    {
      name: "Dabbler",
      description:
        "Gain +2 to a trigger of your choice, up to a max of +6. You can change this bonus around at the end of each downtime.",
    },
    {
      name: "Feet Up",
      description:
        "You can forgo any downtime action, including your free Heal Burdens action, to clear 3 Stress.",
    },
    {
      name: "Freesoul",
      description:
        "You can escape from any restraint, shackle, hold, or prison cell without rolling. Nobody can hold, grab, or restrain you unless you let them. You can choose to conceal this ability if you wish.",
    },
    {
      name: "Beginners Luck",
      description:
        "When you try an activity or skill you've never tried before, you get ADVANTAGE and increased effect to checks related to that skill for the rest of the session. This only ever works once for each activity or skill.",
    },
    {
      name: "Lightspeed",
      description:
        "When you need to go really, really fast, name your method, your destination, and tell the GM you're pulling out all the stops. You and any of your allies nearby can get there faster than anyone else has before, and can easily outrun anyone you're running from or trying to pursue. Don't roll - you do it - but the GM chooses two: You and your allies are exhausted and take 1 Stress. You go off course and end up close to your destination, but not quite there. Your vehicle, mount, or method of travel is completely busted and will need repair.",
    },
    {
      name: "Lay Burdens",
      description:
        "Fill in a segment of all burdens when using Heal Burdens for free. If you are healing in a different location than your last downtime, tick another segment on any one burden.",
    },
    {
      name: "Renaissance",
      description:
        "At the start of any session, pick one of your triggers. You become an expert at that skill. When you roll it, roll two d20s and pick the highest for the final result. You must pick a new trigger each session, and can't pick the same one twice in a row.",
    },
    {
      name: "Feel the Air",
      uses: "1/session",
      description:
        "You can ask the GM up to three of the following about any location you arrive at and receive truthful answers: Who lives here or has passed through recently, and where can I find them? Who owns this place, or wants to, and where can I talk to them? What part of this place do people avoid, and why? Gain + 1 Accuracy and increased effect on your next check acting on the answers. If you ask only one question, heal 1 Stress.",
    },
    {
      name: "Boon of the Traveler",
      description:
        "If you have two or more powers from this bond, you can choose a power from any other bond instead of one from this bond when you would gain a power. You can do this twice. If you have at least one veteran power, gain the Boon of the Traveler. At the end of each session, if you were inspired by the sights, smells, sounds, or sensations of a particular place, describe them. Give someone you shared them with 1 XP.",
    },
    {
      name: "Long Road Home",
      uses: "1/session",
      requirement:
        "You may only gain this power If you've taken four powers from this bond, including the Veteran Power.",
      description:
        "Name a location you've been in the last three days. You can make your way back there without rolling. The GM will determine the following about the journey there: Was it a long or arduous journey? Was the location dangerous, defended, or contested? Were you being pursued, tracked, or hunted? For every “yes” answer, take 2 Stress; however, at the beginning of the next scene, you and up to ten other willing people arrive safely there. Don't worry about playing out the journey (just ‘cut' to the next scene as you are arriving) and work backwards to figure out how you got there.",
    },
  ],
};

export const THE_BUILDER = {
  name: "The Builder",
  majorIdeals: [
    "I addressed challenges with diplomacy, creativity, or empathy.",
    "I expressed my heritage, background, or beliefs through my actions.",
    "I struggled with issues from my burdens or background.",
  ],
  minorIdeals: [
    "I made a new friend or ally.",
    "I defused a potentially violent or charged situation.",
    "I helped to soothe or heal someone's pain.",
    "I created a new object, organization, or alliance, or mended one that was broken.",
  ],
  powerSource: [
    "A strong sense of community from years spent station-side.",
    "A love of engineering passed down from your parents.",
    "Part of your body that you built yourself, lovingly tinkered with.",
  ],
  communication: [
    "Your voice.",
    "Your hands.",
    "Your eyes.",
    "Your heart.",
    "Your gut.",
  ],
  bondPowers: [
    {
      name: "Inspiration",
      uses: "2/session",
      description:
        "When an ally takes can see or hear you while making a skill check, you can encourage them to give them ADVANTAGE or increased effect.",
    },
    {
      name: "Secret History",
      uses: "2/session",
      description:
        "When you examine an object or vehicle close enough to touch, you can ask any of the following to the GM and get an honest answer: Is this thing broken? If so, how can it be fixed? Who touched or used this recently? Where has this thing been in the past day or so? Gain ADVANTAGE on your next skill check acting on the answers.",
    },
    {
      name: "Untangle",
      description:
        "When you help someone else Heal Burdens, they clear two extra segments instead of one, and you clear one segment.",
    },
    {
      name: "The Clockmaker",
      description:
        "Gain increased effect on all project clocks and ADVANTAGE on all skill checks to progress them.",
    },
    {
      name: "Sanctuary",
      description:
        "Until you take violent action in a scene, you cannot take more than 1 Stress at a time from physical harm at the hands of other people.",
    },
    {
      name: "Bilingual",
      uses: "1/session",
      description:
        "For the entirety of a scene, you can talk to objects as if they were people, treating your work on them like a conversation, using social triggers, and so on. Talking to them has the same effect as working on them. Alternatively, you can do the opposite (work on someone like you would a project, using mechanical triggers). You can decide how metaphorical or literal this is. Gain increased effect when you use this ability.",
    },
    {
      name: "Rigger",
      uses: "2/session",
      description:
        "You can create an improvised tool or device. Name its intended purpose and what you built it from (you always have the parts on your person). It provides ADVANTAGE on any skill checks for that purpose, but the first time you use it, roll a d6 and check for the following effects: It explodes immediately unless you take 1 Stress. It melts something nearby into slag with a loose bolt of energy unless you take 1 Stress. It makes a loud noise straight away and every time it is used. It seems to have a mind of its own and sometimes activates without you. For the rest of the session, you have to remain perfectly still to use it. For the rest of the session, you have to feed it extra parts, raw material, or input from your gear or the environment if you want to use it. This item stops working at the end of the session.",
    },
    {
      name: "Comfort",
      uses: "1/session",
      description:
        "When you sit down and listen to a character for a short time, you may ask one of the following questions of the GM (if they're an NPC) or their player (if they are a PC) and receive an honest answer: What does this character really want? How can I help? The GM or player in question can pass this information to you secretly if desired. You gain ADVANTAGE on your next skill check acting on the answer. If the character was a PC, you both clear 1 Stress.",
    },
    {
      name: "Metalbloom",
      uses: "1/session",
      description:
        "For the rest of this scene, you cannot roll less than a 10 on any skill checks involving the use or understanding of technology. Treat any d20 result of a 9 or lower as a 10.",
    },
    {
      name: "Mender",
      description:
        "When you wish to fix something broken (a relationship, an object, an alliance), name your approach. You can do it, but the GM chooses one or two things you'll need: To bring the disparate parts together in one place. To gather specific materials or find more time. To find out what's missing. To be comfortable with not fully fixing it. When you have what you need, you can perform a downtime action and play a scene out to fix it. When it's fixed, gain 1 XP.",
    },
    {
      name: "Boon of the Forge",
      description:
        "If you have two or more powers from this bond, you can choose a power from any other bond instead of one from this bond when you would gain a power. You can do this twice. If you have at least one veteran power, gain the Boon of the Forge. At the end of each session, if you completed a project, show it off to everyone. Give someone who admires it 1 XP.",
    },
    {
      name: "Web of Creation",
      uses: "1/session",
      requirement:
        "You may only gain this power If you've taken four powers from this bond, including the Veteran Power.",
      description:
        "By touching a willing person, an object, or a structure, you can visualize the connections between them or it and other objects, people, or things. You get excellent (but incomplete) information on these people, objects, or similar and how they relate. This information is factual and detailed. You can view up to three points of connection before this power fades. For example, you could visualize something three times removed or three separate things.",
    },
  ],
};

export const THE_MAGUS = {
  name: "The Magus",
  majorIdeals: [
    "I addressed challenges with passion, faith, or intuition.",
    "I expressed my heritage, background, or beliefs through my actions.",
    "I struggled with issues from my burdens or background.",
  ],
  minorIdeals: [
    "I witnessed something terrifying, mind-bending, or glorious.",
    "I acted on my first impulse.",
    "I questioned my own senses, beliefs, or sense of self.",
    "My stated intuition or gut feeling about something turned out to be right.",
  ],
  powerSource: [
    "Esoteric technology, implanted in your cortex",
    "A gut feeling too real for comfort",
    "A conversation you once had with a long-dead monolith.",
  ],
  nightmares: [
    "Sinking through an endless blackness.",
    "Fleeing from teeth, muscle, and bone.",
    "Hollow faces, staring at you.",
    "My own blood and body, revolting against me.",
  ],
  bondPowers: [
    {
      name: "Heartsight",
      uses: "2/session",
      description:
        "By concentrating momentarily you can sense the ambient emotional state of those close to you. You don't have to be able to see them, but the effect becomes muddled if there are more than a few people close by. Get ADVANTAGE and increased effect on your next check acting on any insight you glean from this.",
    },
    {
      name: "To the Brink",
      description:
        "If you would take enough Stress to break, roll 1d6. On 4+, ignore all the Stress you'd take. On 6, additionally clear 1 Stress.",
    },
    {
      name: "Eyes of the Void",
      description:
        "You can see perfectly well in even pitch darkness, fog, or poor weather conditions. Gain ADVANTAGE and increased effect on checks that rely on surveying or observing your surroundings. You can see even fine detail up to a mile away unaided.",
    },
    {
      name: "Possession",
      uses: "2/session",
      description:
        "Ask a dark presence deep inside of you for advice on a course of action. The GM answers and you get either ADVANTAGE or increased effect on your next action following this advice (GM choice).",
    },
    {
      name: "Blackblood",
      description:
        "You may clear two segments from any of your burdens for ADVANTAGE on any skill check.",
    },
    {
      name: "Skincrawl",
      description:
        "If there's any question about who acts first in a scene, it's you. You get an itch, tic, or bad feeling when you or someone you consider close to you is in immediate danger.",
    },
    {
      name: "Geist",
      description:
        "When you touch someone skin to skin and take 1 Stress, you can see through their eyes and experience their sensations and ambient emotional state, even after breaking contact, although you can do little but observe. They are unaware of and unharmed by your presence. This lasts until the end of the scene, or until you use this ability again, and while you're concentrating on it, you cannot do anything yourself except sit in quiet focus, otherwise the effect ends. PCs must be willing.",
    },
    {
      name: "Plunder The Void",
      uses: "1/session",
      description:
        "When you strike out alone and enter a dark and distant place, nobody - PC or NPC - can find you and you may ask the GM one question about a situation at hand. They must answer truthfully with “yes”, “no”, or “unclear”. Whether this is merely a mental space or a different realm entirely is up to you and your GM. You return to reality where you left it at the start of the next scene.",
    },
    {
      name: "Instinctive",
      uses: "2/session",
      description:
        "Describe a course of action to the GM that you plan to take in the same scene. You will receive guidance from the GM in the form of a feeling that is truthful, if unclear. The GM can choose boon (good outcomes), bane (bad outcomes), or chaos (a mix of good and bad outcomes).",
    },
    {
      name: "Unveil",
      uses: "2/session",
      description:
        "Choose someone present. If you stare straight at them you can ask “what does this person fear right now?” of the GM (if they're an NPC) or their player (if they're a PC) and receive an honest answer. You get ADVANTAGE on your next skill check acting on the answer. If a PC answers, they may clear 1 Stress.",
    },
    {
      name: "Boon of Revelation",
      description:
        "If you have two or more powers from this bond, you can choose a power from any other bond instead of one from this bond when you would gain a power. You can do this twice. If you have at least one veteran power, gain the Boon of Revelation. At the end of the session, if you found a scene troubling, exciting, or terrifying, describe why. Give someone who felt similarly 1 XP.",
    },
    {
      name: "Pierce the Gate",
      uses: "1/session",
      requirement:
        "You may only gain this power If you've taken four powers from this bond, including the Veteran Power.",
      description:
        "By concentrating and remaining still, you can witness a scene, place, or person you have seen before as if you were physically present. You can't interact with anything there, nobody is aware of you, and you can do nothing but observe as a detached mind for the duration. You have all your normal senses, and the effect lasts for the rest of the scene. To view a place, you have to have been there. To view a person, you have to have seen their face. The scene does not need to take place at the same time (it could be in the near past or future), though if it's not at the present, it becomes blurry and indistinct and is reduced to impressions.",
    },
  ],
};

export const THE_WOLF = {
  name: "The Wolf",
  majorIdeals: [
    "I addressed challenges with precision, coldness, or intimidation.",
    "I expressed my heritage, background, or beliefs through my actions.",
    "I struggled with issues from my burdens or background.",
  ],
  minorIdeals: [
    "I showed someone how it's done.",
    "I revealed an ugly truth about the world.",
    "My pain or weakness became apparent despite my efforts to hide it.",
    "I got someone to back down or back off.",
  ],
  powerSource: [
    "A long time spent alone in the cold, a time you'd rather forget.",
    "A hardened, bitter upbringing.",
    "A collection of blades, polished and well used.",
  ],
  quirks: [
    "The wounds and scars that deform you.",
    "The people you most care about.",
    "The person you truly are at your core.",
    "The blood in your past that's catching up to you.",
  ],
  bondPowers: [
    {
      name: "Go for a Walk",
      description:
        "If you go off by yourself to accomplish a task, name your goal. You'll return to the group next scene successful, having accomplished it off-screen, but the GM chooses one consequence. If the task was too dangerous, difficult, or complicated to accomplish alone, the GM will tell you that when you return, but will also tell you exactly what needs to be done to finish it. Gain increased effect when you take action to finish the task.",
    },
    {
      name: "Cornered",
      description:
        "When you break, gain ADVANTAGE and increased effect on all skill checks for the next scene.",
    },
    {
      name: "Scarcoat",
      description:
        "Your maximum Stress increases by 1 for each burden you currently have.",
    },
    {
      name: "Discipline",
      description:
        "If an ally fails a skill check, you can both take 1 Stress for them to immediately reroll it. They must keep the new result.",
    },
    {
      name: "Blood Scent",
      description:
        "If someone or something is bleeding, gain ADVANTAGE and increased effect on any action made to intimidate, track, or harm them.",
    },
    {
      name: "Pounce",
      uses: "1/session",
      description:
        "You take an action before any NPCs have the chance to act, giving you a free roll. Hostile NPCs can't deal harm or consequences to you as a part of this roll (they're too slow), although you can still fail or suffer other consequences normally.",
    },
    {
      name: "Go for the Throat",
      description:
        "You can instantly kill any NPC in arm's reach of you without rolling, but must first pay the cost. The GM chooses a consequence.",
    },
    {
      name: "Ultimatum",
      uses: "2/session",
      description:
        "You look someone in the face, lock eyes with them, and name what you need. They either give you what you want, right now, or they choose a consequence.",
    },
    {
      name: "Its Nothing",
      description:
        "At the end of each session, clear 3 Stress if you didn't let anyone tend to you, help you, heal you, or comfort you (even if they tried).",
    },
    {
      name: "Don't Tell Me the Odds",
      description:
        "Gain ADVANTAGE on all actions in a scene where you are clearly outnumbered, outgunned, or backed into a corner.",
    },
    {
      name: "Boon of the Fang",
      description:
        "If you have two or more powers from this bond, you can choose a power from any other bond instead of one from this bond when you would gain a power. You can do this twice. If you have at least one veteran power, gain the Boon of the Fang. At the end of the session, if you think the party fought their way out of a bad situation, describe it, and give someone who you thought fought as hard as you 1 XP.",
    },
    {
      name: "Wick",
      uses: "1/session",
      requirement:
        "You may only gain this power If you've taken four powers from this bond, including the Veteran Power.",
      description:
        "This scene, ignore all Stress from anyone not important enough to merit a name, and take increased effect on all actions to evade, fight, subdue, or intimidate them.",
    },
  ],
};

export const THE_FOOL = {
  name: "The Fool",
  majorIdeals: [
    "I addressed challenges with perseverance, learning, or sheer dumb luck.",
    "I expressed my heritage, background, or beliefs through my actions.",
    "I struggled with issues from my burdens or background.",
  ],
  minorIdeals: [
    "Someone else helped me out of a bad situation.",
    "I learned from my own vulnerability or weakness.",
    "I threw myself into a situation without planning or preparation.",
    "Someone taught me something useful, comforting, or painful.",
  ],
  powerSource: [
    "A strong sense of adventure.",
    "Always being in the right place at the right time or the wrong place at the right time.",
    "A stubborn refusal to give up.",
  ],
  quirks: [
    "My family.",
    "My partner.",
    "My grandparent.",
    "My community.",
    "Nobody in particular, but that's okay.",
  ],
  bondPowers: [
    {
      name: "Rescue",
      uses: "1/session",
      description:
        "When you fail a skill check, you can let a nearby character step in and bail you out. That character gets 1 XP and can immediately reroll the check as if they were making it, with ADVANTAGE. They take any consequences (including Stress) instead of you.",
    },
    {
      name: "Punching Bag",
      description:
        "When someone causes you Stress, your allies gain ADVANTAGE on actions against them for the rest of the scene.",
    },
    {
      name: "The Sun",
      uses: "1/session",
      description:
        "Gain increased effect on all actions for the rest of the scene.",
    },
    {
      name: "The Moon",
      uses: "1/session",
      description:
        "Reduce all Stress suffered by 1, to a minimum of 1, for the rest of the scene.",
    },
    {
      name: "Joy Luck WindThrower",
      uses: "1/session",
      description:
        "When you roll an unmodified 20 on the dice for a skill check, you may succeed in your task is and describe how you totally blow past everyone's expectations (even your own). Your action ticks 5 segments on any relevant clocks, and you may give someone else present 1 XP.",
    },
    {
      name: "Inspired Heroism",
      uses: "1/session",
      description:
        "Once a session, when you succeed on a Heroic skill check, all allies present gain 1 XP and heal 1 Stress.",
    },
    {
      name: "All In",
      description:
        "When you push yourself to help another character on a Risky or Heroic skill check, it costs you 0 Stress. You still share in any consequences by helping.",
    },
    {
      name: "Heart of Hearts",
      uses: "1/session",
      description:
        "When you and your group are in a tough spot, you can flash back to a scene from your past or hometown and describe how your memory of that time inspires you in the current moment. You can treat your next roll as though you rolled an unmodified 20. You can only ever use this ability three times; after that, replace it with a new power from this bond.",
    },
    {
      name: "Stroke of Luck",
      description:
        "When you fail a skill check and take Stress, put yourself into danger, or seriously mess up, tell the GM you stumble onto something lucky of their choice a way forward, an opportunity, or a lucky break. You or another character gain ADVANTAGE on the next check acting on this stroke of luck.",
    },
    {
      name: "Learn by Example",
      uses: "2/session",
      description:
        "At the start of any session, choose another character to be your mentor (whether they are willing or unwilling is up to them). Twice in that session, you may ask them for advice before making a skill check. If you follow their advice, gain ADVANTAGE on that check. If they spurn your request or give you obviously harmful advice, take ADVANTAGE on a check for actions that ignore them.",
    },
    {
      name: "Boon of The Star",
      description:
        "If you have two or more powers from this bond, you can choose a power from any other bond instead of one from this bond when you would gain a power. You can do this twice. If you have at least one veteran power, gain the Boon of the Star. If you or anyone else succeeded on at least one Heroic skill check, describe what happened. Give someone else who witnessed it 1 XP.",
    },
    {
      name: "The World",
      uses: "1/session",
      requirement:
        "You may only gain this power If you've taken four powers from this bond, including the Veteran Power.",
      description:
        "For the rest of the scene, treat any final result of 9 or lower on one of your skill checks as 10+. This means you cannot fail skill checks (you might still take consequences for rolling a 10-19 on Risky or Heroic checks).",
    },
  ],
};

export const THE_BROKER = {
  name: "The Broker",
  majorIdeals: [
    "I addressed challenges with manipulation, influence, or elegance.",
    "I expressed my heritage, background, or beliefs through my actions.",
    "I struggled with issues from my burdens or background.",
  ],
  minorIdeals: [
    "I kept my hands clean of the dirty work.",
    "I proved that I was the most qualified to handle a situation.",
    "Someone found me attractive, intriguing, or frightening.",
    "Despite my best efforts, we went wildly off the plan.",
  ],
  powerSource: [
    "A honeyed voice.",
    "A filed and organized list of debts owed.",
    "A favored upbringing, used to your advantage.",
  ],
  quirks: [
    "Good business and a sense of professionalism.",
    "Loyalty above all.",
    "Secrets, the dirtier the better.",
    "The respect of others, no matter how it's won.",
  ],
  bondPowers: [
    {
      name: "Cosmocephalos",
      uses: "2/session",
      description:
        "When someone else makes a skill check, give them ADVANTAGE by telling the GM how you planned, prepared, or accounted for this situation.",
    },
    {
      name: "Perfect Little Universe",
      description:
        "Each downtime, you or another PC gain an extra downtime action.",
    },
    {
      name: "Little Consequence",
      uses: "1/session",
      description:
        "When you would take blame, personal fallout, or physical harm as a result of your actions, you have may another willing character nearby take the consequences instead of you after you learn what they are. If they do, they take 1 XP.",
    },
    {
      name: "The Ledger",
      description:
        "Any time, you may ask any character what they want from you right now (service, time, attention, apologies, aid, information, a favor). If you give it to them as described, you can write their name in your ledger. Once their name is in there, you can invoke the ledger any time. When you invoke someone's name in the ledger, any roll you make against them with a result of 9 or lower is treated as a 10 for the rest of the session, then it loses its power over them.",
    },
    {
      name: "Favors Owed",
      description:
        "If a nearby character will take consequences from their actions, you can offer to take those consequences instead. If they accept, you get a favor with them. You can cash this favor in any time to force them to help you with any skill check without spending Stress and share in the consequences, or defer to you on a decision. You can only hold one favor from each character at a time.",
    },
    {
      name: "Contingency Plans",
      uses: "2/session",
      description:
        "When you or someone else takes consequences as a result of their actions, you can reduce their severity by describing how you intervene, manipulate, or otherwise change the outcome. This cannot eliminate the consequences entirely, just reduce them. Any Stress suffered is reduced by 1, which can reduce it to 0 Stress.",
    },
    {
      name: "Beg Borrow or Steal",
      uses: "1/session",
      description:
        "When you need the right tool for the job (a disguise, a power tool, a weapon, loose currency, identity papers) you can choose to have it right now. The tool gives you ADVANTAGE and increased effect on actions but it was stolen or “borrowed” from someone, and they will track you down by next downtime. The tool stops working at the end of the session or if you use this ability again to get a new tool.",
    },
    {
      name: "Immaculate",
      description:
        "You are always the best dressed in any given situation. You are never unprepared for any situation involving clothing and have access to all manner of uniforms, disguises, costumes, formalwear, and so on. In situations where this helps, gain ADVANTAGE and increased effect.",
    },
    {
      name: "Spider",
      uses: "1/session",
      description:
        "When you need something done without involving yourself or your group, you can call one of your many contacts. Pick up to three of the following words to describe how they get it done for you: quiet, clean, quick. For each word you pick, the GM chooses one thing you will need to get your contact, or else owe them after the job is done: collateral, proof, payment, or assurances, extraction. For each word you don' t pick, they don' t do it that way at all;however, they will always get the job done. The scale of what they need is concurrent with the scale of the request you make of them, which might make the request impossible unless you rephrase it.",
    },
    {
      name: "Boon of Order",
      description:
        "If you have two or more powers from this bond, you can choose a power from any other bond instead of one from this bond when you would gain a power. You can do this twice. If you have at least one veteran power, gain the Boon of Order. If you or anyone else succeeded on at least one Heroic skill check, describe what happened. Give someone else who witnessed it 1 XP.",
    },
    {
      name: "Seal in Blood",
      uses: "1/session",
      requirement:
        "You may only gain this power if you've taken four or more powers from this bond, including the Veteran Power.",
      description:
        "When you make a deal with a willing person, name the terms of the deal (parties, duration, and services rendered), then shake hands. If you do, any person (including you) that breaks the deal suffers a baleful curse. They rapidly become deathly ill. If they're an NPC, they are too sick to do anything for the duration of one mission and are essentially helpless. If they are a PC, they gain a “deathly ill” burden. If the deal is broken by one party, the other suffers no consequences and the seal is lifted, ending this effect. Otherwise the seal lasts indefinitely or until the terms of the deal are fulfilled.",
    },
  ],
};

export const lancerBonds = [
  THE_BROKER,
  THE_BUILDER,
  THE_FOOL,
  THE_HARLEQUIN,
  THE_MAGUS,
  THE_PATHFINDER,
  THE_TITAN,
  THE_WOLF,
];
