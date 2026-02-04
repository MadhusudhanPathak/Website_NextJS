# Project Agent Configuration

## Overview
This file contains configuration and context information for AI agents working with the Personal Website and Portfolio project.

## Project Information
- **Name**: Personal Website and Portfolio
- **Framework**: Next.js 14+
- **Architecture**: App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Features**: Dark/light theme, responsive design, animated cursor

## Directory Structure
```
src/
├── app/                 # Next.js app router pages
│   ├── globals.css      # Global styles
│   ├── layout.js        # Root layout with theme provider
│   └── page.js          # Main page
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   └── *.jsx           # Custom components
├── hooks/              # Custom React hooks
├── data/               # Static data and content
├── lib/                # Library functions and utilities
├── utils/              # Helper functions
├── types/              # Type definitions
├── services/           # API and external service integrations
├── contexts/           # React context providers
└── providers/          # Custom providers
```

## Key Components
- **Hero**: Displays animated typewriter text and introduction
- **Section**: Renders persona-based discoveries and social links
- **Navbar**: Navigation with theme toggle and mobile menu
- **Footer**: Site navigation links
- **Cursor**: Animated cursor for desktop users
- **ThemeProvider**: Manages dark/light theme

## Data Structure
- `navLinks.js`: Contains navigation links
- `heroContent.js`: Contains typewriter strings and hero content
- `classifiedRawData.js`: Contains persona data with discoveries and social links

## Important Notes
- All components use PropTypes for type checking
- Error boundaries are implemented for graceful error handling
- Client-side checks are performed where necessary
- External links open in new tabs with proper rel attributes
- Responsive design follows mobile-first approach

## Common Tasks
1. **Adding new persona data**: Update `src/data/classifiedRawData.js`
2. **Adding new navigation links**: Update `src/data/navLinks.js`
3. **Creating new components**: Place in `src/components/` directory
4. **Adding custom hooks**: Place in `src/hooks/` directory
5. **Updating styles**: Modify `src/app/globals.css` or component-specific classes

## Environment Considerations
- Server-side rendering compatible
- Client-side functionality properly guarded
- Accessibility features implemented
- Performance optimized with Next.js features