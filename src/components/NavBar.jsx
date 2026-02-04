import { ModeToggle } from "@/components/DarkMode";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from 'next/link';
import { NAV_LINKS } from "@/data/navLinks";

/**
 * Navbar component displays the navigation bar with theme toggle
 * @returns {JSX.Element} The navigation bar
 */
export default function Navbar() {
  // Validate NAV_LINKS
  if (!NAV_LINKS || !Array.isArray(NAV_LINKS)) {
    console.error("NAV_LINKS is missing or invalid");
    return <header>Error loading navbar</header>;
  }

  const links = NAV_LINKS.map(link => {
    if (!link || !link.href || typeof link.text !== 'string') {
      console.warn("Invalid link in NAV_LINKS", link);
      return null;
    }

    return {
      ...link,
      text: link.text.endsWith('!') || link.text.endsWith('.') || link.text.endsWith('?') ? link.text : link.text + '!'
    };
  }).filter(Boolean); // Remove any null values

  return (
    <header className="w-full bg-white shadow-sm dark:bg-black dark:text-gray-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center gap-2" href="#">
          <span className="text-lg font-bold hidden md:block">Madhusudhan Pathak</span>
        </Link>
        <nav className="hidden space-x-4 lg:flex lg:items-center">
          {links.map((link, index) => (
            <Link key={index} target="_blank" href={link.href} rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-primary">
              {link.text}
            </Link>
          ))}
          <ModeToggle />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-2 py-6">
              {links.map((link, index) => (
                <Link key={index} target="_blank" href={link.href} rel="noopener noreferrer" className="text-sm font-medium transition-colors hover:text-primary">
                  {link.text}
                </Link>
              ))}
              <div className="absolute bottom-5 left-5 flex items-center">
                <ModeToggle />
                <p className="ml-2">Switch Theme</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
