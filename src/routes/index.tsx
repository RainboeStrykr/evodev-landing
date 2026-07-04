import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LoadingScreen } from "@/components/landing/LoadingScreen";
import { Navbar } from "@/components/landing/Navbar";
import { MarketeamHero } from "@/components/landing/MarketeamHero";
import { About } from "@/components/landing/About";
import { Works } from "@/components/landing/Works";
import { Services } from "@/components/landing/Services";
import { OurProcess } from "@/components/landing/OurProcess";
import { Explorations } from "@/components/landing/Explorations";
import { Testimonials } from "@/components/landing/Testimonials";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer2 } from "@/components/footer2";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      {!isLoading && (
        <>
          <SmoothCursor />
          <Navbar />
          <main className="bg-bg text-text-primary">
            <MarketeamHero />
            <About />
            <Services />
            <OurProcess />
            <Works />
            <Explorations />
            <Testimonials />
            <ContactSection />
          </main>
          <Footer2
            className="bg-bg py-16 text-text-primary"
            logo={{
              url: "/",
              src: "/full-logo.png",
              alt: "EvoDev",
              title: "EvoDev",
            }}
            description="Your technical co-founder, on demand. Building products that ship."
            sections={[
              {
                title: "Company",
                links: [
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Work", href: "#works" },
                  { name: "Contact", href: "#contact" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Book a call", href: "#contact" },
                ],
              },
              {
                title: "Social",
                links: [
                  { name: "Twitter", href: "#" },
                  { name: "LinkedIn", href: "#" },
                  { name: "Instagram", href: "#" },
                ],
              },
            ]}
            copyright="© 2026 EvoDev. All rights reserved."
            legalLinks={[
              { name: "Terms", href: "#" },
              { name: "Privacy", href: "#" },
            ]}
          />
        </>
      )}
    </>
  );
}


