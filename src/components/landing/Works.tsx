import { SectionHeader, GhostButton } from "./SectionHeader";
import { LoadingCarousel } from "@/components/ui/loading-carousel";

const projects = [
  {
    text: "Gyan Niketan Girls School",
    image: "/projects/gn-school-1.png",
    url: "https://www.gyanniketan.in/",
    description:
      "Full-stack educational institution platform with an admin portal and student management.",
  },
  {
    text: "Gyan Niketan Digital Architecture",
    image: "/projects/gn-school-2.png",
    url: "https://www.gyanniketan.in/",
    description:
      "Premium school management portal with an analytics dashboard and multi-role access.",
  },
  {
    text: "Human Perspective",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1600&q=80",
    url: "#human-perspective",
    description:
      "Brand system and storytelling platform for a documentary studio, built to scale from a single film to an entire library.",
  },
  {
    text: "Evodoc",
    image: "/projects/evodoc.png",
    url: "https://evodoc.in",
    description:
      "The next generation of clinical intelligence. Empowering modern physicians with AI-assisted diagnostics and high-fidelity insights.",
  },
];

export function Works() {
  return (
    <section id="works" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Our Portfolio"
          title="Featured *projects*"
          italic="projects"
          subtext="A selection of brands we've helped grow — from concept to launch."
          cta={<GhostButton>View all work</GhostButton>}
        />

        <LoadingCarousel
          tips={projects}
          autoplayInterval={4000}
          showNavigation
          showProgress
          showIndicators
          aspectRatio="wide"
        />
      </div>
    </section>
  );
}
