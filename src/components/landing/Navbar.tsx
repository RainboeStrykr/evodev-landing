import { useState } from "react";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Work", link: "#works" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ResizableNavbar className="top-0">
      <NavBody className="bg-black/20">
        <div className="flex items-center gap-2">
          <img src="/full-logo.png" alt="EvoDev" className="h-8 w-auto" />
        </div>

        <NavItems items={navItems} className="text-white hover:text-white" />

        <div className="flex items-center gap-2">
          <NavbarButton href="#contact" variant="dark" className="bg-[#c9a84c] text-black border-0">
            Book a free call
          </NavbarButton>
        </div>
      </NavBody>

      <MobileNav className="bg-black/20">
        <MobileNavHeader>
          <div className="flex items-center gap-2">
            <img src="/full-logo.png" alt="EvoDev" className="h-8 w-auto" />
          </div>
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <NavItems items={navItems} onItemClick={() => setIsOpen(false)} />
          <div className="flex w-full flex-col gap-2">
            <NavbarButton href="#contact" variant="dark" className="w-full bg-[#c9a84c] text-black border-0">
              Book a free call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
