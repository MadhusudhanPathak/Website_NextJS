/**
 * Hero section content configuration
 * Centralized management of hero section text and content
 */

/**
 * Hero section content
 * @type {{typewriterStrings: string[], tagline: string, description: string}}
 */
export const HERO_CONTENT = {
  typewriterStrings: [
    "Myspy",
    "Madhusudhan",
    "Maneswar",
    "Captain X",
    "Nicof",
  ],
  tagline: "Divided by Personas, United by Purpose.",
  description: "Keep Calm, Website is Under Construction. I have logically organised \"myself\" into Five Specific sets of traits and skills, mainly for self-management and efficiency. All of my Work/Creations are categorised accordingly (aka Persona-Wise).",
};

/**
 * Validates hero content structure
 * @returns {boolean} True if all content is valid
 */
export function validateHeroContent() {
  return (
    HERO_CONTENT &&
    Array.isArray(HERO_CONTENT.typewriterStrings) &&
    HERO_CONTENT.typewriterStrings.length > 0 &&
    typeof HERO_CONTENT.tagline === 'string' &&
    HERO_CONTENT.tagline.length > 0 &&
    typeof HERO_CONTENT.description === 'string' &&
    HERO_CONTENT.description.length > 0
  );
}

export default HERO_CONTENT;