import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShinyButton } from "@/components/ui/shiny-button";


gsap.registerPlugin(ScrollTrigger);

const items = [
  { img: "/demo/agarwal-realtors.png", r: -3, href: "https://agarwal-realtors-pearl.vercel.app/", label: "Agarwal Realtors" },
  { img: "/demo/aafra-restaurant.png", r: 2, href: "https://afraa-restaurant-patna-uevl.vercel.app/", label: "Aafra Cocktail Bar and Kitchen" },
  { img: "/demo/art-n-dreams.png", r: -2, href: "https://arts-n-dream.vercel.app/", label: "Luxury Art Gallery" },
  { img: "/demo/ispeak-mental-health.png", r: 3, href: "https://ispeak-mentalhealthfirm.vercel.app/", label: "Mental Health Clinic" },
  { img: "/demo/mahavir-hospital.png", r: -1, href: "https://mahavir-hospital.vercel.app/", label: "Mahavir Hospital" },
  { img: "/demo/evocare.png", r: 2, href: "https://evodoc.in/evocare", label: "Healthcare AI" },
];

export function Explorations() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const colARef = useRef<HTMLDivElement>(null);
  const colBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Only apply GSAP parallax on md+ screens
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        if (contentRef.current) {
          ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            pin: contentRef.current,
            pinSpacing: false,
          });
        }
        gsap.to(colARef.current, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
        gsap.to(colBRef.current, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }, sectionRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const colA = items.filter((_, i) => i % 2 === 0);
  const colB = items.filter((_, i) => i % 2 === 1);

  return (
    <>
      {/* Desktop: GSAP parallax scroll section */}
      <section ref={sectionRef} id="explorations" className="hidden md:block relative min-h-[300vh] bg-bg overflow-hidden">
        <div ref={contentRef} className="h-screen w-full flex items-center justify-center relative z-10 pointer-events-none">
          <div className="text-center px-6 max-w-xl">
            <div className="flex items-center gap-3 mb-4 justify-center">
              <span className="w-8 h-px bg-accent" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Why EvoDev</span>
              <span className="w-8 h-px bg-accent" />
            </div>
            <h2 className="font-display text-4xl md:text-6xl italic text-text-primary leading-[1.05]">
              Explore <span className="italic">our expertise</span>
            </h2>
            <p className="mt-4 text-muted text-sm md:text-base">
              Expertise, innovation, and a collaborative, results-driven approach — designed to deliver measurable outcomes for your brand.
            </p>
            <ShinyButton href="#contact" className="pointer-events-auto mt-6">
              Start a project
            </ShinyButton>
          </div>
        </div>

        <div className="absolute inset-0 z-20 pointer-events-none">
          <div className="max-w-[1400px] mx-auto h-full px-6 md:px-10 grid grid-cols-2 gap-12 md:gap-40 items-start pt-[20vh]">
            <div ref={colARef} className="flex flex-col gap-16 md:gap-24">
              {colA.map((it, i) => (
                <a
                  key={i}
                  href={it.href}
                  aria-label={it.label}
                  style={{ transform: `rotate(${it.r}deg)` }}
                  className="pointer-events-auto self-start w-full max-w-[320px] rounded-2xl overflow-hidden border border-stroke bg-surface hover:scale-[1.02] transition-transform block"
                >
                  <img src={it.img} alt={it.label} className="w-full h-auto block" />
                </a>
              ))}
            </div>
            <div ref={colBRef} className="flex flex-col gap-16 md:gap-24 mt-24 md:mt-40">
              {colB.map((it, i) => (
                <a
                  key={i}
                  href={it.href}
                  aria-label={it.label}
                  style={{ transform: `rotate(${it.r}deg)` }}
                  className="pointer-events-auto self-end w-full max-w-[320px] rounded-2xl overflow-hidden border border-stroke bg-surface hover:scale-[1.02] transition-transform block"
                >
                  <img src={it.img} alt={it.label} className="w-full h-auto block" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: static grid layout */}
      <section id="explorations" className="md:hidden bg-bg py-16 px-6">
        <div className="text-center mb-10">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Why EvoDev</span>
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-display text-3xl italic text-text-primary leading-[1.05]">
            Grow <span className="italic">with us</span>
          </h2>
          <p className="mt-4 text-muted text-sm">
            Expertise, innovation, and a collaborative, results-driven approach — designed to deliver measurable outcomes for your brand.
          </p>
          <ShinyButton href="#contact" className="mt-6 mx-auto">
            Start a project
          </ShinyButton>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {items.map((it, i) => (
            <a
              key={i}
              href={it.href}
              aria-label={it.label}
              className="rounded-xl overflow-hidden border border-stroke bg-surface block"
            >
              <img src={it.img} alt={it.label} className="w-full h-auto block" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
