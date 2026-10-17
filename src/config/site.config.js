const THEMES = ["light", "dark", "system"];

/**
 * @param {string | undefined} value
 * @returns {"light" | "dark" | "system"} `value` if it names a known theme, otherwise "system".
 */
function resolveTheme(value) {
  return THEMES.includes(value) ? value : "system";
}

/**
 * Site-level configuration. Values come from `NEXT_PUBLIC_*` env vars where
 * available, falling back to the defaults documented in `.env.example`.
 */
export const siteConfig = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "Madhusudhan Pathak - Portfolio",
  description: "Get in touch for Artificial Wisdom!",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: "Madhusudhan Pathak",
  keywords: [
    "Madhusudhan Pathak",
    "Portfolio",
    "AI",
    "Artificial Intelligence",
    "Software Engineer",
    "Full Stack Developer",
  ],
  theme: {
    defaultTheme: resolveTheme(process.env.NEXT_PUBLIC_DEFAULT_THEME),
    enableSystem: process.env.NEXT_PUBLIC_ENABLE_SYSTEM_THEME !== "false",
    disableTransitionOnChange:
      process.env.NEXT_PUBLIC_DISABLE_THEME_TRANSITION !== "false",
    storageKey: "site-theme",
  },
  responsive: {
    /** Viewport widths at or below this (px) are treated as mobile. */
    desktopBreakpoint: 700,
  },
};

export default siteConfig;
