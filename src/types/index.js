// Types for the website

/**
 * @typedef {Object} NavLink
 * @property {string} href - The URL for the link
 * @property {string} text - The display text for the link
 */

/**
 * @typedef {Object} HeroContent
 * @property {string[]} typewriterStrings - Array of strings for the typewriter effect
 * @property {string} tagline - The tagline text
 * @property {string} description - The description text
 */

/**
 * @typedef {Object} SocialLink
 * @property {string} Link - The URL for the social link
 * @property {string} Icon - The name of the icon to display
 */

/**
 * @typedef {Object} Discovery
 * @property {string} header - The header/title of the discovery
 * @property {string} desc - The description of the discovery
 * @property {string} minDesc - A shorter description
 * @property {string} hrefto - The URL to link to
 */

/**
 * @typedef {Object} Persona
 * @property {SocialLink[]} socials - Array of social links
 * @property {Discovery[]} discoveries - Array of discoveries
 */

/**
 * @typedef {Object.<string, Persona>} PersonaData
 */

// Export empty object to satisfy module system
export {};