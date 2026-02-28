"use client";

import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useScreenSize } from "@/hooks/useScreenSize";

/**
 * Cursor component displays an animated cursor on desktop screens
 * Features:
 * - Only renders on desktop screens (width > 700px)
 * - Hydration-safe rendering
 * - Automatically respects screen size changes
 * 
 * @returns {JSX.Element|null} The animated cursor or null if not on desktop
 */
export default function Cursor() {
  const currentWidth = useScreenSize();
  const [mounted, setMounted] = useState(false);

  // Hydration fix: only render after client-side hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || currentWidth === 0) {
    return null;
  }

  // Only show cursor on desktop (width > 700px)
  if (currentWidth <= 700) {
    return null;
  }

  return <AnimatedCursor />;
}
