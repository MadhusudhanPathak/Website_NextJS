"use client";

import { createContext, useContext, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const DEFAULT_SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

const PALETTES = {
  dark: { panel: "#0f0f0f", item: "#2a2a2a", text: "#ffffff" },
  light: { panel: "#f5f5f5", item: "#e5e5e5", text: "#000000" },
};

const COLOR_TRANSITION = "background 0.3s ease, color 0.3s ease";

const DockContext = createContext(null);

function useDockContext(componentName) {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error(`${componentName} must be used within a Dock`);
  }
  return context;
}

/**
 * macOS-style horizontal dock whose items magnify as the pointer approaches.
 * @param {object} props
 * @param {"dark" | "light"} [props.theme="dark"] Color palette.
 * @param {number} [props.magnification=67] Item size (px) directly under the pointer.
 * @param {number} [props.distance=120] Pointer distance (px) over which magnification fades out.
 * @param {number} [props.panelHeight=48] Resting item and panel height (px).
 * @param {number} [props.gap=24] Space between items (px).
 */
function Dock({
  children,
  className,
  theme = "dark",
  spring = DEFAULT_SPRING,
  magnification = 67,
  distance = 120,
  panelHeight = 48,
  gap = 24,
}) {
  const mouseX = useMotionValue(Infinity);
  const palette = PALETTES[theme] ?? PALETTES.dark;

  return (
    <DockContext.Provider
      value={{ mouseX, spring, magnification, distance, baseSize: panelHeight, palette }}
    >
      <div
        className="flex items-start justify-center w-full"
        style={{ height: `${panelHeight}px` }}
      >
        <motion.div
          onMouseMove={({ clientX }) => mouseX.set(clientX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className={cn(
            "flex flex-row items-start rounded-xl px-6 shadow-lg dark:shadow-xl overflow-visible",
            className
          )}
          style={{
            height: `${panelHeight}px`,
            gap: `${gap}px`,
            backgroundColor: palette.panel,
            transition: COLOR_TRANSITION,
          }}
        >
          {children}
        </motion.div>
      </div>
    </DockContext.Provider>
  );
}

/**
 * A magnifying slot in the dock. Extra props (role, tabIndex, handlers) are
 * forwarded to the underlying element.
 */
function DockItem({ children, className, ...rest }) {
  const { mouseX, spring, magnification, distance, baseSize } = useDockContext("DockItem");
  const ref = useRef(null);

  const mouseDistance = useTransform(mouseX, (x) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return x - rect.x - rect.width / 2;
  });

  const targetScale = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [1, magnification / baseSize, 1]
  );
  const scale = useSpring(targetScale, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        height: `${baseSize}px`,
        width: "auto",
        minWidth: `${baseSize}px`,
        scale,
        transformOrigin: "top center",
      }}
      className={cn(
        "relative inline-flex items-center justify-center flex-shrink-0 cursor-pointer",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Labelled tile rendered inside a `DockItem`, colored by the dock's palette. */
function DockIcon({ children, className }) {
  const { palette } = useDockContext("DockIcon");

  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-medium shadow-md backdrop-blur-sm transition-all hover:shadow-lg whitespace-nowrap",
        className
      )}
      style={{
        backgroundColor: palette.item,
        color: palette.text,
        transition: COLOR_TRANSITION,
      }}
    >
      {children}
    </div>
  );
}

export { Dock, DockItem, DockIcon };
