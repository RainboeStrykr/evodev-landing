import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ShinyButton } from "@/components/ui/shiny-button";


export function SectionHeader({
  eyebrow,
  title,
  italic,
  subtext,
  cta,
}: {
  eyebrow: string;
  title: string;
  italic: string;
  subtext: string;
  cta?: ReactNode;
}) {
  const parts = title.split("*");
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-accent" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">{eyebrow}</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl italic text-text-primary leading-[1.05]">
          {parts[0]}
          <span className="font-display italic">{italic}</span>
          {parts.length > 2 ? parts[2] : ""}
        </h2>
        <p className="mt-4 text-muted max-w-md text-sm md:text-base">{subtext}</p>
      </div>
      {cta}
    </motion.div>
  );
}

export function GhostButton({ children, href = "#" }: { children: ReactNode; href?: string }) {
  return (
    <ShinyButton href={href} className="self-start w-full sm:w-auto md:inline-flex">
      {children}
    </ShinyButton>
  );
}

