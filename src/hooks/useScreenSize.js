import { useEffect, useState } from "react";

/**
 * Hook for tracking screen width with responsive updates
 * Features:
 * - Returns current window width
 * - Updates on window resize
 * - Safe for SSR (returns 0 on server)
 * - Cleans up event listeners on unmount
 * 
 * @returns {number} Current window width in pixels, or 0 if server-side
 */
export function useScreenSize() {
  const [currentWidth, setCurrentWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    // Return early if window is not available (server-side)
    if (typeof window === "undefined") {
      return;
    }

    /**
     * Handle window resize events
     */
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return currentWidth;
}
