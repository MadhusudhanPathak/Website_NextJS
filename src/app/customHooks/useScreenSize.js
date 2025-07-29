import { useEffect, useState } from "react";

export function useScreenSize() {
  const [currentWidth, setCurrentWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    setCurrentWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return currentWidth;
}
