# AGENTS.md

Guide for AI coding agents working in this repository.

## Project

- Personal portfolio site for Madhusudhan Pathak.
- Next.js (App Router), React, Tailwind CSS, shadcn/ui.
- Single home page (`src/app/page.js`) composed of a nav bar, hero, persona sections, and footer. No API routes, no database, no auth.
- Package manager: npm (`package-lock.json` is the source of truth).

## Commands

```bash
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm start       # run the production build
npm run lint    # ESLint (next/core-web-vitals)
```

Always run `npm run lint` and `npm run build` after changes before considering a task done.

## Structure & responsibilities

| Path | Responsibility |
| --- | --- |
| `src/app/` | Routing, root layout, metadata, global CSS. Server components unless a file starts with `"use client"`. |
| `src/components/` | Presentational React components, one responsibility each. `ui/` holds shadcn/ui primitives — only add a primitive here when a component actually imports it. |
| `src/data/` | Static content as plain JS modules (nav links, hero copy, persona/discovery data). Each module exports a `validate*()` guard that consuming components call before rendering. |
| `src/hooks/` | Shared client-side React hooks. |
| `src/lib/` | Small framework-agnostic utilities (currently just `cn()` for class merging). |
| `src/config/` | Site-level configuration (`site.config.js`), reads `NEXT_PUBLIC_*` env vars with hardcoded fallbacks. |
| `public/` | Static assets served as-is. |

## Boundaries and conventions

- **No new architectural layers** (`services/`, `features/`, `contexts/`, etc.) unless there's an actual API, database, or cross-cutting state need to justify them — this is a static content site.
- **Component filenames are PascalCase** (`Hero.jsx`, `NavBar.jsx`); everything else (`data/`, `hooks/`, `lib/`) is camelCase.
- **Content lives in `src/data/`, not in components.** To change site copy, edit the relevant `src/data/*.js` file — don't hardcode text into JSX.
- **Client-only components** (theme, cursor, anything touching `window`) must guard hydration.

  ```javascript
  "use client";
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  ```

- **External links** always use `target="_blank"` with `rel="noopener noreferrer"`.
- **Render errors** are caught by `ErrorBoundary` (mounted once in `src/app/layout.js`) — don't add per-component error boundaries unless a component needs a distinct fallback.
- **No secrets in the repo.** Only `NEXT_PUBLIC_*` variables belong in `.env`/`.env.example`; anything server-only/sensitive must never be committed. `.env` is git-ignored — keep it that way.
- Don't add dependencies for something one existing utility (`cn`, `useScreenSize`, the data `validate*()` pattern) already covers.
