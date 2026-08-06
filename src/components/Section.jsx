import React, { useMemo } from "react";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Github, Twitter, Youtube } from "lucide-react";
import Discoveries from "./Discoveries";
import { PersonaData } from "@/data/classifiedRawData";

/**
 * Icon component mapping for social media platforms
 * @type {Object<string, React.ComponentType>}
 */
const ICON_MAP = {
  Facebook: Facebook,
  Linkedin: Linkedin,
  Instagram: Instagram,
  Github: Github,
  Twitter: Twitter,
  Youtube: Youtube,
};

/**
 * Validates a single discovery object
 * @param {Object} discovery - Discovery object to validate
 * @returns {boolean} True if valid
 */
function isValidDiscovery(discovery) {
  return (
    discovery &&
    typeof discovery.header === "string" &&
    discovery.header.trim().length > 0 &&
    typeof discovery.desc === "string" &&
    discovery.desc.trim().length > 0 &&
    typeof discovery.minDesc === "string" &&
    discovery.minDesc.trim().length > 0 &&
    typeof discovery.hrefto === "string" &&
    discovery.hrefto.trim().length > 0
  );
}

/**
 * Validates a single social link object
 * @param {Object} social - Social link object to validate
 * @returns {boolean} True if valid
 */
function isValidSocial(social) {
  return (
    social &&
    typeof social.Link === "string" &&
    social.Link.trim().length > 0 &&
    typeof social.Icon === "string" &&
    social.Icon.trim().length > 0 &&
    ICON_MAP[social.Icon]
  );
}

/**
 * Validates persona data structure
 * @param {Object} personaData - Persona data object to validate
 * @returns {boolean} True if valid
 */
function isValidPersonaData(personaData) {
  return (
    personaData &&
    Array.isArray(personaData.socials) &&
    Array.isArray(personaData.discoveries) &&
    personaData.socials.every(isValidSocial) &&
    personaData.discoveries.every(isValidDiscovery)
  );
}

/**
 * Section component displays persona-based discoveries and social links
 * Features:
 * - Organizes content by persona
 * - Displays social media links with icons
 * - Shows discovery cards with hover effects
 * - Comprehensive validation and error handling
 * 
 * @returns {JSX.Element} The section with persona data
 */
export default function Section() {
  // Get and memoize persona keys
  const personaKeys = useMemo(() => {
    if (!PersonaData || typeof PersonaData !== "object") return [];
    return Object.keys(PersonaData).filter((key) => key.trim().length > 0);
  }, []);

  // Validate PersonaData
  if (!PersonaData || typeof PersonaData !== "object") {
    console.error("PersonaData is missing or invalid");
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Error loading persona content</p>
      </div>
    );
  }

  if (personaKeys.length === 0) {
    console.warn("No valid personas found in PersonaData");
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No persona data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {personaKeys.map((persona, index) => {
        const personaData = PersonaData[persona];

        // Validate persona data
        if (!isValidPersonaData(personaData)) {
          console.warn(`Invalid data for persona: ${persona}`);
          return null;
        }

        const validSocials = personaData.socials.filter(isValidSocial);
        const validDiscoveries = personaData.discoveries.filter(isValidDiscovery);

        return (
          <section key={`section-${persona}-${index}`}>
            {/* Persona Header with Social Links */}
            <div className="flex justify-between items-center w-2/3 mx-auto">
              <div>
                <h2 className="scroll-m-20 mb-10 text-xl md:text-2xl lg:text-4xl font-semibold tracking-tight first:mt-10">
                  {persona}
                </h2>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3" role="link-group" aria-label={`${persona} social media links`}>
                {validSocials.map((social, idx) => {
                  const IconComponent = ICON_MAP[social.Icon];
                  return (
                    <Link
                      key={`social-${persona}-${idx}`}
                      href={social.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-75 transition-opacity"
                      aria-label={`${social.Icon} link`}
                    >
                      <IconComponent size={24} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Discoveries Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-2/3">
              {validDiscoveries.map((discovery, idx) => (
                <div key={`discovery-${persona}-${idx}`}>
                  <Discoveries
                    header={discovery.header}
                    desc={discovery.desc}
                    childDesc={discovery.minDesc}
                    hrefto={discovery.hrefto}
                  />
                </div>
              ))}
            </div>

            {/* Divider */}
            {index < personaKeys.length - 1 && (
              <hr className="w-1/3 mx-auto mt-6 border rounded-3xl" />
            )}
          </section>
        );
      })}
    </div>
  );
}