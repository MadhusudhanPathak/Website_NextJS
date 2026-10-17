"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * ThemeProvider component wraps the app to provide theme context
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} [props.defaultTheme='system'] - Default theme
 * @returns {JSX.Element} The theme provider wrapper
 */
export function ThemeProvider({ children, defaultTheme = 'system', ...props }) {
  return (
    <NextThemesProvider {...props} defaultTheme={defaultTheme}>
      {children}
    </NextThemesProvider>
  );
}
