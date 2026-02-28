# Madhusudhan Pathak - Personal Website & Portfolio

A modern, responsive personal website and portfolio built with **Next.js 16**, **React 18**, **Tailwind CSS**, and **shadcn/ui**. Features dark/light theme support, animated components, and a persona-based content organization system.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Website_NextJS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint checks
npm run lint
```

## 🏗️ Architecture Overview

### Directory Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── layout.js          # Root layout with theme provider
│   ├── page.js            # Home page
│   ├── not-found.js       # Custom 404 page
│   └── globals.css        # Global styles
├── components/             # Reusable React components
│   ├── ui/                # shadcn/ui components
│   ├── Hero.jsx           # Hero section
│   ├── NavBar.jsx         # Navigation bar
│   ├── Footer.jsx         # Footer
│   ├── Section.jsx        # Persona sections
│   ├── Cursor.jsx         # Animated cursor
│   ├── DarkMode.jsx       # Theme toggle
│   └── ErrorBoundary.jsx  # Error handling
├── data/                   # Static data and content
│   ├── navLinks.js        # Navigation links
│   ├── heroContent.js     # Hero section content
│   └── classifiedRawData.js # Persona data
├── hooks/                  # Custom React hooks
│   └── useScreenSize.js   # Screen size tracking
├── lib/                    # Utility libraries and helpers
│   ├── utils.js           # Common utilities
│   └── prisma.js          # Database client (if enabled)
├── utils/                  # Helper functions
│   └── helpers.js         # Utility functions
├── config/                 # Configuration files
│   └── site.config.js     # Site configuration
├── constants/              # Application constants
├── types/                  # Type definitions
│   └── index.js           # JSDoc type definitions
├── contexts/              # React context providers (reserved)
├── providers/             # Custom providers (reserved)
└── services/              # API services (reserved)

public/                     # Static assets
├── Dark.jpg               # Dark theme background
├── Light.jpg              # Light theme background
└── favicon.ico            # Site favicon

docs/                       # Documentation
```

## 🎨 Features

### Core Features
- **🌙 Dark/Light Theme**: Toggle between themes with persistent storage
- **📱 Fully Responsive**: Mobile-first design approach
- **⚡ Fast Performance**: Optimized with Next.js and Tailwind CSS
- **♿ Accessibility**: WCAG compliant with proper ARIA labels
- **🎭 Persona System**: Organize content by multiple personas
- **🔤 Animated Typewriter**: Dynamic hero section text animation
- **🎯 Animated Cursor**: Custom cursor for desktop users (>700px width)

### Technical Features
- **Type Safety**: JSDoc type annotations throughout
- **Error Handling**: Comprehensive error boundaries and validation
- **Input Validation**: All data structures validated before rendering
- **Performance Optimization**: Memoized components and callbacks
- **SSR Compatible**: Server-side rendering safe code
- **Hydration-Safe**: Proper handling of client-side only features

## 🎯 Component Overview

### Layout Components

**Hero** (`src/components/hero.jsx`)
- Displays animated typewriter effect with persona names
- Theme-aware background images
- Responsive typography

**NavBar** (`src/components/NavBar.jsx`)
- Responsive navigation with dock UI on desktop
- Mobile menu drawer
- Theme toggle button
- Keyboard accessible

**Footer** (`src/components/footer.jsx`)
- Navigation links
- Contact message
- Responsive layout

### Feature Components

**Section** (`src/components/section.jsx`)
- Displays persona-based content
- Social media links with icons
- Discovery cards grid

**Discoveries** (`src/components/discoveries.jsx`)
- Discovery card component
- Hover effects
- External links with proper security

**Cursor** (`src/components/cursor.jsx`)
- Desktop-only animated cursor
- Responsive to screen size changes
- Hydration-safe

## 🔧 Configuration

### Site Configuration

Edit `src/config/site.config.js` to modify:
- Site title and description
- Default theme
- Responsive breakpoints
- Site URL

### Environment Variables

