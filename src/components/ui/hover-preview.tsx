"use client";

import * as React from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HoverPreviewItem {
  text: string;
  image?: string;
  href?: string;
}

export interface HoverPreviewProps {
  className?: string;
  children: React.ReactNode;
  previewWidth?: number;
  previewHeight?: number;
}

interface HoverContextValue {
  onEnter: (image: string, e: React.MouseEvent) => void;
  onMove: (e: React.MouseEvent) => void;
  onLeave: () => void;
}

const HoverCtx = React.createContext<HoverContextValue | null>(null);

export function HoverPreview({
  className,
  children,
  previewWidth = 260,
  previewHeight = 170,
}: HoverPreviewProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = React.useState<string | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 24, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 280, damping: 24, mass: 0.4 });

  const update = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - previewWidth / 2);
    y.set(e.clientY - rect.top - previewHeight - 20);
  };

  const ctx: HoverContextValue = {
    onEnter: (image, e) => {
      setActiveImage(image);
      update(e);
    },
    onMove: (e) => update(e),
    onLeave: () => setActiveImage(null),
  };

  return (
    <HoverCtx.Provider value={ctx}>
      <div ref={containerRef} className={cn("relative", className)}>
        {children}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              style={{
                x: springX,
                y: springY,
                width: previewWidth,
                height: previewHeight,
              }}
              className="pointer-events-none absolute left-0 top-0 z-50 overflow-hidden rounded-xl border border-stroke bg-surface shadow-2xl"
            >
              <img
                src={activeImage}
                alt=""
                className="h-full w-full object-cover"
                draggable={false}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </HoverCtx.Provider>
  );
}

export interface HoverPreviewTriggerProps
  extends React.HTMLAttributes<HTMLElement> {
  image: string;
  href?: string;
  children: React.ReactNode;
}

export function HoverPreviewTrigger({
  image,
  href,
  children,
  className,
  ...rest
}: HoverPreviewTriggerProps) {
  const ctx = React.useContext(HoverCtx);
  if (!ctx) throw new Error("HoverPreviewTrigger must be used inside HoverPreview");

  const commonProps = {
    onMouseEnter: (e: React.MouseEvent) => ctx.onEnter(image, e),
    onMouseMove: (e: React.MouseEvent) => ctx.onMove(e),
    onMouseLeave: () => ctx.onLeave(),
    className: cn(
      "relative inline-block cursor-pointer font-display italic text-2xl lowercase tracking-normal text-accent underline decoration-accent/40 decoration-1 underline-offset-4 transition-colors hover:decoration-accent",
      className,
    ),
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...commonProps} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <span {...commonProps} {...rest}>
      {children}
    </span>
  );
}
