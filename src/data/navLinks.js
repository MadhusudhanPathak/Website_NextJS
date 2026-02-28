/**
 * Main navigation links for the website
 * Each link should have href and text properties
 * @type {Array<{href: string, text: string}>}
 */
export const NAV_LINKS = [
  { href: "https://dhnz.short.gy/zeal", text: "Zanny Zeal" },
  { href: "https://dhnz.short.gy/articles", text: "Discussion Articles" },
  { href: "https://dhnz.short.gy/discussion", text: "For Discussion" },
  { href: "https://dhnz.short.gy/about", text: "Who am I" },
  { href: "https://dhnz.short.gy/connect", text: "Wanna Connect" },
  { href: "https://dhnz.short.gy/wisdom", text: "What's Wisdom" }
];

/**
 * Validates navigation links structure
 * @returns {boolean} True if all links are valid
 */
export function validateNavLinks() {
  if (!Array.isArray(NAV_LINKS)) return false;
  return NAV_LINKS.every(link => 
    link && 
    typeof link.href === 'string' && 
    link.href.length > 0 &&
    typeof link.text === 'string' && 
    link.text.length > 0
  );
}

export default NAV_LINKS;