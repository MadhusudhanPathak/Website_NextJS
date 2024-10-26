import { Toaster } from "@/components/ui/toaster";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./myComponents/themeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Madhusudhan Pathak",
  description: "Get in touch for Artificial Wisdom..!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
