import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import ErrorBoundary from "@/components/ErrorBoundary";
import siteConfig from "@/config/site.config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata for the website
 * Includes title, description, and SEO properties
 */
export const metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    "Madhusudhan Pathak",
    "Portfolio",
    "AI",
    "Artificial Intelligence",
    "Software Engineer",
    "Full Stack Developer",
  ],
  authors: [
    {
      name: siteConfig.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

/**
 * Root layout component
 * Wraps entire application with theme provider and global styles
 * 
 * @param {Object} props - Layout props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Root layout with providers
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          enableSystem={siteConfig.theme.enableSystem}
          disableTransitionOnChange={
            siteConfig.theme.disableTransitionOnChange
          }
          defaultTheme={siteConfig.theme.defaultTheme}
          storageKey="site-theme"
        >
          <ErrorBoundary>
            {children}
            <Toaster />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
