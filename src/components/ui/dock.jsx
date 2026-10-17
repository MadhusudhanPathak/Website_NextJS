"use client";

import React, { useRef, useState, createContext, useContext } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const DOCK_HEIGHT = 100;
const DEFAULT_MAGNIFICATION = 67;
const DEFAULT_DISTANCE = 120;
const DEFAULT_PANEL_HEIGHT = 48;
const DEFAULT_GAP = 24;

const DockContext = createContext(null);

function Dock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
  gap = DEFAULT_GAP,
  dockBgColor = "#1a1a1a",
  dockTextColor = "#f0f0f0",
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  return (
    <DockContext.Provider
      value={{ mouseX, spring, magnification, distance, baseSize: panelHeight, dockTextColor }}
    >
      <motion.div
        style={{
          height: `${panelHeight}px`,
        }}
        className="flex items-start justify-center w-full"
      >
        <motion.div
          onMouseMove={({ pageX }) => {
            isHovered.set(1);
            mouseX.set(pageX);
          }}
          onMouseLeave={() => {
            isHovered.set(0);
            mouseX.set(Infinity);
          }}
          className={cn(
            "flex flex-row items-start rounded-xl px-6 shadow-lg dark:shadow-xl overflow-visible",
            className
          )}
          style={{
            height: `${panelHeight}px`,
            gap: `${gap}px`,
            backgroundColor: dockBgColor,
            transition: "background 0.3s ease, color 0.3s ease",
            overflow: "visible",
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </DockContext.Provider>
  );
}

function DockItem({ children, className, onClick, ...rest }) {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error("DockItem must be used within a Dock");
  }
  const { mouseX, spring, magnification, distance, baseSize } = context;

  const ref = useRef(null);

  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      width: 0,
      x: 0,
    };
    return val - rect.x - rect.width / 2;
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
        scale: scale,
        transformOrigin: "top center",
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center flex-shrink-0 cursor-pointer",
        className
      )}
      tabIndex={0}
      role="button"
      aria-pressed="false"
      {...rest}
    >
      {children}
    </motion.div>
  );
}

function DockIcon({ children, className }) {
  const context = useContext(DockContext);
  const dockTextColor = context?.dockTextColor || "#e5e5e5";
  
  // Determine icon background and text color for better contrast
  const isLight = dockTextColor === "#1a1a1a";
  const iconBgColor = isLight ? "#e5e5e5" : "#2a2a2a";
  const iconTextColor = isLight ? "#000000" : "#ffffff";
  
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-medium shadow-md backdrop-blur-sm transition-all hover:shadow-lg whitespace-nowrap",
        className
      )}
      style={{
        backgroundColor: iconBgColor,
        color: iconTextColor,
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      {children}
    </div>
  );
}

function DockLabel({ children, className }) {
  return (
    <span className={cn("text-xs font-medium", className)}>
      {children}
    </span>
  );
}

export { Dock, DockItem, DockIcon, DockLabel };
