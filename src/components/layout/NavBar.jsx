import Link from "next/link";
import DesktopNav from "@/components/layout/DesktopNav";
import MobileNav from "@/components/layout/MobileNav";
import siteConfig from "@/config/site.config";
import { NAV_LINKS, validateNavLinks } from "@/data/navLinks";

/** Site header: name/home link plus desktop and mobile navigation. */
export default function NavBar() {
  if (!validateNavLinks()) {
    return (
      <header className="w-full bg-white shadow-sm dark:bg-black relative z-50">
        <div className="container mx-auto px-4 py-4">
          <span className="text-red-500">Error loading navigation</span>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full bg-white shadow-sm dark:bg-black dark:text-gray-50 relative z-50">
      <div className="container mx-auto flex h-auto items-start justify-between px-4 md:px-6 py-4">
        <Link className="flex items-center gap-2" href="/" aria-label="Home">
          <span className="text-lg font-bold hidden md:block">{siteConfig.author}</span>
        </Link>
        <DesktopNav links={NAV_LINKS} />
        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
