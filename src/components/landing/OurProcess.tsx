"use client";

import { Timeline } from "@/components/ui/timeline";

const processData = [
  {
    title: "Step 01",
    content: (
      <div className="space-y-2">
        <h3 className="font-display text-2xl italic text-text-primary md:text-3xl">
          Book a Call
        </h3>
        <p className="text-base leading-relaxed text-muted">
          Schedule your free 30-min SaaS blueprint strategy session with our
          lead engineer.
        </p>
      </div>
    ),
  },
  {
    title: "Step 02",
    content: (
      <div className="space-y-2">
        <h3 className="font-display text-2xl italic text-text-primary md:text-3xl">
          Strategy Session
        </h3>
        <p className="text-base leading-relaxed text-muted">
          We map your tech stack, architecture, feature roadmap, and cost
          estimation in 48 hours.
        </p>
      </div>
    ),
  },
  {
    title: "Step 03",
    content: (
      <div className="space-y-2">
        <h3 className="font-display text-2xl italic text-text-primary md:text-3xl">
          We Build
        </h3>
        <p className="text-base leading-relaxed text-muted">
          Our full-stack team executes with precision — weekly demos,
          transparent progress, zero surprises.
        </p>
      </div>
    ),
  },
  {
    title: "Step 04",
    content: (
      <div className="space-y-2">
        <h3 className="font-display text-2xl italic text-text-primary md:text-3xl">
          You Scale
        </h3>
        <p className="text-base leading-relaxed text-muted">
          Launch, grow, and dominate your market. We stay as your technical
          partner for ongoing evolution.
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
