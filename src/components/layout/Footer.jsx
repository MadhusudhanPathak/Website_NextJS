import Link from "next/link";
import { FOOTER_CONTENT, validateFooterContent } from "@/data/footerContent";
import { NAV_LINKS, validateNavLinks } from "@/data/navLinks";

/** Site footer: the external nav links and a sign-off message. */
export default function Footer() {
  if (!validateNavLinks() || !validateFooterContent()) {
    return (
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <p className="text-red-500 text-center">Error loading footer content</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t dark:border-gray-800">
      <hr className="block mt-3 md:hidden md:mt-0" />
      <div className="container flex flex-wrap items-center justify-center px-4 py-2 md:py-8 mx-auto lg:justify-between">
        <div className="flex flex-wrap justify-center w-full lg:w-auto">
          <ul className="flex flex-col space-x-0 space-y-4 md:space-y-0 md:flex-row items-center md:space-x-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base transition-colors hover:text-primary"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pb-2 pt-3 md:pt-0">
        <p className="text-center font-serif font-semibold text-sm md:text-base">
          {FOOTER_CONTENT.message}
        </p>
      </div>
    </footer>
  );
}
