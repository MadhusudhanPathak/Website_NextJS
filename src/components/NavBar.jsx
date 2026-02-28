"use client";

import { useCallback, useMemo } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "@/components/DarkMode";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dock, DockItem, DockIcon } from "@/components/ui/dock";
import { NAV_LINKS, validateNavLinks } from "@/data/navLinks";

/**
 * Navbar component displays the navigation bar with theme toggle
 * Features:
 * - Responsive design (desktop dock nav, mobile sheet nav)
 * - Theme-aware styling
 * - Input validation and error handling
 * - Accessible navigation with proper ARIA labels
 * 
 * @returns {JSX.Element} The navigation bar
 */
export default function Navbar() {
  const { theme } = useTheme();

  // Validate NAV_LINKS
  if (!validateNavLinks()) {
    console.error("NAV_LINKS validation failed - navigation data is invalid");
    return (
      <header className="w-full bg-white shadow-sm dark:bg-black relative z-50">
        <div className="container mx-auto px-4 py-4">
          <span className="text-red-500">Error loading navigation</span>
        </div>
      </header>
    );
  }

  // Process and memoize links to avoid unnecessary re-renders
  const processedLinks = useMemo(() => {
    return NAV_LINKS.map((link) => {
      if (!link || !link.href || typeof link.text !== "string") {
        console.warn("Invalid link structure", link);
        return null;
      }
      return {
        ...link,
        text: link.text.trim(),
      };
    }).filter(Boolean);
  }, []);

  // Theme colors for dock
  const isDarkMode = theme === "dark";
  const dockBgColor = isDarkMode ? "#1a1a1a" : "#f0f0f0";
  const dockTextColor = isDarkMode ? "#f0f0f0" : "#1a1a1a";

  // Handle external link opening
  const handleExternalLink = useCallback((href) => {
    if (!href) return;
    window.open(href, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <header className="w-full bg-white shadow-sm dark:bg-black dark:text-gray-50 relative z-50">
      <div className="container mx-auto flex h-auto items-start justify-between px-4 md:px-6 py-4">
        {/* Logo/Title */}
        <Link
          className="flex items-center gap-2"
          href="/"
          aria-label="Home"
        >
          <span className="text-lg font-bold hidden md:block">
            Madhusudhan Pathak
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end overflow-visible">
          <Dock
            magnification={67}
            distance={120}
            panelHeight={48}
            gap={24}
            dockBgColor={dockBgColor}
            dockTextColor={dockTextColor}
          >
            {processedLinks.map((link, index) => (
              <DockItem
                key={`nav-link-${index}`}
                onClick={() => handleExternalLink(link.href)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleExternalLink(link.href);
                  }
                }}
              >
                <DockIcon>{link.text}</DockIcon>
              </DockItem>
            ))}
            <DockItem
              className="ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <ModeToggle />
            </DockItem>
          </Dock>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="lg:hidden"
              size="icon"
              variant="outline"
              aria-label="Toggle navigation menu"
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-2 py-6">
              {processedLinks.map((link, index) => (
                <Link
                  key={`mobile-nav-link-${index}`}
                  target="_blank"
                  href={link.href}
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors hover:text-primary py-2 px-2 rounded hover:bg-secondary"
                >
                  {link.text}
                </Link>
              ))}
              <div className="absolute bottom-5 left-5 flex items-center gap-2">
                <ModeToggle />
                <p className="text-sm">Switch Theme</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
