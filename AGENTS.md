# AGENTS.md

Guide for AI coding agents working in this repository.

## Project

- Personal portfolio site for Madhusudhan Pathak.
- Next.js 16 (App Router), React 18, Tailwind CSS 3, shadcn/ui. JavaScript, with JSDoc for types.
- Single home page (`src/app/page.js`): nav bar, hero, persona sections, footer. No API routes, no database, no auth.
- Package manager: npm (`package-lock.json` is the source of truth). Node 20.9+.

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
| `src/app/` | Routing, root layout, metadata, global CSS. |
| `src/components/layout/` | Site chrome: `NavBar` (composes `DesktopNav` + `MobileNav`), `Footer`, `Cursor`. |
| `src/components/sections/` | Page content: `Hero`, `Personas` → `PersonaSection` → `DiscoveryCard`. |
| `src/components/theme/` | `ThemeProvider` (next-themes wrapper) and `ThemeToggle`. |
| `src/components/ErrorBoundary.jsx` | The single app-wide render-error boundary, mounted in `layout.js`. |
| `src/components/ui/` | shadcn/ui primitives (`button`, `card`, `dock`, `sheet`). Only keep a primitive or export here if something imports it. |
| `src/data/` | Static content as plain JS modules. Each exports its content constant and a `validate*()` guard. |
| `src/hooks/` | Shared client hooks: `useMounted`, `useScreenSize`. |
| `src/lib/utils.js` | Framework-agnostic helpers: `cn()`, `isNonEmptyString()`. |
| `src/config/site.config.js` | Site metadata and theme settings; reads `NEXT_PUBLIC_*` env vars with fallbacks. |
| `public/` | Static assets served as-is. |

### How the pieces interact

- `page.js` composes the layout and section components. None of them take props from the page; each imports its own data module.
- Data → components is one-way. A component calls the module's `validate*()` before rendering and shows an inline error message on failure. `Personas` additionally filters out individual invalid personas with `isValidPersona()`.
- Components below the validation point (`PersonaSection`, `DiscoveryCard`, `DesktopNav`, `MobileNav`) trust their props and do not re-validate.
- Theme state comes from next-themes (`useTheme()`); `ThemeProvider` is configured from `siteConfig.theme` in `layout.js`.

## Boundaries and conventions

- **No new architectural layers** (`services/`, `features/`, `contexts/`, etc.) unless an actual API, database, or cross-cutting state need justifies them. This is a static content site.
- **Filenames:** components are PascalCase (`Hero.jsx`); shadcn primitives in `ui/` stay lowercase; `data/`, `hooks/`, `lib/` are camelCase. Components in `src/components/` use default exports; `ui/` primitives use named exports.
- **Content lives in `src/data/`, not in components.** To change site copy, edit the relevant data file and don't hardcode text into JSX. New data modules follow the same shape: an UPPER_SNAKE content constant plus a `validate*()` guard built on `isNonEmptyString`.
- **Server components by default.** Only add `"use client"` when a component uses state, effects, browser APIs, or `useTheme`.
- **Client-only rendering** (theme-dependent output, anything reading `window`) must be gated on `useMounted()` to avoid hydration mismatches:

  ```javascript
  const mounted = useMounted();
  if (!mounted) return null;
  ```

- **External links** always use `target="_blank"` with `rel="noopener noreferrer"` (or `window.open(href, "_blank", "noopener,noreferrer")`).
- **Errors:** don't add per-component error boundaries unless a component needs a distinct fallback. `ErrorBoundary` only shows error details outside production.
- **No secrets in the repo.** Only `NEXT_PUBLIC_*` variables belong in `.env.example`; every other `.env*` file is git-ignored. Keep it that way.
- Don't add dependencies for something an existing utility (`cn`, `isNonEmptyString`, `useMounted`, `useScreenSize`, the `validate*()` pattern) already covers.
