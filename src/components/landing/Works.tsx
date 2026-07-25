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
    text: "Metro Food Court",
    image: "/demo/metro-food-court.png",
    url: "https://www.metrofoodcourt.com",
    description:
      "Metro Food Court is a quick-bites restaurant at New Bypass, Patna, serving North Indian, Chinese, and a full range of rolls and sandwiches.",
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
