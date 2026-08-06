/**
 * Site configuration and constants
 * Centralized place for all site-level configuration
 */

export const siteConfig = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE || 'Madhusudhan Pathak - Portfolio',
  description: 'Get in touch for Artificial Wisdom..!!',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: 'Madhusudhan Pathak',
  theme: {
    defaultTheme: process.env.NEXT_PUBLIC_DEFAULT_THEME || 'dark',
    enableSystem: process.env.NEXT_PUBLIC_ENABLE_SYSTEM_THEME === 'true',
    disableTransitionOnChange:
      process.env.NEXT_PUBLIC_DISABLE_THEME_TRANSITION !== 'false',
  },
  responsive: {
    desktopBreakpoint: 700,
  },
};

export default siteConfig;
