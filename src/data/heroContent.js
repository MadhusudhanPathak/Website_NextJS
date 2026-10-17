import { isNonEmptyString } from "@/lib/utils";

/**
 * Hero banner copy. `typewriterStrings` cycle after the `greeting`.
 * @type {{ greeting: string, typewriterStrings: string[], tagline: string, description: string }}
 */
export const HERO_CONTENT = {
  greeting: "Hey there, it's",
  typewriterStrings: ["Myspy", "Madhusudhan", "Maneswar", "Captain X", "Nicof"],
  tagline: "Divided by Personas, United by Purpose.",
  description:
    'Keep calm, the website is under construction. I have logically organized "myself" into five specific sets of traits and skills, mainly for self-management and efficiency. All of my work and creations are categorized accordingly (aka persona-wise).',
};

/**
 * @returns {boolean} True if every hero field is present and non-empty.
 */
export function validateHeroContent() {
  return (
    Boolean(HERO_CONTENT) &&
    isNonEmptyString(HERO_CONTENT.greeting) &&
    Array.isArray(HERO_CONTENT.typewriterStrings) &&
    HERO_CONTENT.typewriterStrings.length > 0 &&
    HERO_CONTENT.typewriterStrings.every(isNonEmptyString) &&
    isNonEmptyString(HERO_CONTENT.tagline) &&
    isNonEmptyString(HERO_CONTENT.description)
  );
}
