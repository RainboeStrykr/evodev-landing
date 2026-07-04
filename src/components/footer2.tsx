import { cn } from "@/lib/utils";

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
interface FooterLogo {
  url: string;
  src: string;
  alt: string;
  title: string;
}

interface FooterBasicProps {
  logo?: FooterLogo;
  description?: string;
  sections?: FooterSection[];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

interface Footer2Props extends FooterBasicProps {}
type Props = Partial<Footer2Props>;

const defaultProps: Footer2Props = {
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "/images/logo/shadcnblocks-logo-word.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  description: "Finely crafted blocks built with Shadcn UI.",
  sections: [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Marketplace", href: "#" },
        { name: "Features", href: "#" },
        { name: "Integrations", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Team", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help center", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Status", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Guides", href: "#" },
        { name: "Templates", href: "#" },
        { name: "Sales", href: "#" },
        { name: "Advertise", href: "#" },
      ],
    },
  ],
  copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
  legalLinks: [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const MAX_SECTIONS = 4;

const Footer2 = (props: Props) => {
  const { logo, description, sections, copyright, legalLinks, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section className={cn("py-16 md:py-32", className)}>
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <footer>
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            {/* Logo + description */}
            <div className="shrink-0 lg:w-64">
              <div className="flex items-center">
                <a href={logo?.url}>
                  <img
                    src={logo?.src}
                    alt={logo?.alt}
                    title={logo?.title}
                    className="h-10 w-auto"
                  />
                </a>
              </div>
              <p className="mt-4 text-sm font-medium text-muted-foreground max-w-xs">
                {description}
              </p>
            </div>

            {/* Link sections: 2-col on mobile, 4-col on lg+ */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 flex-1">
              {visibleSections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 text-sm font-semibold tracking-tight">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {legalLinks?.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
