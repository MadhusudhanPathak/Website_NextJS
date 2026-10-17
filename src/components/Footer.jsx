import Link from "next/link";
import { NAV_LINKS, validateNavLinks } from "@/data/navLinks";

/**
 * Footer component displays navigation links and contact information
 * Features:
 * - Responsive footer layout
 * - Navigation links
 * - Contact message
 * - Proper validation and error handling
 * 
 * @returns {JSX.Element} The footer section
 */
export default function Footer() {
  // Validate NAV_LINKS
  if (!validateNavLinks()) {
    console.error("NAV_LINKS validation failed in footer");
    return (
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <p className="text-red-500 text-center">Error loading footer content</p>
        </div>
      </footer>
    );
  }

  return (
    <>
      <footer className="border-t dark:border-gray-800">
        <hr className="block mt-3 md:hidden md:mt-0" />
        <div className="container flex flex-wrap items-center justify-center px-4 py-2 md:py-8 mx-auto lg:justify-between">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center w-full lg:w-auto">
            <ul className="flex flex-col space-x-0 space-y-4 md:space-y-0 md:flex-row items-center md:space-x-4">
              {NAV_LINKS.flatMap((link, index) => {
                if (!link || !link.text) {
                  console.warn("Invalid link in NAV_LINKS", link);
                  return [];
                }

                if (Array.isArray(link.options)) {
                  return link.options.map((option, optionIndex) => {
                    if (!option || !option.href || !option.text) {
                      console.warn("Invalid option in NAV_LINKS", option);
                      return null;
                    }
                    return (
                      <li key={`footer-link-${index}-option-${optionIndex}`}>
                        <Link
                          href={option.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm md:text-base transition-colors hover:text-primary"
                        >
                          {option.text}
                        </Link>
                      </li>
                    );
                  }).filter(Boolean);
                }

                if (!link.href) {
                  console.warn("Invalid link in NAV_LINKS", link);
                  return [];
                }

                return (
                  <li key={`footer-link-${index}`}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base transition-colors hover:text-primary"
                    >
                      {link.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Footer Message */}
        <div className="pb-2 pt-3 md:pt-0">
          <p className="text-center font-serif font-semibold text-sm md:text-base">
            Get in touch for Wisdom 😊
          </p>
        </div>
      </footer>
    </>
  );
}
