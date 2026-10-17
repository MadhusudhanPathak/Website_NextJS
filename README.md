# Madhusudhan Pathak - Personal Website & Portfolio

A personal website and portfolio built with **Next.js**, **React**, **Tailwind CSS**, and **shadcn/ui**. Features dark/light theme support, animated components, and a persona-based content organization system.

## Prerequisites

- Node.js 18+
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

3. **Set up environment variables:**

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
npm run build   # Build for production
npm start       # Start production server
npm run lint    # Run ESLint
```

## Architecture

Single-page Next.js App Router site — no API routes or database. Content lives in plain data modules and is rendered by presentational components.

```text
src/
├── app/                       # Next.js App Router
│   ├── layout.js              # Root layout: fonts, metadata, theme provider, error boundary
│   ├── page.js                # Home page composition
│   ├── not-found.js           # Custom 404 page
│   └── globals.css            # Tailwind base styles and CSS variables
├── components/                # React components
│   ├── ui/                    # shadcn/ui primitives actually in use (button, card, dock, sheet, toast)
│   ├── NavBar.jsx             # Navigation (desktop dock, mobile sheet menu, theme toggle)
│   ├── Hero.jsx                # Hero banner with typewriter animation
│   ├── Section.jsx             # Persona sections (socials + discovery cards)
│   ├── Discoveries.jsx         # Individual discovery card
│   ├── Footer.jsx              # Footer navigation
│   ├── Cursor.jsx              # Desktop-only animated cursor
│   ├── DarkMode.jsx           # Theme toggle button
│   ├── ThemeProvider.jsx       # next-themes wrapper
│   └── ErrorBoundary.jsx      # Top-level render-error fallback
├── data/                      # Static content
│   ├── navLinks.js            # Navigation links
│   ├── heroContent.js         # Hero section copy
│   └── classifiedRawData.js   # Persona/discovery/social data
├── hooks/
│   └── useScreenSize.js       # Window width tracker (SSR-safe)
├── lib/
│   └── utils.js                # `cn()` className helper (clsx + tailwind-merge)
└── config/
    └── site.config.js          # Site metadata and theme defaults, env-overridable

public/                         # Static assets (theme background images, favicon source)
```

## Content Management

**Navigation links** — `src/data/navLinks.js`:

```javascript
export const NAV_LINKS = [
  { href: "https://example.com", text: "Link Text" },
];
```

**Hero content** — `src/data/heroContent.js`:

```javascript
export const HERO_CONTENT = {
  typewriterStrings: ["Name1", "Name2"],
  tagline: "Your tagline",
  description: "Your description",
};
```

**Persona data** — `src/data/classifiedRawData.js`:

```javascript
export const PersonaData = {
  PersonaName: {
    socials: [{ Link: "url", Icon: "Github" }],
    discoveries: [{ header, desc, minDesc, hrefto }],
  },
};
```

Each data module exports a `validate*()` function that components call before rendering; invalid data renders a fallback message instead of crashing.

## Configuration

`src/config/site.config.js` reads these optional environment variables (see `.env.example`), falling back to sensible defaults when unset:

| Variable                               | Default                          |
| -------------------------------------- | -------------------------------- |
| `NEXT_PUBLIC_SITE_URL`                 | `http://localhost:3000`          |
| `NEXT_PUBLIC_SITE_TITLE`               | `Madhusudhan Pathak - Portfolio` |
| `NEXT_PUBLIC_DEFAULT_THEME`            | `system`                         |
| `NEXT_PUBLIC_ENABLE_SYSTEM_THEME`      | `true`                           |
| `NEXT_PUBLIC_DISABLE_THEME_TRANSITION` | `true`                           |

## Styling

- Tailwind CSS, mobile-first, with `dark:` variants
- Theme colors defined as CSS variables in `src/app/globals.css`
- Framer Motion for the nav dock; Tailwind CSS animations elsewhere

## Deployment

```bash
npm run build
npm start
```

Deploys cleanly to [Vercel](https://vercel.com/new) or any Node.js host that can run `next start`.

## Author

Madhusudhan Pathak

- GitHub: [@MadhusudhanPathak](https://github.com/MadhusudhanPathak)
- LinkedIn: [madmyspy](https://www.linkedin.com/in/madmyspy)
