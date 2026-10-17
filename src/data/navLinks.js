import { isNonEmptyString } from "@/lib/utils";

/**
 * External links shown in the nav bar and footer.
 * @type {Array<{ href: string, text: string }>}
 */
export const NAV_LINKS = [
  { href: "https://dhnz.short.gy/zeal", text: "Zanny Zeal" },
  { href: "https://dhnz.short.gy/substack", text: "Substack Specifics" },
  { href: "https://dhnz.short.gy/articles", text: "Generic Notion" },
  { href: "https://dhnz.short.gy/discussion", text: "For Discussion" },
  { href: "https://dhnz.short.gy/about", text: "Who am I" },
  { href: "https://dhnz.short.gy/connect", text: "Wanna Connect" },
  { href: "https://dhnz.short.gy/scholar", text: "Google Scholar" },
];

/**
 * @returns {boolean} True if every link has a non-empty `href` and `text`.
 */
export function validateNavLinks() {
  return (
    Array.isArray(NAV_LINKS) &&
    NAV_LINKS.every(
      (link) => link && isNonEmptyString(link.href) && isNonEmptyString(link.text)
    )
  );
}
