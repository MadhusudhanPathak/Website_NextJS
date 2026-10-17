"use client";

import { useTheme } from "next-themes";
import { Dock, DockIcon, DockItem } from "@/components/ui/dock";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useMounted } from "@/hooks/useMounted";

function openExternal(href) {
  window.open(href, "_blank", "noopener,noreferrer");
}

/**
 * Large-screen navigation: external links in a magnifying dock plus the theme toggle.
 * @param {{ links: Array<{ href: string, text: string }> }} props
 */
export default function DesktopNav({ links }) {
  const { resolvedTheme } = useTheme();
  const mounted = useMounted();
  const dockTheme = mounted && resolvedTheme === "light" ? "light" : "dark";

  return (
    <nav className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end overflow-visible">
      <Dock theme={dockTheme}>
        {links.map((link) => (
          <DockItem
            key={link.href}
            role="link"
            tabIndex={0}
            onClick={() => openExternal(link.href)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openExternal(link.href);
              }
            }}
          >
            <DockIcon>{link.text}</DockIcon>
          </DockItem>
        ))}
        <DockItem className="ml-auto">
          <ThemeToggle />
        </DockItem>
      </Dock>
    </nav>
  );
}
