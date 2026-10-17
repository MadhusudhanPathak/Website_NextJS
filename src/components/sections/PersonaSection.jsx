import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import DiscoveryCard from "@/components/sections/DiscoveryCard";

/** Icons available to `socials[].icon` in `src/data/personas.js`. */
const SOCIAL_ICONS = { Facebook, Github, Instagram, Linkedin, Twitter, Youtube };

/**
 * One persona: heading, social icon links, and a grid of discovery cards.
 * Socials whose `icon` has no entry in `SOCIAL_ICONS` are skipped.
 * @param {object} props
 * @param {string} props.name
 * @param {import("@/data/personas").Persona} props.persona
 * @param {boolean} props.showDivider Whether to draw a divider after this section.
 */
export default function PersonaSection({ name, persona, showDivider }) {
  const socials = persona.socials.filter((social) => SOCIAL_ICONS[social.icon]);

  return (
    <section>
      <div className="flex justify-between items-center w-2/3 mx-auto">
        <div>
          <h2 className="scroll-m-20 mb-10 text-xl md:text-2xl lg:text-4xl font-semibold tracking-tight first:mt-10">
            {name}
          </h2>
        </div>

        <div className="flex space-x-3" role="group" aria-label={`${name} social media links`}>
          {socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon];
            return (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label={`${social.icon} link`}
              >
                <Icon size={24} />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-2/3">
        {persona.discoveries.map((discovery) => (
          <div key={discovery.title}>
            <DiscoveryCard {...discovery} />
          </div>
        ))}
      </div>

      {showDivider && <hr className="w-1/3 mx-auto mt-6 border rounded-3xl" />}
    </section>
  );
}
