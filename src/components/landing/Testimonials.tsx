import { Marquee } from "@/components/ui/marquee";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mr. Shailendra Mohan Jha",
    role: "Principal, Gyan Niketan",
    body: "EvoDev revolutionized our educational infrastructure. The digital architecture they built has streamlined our entire administrative workflow with unparalleled precision and security.",
    avatar: "https://ui-avatars.com/api/?name=Shailendra+Mohan+Jha&background=1a1a1a&color=d4af37&size=100",
  },
  {
    name: "Gyan Niketan Board",
    role: "Strategic Operations",
    body: "The technical depth and UI orchestration delivered for our management portal set a new benchmark in educational technology. EvoDev is truly at the forefront of digital evolution.",
    avatar: "https://ui-avatars.com/api/?name=Gyan+Niketan+Board&background=1a1a1a&color=d4af37&size=100",
  },
  {
    name: "Sarah Chen",
    role: "Product Lead, Nova",
    body: "Working with Michael felt like having a creative partner who actually understood our users.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80",
  },
  {
    name: "Marcus Webb",
    role: "Director, Cypher Films",
    body: "His motion work gave our campaign a soul. Every frame had intention behind it.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  },
];

function TestimonialCard({ name, role, body, avatar }: (typeof testimonials)[0]) {
  return (
    <div className="relative w-[340px] md:w-[420px] shrink-0 rounded-2xl border border-stroke bg-surface p-6 md:p-8">
      <div className="flex items-center gap-4 mb-5">
        <img
          src={avatar}
          alt={name}
          width={48}
          height={48}
          className="rounded-full object-cover ring-1 ring-stroke"
        />
        <div>
          <p className="text-sm font-medium text-text-primary">{name}</p>
          <p className="text-xs text-muted">{role}</p>
        </div>
      </div>
      <p className="text-sm md:text-base text-muted leading-relaxed">"{body}"</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-bg py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center md:text-left"
        >
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <span className="w-8 h-px bg-accent" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Testimonials</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl italic text-text-primary leading-[1.05]">
            Clients Love to Work With Us
          </h2>
          <p className="mt-4 text-muted max-w-md text-sm md:text-base mx-auto md:mx-0">
            Hear from industry leaders and partners about the digital ecosystems we've architected for them.
          </p>
        </motion.div>
      </div>

      <Marquee pauseOnHover className="[--duration:30s]">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </Marquee>
    </section>
  );
}

