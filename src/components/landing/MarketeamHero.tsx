import { useEffect, useState } from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { ShinyButton } from "@/components/ui/shiny-button";

const HEADING = "We Build Brands That Stand Out and Websites That Convert.";
const SUBHEADING = "Your all-in-one web development and brand agency — merging custom web design with digital strategy to accelerate your growth.";
const CTA_FADE_DELAY = 0.4;

export function MarketeamHero() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), CTA_FADE_DELAY * 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mkt-app">
      <style>{css}</style>

      <div className="mkt-stage">
        <div className="mkt-orbits-bg" aria-hidden="true">
          <div className="mkt-orbits">
            <OrbitingCircles radius={124} duration={30} iconSize={48}>
              {[
                {
                  url: "/icons/3dicons-rocket-dynamic-color.png",
                  size: 48,
                  radius: 20,
                  glow: "rgba(160,104,255,.55)",
                  isIcon: true,
                },
              ].map((a, i) => (
                <div
                  key={i}
                  className="mkt-avatar mkt-fly-in"
                  style={{
                    width: a.size,
                    height: a.size,
                    borderRadius: a.isIcon ? 0 : a.radius,
                    background: a.isIcon ? "transparent" : undefined,
                    boxShadow: a.isIcon ? "none" : `0 0 24px 4px ${a.glow}`,
                    animationDelay: `0.6s`,
                    animationDuration: `.9s`,
                  }}
                >
                  <img
                    src={a.url}
                    alt=""
                    style={{
                      borderRadius: a.isIcon ? 0 : a.radius,
                      filter: a.isIcon ? `drop-shadow(0 0 12px ${a.glow})` : undefined,
                    }}
                  />
                </div>
              ))}
            </OrbitingCircles>

            <OrbitingCircles radius={224} duration={40} reverse iconSize={58}>
              {[
                {
                  url: "https://polo-pecan-73837341.figma.site/_assets/v11/ca755f7f93c1126fb8bdbf99ab364a33aa9ab272.png",
                  size: 48,
                  radius: 999,
                  glow: "rgba(255,214,102,.55)",
                  isIcon: false,
                },
                {
                  url: "https://polo-pecan-73837341.figma.site/_assets/v11/dc01064c7093dcc32674876ee3cf5e41c4a485c6.png",
                  size: 64,
                  radius: 999,
                  glow: "rgba(255,120,180,.55)",
                  isIcon: false,
                },
                {
                  url: "/icons/3dicons-target-dynamic-color.png",
                  size: 48,
                  radius: 20,
                  glow: "rgba(120,170,255,.55)",
                  isIcon: true,
                },
              ].map((a, i) => (
                <div
                  key={i}
                  className="mkt-avatar mkt-fly-in"
                  style={{
                    width: a.size,
                    height: a.size,
                    borderRadius: a.isIcon ? 0 : a.radius,
                    background: a.isIcon ? "transparent" : undefined,
                    boxShadow: a.isIcon ? "none" : `0 0 24px 4px ${a.glow}`,
                    animationDelay: `${0.8 + i * 0.2}s`,
                    animationDuration: `.9s`,
                  }}
                >
                  <img
                    src={a.url}
                    alt=""
                    style={{
                      borderRadius: a.isIcon ? 0 : a.radius,
                      filter: a.isIcon ? `drop-shadow(0 0 12px ${a.glow})` : undefined,
                    }}
                  />
                </div>
              ))}
            </OrbitingCircles>

            <OrbitingCircles radius={325} duration={55} iconSize={74}>
              {[
                {
                  url: "https://polo-pecan-73837341.figma.site/_assets/v11/018736aa5d0275c4ce56cfebaf2ae3007d81ca1e.png",
                  size: 74,
                  radius: 999,
                  glow: "rgba(255,120,180,.55)",
                  isIcon: false,
                },
                {
                  url: "https://polo-pecan-73837341.figma.site/_assets/v11/c76d8a0b99676de31c014344bfaf75bad090758d.png",
                  size: 48,
                  radius: 999,
                  glow: "rgba(160,104,255,.55)",
                  isIcon: false,
                },
                {
                  url: "/icons/3dicons-money-dynamic-color.png",
                  size: 74,
                  radius: 24,
                  glow: "rgba(255,160,80,.55)",
                  isIcon: true,
                },
                {
                  url: "/icons/3dicons-calendar-dynamic-color.png",
                  size: 74,
                  radius: 24,
                  glow: "rgba(255,120,180,.55)",
                  isIcon: true,
                },
                {
                  url: "https://polo-pecan-73837341.figma.site/_assets/v11/926c9eb7b4bc1df846fa0e39f0b0dc3fefd80671.png",
                  size: 48,
                  radius: 999,
                  glow: "rgba(160,104,255,.55)",
                  isIcon: false,
                },
              ].map((a, i) => (
                <div
                  key={i}
                  className="mkt-avatar mkt-fly-in"
                  style={{
                    width: a.size,
                    height: a.size,
                    borderRadius: a.isIcon ? 0 : a.radius,
                    background: a.isIcon ? "transparent" : undefined,
                    boxShadow: a.isIcon ? "none" : `0 0 24px 4px ${a.glow}`,
                    animationDelay: `${1.4 + i * 0.2}s`,
                    animationDuration: `.9s`,
                  }}
                >
                  <img
                    src={a.url}
                    alt=""
                    style={{
                      borderRadius: a.isIcon ? 0 : a.radius,
                      filter: a.isIcon ? `drop-shadow(0 0 12px ${a.glow})` : undefined,
                    }}
                  />
                </div>
              ))}
            </OrbitingCircles>
          </div>
        </div>

        <section className="mkt-foreground mkt-fade-up">
          {/* Visually rendered H1 for users — styled via .mkt-h1 */}
          <h1 className="mkt-h1">
            <AuroraText className="mkt-h1" colors={["#c9a84c", "#A068FF", "#ffffff", "#c9a84c"]} speed={1}>
              {HEADING}
            </AuroraText>
          </h1>

          <p className="mkt-subheading">{SUBHEADING}</p>

          <div
            className="mkt-cta-row"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(10px)",
              transition: "all .6s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="btn-border-wrap">
              <a href="#contact" className="mkt-btn mkt-btn-start">
                Start Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            <ShinyButton href="#works" showArrow={false}>
              View Our Work
            </ShinyButton>

          </div>
        </section>
      </div>
    </div>
  );
}

