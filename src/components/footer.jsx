import Link from "next/link";
import { NAV_LINKS } from "@/data/navLinks";

/**
 * Footer component displays navigation links and contact info
 * @returns {JSX.Element} The footer section
 */
export default function Footer() {
  // Validate NAV_LINKS
  if (!NAV_LINKS || !Array.isArray(NAV_LINKS)) {
    console.error("NAV_LINKS is missing or invalid");
    return <footer>Error loading footer</footer>;
  }

  return (
    <>
      <footer>
        <hr className="block mt-3 md:hidden md:mt-0" />
        <div className="container flex flex-wrap items-center justify-center px-4 py-2 md:py-8 mx-auto  lg:justify-between">
          <div className="flex flex-wrap justify-center">
            <ul className="flex flex-col space-x-0 space-y-4 md:space-y-0 md:flex-row items-center md:space-x-4">
              {NAV_LINKS.map((link, index) => {
                if (!link || !link.href || !link.text) {
                  console.warn("Invalid link in NAV_LINKS", link);
                  return null;
                }

                return (
                  <li key={index}>
                    <Link href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="pb-2 pt-3 md:pt-0">
          <p className="text-center font-serif font-semibold">
            Get in touch for Wisdom 😊
          </p>
        </div>
      </footer>
    </>
  );
}
