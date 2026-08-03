import { SectionHeader, GhostButton } from "./SectionHeader";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";

const projects: FocusRailItem[] = [
  {
    id: 1,
    title: "Gyan Niketan Girls School",
    description:
      "Full-stack educational institution platform with an admin portal and student management.",
    imageSrc: "/projects/gn-school-1.png",
    href: "https://www.gyanniketan.in/",
    meta: "Education • Full-Stack",
  },
  {
    id: 2,
    title: "Gyan Niketan Digital Architecture",
    description:
      "Premium school management portal with an analytics dashboard and multi-role access.",
    imageSrc: "/projects/gn-school-2.png",
    href: "https://www.gyanniketan.in/",
    meta: "EdTech • SaaS",
  },
  {
    id: 3,
    title: "Metro Food Court",
    description:
      "Metro Food Court is a quick-bites restaurant at New Bypass, Patna, serving North Indian, Chinese, and a full range of rolls and sandwiches.",
    imageSrc: "/projects/metro-food-court.png",
    href: "https://www.metrofoodcourt.com",
    meta: "Food & Beverage • Web",
  },
  {
    id: 4,
    title: "Evodoc",
    description:
      "The next generation of clinical intelligence. Empowering modern physicians with AI-assisted diagnostics and high-fidelity insights.",
    imageSrc: "/projects/evodoc.png",
    href: "https://evodoc.in",
    meta: "HealthTech • AI",
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
      </div>
      <FocusRail items={projects} loop={true} autoPlay={false} />
    </section>
  );
}
