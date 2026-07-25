"use client";

import { Timeline } from "@/components/ui/timeline";

const processData = [
  {
    title: "Step 01",
    content: (
      <div className="space-y-2">
        <h3 className="font-display text-2xl italic text-text-primary md:text-3xl">
          Discover & Strategize
        </h3>
        <p className="text-base leading-relaxed text-muted">
          We analyze your industry, competitors, and target audience to build a robust brand and digital strategy. Book your free 30-min blueprint session to get started.
        </p>
      </div>
    ),
  },
  {
    title: "Step 02",
    content: (
      <div className="space-y-2">
        <h3 className="font-display text-2xl italic text-text-primary md:text-3xl">
          Design & Prototype
        </h3>
        <p className="text-base leading-relaxed text-muted">
          Our designers craft stunning UI/UX mockups and brand identity assets for your approval — mapping your tech stack, architecture, and feature roadmap in 48 hours.
        </p>
      </div>
    ),
  },
  {
    title: "Step 03",
    content: (
      <div className="space-y-2">
        <h3 className="font-display text-2xl italic text-text-primary md:text-3xl">
          Develop & Build
        </h3>
        <p className="text-base leading-relaxed text-muted">
          Our full-stack engineering team brings designs to life using modern technologies — weekly demos, transparent progress, zero surprises.
        </p>
      </div>
    ),
  },
  {
    title: "Step 04",
    content: (
      <div className="space-y-2">
        <h3 className="font-display text-2xl italic text-text-primary md:text-3xl">
          Launch & Grow
        </h3>
        <p className="text-base leading-relaxed text-muted">
          We deploy your SEO-optimized site and stay as your technical partner — providing ongoing support, digital growth strategies, and continuous optimization.
        </p>
      </div>
    ),
  },
];

export function OurProcess() {
  return (
    <section
      id="process"
      className="relative w-full border-t border-stroke bg-bg"
    >
      <Timeline data={processData} />
    </section>
  );
}
