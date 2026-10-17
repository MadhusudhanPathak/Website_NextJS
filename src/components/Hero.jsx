"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useTheme } from "next-themes";
import { HERO_CONTENT, validateHeroContent } from "@/data/heroContent";

/**
 * Hero component displays the main banner with animated typewriter text
 * Features:
 * - Theme-aware background images
 * - Animated typewriter effect for name/persona display
 * - Responsive layout with tailwind
 * - Graceful fallback on validation failure
 *
 * @returns {JSX.Element|null} The hero section or null if data is invalid
 */
export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration fix: resolvedTheme is unknown on the server, so keep the
  // default background until the client mounts to avoid a themed-image
  // swap/flash right after load.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Validate HERO_CONTENT data
  if (!validateHeroContent()) {
    console.error("HERO_CONTENT validation failed - data structure is invalid");
    return (
      <div className="flex items-center justify-center h-[89vh]">
        <p className="text-red-500">Error loading hero content</p>
      </div>
    );
  }

  const backgroundSrc = mounted && resolvedTheme === "light" ? "/Light.jpg" : "/Dark.jpg";

  return (
    <>
      {/* Background image layer */}
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

      {/* Hero content */}
      <div className="flex flex-col h-[89vh] items-center text-center justify-center md:justify-end relative z-10">
        <div className="flex h-40 items-end mb-0">
          <div className="flex flex-col md:flex-row">
            <h1 className="scroll-m-20 md:flex-row text-4xl font-extrabold tracking-tight lg:text-5xl flex-1 font-serif">
              Hey there, it{`'s`}
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
          {HERO_CONTENT.tagline}
        </p>

        <p className="mt-3 text-center text-wrap mx-12 md:mx-52">
          {HERO_CONTENT.description}
        </p>
      </div>
    </>
  );
}
