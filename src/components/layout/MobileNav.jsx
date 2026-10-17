import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/theme/ThemeToggle";

/**
 * Small-screen navigation: a menu button that opens a side sheet with the
 * external links and the theme toggle.
 * @param {{ links: Array<{ href: string, text: string }> }} props
 */
export default function MobileNav({ links }) {
  return (
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
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-colors hover:text-primary py-2 px-2 rounded hover:bg-secondary"
            >
              {link.text}
            </Link>
          ))}
          <div className="absolute bottom-5 left-5 flex items-center gap-2">
            <ThemeToggle />
            <p className="text-sm">Switch Theme</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
