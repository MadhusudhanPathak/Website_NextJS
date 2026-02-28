# AI Agent Configuration & Project Guide

## 📌 Project Information

- **Name**: Madhusudhan Pathak - Portfolio Website
- **Version**: 1.0.0
- **Framework**: Next.js 16+
- **Runtime**: Node.js 18+
- **Package Manager**: npm/yarn/pnpm
- **Architecture**: App Router (not Pages Router)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: (Not currently in use - Prisma available for future)
- **Authentication**: (Not currently in use)

## 🏗️ Complete Project Structure

```
Website_NextJS/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.js              # Root layout
│   │   ├── page.js                # Home page
│   │   ├── not-found.js           # Custom 404
│   │   └── globals.css            # Global styles
│   │
│   ├── components/                 # React Components
│   │   ├── ui/                    # shadcn/ui components
│   │   ├── hero.jsx               # Hero banner
│   │   ├── NavBar.jsx             # Navigation
│   │   ├── Footer.jsx             # Footer
│   │   ├── Section.jsx            # Persona sections
│   │   ├── Discoveries.jsx        # Discovery cards
│   │   ├── Cursor.jsx             # Animated cursor
│   │   ├── DarkMode.jsx           # Theme toggle
│   │   ├── themeProvider.jsx      # Theme context
│   │   └── ErrorBoundary.jsx      # Error boundary
│   │
│   ├── data/                      # Static Content
│   │   ├── navLinks.js            # Navigation configuration
│   │   ├── heroContent.js         # Hero text
│   │   └── classifiedRawData.js   # Persona data
│   │
│   ├── hooks/                     # Custom Hooks
│   │   └── useScreenSize.js       # Screen width tracker
│   │
│   ├── lib/                       # Core Utilities
│   │   ├── utils.js               # Common utilities
│   │   └── prisma.js              # Database client
│   │
│   ├── utils/                     # Helper Functions
│   │   └── helpers.js             # Utility functions
│   │
│   ├── config/                    # Configuration
│   │   └── site.config.js         # Site configuration
│   │
│   ├── types/                     # Type Definitions
│   │   └── index.js               # JSDoc types
│   │
│   ├── constants/                 # Constants (reserved)
│   ├── contexts/                  # Contexts (reserved)
│   ├── providers/                 # Providers (reserved)
│   ├── services/                  # Services (reserved)
│   ├── features/                  # Features (reserved)
│   ├── styles/                    # Styles (reserved)
│   └── assets/                    # Asset files
│
├── public/                        # Static Assets
│   ├── Dark.jpg                  # Dark background
│   ├── Light.jpg                 # Light background
│   └── favicon.ico               # Favicon
│
├── prisma/                        # Database Schema (future)
├── docs/                          # Documentation
├── .env.example                   # Environment template
├── .env.local                     # Environment (not in git)
├── .gitignore                     # Git ignore
├── package.json                   # Dependencies
├── tailwind.config.js             # Tailwind config
├── postcss.config.js              # PostCSS config
├── next.config.mjs                # Next.js config
├── jsconfig.json                  # Path aliases
├── components.json                # shadcn/ui config
├── README.md                      # Main documentation
├── Agent.md                       # This file
├── REFACTORING_SUMMARY.md         # Refactoring details
└── COMPLETION_REPORT.md           # Completion summary
```

## 🎯 Key Components

### Layout Components
| Component | File | Purpose |
|-----------|------|---------|
| RootLayout | app/layout.js | App root, theme setup |
| Hero | components/hero.jsx | Typewriter animation |
| NavBar | components/NavBar.jsx | Navigation bar |
| Section | components/section.jsx | Persona sections |
| Footer | components/footer.jsx | Footer |

### Feature Components
| Component | File | Purpose |
|-----------|------|---------|
| Discoveries | components/discoveries.jsx | Discovery cards |
| DarkMode | components/DarkMode.jsx | Theme toggle |
| Cursor | components/cursor.jsx | Cursor animation |
| ThemeProvider | components/themeProvider.jsx | Theme context |

