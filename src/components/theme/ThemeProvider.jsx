"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Client boundary around next-themes so the server root layout can use it.
 * Accepts every `next-themes` ThemeProvider prop.
 */
export default function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
