import React from "react";
import Discoveries from "./discoveries";
import { PersonaData } from "../staticData/classifiedRawData";
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

export default function Section() {
  return (
    <div className="min-h-screen">
      {Object.keys(PersonaData).map((persona, index) => (
        <div key={index}>
          <div className="flex justify-between items-center w-2/3 mx-auto">
            <div>
              <h2 className="scroll-m-20 mb-10 text-xl md:text-2xl lg:text-4xl font-semibold tracking-tight first:mt-10">
                {persona}
              </h2>
            </div>
            <div className="flex space-x-3">
              {PersonaData[persona]["socials"].map((element, index) => {
                return (
                  <Link key={index} href={element.Link} target="_blank">
                    {IconMap[element.Icon] && React.createElement(IconMap[element.Icon])}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-auto w-2/3">
            {PersonaData[persona]["discoveries"].map((element, index) => (
              <div key={index} className="h-full">
                <Discoveries
                  header={element.header}
                  desc={element.desc}
                  childDesc={element.minDesc}
                  hrefto={element.hrefto}
                />
              </div>
            ))}
          </div>
          {index < Object.keys(PersonaData).length - 1 && (
            <hr className="w-1/3 mx-auto mt-6 border rounded-3xl" />
          )}
        </div>
      ))}
    </div>
  );
}