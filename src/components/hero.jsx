"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

import Typewriter from "typewriter-effect";
import { HERO_CONTENT } from "@/data/heroContent";

/**
 * Hero component displays the main banner with animated typewriter text
 * @returns {JSX.Element|null} The hero section or null if data is invalid
 */
export default function Hero() {
  const { theme } = useTheme();

  // Validate HERO_CONTENT data
  if (!HERO_CONTENT || !Array.isArray(HERO_CONTENT?.typewriterStrings)) {
    console.error("HERO_CONTENT is missing or invalid");
    return null;
  }

  return (
    <>
      <div className="-z-10 absolute w-full">
          <Image
            src={theme === "light" ? "/Light.jpg" : "/Dark.jpg"}
            className="h-[90vh] bg-cover opacity-50"
            alt="backgroundImage"
            width={1920}
            height={1080}
            priority
          />
        </div>

      <div
        className={`flex flex-col h-[89vh] items-center text-center justify-center md:justify-end`}
      >
        <div className="flex h-40 items-end mb-0">
          <div className="flex flex-col md:flex-row">
            <h1 className="scroll-m-20 md:flex-row text-4xl font-extrabold tracking-tight lg:text-5xl flex-1 font-serif">
              Hey there, it{"'s"}
            </h1>
            <h1 className="ml-0 md:ml-3 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-serif">
              <Typewriter
                options={{
                  strings: HERO_CONTENT.typewriterStrings,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </div>
        <p className="text-3xl italic font-serif">
          {HERO_CONTENT.tagline || "Loading..."}
        </p>
        <p className="mt-3 text-center text-wrap mx-12 md:mx-52 ">
          {HERO_CONTENT.description || "Loading..."}
        </p>
      </div>
    </>
  );
}