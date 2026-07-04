# EvoDev — SaaS Engineering Partner for Startups & Founders

The landing page for [EvoDev](https://evodev.site), a full-service digital agency that builds bespoke web applications, SaaS platforms, cloud infrastructure, and growth-focused marketing systems.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR) |
| Routing | [TanStack Router](https://tanstack.com/router) (file-based) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| UI Primitives | [Radix UI](https://www.radix-ui.com) + [shadcn/ui](https://ui.shadcn.com) |
| Animations | [Framer Motion](https://www.framer.com/motion) + [GSAP](https://gsap.com) |
| Forms | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) |
| Data Fetching | [TanStack Query](https://tanstack.com/query) |
| Build Tool | [Vite](https://vite.dev) |
| Runtime | [Nitro](https://nitro.build) (Cloudflare Workers compatible) |
| Package Manager | [Bun](https://bun.sh) |

---

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx          # Root layout, head meta, QueryClient provider
│   └── index.tsx           # Home page — composes all landing sections
├── components/
│   ├── footer2.tsx         # Site footer
│   └── landing/
│       ├── Navbar.tsx          # Responsive navbar (desktop + mobile)
│       ├── MarketeamHero.tsx   # Hero section with orbiting circles
│       ├── About.tsx           # About section with icon cloud
│       ├── Services.tsx        # Services list with hover image reveal
│       ├── OurProcess.tsx      # Animated timeline (4-step process)
│       ├── Works.tsx           # Portfolio carousel
│       ├── Explorations.tsx    # GSAP parallax gallery (desktop) / grid (mobile)
│       ├── Testimonials.tsx    # Marquee testimonials
│       ├── ContactSection.tsx  # Contact form + booking cards
│       └── LoadingScreen.tsx   # Intro loading animation
└── components/ui/              # shadcn/ui + custom primitives
public/
├── robots.txt
├── sitemap.xml
├── llms.txt
└── icons/                  # 3D icon assets
```

---

## Getting Started

**Install dependencies**

```bash
bun install
```

**Start the development server**

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Build for production**

```bash
bun run build
```

**Preview the production build**

```bash
bun run preview
```

---

## Other Commands

```bash
bun run lint       # ESLint
bun run format     # Prettier
```

---

## Deployment

The project outputs to `.output/` via Nitro and is configured for **Cloudflare Workers** deployment. The `wrangler.json` inside `.output/server/` is generated automatically at build time.

To deploy:

```bash
bun run build
cd .output/server
npx wrangler deploy
```