## 📊 Data Models

### Navigation Links (navLinks.js)
```javascript
NAV_LINKS = [
  { href: string, text: string },
  ...
]
validateNavLinks() → boolean
```

### Hero Content (heroContent.js)
```javascript
HERO_CONTENT = {
  typewriterStrings: string[],
  tagline: string,
  description: string
}
validateHeroContent() → boolean
```

### Persona Data (classifiedRawData.js)
```javascript
PersonaData = {
  [name]: {
    discoveries: [{
      header: string,
      desc: string,
      minDesc: string,
      hrefto: string
    }],
    socials: [{
      Link: string,
      Icon: string
    }]
  }
}
```

## 🔧 Common Development Tasks

### 1. Adding Navigation Links
Edit `src/data/navLinks.js`:
```javascript
NAV_LINKS.push({
  href: "https://example.com",
  text: "Link Text"
});
```

### 2. Adding Persona Content
Edit `src/data/classifiedRawData.js`:
```javascript
PersonaData.NewPersona = {
  discoveries: [...],
  socials: [...]
};
```

### 3. Updating Hero Text
Edit `src/data/heroContent.js`:
```javascript
HERO_CONTENT.typewriterStrings.push("New Name");
```

### 4. Creating Components
```javascript
// src/components/MyComponent.jsx
"use client"; // If client-side needed

/**
 * Component description
 * @param {Object} props - Props
 * @returns {JSX.Element} Component
 */
export default function MyComponent(props) {
  // Validate, render
}
```

## 🌐 Responsive Breakpoints

- Mobile: < 640px
- Small: 640px - 767px
- Medium: 768px - 1023px
- Large: 1024px - 1279px
- XL: 1280px+
- Desktop: > 700px (for features like cursor)

## 🎨 Theme & Styling

### Color System
Custom properties in `src/app/globals.css`:
- Primary: Green/Teal
- Background/Foreground
- Accent/Destructive colors
- Dark mode variants

### Tailwind CSS
- Mobile-first approach
- `dark:` prefix for dark mode
- Custom utilities
- Animation support

## ⚠️ Important Notes

### Client-Only Components
Must include "use client" and hydration check:
```javascript
"use client";
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```

### Data Validation
All components validate before rendering:
```javascript
function validateData(data) {
  return data && /* checks */;
}
if (!validateData(data)) {
  console.error("Invalid data");
  return <Error />;
}
```

## 📦 Key Dependencies

### Core
- next@16.1.6
- react@18
- react-dom@18

### Styling
- tailwindcss@3.3.0
- shadcn-ui@0.9.5
- @radix-ui components

### Animations
- framer-motion@12.34.3
- typewriter-effect@2.21.0
- react-animated-cursor@2.11.2

### Theme
- next-themes@0.2.1

### Utilities
- clsx, tailwind-merge

## 🚀 Scripts

```bash
npm run dev       # Development
npm run build     # Production build
npm start         # Production server
npm run lint      # ESLint
```

## 🔐 Security

- External links: `rel="noopener noreferrer"`
- Input validation on all data
- Error boundaries
- No hardcoded secrets
- Environment variables for config

## 📝 Code Standards

- **Components**: PascalCase
- **Functions**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **JSDoc**: Full documentation
- **Validation**: Before rendering
- **Comments**: Clear and helpful

## 🐛 Debugging

Check browser console for:
- `console.error()` - Critical issues
- `console.warn()` - Validation failures
- `console.log()` - Debug info

## 💡 Pro Tips

1. Most changes in `src/data/`
2. Check console for validation warnings
3. Test at multiple breakpoints
4. Test both light and dark themes
5. Check accessibility with keyboard
6. Use path alias `@/` for imports

## 📚 Resources

- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev)
- [Tailwind](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)

---

**Last Updated**: March 2026
**Status**: ✅ Production Ready
