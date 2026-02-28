/**
 * Site configuration and constants
 * Centralized place for all site-level configuration
 */

export const siteConfig = {
  title: 'Madhusudhan Pathak - Portfolio',
  description: 'Get in touch for Artificial Wisdom..!!',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: 'Madhusudhan Pathak',
  theme: {
    defaultTheme: 'dark',
    enableSystem: false,
    disableTransitionOnChange: true,
  },
  responsive: {
    desktopBreakpoint: 700,
  },
};

export default siteConfig;
