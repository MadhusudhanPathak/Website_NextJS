/**
 * Main navigation links for the website
 * Each link has a `text` label and either an `href`, or an `options` array
 * of sub-links ({ href, text }) to show in a hover/click submenu.
 * @type {Array<{href: string, text: string} | {text: string, options: Array<{href: string, text: string}>}>}
 */
export const NAV_LINKS = [
  { href: "https://dhnz.short.gy/zeal", text: "Zanny Zeal" },
  {
    text: "Discussion Articles",
    options: [
      { href: "https://dhnz.short.gy/substack", text: "Substack Specifics" },
      { href: "https://dhnz.short.gy/articles", text: "Generic Notion" },
    ],
  },
  { href: "https://dhnz.short.gy/discussion", text: "For Discussion" },
  { href: "https://dhnz.short.gy/about", text: "Who am I" },
  { href: "https://dhnz.short.gy/connect", text: "Wanna Connect" },
  { href: "https://dhnz.short.gy/scholar", text: "Google Scholar" }
];

/**
 * Validates navigation links structure
 * @returns {boolean} True if all links are valid
 */
export function validateNavLinks() {
  if (!Array.isArray(NAV_LINKS)) return false;
  return NAV_LINKS.every(link => {
    if (!link || typeof link.text !== 'string' || link.text.length === 0) {
      return false;
    }
    if (Array.isArray(link.options)) {
      return (
        link.options.length > 0 &&
        link.options.every(option =>
          option &&
          typeof option.href === 'string' &&
          option.href.length > 0 &&
          typeof option.text === 'string' &&
          option.text.length > 0
        )
      );
    }
    return typeof link.href === 'string' && link.href.length > 0;
  });
}

export default NAV_LINKS;
