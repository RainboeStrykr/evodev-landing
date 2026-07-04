import { IconCloud } from "@/components/ui/icon-cloud";
import { HoverPreview, HoverPreviewTrigger } from "@/components/ui/hover-preview";

const slugs = [
  "typescript",
  "react",
  "nextdotjs",
  "framer",
  "figma",
  "adobephotoshop",
  "adobeillustrator",
  "adobexd",
  "notion",
  "slack",
  "vercel",
  "webflow",
  "shopify",
  "hubspot",
  "mailchimp",
  "meta",
  "google",
  "instagram",
  "linkedin",
  "tiktok",
  "youtube",
  "spotify",
  "stripe",
  "wordpress",
];

const iconImages = slugs.map(
  (s) => `https://cdn.simpleicons.org/${s}/c9a84c`,
);

export function About() {
  return (
    <section
      id="about"
      className="relative w-full border-t border-stroke bg-bg px-4 sm:px-6 py-16 md:px-12 lg:px-20 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 md:gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left: Icon Cloud */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative flex size-[280px] sm:size-[340px] md:size-[400px] items-center justify-center overflow-hidden">
            <IconCloud images={iconImages} />
          </div>
        </div>

        {/* Right: Hover Preview text */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted">
            <span className="h-px w-8 bg-accent" />
            Who We Are
          </div>

          <h2 className="sr-only">About EvoDev</h2>

          <HoverPreview className="text-2xl leading-relaxed text-text-primary md:text-3xl md:leading-[1.4]">
            <p className="font-body">
              EvoDev, a brand by EvoDoc, is a dynamic{" "}
              <HoverPreviewTrigger image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80">
                digital agency
              </HoverPreviewTrigger>{" "}
              helping businesses thrive online. Our team combines{" "}
              <HoverPreviewTrigger image="https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80">
                creativity
              </HoverPreviewTrigger>
              ,{" "}
              <HoverPreviewTrigger image="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80">
                technology
              </HoverPreviewTrigger>{" "}
              and{" "}
              <HoverPreviewTrigger image="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80">
                strategy
              </HoverPreviewTrigger>{" "}
              to deliver solutions as unique as your brand — empowering you to connect with your audience and achieve{" "}
              <HoverPreviewTrigger image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80">
                measurable growth
              </HoverPreviewTrigger>
              .
            </p>
          </HoverPreview>

          <div className="flex flex-wrap gap-8 pt-4">
            <div>
              <div className="font-display italic text-4xl md:text-5xl text-accent">Expertise</div>
              <div className="mt-1 text-sm text-muted">In digital transformation</div>
            </div>
            <div>
              <div className="font-display italic text-4xl md:text-5xl text-accent">Innovation</div>
              <div className="mt-1 text-sm text-muted">Latest technologies</div>
            </div>
            <div>
              <div className="font-display italic text-4xl md:text-5xl text-accent">Results</div>
              <div className="mt-1 text-sm text-muted">Measurable outcomes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
