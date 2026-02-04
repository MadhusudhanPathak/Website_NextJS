# Personal Website and Portfolio

This repository contains the codebase for my personal website and portfolio. Initially, I had a website built with Wix, but I transitioned to this Next.js-based solution in early 2024 to gain more control and flexibility.

## Project Overview

This website serves as a central hub for my personal brand and professional work. It showcases my projects, thoughts, and provides a way to connect with me. The base and front-end design were initially crafted by Rambadan Pandey, also known as TechnoStart.

### Decentralization Philosophy

One of the core principles behind this website's architecture is decentralization. To minimize single points of failure and enhance reliability, I have intentionally linked main documents to Google Drive and other relevant webpages to Notion. This approach ensures that critical content remains accessible even if one platform experiences issues.

## Architecture

The project follows a clean, modular architecture with the following directory structure:

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

## Features

- Responsive design with mobile-first approach
- Dark/light theme toggle
- Animated cursor for desktop users
- Dynamic content loading from data files
- Error boundaries for graceful error handling
- Optimized performance with Next.js features
- Accessibility compliant components

## Getting Started

To get a copy of the project up and running on your local machine for development and testing purposes, follow these steps.

### Prerequisites

Make sure you have Node.js (v18 or higher) and npm/yarn installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Website_NextJS
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

### Running in Production Mode

To start the production server:

```bash
npm run start
# or
yarn start
```

## Development Guidelines

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