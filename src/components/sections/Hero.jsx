"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useTheme } from "next-themes";
import { HERO_CONTENT, validateHeroContent } from "@/data/heroContent";
import { useMounted } from "@/hooks/useMounted";

/** Full-height banner with a theme-aware background and a typewriter greeting. */
export default function Hero() {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!validateHeroContent()) {
    return (
      <div className="flex items-center justify-center h-[89vh]">
        <p className="text-red-500">Error loading hero content</p>
      </div>
    );
  }

  // The theme is unknown until mount; default to the dark image to avoid a flash.
  const backgroundSrc = mounted && resolvedTheme === "light" ? "/Light.jpg" : "/Dark.jpg";

  return (
    <>
      <div className="absolute inset-0 -z-10 h-[90vh] w-full overflow-hidden">
        <Image
          src={backgroundSrc}
          alt="Hero background"
          fill
          sizes="100vw"
          quality={60}
          className="object-cover opacity-50"
          priority
          draggable={false}
        />
      </div>

      <div className="flex flex-col h-[89vh] items-center text-center justify-center md:justify-end relative z-10">
        <div className="flex h-40 items-end mb-0">
          <div className="flex flex-col md:flex-row">
            <h1 className="scroll-m-20 md:flex-row text-4xl font-extrabold tracking-tight lg:text-5xl flex-1 font-serif">
              {HERO_CONTENT.greeting}
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

        <p className="text-3xl italic font-serif">{HERO_CONTENT.tagline}</p>

        <p className="mt-3 text-center text-wrap mx-12 md:mx-52">
          {HERO_CONTENT.description}
        </p>
      </div>
    </>
  );
}
