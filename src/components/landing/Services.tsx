import { SectionHeader, GhostButton } from "./SectionHeader";
import { RevealImages } from "@/components/ui/reveal-images";

const services: Parameters<typeof RevealImages>[0]["items"] = [
  {
    text: "Custom Application Development",
    images: [
      { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&auto=format&fit=crop&q=80", alt: "Custom application development" },
      { src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&auto=format&fit=crop&q=80", alt: "Custom application development" },
    ],
  },
  {
    text: "SaaS Platform Engineering",
    images: [
      { src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&auto=format&fit=crop&q=80", alt: "SaaS platform engineering" },
      { src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&auto=format&fit=crop&q=80", alt: "SaaS platform engineering" },
    ],
  },
  {
    text: "Cloud Architecture and DevOps",
    images: [
      { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80", alt: "Cloud architecture and DevOps" },
      { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80", alt: "Cloud architecture and DevOps" },
    ],
  },
  {
    text: "SEO and Social Media Optimization",
    images: [
      { src: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400&auto=format&fit=crop&q=80", alt: "SEO and social media optimization" },
      { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=80", alt: "SEO and social media optimization" },
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Services"
          title="What we *do*"
          italic="do"
          subtext="A full suite of digital services to transform your online presence."
          cta={<GhostButton>All services</GhostButton>}
        />
        <RevealImages items={services} />
      </div>
    </section>
  );
}
