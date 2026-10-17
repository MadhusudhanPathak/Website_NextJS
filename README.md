# Madhusudhan Pathak - Personal Website & Portfolio

A personal website and portfolio built with **Next.js** (App Router), **React**, **Tailwind CSS**, and **shadcn/ui**. It has light/dark themes, animated navigation, and content organized by persona.

## Prerequisites

- Node.js 20.9+ (required by Next.js 16)
- npm

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MadhusudhanPathak/Website_NextJS.git
   cd Website_NextJS
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables (optional):**

   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev     # Development server with hot reload
npm run build   # Production build
npm start       # Serve the production build
npm run lint    # ESLint (next/core-web-vitals)
```

## Architecture

A single-page static site with no API routes, database, or auth. Content lives in plain data modules, and presentational components render it.

```text
src/
├── app/                      # Routing, root layout, metadata, global CSS
│   ├── layout.js             # Fonts, metadata, theme provider, error boundary
│   ├── page.js               # Home page composition
│   ├── not-found.js          # 404 page
│   └── globals.css           # Tailwind layers and theme CSS variables
├── components/
│   ├── layout/               # Site chrome
│   │   ├── NavBar.jsx        # Header: home link + desktop/mobile nav
│   │   ├── DesktopNav.jsx    # Magnifying dock of links + theme toggle
│   │   ├── MobileNav.jsx     # Sheet menu of links + theme toggle
│   │   ├── Footer.jsx        # Footer links and message
│   │   └── Cursor.jsx        # Desktop-only animated cursor
│   ├── sections/             # Page content
│   │   ├── Hero.jsx          # Banner with typewriter greeting
│   │   ├── Personas.jsx      # Validates and lists every persona
│   │   ├── PersonaSection.jsx # One persona: socials + discovery grid
│   │   └── DiscoveryCard.jsx # One discovery card
│   ├── theme/
│   │   ├── ThemeProvider.jsx # next-themes client wrapper
│   │   └── ThemeToggle.jsx   # Light/dark toggle button
│   ├── ErrorBoundary.jsx     # Top-level render-error fallback
│   └── ui/                   # shadcn/ui primitives in use (button, card, dock, sheet)
├── config/
│   └── site.config.js        # Site metadata and theme settings, env-overridable
├── data/                     # Static content + validate*() guards
│   ├── navLinks.js
│   ├── heroContent.js
│   ├── footerContent.js
│   └── personas.js
├── hooks/
│   ├── useMounted.js         # True only after hydration (client-only rendering)
│   └── useScreenSize.js      # Window width tracker
└── lib/
    └── utils.js              # cn() class merging, isNonEmptyString()

public/                       # Theme background images and icon
```

Data flows one way: `src/data/*` → section/layout components → `ui/` primitives. Each component validates its data with the module's `validate*()` guard and shows an inline error message instead of crashing. Unexpected render errors are caught by `ErrorBoundary`.

## Editing Content

All site copy lives in `src/data/`. Edit those files rather than the components.

**Navigation links** (nav bar and footer): `src/data/navLinks.js`

```javascript
export const NAV_LINKS = [{ href: "https://example.com", text: "Link Text" }];
```

**Hero banner**: `src/data/heroContent.js`

```javascript
export const HERO_CONTENT = {
  greeting: "Hey there, it's",
  typewriterStrings: ["Name1", "Name2"],
  tagline: "Your tagline",
  description: "Your description",
};
```

**Footer message**: `src/data/footerContent.js`

**Personas**: `src/data/personas.js`

```javascript
export const PERSONAS = {
  "Persona Name": {
    socials: [{ href: "https://github.com/you", icon: "Github" }],
    discoveries: [
      { title: "Title", date: "Jan 2025", summary: "Short summary", href: "https://..." },
    ],
  },
};
```

Supported social `icon` values: `Facebook`, `Github`, `Instagram`, `Linkedin`, `Twitter`, `Youtube` (see `SOCIAL_ICONS` in `PersonaSection.jsx`). A persona with malformed data is skipped.

## Configuration

`src/config/site.config.js` reads these optional variables (see `.env.example`) and falls back to the defaults below:

| Variable                               | Default                              |
| -------------------------------------- | ------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`                 | `http://localhost:3000`              |
| `NEXT_PUBLIC_SITE_TITLE`               | `Madhusudhan Pathak - Portfolio`     |
| `NEXT_PUBLIC_DEFAULT_THEME`            | `system` (`light`, `dark`, `system`) |
| `NEXT_PUBLIC_ENABLE_SYSTEM_THEME`      | `true`                               |
| `NEXT_PUBLIC_DISABLE_THEME_TRANSITION` | `true`                               |

Set `NEXT_PUBLIC_SITE_URL` to the public domain in production so Open Graph URLs are correct.

## Deployment

```bash
npm run build
npm start
```

It deploys to [Vercel](https://vercel.com/new) or any Node.js host that can run `next start`.

## Author

Madhusudhan Pathak

- GitHub: [@MadhusudhanPathak](https://github.com/MadhusudhanPathak)
- LinkedIn: [madmyspy](https://www.linkedin.com/in/madmyspy)