const css = `
@property --border-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.mkt-app {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-color: #000;
  font-family: 'Inter', sans-serif;
  color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.mkt-stage {
  position: relative;
  flex: 1;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}

.mkt-orbits-bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 0;
}

.mkt-orbits {
  position: relative;
  width: 720px; height: 720px;
  opacity: 0.65;
}

.mkt-foreground {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 720px;
  width: 100%;
}

.btn-border-wrap {
  position: relative;
  display: inline-block;
  border-radius: 50px;
}
.btn-border-wrap::before {
  content: "";
  position: absolute;
  inset: -3px;
  padding: 3px;
  border-radius: 50px;
  background: conic-gradient(from var(--border-angle), #c9a84c, #070319, #c9a84c, #070319, #c9a84c);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: mkt-spin-angle 3s linear infinite;
  pointer-events: none;
}
@keyframes mkt-spin-angle { to { --border-angle: 360deg; } }

.mkt-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  overflow: hidden;
  z-index: 0;
  cursor: pointer;
}
.mkt-btn-start { background: #060218; padding: 14px 28px; font-size: 16px; }
.mkt-btn::after {
  content: ""; position: absolute; inset: 0; background: #c9a84c;
  z-index: -1; transition: transform .4s cubic-bezier(0.22, 1, 0.36, 1);
}
.mkt-btn-start::after { transform: translateX(100%); }
.mkt-btn-start:hover::after { transform: translateX(0); }

.mkt-cta-row { display: inline-flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: center; }
.mkt-btn-outline {
  display: inline-flex; align-items: center; gap: 8px;
  border-radius: 50px;
  padding: 14px 26px;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  border: 1.5px solid rgba(255,255,255,.35);
  background: rgba(255,255,255,.06);
  backdrop-filter: blur(6px);
  transition: background .3s ease, border-color .3s ease, transform .3s ease;
}
.mkt-btn-outline:hover { background: rgba(255,255,255,.14); border-color: #fff; transform: translateY(-1px); }

.mkt-h1 {
  font-family: 'Urbanist', 'Inter', sans-serif;
  font-size: 64px;
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -1.5px;
  margin: 0 0 20px;
}

.mkt-subheading {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  color: rgba(255,255,255,0.6);
  max-width: 560px;
  margin: 0 0 36px;
  text-align: center;
}

.mkt-avatar {
  position: relative;
  overflow: hidden;
  background: #0a0a0a;
  transform-origin: center;
  animation-name: mkt-fly-in, mkt-spin-counter-l;
  animation-fill-mode: both, none;
  animation-timing-function: cubic-bezier(0.22,1,0.36,1), linear;
  animation-iteration-count: 1, infinite;
}
@keyframes mkt-spin-counter-l { to { transform: rotate(-360deg); } }
@keyframes mkt-spin-counter-r { to { transform: rotate(360deg); } }
.mkt-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }

@keyframes mkt-fly-in {
  0% { opacity: 0; transform: scale(.3) rotate(-180deg); filter: blur(8px); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); filter: blur(0); }
}

.mkt-fade-up { animation: mkt-fu 1s cubic-bezier(0.22,1,0.36,1) both; }
@keyframes mkt-fu { from { opacity: 0; transform: translateY(40px); } }

@media (max-width: 1024px) {
  .mkt-h1 { font-size: 48px; letter-spacing: -1px; }
  .mkt-orbits { transform: scale(.85); }
}
@media (max-width: 768px) {
  .mkt-h1 { font-size: 36px; letter-spacing: -1px; }
  .mkt-orbits { transform: scale(.65); }
}
@media (max-width: 480px) {
  .mkt-h1 { font-size: 28px; }
  .mkt-orbits { transform: scale(.5); }
  .mkt-btn-start { padding: 12px 22px; font-size: 14px; }
}
`;
