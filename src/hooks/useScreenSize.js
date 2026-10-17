import { useEffect, useState } from "react";

/**
 * Tracks the window's inner width, updating on resize.
 * @returns {number} Width in pixels, or 0 during server rendering.
 */
export function useScreenSize() {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
