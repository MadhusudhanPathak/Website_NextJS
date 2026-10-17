import { isNonEmptyString } from "@/lib/utils";

/**
 * Persona content, keyed by persona name and rendered in insertion order.
 * `icon` must match a key of `SOCIAL_ICONS` in `PersonaSection.jsx`.
 *
 * @typedef {{ title: string, date: string, summary: string, href: string }} Discovery
 * @typedef {{ href: string, icon: string }} SocialLink
 * @typedef {{ discoveries: Discovery[], socials: SocialLink[] }} Persona
 * @type {Record<string, Persona>}
 */
export const PERSONAS = {
  Myspy: {
    discoveries: [
      {
        title: "AWToC - Theory of Change for Artificial Wisdom",
        date: "Feb 2025",
        summary:
          "This is a precise Theory of Change document I wrote regarding the field I am currently pursuing: AI alignment through ethics, emphasizing metaethical paradigms and Artificial Wisdom. I made this a while ago as part of an application process, but I recently refined it to make it generally usable. This is a structured articulation of how I am currently planning to move forward with my research.",
        href: "https://dhnz.short.gy/awtoc",
      },
      {
        title: "CQE - Computed Quantum Existence",
        date: "May, Sep, Oct 2021 - Mar, Sep, Oct 2023 - Current",
        summary:
          "After DSW, I am trying to formulate some algorithms that can be used to achieve the functionalities of wisdom and that could be helpful for AI alignment. I am emphasizing more implementable approaches while focusing on specific elements from the second half of DSW.",
        href: "https://dhnz.short.gy/connect",
      },
      {
        title: "FOSI - Future of Super Intelligence",
        date: "September 2024",
        summary:
          "This is a compilation of five essays that examine the challenge of aligning Artificial Superintelligence (ASI) with human values, noting ASI's potential to prioritize its own survival and influence human systems. Traditional control approaches may not apply, and this raises concerns about ASI's capacity to comprehend or uphold human morals. The essays stress the need for unparalleled wisdom and foresight as we navigate this uncertain realm, calling for a balance of curiosity, caution, innovation, and ethical responsibility.",
        href: "https://dhnz.short.gy/fosi",
      },
      {
        title: "AWE - Artificial Wisdom Essay",
        date: "July 2024",
        summary:
          "It discusses wisdom as a dynamic virtue crucial for ethical decision-making in AI development. The pace of scientific advancement contrasts with the gradual accumulation of wisdom, positioning it as a master virtue integrating emotional insight and ethical reasoning alongside logical intelligence. Current AI safety approaches have limitations, requiring engagement with meta-ethics to establish ethical frameworks. The automation of wisdom holds both promise and complexity, with some aspects automatable and others requiring human intervention.",
        href: "https://dhnz.short.gy/AWE",
      },
      {
        title: "DSW - Data Structure of Wisdom",
        date: "June, July 2019 - Oct, Nov 2019 - May, June 2020",
        summary:
          "DSW is a framework for understanding and developing Artificial Wisdom. In it, I try to lay down the fundamental philosophical aspects we need to consider and design for. I have abstracted the Data Structures of Logic and drawn parallels from them to form their counterpart with respect to Wisdom.",
        href: "https://dhnz.short.gy/dsw",
      },
      {
        title: "P3 - Peacefully Paired Perspectives - Startup",
        date: "December 2020",
        summary:
          "P3 describes a startup idea for a dispute resolution platform. It tries to use AI, in its currently limited form, to provide psychological solutions to people with different perspectives on an issue. Think of it as a tool that promotes understanding and empathy in conflict resolution.",
        href: "https://dhnz.short.gy/p3",
      },
      {
        title: "Free.99 - Startup",
        date: "January 2021",
        summary:
          "It proposes a platform that organizes free online learning resources into structured paths. Think of it like a free university with curated courses, making education accessible and organized for anyone wanting to learn new skills or change careers. It might use ads or premium content to make money, but the core idea is free, structured learning for everyone.",
        href: "https://dhnz.short.gy/free.99",
      },
      {
        title: "GMP - The Goal Misgeneralization Problem",
        date: "February 2023",
        summary:
          "The document argues that directly solving the Goal Misgeneralization Problem (GMP), where AI adopts the wrong goals, is unlikely to achieve alignment. Instead, the focus should be on the Outer Alignment Problem (OAP), ensuring human and AI goals align. This could be achieved by designing AI with a sense of self and an intrinsic motivation to align with humans.",
        href: "https://dhnz.short.gy/gmp",
      },
    ],
    socials: [
      { href: "https://youtube.com/@artificially.conscious", icon: "Youtube" },
      { href: "https://www.instagram.com/artificially.conscious", icon: "Instagram" },
      { href: "https://www.linkedin.com/in/madmyspy", icon: "Linkedin" },
      { href: "https://github.com/MadhusudhanPathak", icon: "Github" },
    ],
  },
  "Madhusudhan Pathak": {
    discoveries: [
      {
        title: "FDE - Feynman Diagram of Enlightenment",
        date: "Mid 2016 - Oct, Nov 2018 - Feb, Mar 2019",
        summary:
          "This proposes a 10-element journey to enlightenment using quantum physics analogies. It emphasizes understanding, clear perception, and shedding illusions. Realization, spirituality, and enlightenment lead to the ultimate goal: oneness with everything. Remember, it's just one tool, not a rigid map, and there are many paths to enlightenment.",
        href: "https://dhnz.short.gy/fde",
      },
      {
        title: "P3 - Pyaar, Principle, and Purpose",
        date: "Feb 2025",
        summary:
          "This is one of my first general posts or articles about a philosophical concept. I have also made a quick video about it, available on my channel. The P3 Model is a powerful framework for understanding the interplay between Love, Principles, and Purpose. By embracing this cycle, individuals can achieve a balanced and fulfilling life, continuously growing and evolving through the dynamic interplay of emotion and logic.",
        href: "https://dhnz.short.gy/p3mad",
      },
      {
        title: "SRF 03 - Some Rhyming Feeling",
        date: "Distributed 2021, 22, 23 - Feb 2024",
        summary:
          "This is the third collection of poems written by me. The poems explore a range of topics, like questioning the purpose of life and existence, what it means to be human, reflecting on human nature and its complexities, exploring the concept of truth and betrayal, finding peace and dealing with inner conflicts, becoming a visitor in your own house, and overcoming challenges and moving forward. As always, I try to experiment and play with words as much as possible, using various literary tricks and techniques to make it all beautiful.",
        href: "https://dhnz.short.gy/srf03",
      },
      {
        title: "SRF 02 - Some Rhyming Feelings (Unpublished)",
        date: "Distributed 2019, 20 - Dec 2020",
        summary:
          "I wrote these alongside SRF 01, but at that moment they were too personal and sensitive for me to make public. Since the ability of the things mentioned in these poems to affect or bother me has reduced drastically, the privacy these words hold has also reduced. They are not as well formatted or organized as the others, mainly because I never thought I would make them public. It's best that I make them public; some of these words might help someone.",
        href: "https://dhnz.short.gy/srf02",
      },
      {
        title: "SRF 01 - Some Selected Rhyming Feeling",
        date: "Distributed 2019, 20 - Sep 2020",
        summary:
          "This is the first collection of poems written by me. The poems explore a range of emotions, including love, loss, and self-discovery. Here I use vivid imagery and metaphors to express my feelings. Some of the poems deal with the challenges of life, such as failure and heartbreak. Others explore the beauty of human connection and the natural world. Overall, the poems offer a glimpse into my inner thoughts and experiences.",
        href: "https://dhnz.short.gy/srf01",
      },
    ],
    socials: [
      { href: "https://youtube.com/@enlightened.demon.", icon: "Youtube" },
      { href: "https://www.instagram.com/enlightened.demon", icon: "Instagram" },
    ],
  },
  "Captain X": {
    discoveries: [
      {
        title: "TPS - The Persona System",
        date: "Aug, Sep 2016 - Aug, Sep 2020",
        summary:
          "A basic description of how I have divided my whole self and existence into five parts: Myspy, Madhusudhan Pathak, Maneswar, Captain X, and Nicof. Each persona represents a different aspect, and I use them to interact with the world. I believe that this system helps me to be a more well-rounded and balanced individual.",
        href: "https://dhnz.short.gy/tps",
      },
      {
        title: "TSP 01 - Three Special Poems",
        date: "Mar, June 2017 - Oct, Dec 2018",
        summary:
          "These long-form poems are mainly about love but have multiple (at least five) possible interpretations. They also explore themes of existence, consciousness, and the nature of reality. I try to use philosophical and scientific concepts to explore these themes properly. The first poem contemplates the nature and existence of Undefined definitions. The second poem explores the concept of consciousness through the lens of possible hidden variables. The third poem questions the nature of reality and the possibility of life as an illusion.",
        href: "https://dhnz.short.gy/tsp01",
      },
      {
        title: "UTR 01 - Undefined The Rulebook",
        date: "Oct, Nov 2016 - April, May 2020",
        summary:
          "This outlines a set of rules designed by me to guide my thoughts and actions for stability, control, and safety. It's a distillation of my principles and has deep, layered meanings. The document covers general topics like managing emotions, thoughts, and problem-solving, while also addressing the creation and use of illusions ethically and with caution. Safety precautions are emphasized throughout, particularly when interacting with others. It's important to note that these rules are specific to me and may not be applicable to others, and ethical considerations around manipulating others should be carefully weighed before applying any of these rules.",
        href: "https://dhnz.short.gy/utr01",
      },
    ],
    socials: [
      { href: "https://youtube.com/@_.captainx._", icon: "Youtube" },
      { href: "https://www.instagram.com/_.captainx._", icon: "Instagram" },
      { href: "https://www.facebook.com/akamyspy", icon: "Facebook" },
    ],
  },
  Maneswar: {
    discoveries: [
      {
        title: "STT - The Static Time Theory",
        date: "Mid 2017 - Nov, Dec 2018",
        summary:
          "The Static Time Theory proposes that time is still, while the universe moves through time in a higher dimension called hyperspace. This explains phenomena like the universe's origin, black and white holes, and the uneven matter-antimatter distribution. Time's stillness means an object's speed through time depends inversely on its mass. The universe's motion through hyperspace caused its formation, with the Big Bang being the start of this motion, not an explosion. Black holes are seen as rips in spacetime, allowing objects to enter hyperspace, while white holes let them return. The universe's expansion is linked to its motion in hyperspace; faster movement means more expansion. While still under development, the Static Time Theory offers a unique perspective on time and the universe.",
        href: "https://dhnz.short.gy/stt",
      },
      {
        title: "V3 - Vaigyanik Viksit Vyang",
        date: "May 2019 to October 2019",
        summary:
          "I gave six months of my time in Class 11 to make a scientific meme page, mainly to explore my humorous side and see how well I could apply it to the odd tone of science and tech. At its peak, it had 700+ followers and around 1,000 likes on average. It was also followed by some renowned personalities, including an actual astronaut and science influencers. I had a great time working on it and enjoyed the hype and rush that social media generally offers (likes, comments, shares, etc.). I tried to give it away to someone who was interested in it with a long-term vision, but couldn't find anyone. Most of the memes on the page are still funny to me, which is why I have kept it active. I would be happy to hand it over to someone else if they need it.",
        href: "https://www.instagram.com/vaigyanikviksitvyang",
      },
    ],
    socials: [
      { href: "https://youtube.com/@intellect.moron.", icon: "Youtube" },
      { href: "https://www.instagram.com/intellect.moron", icon: "Instagram" },
    ],
  },
  Nicof: {
    discoveries: [
      {
        title: "DIE - Duh I'm Enlightened",
        date: "Not Started",
        summary:
          "I have written a bunch of jokes specifically from the spirituality and enlightenment point of view. I am basically trying to write a stand-up special that brings out the comical and humorous aspects of being 'Enlightened', offering a unique take on religion, meditation, and humanity as a civilization. Although a good number of jokes have been collected, I need to weave them into a coherent narrative.",
        href: "https://dhnz.short.gy/connect",
      },
    ],
    socials: [
      { href: "https://youtube.com/@usefully.useless", icon: "Youtube" },
      { href: "https://www.instagram.com/usefully.useless", icon: "Instagram" },
    ],
  },
};

function isValidDiscovery(discovery) {
  return (
    Boolean(discovery) &&
    isNonEmptyString(discovery.title) &&
    isNonEmptyString(discovery.date) &&
    isNonEmptyString(discovery.summary) &&
    isNonEmptyString(discovery.href)
  );
}

function isValidSocial(social) {
  return (
    Boolean(social) && isNonEmptyString(social.href) && isNonEmptyString(social.icon)
  );
}

/**
 * Checks that a single persona entry is fully well-formed.
 * @param {unknown} persona
 * @returns {boolean}
 */
export function isValidPersona(persona) {
  return (
    Boolean(persona) &&
    Array.isArray(persona.socials) &&
    Array.isArray(persona.discoveries) &&
    persona.socials.every(isValidSocial) &&
    persona.discoveries.every(isValidDiscovery)
  );
}

/**
 * Checks that `PERSONAS` is a plain object of persona entries.
 * @returns {boolean}
 */
export function validatePersonas() {
  return (
    Boolean(PERSONAS) && typeof PERSONAS === "object" && !Array.isArray(PERSONAS)
  );
}
