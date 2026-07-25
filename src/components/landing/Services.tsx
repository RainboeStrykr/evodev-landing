import { SectionHeader, GhostButton } from "./SectionHeader";
import { RevealImages } from "@/components/ui/reveal-images";

const services: Parameters<typeof RevealImages>[0]["items"] = [
  {
    text: "Custom Web & App Development",
    images: [
      { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=80", alt: "Custom web development agency" },
      { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&auto=format&fit=crop&q=80", alt: "Custom application development" },
    ],
  },
  {
    text: "SaaS Platform Engineering",
    images: [
      { src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&auto=format&fit=crop&q=80", alt: "SaaS platform engineering and development" },
      { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&auto=format&fit=crop&q=80", alt: "Scalable SaaS platform" },
    ],
  },
  {
    text: "Brand Identity & UI/UX Design",
    images: [
      { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80", alt: "Brand identity and UI/UX design" },
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80", alt: "Digital branding agency" },
    ],
  },
  {
    text: "SEO & Digital Growth Strategy",
    images: [
      { src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&auto=format&fit=crop&q=80", alt: "SEO and digital growth strategy" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80", alt: "SEO-friendly website development" },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Core Services"
          title="End-to-end *digital* solutions"
          italic="digital"
          subtext="From custom web development and brand identity to SEO and SaaS engineering — everything you need to dominate your market."
          cta={<GhostButton>All services</GhostButton>}
        />
        <RevealImages items={services} />
      </div>
    </section>
  );
}
