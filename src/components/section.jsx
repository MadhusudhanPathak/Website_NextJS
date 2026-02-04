import React from "react";
import Discoveries from "./discoveries";
import { PersonaData } from "@/data/classifiedRawData";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, Github, Twitter, Youtube } from "lucide-react";

const IconMap = {
  Facebook: Facebook,
  Linkedin: Linkedin,
  Instagram: Instagram,
  Github: Github,
  Twitter: Twitter,
  Youtube: Youtube,
};

/**
 * Section component displays persona-based discoveries and social links
 * @returns {JSX.Element} The section with persona data
 */
export default function Section() {
  // Validate PersonaData
  if (!PersonaData) {
    console.error("PersonaData is missing or invalid");
    return <div>Error loading content</div>;
  }

  const personaKeys = Object.keys(PersonaData);

  return (
    <div className="min-h-screen">
      {personaKeys.map((persona, index) => {
        const personaData = PersonaData[persona];

        // Validate persona data
        if (!personaData || !Array.isArray(personaData.socials) || !Array.isArray(personaData.discoveries)) {
          console.warn(`Invalid data for persona: ${persona}`);
          return null;
        }

        return (
          <div key={index}>
            <div className="flex justify-between items-center w-2/3 mx-auto">
              <div>
                <h2 className="scroll-m-20 mb-10 text-xl md:text-2xl lg:text-4xl font-semibold tracking-tight first:mt-10">
                  {persona}
                </h2>
              </div>
              <div className="flex space-x-3">
                {personaData.socials.map((element, idx) => {
                  if (!element || !element.Link || !element.Icon) {
                    console.warn(`Invalid social element for ${persona}`, element);
                    return null;
                  }

                  return (
                    <Link key={idx} href={element.Link} target="_blank" rel="noopener noreferrer">
                      {IconMap[element.Icon] && React.createElement(IconMap[element.Icon])}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-auto w-2/3">
              {personaData.discoveries.map((element, idx) => {
                if (!element || !element.header || !element.desc || !element.minDesc || !element.hrefto) {
                  console.warn(`Invalid discovery element for ${persona}`, element);
                  return null;
                }

                return (
                  <div key={idx} className="h-full">
                    <Discoveries
                      header={element.header}
                      desc={element.desc}
                      childDesc={element.minDesc}
                      hrefto={element.hrefto}
                    />
                  </div>
                );
              })}
            </div>
            {index < personaKeys.length - 1 && (
              <hr className="w-1/3 mx-auto mt-6 border rounded-3xl" />
            )}
          </div>
        );
      })}
    </div>
  );
}