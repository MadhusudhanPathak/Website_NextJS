import Link from "next/link";
import { NAV_LINKS } from "../staticData/navLinks";

export default function Footer() {
  return (
    <>
      <footer>
        <hr className="block mt-3 md:hidden md:mt-0" />
        <div className="container flex flex-wrap items-center justify-center px-4 py-2 md:py-8 mx-auto  lg:justify-between">
          <div className="flex flex-wrap justify-center">
            <ul className="flex flex-col space-x-0 space-y-4 md:space-y-0 md:flex-row items-center md:space-x-4">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href}>
                  <Link href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</Link>
                </li>
              ))}
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