Create `.env.local` from `.env.example`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_TITLE="Madhusudhan Pathak - Portfolio"
NEXT_PUBLIC_DEFAULT_THEME=dark
```

### Data Management

**Navigation Links** (`src/data/navLinks.js`)
```javascript
export const NAV_LINKS = [
  { href: "url", text: "Link Text" },
  // ... more links
];
```

**Hero Content** (`src/data/heroContent.js`)
```javascript
export const HERO_CONTENT = {
  typewriterStrings: ["Name1", "Name2"],
  tagline: "Your tagline",
  description: "Your description"
};
```

**Persona Data** (`src/data/classifiedRawData.js`)
```javascript
export const PersonaData = {
  PersonaName: {
    socials: [
      { Link: "url", Icon: "IconName" }
    ],
    discoveries: [
      { header, desc, minDesc, hrefto }
    ]
  }
};
```

## 🎨 Styling

### Tailwind CSS
- Custom color scheme with CSS variables
- Responsive design utilities
- Dark mode support

### Animations
- Framer Motion for complex animations
- Tailwind CSS animations for transitions
- Custom animated cursor

### Theme Colors

Colors are defined in `src/app/globals.css` using CSS variables:
```css
:root {
  --primary: 142.1 76.2% 36.3%;
  /* ... more colors */
}
```

## 🔐 Security Best Practices

- External links use `rel="noopener noreferrer"`
- XSS prevention through React sanitization
- CSRF tokens for forms (when implemented)
- Input validation on all data sources
- Error boundaries for graceful failures

## 📱 Responsive Design

The site follows a mobile-first approach with breakpoints:
- Mobile: < 640px
- Small: 640px - 767px
- Medium: 768px - 1023px
- Large: 1024px - 1279px
- XL: 1280px+

## 🐛 Error Handling

All components include:
- Data validation before rendering
- User-friendly error messages
- Console logging for debugging
- Error boundaries for component failures
- Graceful fallbacks

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

The project includes a `vercel.json` config for optimized deployment.

## 📊 Performance Considerations

- **Code Splitting**: Next.js automatic code splitting
- **Image Optimization**: Next.js Image component usage
- **CSS Optimization**: Tailwind CSS purging
- **Component Memoization**: Prevents unnecessary re-renders
- **Lazy Loading**: Images and components loaded on demand

## 🤝 Contributing

1. Follow the existing code structure
2. Add JSDoc comments to functions
3. Validate data structures before rendering
4. Test responsive design
5. Ensure accessibility compliance

## 📄 License

[Add your license here]

## 👤 Author

**Madhusudhan Pathak**

## 🔗 Links

- **Portfolio**: [Website](http://localhost:3000)
- **GitHub**: [Profile](https://github.com/MadhusudhanPathak)
- **LinkedIn**: [Profile](https://www.linkedin.com/in/madmyspy)

## 📝 Development Notes

### Code Quality
- All components use arrow function syntax
- JSDoc comments for public APIs
- Comprehensive input validation
- Error logging for debugging

### Best Practices
- Use semantic HTML
- Prefer composition over inheritance
- Keep components focused (single responsibility)
- Use React hooks properly
- Validate all external data

### Testing
- Manual testing on multiple devices
- Screen reader testing
- Keyboard navigation testing
- Theme switching testing

## 🐛 Known Issues

None currently. Please report issues via GitHub.

## 🔄 Future Enhancements

- [ ] Contact form with email integration
- [ ] Blog section with MDX support
- [ ] Search functionality
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] Performance monitoring


### Component Structure

All components follow these guidelines:
- Use PropTypes for type checking
- Include error handling and validation
- Follow accessibility best practices
- Maintain consistent naming conventions

### Data Management

Static data is stored in the `/src/data` directory and follows this structure:
- `navLinks.js` - Navigation links
- `heroContent.js` - Hero section content
- `classifiedRawData.js` - Persona and discovery data

### Styling

- Tailwind CSS for utility classes
- CSS variables for theme management
- Consistent spacing and typography scales

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.