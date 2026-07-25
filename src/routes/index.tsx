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
      {/* SEO-only content: always rendered in DOM for crawlers, hidden visually */}
      <div aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}>
        <h1>Your Technical Co-Founder, on demand.</h1>
        <h2>About EvoDev</h2>
        <p>EvoDev, a brand by EvoDoc, is a digital agency helping businesses thrive online. We combine creativity, technology, and strategy to deliver measurable growth.</p>
        <h2>Our Services</h2>
        <ul>
          <li><h3>Custom Application Development</h3><p>End-to-end web and mobile apps tailored to your product vision.</p></li>
          <li><h3>SaaS Platform Engineering</h3><p>Scalable multi-tenant platforms with modern architecture.</p></li>
          <li><h3>Cloud Architecture and DevOps</h3><p>Infrastructure design, CI/CD pipelines, and managed deployments.</p></li>
          <li><h3>SEO and Social Media Optimization</h3><p>Organic growth, content strategy, and paid acquisition.</p></li>
        </ul>
        <h2>Our Process</h2>
        <ol>
          <li><h3>Book a Call</h3><p>Schedule your free 30-min SaaS blueprint strategy session with our lead engineer.</p></li>
          <li><h3>Strategy Session</h3><p>We map your tech stack, architecture, feature roadmap, and cost estimation in 48 hours.</p></li>
          <li><h3>We Build</h3><p>Our full-stack team executes with precision — weekly demos, transparent progress, zero surprises.</p></li>
          <li><h3>You Scale</h3><p>Launch, grow, and dominate your market. We stay as your technical partner for ongoing evolution.</p></li>
        </ol>
        <h2>Featured Projects</h2>
        <ul>
          <li><h3>Gyan Niketan Girls School</h3><p>Full-stack educational institution platform with admin portal and student management.</p></li>
          <li><h3>Gyan Niketan Digital Architecture</h3><p>Premium school management portal with analytics dashboard and multi-role access.</p></li>
          <li><h3>Human Perspective</h3><p>Brand system and storytelling platform for a documentary studio.</p></li>
          <li><h3>Brand Identity</h3><p>End-to-end identity, product UI, and marketing site for a consumer SaaS.</p></li>
        </ul>
        <h2>Client Testimonials</h2>
        <h2>Contact EvoDev</h2>
        <p>Get in touch with EvoDev. Email: contact@evodoc.site. Phone: +91 96967 67289. We work globally and remotely.</p>
      </div>
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
                  { name: "Twitter / X", href: "https://x.com/evodev" },
                  { name: "LinkedIn", href: "https://linkedin.com/company/evodev" },
                  { name: "Instagram", href: "https://instagram.com/evodev.site" },
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


