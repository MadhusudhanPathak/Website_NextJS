"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/** Card container with a green spotlight that follows the pointer on hover. */
const Card = React.forwardRef(({ className, children, style, ...props }, ref) => {
  const cardRef = React.useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const setRefs = (node) => {
    cardRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  };

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  };

  return (
    <div
      ref={setRefs}
      className={cn(
        "relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
      style={{ ...style, "--mouse-x": `${position.x}px`, "--mouse-y": `${position.y}px` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle 300px at var(--mouse-x) var(--mouse-y), rgba(34, 197, 94, 0.4), transparent 80%)",
          opacity: isHovering ? 1 : 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1 p-2 pt-5", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-1.5 pt-5", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
