"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "@/components/DarkMode";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  // Process and memoize links to avoid unnecessary re-renders
  const processedLinks = useMemo(() => {
    return NAV_LINKS.map((link) => {
      if (!link || typeof link.text !== "string") {
        console.warn("Invalid link structure", link);
        return null;
      }
      if (Array.isArray(link.options)) {
        return {
          ...link,
          text: link.text.trim(),
          options: link.options.map((option) => ({
            ...option,
            text: option.text.trim(),
          })),
        };
      }
      if (!link.href) {
        console.warn("Invalid link structure", link);
        return null;
      }
      return {
        ...link,
        text: link.text.trim(),
      };
    }).filter(Boolean);
  }, []);

  // Handle external link opening
  const handleExternalLink = useCallback((href) => {
    if (!href) return;
    window.open(href, "_blank", "noopener,noreferrer");
  }, []);

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

  // Theme colors for dock - default to dark mode if theme is not yet loaded
  const isDarkMode = theme !== "light"; // Default to dark (true) when theme is undefined/null
  const dockBgColor = isDarkMode ? "#0f0f0f" : "#f5f5f5";
  const dockTextColor = isDarkMode ? "#e5e5e5" : "#1a1a1a";

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
            {processedLinks.map((link, index) => {
              if (Array.isArray(link.options)) {
                const isOpen = openDropdownIndex === index;
                return (
                  <DockItem
                    key={`nav-link-${index}`}
                    onMouseEnter={() => setOpenDropdownIndex(index)}
                    onMouseLeave={() => setOpenDropdownIndex(null)}
                    onClick={() =>
                      setOpenDropdownIndex((prev) => (prev === index ? null : index))
                    }
                    role="button"
                    tabIndex={0}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setOpenDropdownIndex((prev) => (prev === index ? null : index));
                      } else if (e.key === "Escape") {
                        setOpenDropdownIndex(null);
                      }
                    }}
                  >
                    <DockIcon>{link.text}</DockIcon>
                    {isOpen && (
                      <div
                        role="menu"
                        className="absolute left-1/2 top-full z-50 mt-2 w-48 -translate-x-1/2 rounded-lg border border-black/10 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-black"
                      >
                        {link.options.map((option, optionIndex) => (
                          <button
                            key={`nav-link-${index}-option-${optionIndex}`}
                            type="button"
                            role="menuitem"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleExternalLink(option.href);
                              setOpenDropdownIndex(null);
                            }}
                            className="block w-full px-4 py-2 text-left text-sm whitespace-nowrap hover:bg-secondary"
                          >
                            {option.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </DockItem>
                );
              }
              return (
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
              );
            })}
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
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <SheetDescription className="sr-only">
              Links to site sections and a theme toggle
            </SheetDescription>
            <div className="grid gap-2 py-6">
              {processedLinks.map((link, index) => {
                if (Array.isArray(link.options)) {
                  return (
                    <div key={`mobile-nav-link-${index}`} className="flex flex-col gap-1">
                      <span className="text-sm font-medium px-2 py-2 text-muted-foreground">
                        {link.text}
                      </span>
                      <div className="flex flex-col gap-1 pl-4">
                        {link.options.map((option, optionIndex) => (
                          <Link
                            key={`mobile-nav-link-${index}-option-${optionIndex}`}
                            target="_blank"
                            href={option.href}
                            rel="noopener noreferrer"
                            className="text-sm font-medium transition-colors hover:text-primary py-2 px-2 rounded hover:bg-secondary"
                          >
                            {option.text}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={`mobile-nav-link-${index}`}
                    target="_blank"
                    href={link.href}
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors hover:text-primary py-2 px-2 rounded hover:bg-secondary"
                  >
                    {link.text}
                  </Link>
                );
              })}
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
