"use client";

import AnimatedCursor from "react-animated-cursor";
import siteConfig from "@/config/site.config";
import { useMounted } from "@/hooks/useMounted";
import { useScreenSize } from "@/hooks/useScreenSize";

const ACCENT = "rgba(34, 197, 94, 1)";

/** Animated accent-colored cursor, rendered only on desktop-width viewports. */
export default function Cursor() {
  const mounted = useMounted();
  const width = useScreenSize();

  if (!mounted || width <= siteConfig.responsive.desktopBreakpoint) {
    return null;
  }

  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={25}
      innerScale={1.5}
      outerScale={2}
      outerAlpha={0.4}
      innerStyle={{ backgroundColor: ACCENT }}
      outerStyle={{ border: `2px solid ${ACCENT}` }}
    />
  );
}
