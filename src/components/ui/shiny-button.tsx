import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ShinyButtonProps {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  showArrow?: boolean;
}

export function ShinyButton({
  children,
  href,
  type = "button",
  onClick,
  disabled,
  className,
  showArrow = true,
}: ShinyButtonProps) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-black transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
    "bg-gradient-to-r from-[#c9a84c] via-[#f0d78c] to-[#c9a84c]",
    className,
  );

  const shine = (
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
  );

  const content = (
    <>
      {shine}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
