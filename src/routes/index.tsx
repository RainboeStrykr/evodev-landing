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
        <h1>We Build Brands That Stand Out and Websites That Convert.</h1>
        <p>Your all-in-one web development and brand agency — merging custom web design with digital strategy to accelerate your growth.</p>
        <h2>Where Brand Strategy Meets Web Development</h2>
        <p>EvoDev is a full-service digital branding and web design agency for startups and established brands. We merge brand strategy, custom web development, and SEO-driven strategy to build scalable digital ecosystems that deliver measurable growth.</p>
        <h2>Core Services</h2>
        <ul>
          <li><h3>Custom Web &amp; App Development</h3><p>End-to-end responsive web development and mobile apps tailored to your product vision. Fast, secure, and scalable custom websites built for conversion.</p></li>
          <li><h3>SaaS Platform Engineering</h3><p>Scalable multi-tenant SaaS platforms with modern architecture and seamless CMS integration.</p></li>
          <li><h3>Brand Identity &amp; UI/UX Design</h3><p>Cohesive visual identity, logo design, and user-centric UI/UX design rooted in conversion rate optimization.</p></li>
          <li><h3>SEO &amp; Digital Growth Strategy</h3><p>SEO-friendly website development, organic content strategy, social media optimization, and paid acquisition.</p></li>
        </ul>
        <h2>Our Proven Process</h2>
        <ol>
          <li><h3>Discover &amp; Strategize</h3><p>We analyze your industry, competitors, and target audience to build a robust brand and web strategy.</p></li>
          <li><h3>Design &amp; Prototype</h3><p>Our designers craft stunning UI/UX mockups and brand identity assets, mapping your tech stack and feature roadmap in 48 hours.</p></li>
          <li><h3>Develop &amp; Build</h3><p>Our full-stack web development team brings designs to life with modern technologies — weekly demos and transparent progress.</p></li>
          <li><h3>Launch &amp; Grow</h3><p>We deploy your SEO-friendly website and provide ongoing digital growth strategies and continuous optimization.</p></li>
        </ol>
        <h2>Featured Projects</h2>
        <ul>
          <li><h3>Gyan Niketan Girls School</h3><p>Full-stack educational platform with admin portal and student management — custom web development for an established institution.</p></li>
          <li><h3>Gyan Niketan Digital Architecture</h3><p>Premium school management portal with analytics dashboard and multi-role access control.</p></li>
          <li><h3>Human Perspective</h3><p>Brand identity and storytelling platform for a documentary studio — brand strategy meets responsive web design.</p></li>
          <li><h3>Brand Identity Project</h3><p>End-to-end branding, product UI, and marketing site for a consumer SaaS — shipped from blank page to launch in six weeks.</p></li>
        </ul>
        <h2>Client Testimonials</h2>
        <p>Industry leaders and founders trust EvoDev to architect their digital ecosystems. Hear from our clients about the results our web development and brand agency delivers.</p>
        <h2>Ready to Transform Your Digital Presence?</h2>
        <p>Stop settling for cookie-cutter templates. Partner with a web development and brand agency that turns your vision into a high-performing digital reality. Contact EvoDev — email: contact@evodoc.site, phone: +91 96967 67289. We work globally and remotely.</p>
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


