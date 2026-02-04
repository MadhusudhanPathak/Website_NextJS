"use client";
import AnimatedCursor from "react-animated-cursor";
import { useScreenSize } from "@/hooks/useScreenSize";

/**
 * Cursor component displays an animated cursor on desktop screens
 * @returns {JSX.Element|null} The animated cursor or null if not on desktop
 */
export default function Cursor() {
  const currentWidth = useScreenSize();

  // Check if window is available (client-side only)
  if (typeof window === 'undefined') {
    return null;
  }

  return <>{currentWidth > 700 && <AnimatedCursor />}</>;
}
