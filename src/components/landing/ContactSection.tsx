import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ShinyButton } from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

type InquiryForm = z.infer<typeof inquirySchema>;

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@evodoc.site",
    href: "mailto:contact@evodoc.site",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96967 67289",
    href: "tel:+919696767289",
  },
  {
    icon: MapPin,
    label: "Reach",
    value: "Global / Remote",
    href: null,
  },
];
function ContactCard({ children, className }: { children: React.ReactNode; className?: string }) {

  return (
    <div className={cn("rounded-2xl border border-stroke bg-surface p-6 md:p-8", className)}>
      {children}
    </div>
  );
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryForm>({
    resolver: zodResolver(inquirySchema),
  });

  const onSubmit = async (data: InquiryForm) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/shubh.evodoc@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      console.log("FormSubmit response:", result);
      
      if (response.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        console.error("FormSubmit error:", result);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section id="contact" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <ContactCard className="relative overflow-hidden">
            <div className="absolute top-4 right-4 text-muted/20">
              <span className="text-2xl font-light">+</span>
            </div>
            <div className="absolute bottom-4 left-4 text-muted/20">
              <span className="text-2xl font-light">+</span>
            </div>
            <div className="absolute top-4 left-4 text-muted/20">
              <span className="text-2xl font-light">+</span>
            </div>
            <div className="absolute bottom-4 right-4 text-muted/20">
              <span className="text-2xl font-light">+</span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="font-display italic text-2xl sm:text-3xl md:text-5xl text-text-primary mb-4">
                Ready to transform your digital presence?
              </h2>
              <p className="text-muted max-w-2xl text-sm md:text-base leading-relaxed mb-8 md:mb-10">
                Contact us today and let's build something extraordinary together. We respond within 1 business day.
              </p>


              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {contactMethods.map((method) => (
                  <div key={method.label} className="flex items-start gap-4">
                    <div className="shrink-0 rounded-xl border border-stroke bg-surface p-3">
                      <method.icon className="w-5 h-5 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-[0.2em] mb-1">{method.label}</p>
                      {method.href ? (
                        <a href={method.href} className="text-sm font-medium text-[#c9a84c] hover:underline">
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-[#c9a84c]">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </ContactCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <ContactCard>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="h-full flex flex-col"
              >
                <div className="rounded-xl border border-stroke bg-surface p-3 w-fit mb-6">
                  <Calendar className="w-5 h-5 text-[#c9a84c]" />
                </div>
                <h3 className="font-display italic text-xl md:text-2xl text-text-primary mb-3">
                  Schedule a discovery call
                </h3>
                <p className="text-muted text-sm md:text-base leading-relaxed mb-8 flex-grow">
                  Book a 30-minute technical briefing with our lead strategist. We'll discuss your idea, architecture, and timelines.
                </p>
                <ShinyButton href="#" className="w-full md:w-auto self-start">
                  Select time slot
                </ShinyButton>

              </motion.div>
            </ContactCard>

            <ContactCard>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h3 className="font-display italic text-xl md:text-2xl text-text-primary mb-1">
                  Direct inquiry
                </h3>
                <p className="text-muted text-sm md:text-base mb-6">
                  Fill out the form and we'll respond within 24 hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-xs text-muted uppercase tracking-[0.2em] mb-1.5 block">
                        Full name
                      </label>
                      <Input
                        id="contact-name"
                        placeholder="Your name"
                        className="bg-surface border-stroke text-text-primary placeholder:text-muted/50"
                        {...register("name")}
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-xs text-muted uppercase tracking-[0.2em] mb-1.5 block">
                        Email
                      </label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-surface border-stroke text-text-primary placeholder:text-muted/50"
                        {...register("email")}
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-xs text-muted uppercase tracking-[0.2em] mb-1.5 block">
                      What are you building?
                    </label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us about your idea, budget range, and timeline..."
                      rows={4}
                      className="bg-surface border-stroke text-text-primary placeholder:text-muted/50 resize-none"
                      {...register("message")}
                    />
                    {errors.message && <p className="text-xs text-red-400 mt-1.5">{errors.message.message}</p>}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                    <ShinyButton type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? "Sending..." : "Send message"}
                    </ShinyButton>

                    <a href="https://wa.me/919696767289?text=Hi%20EvoDev%2C%20I%20want%20to%20discuss%20my%20project" className="text-xs text-muted hover:text-[#c9a84c] transition-colors">
                      Or reach us directly on WhatsApp →
                    </a>
                  </div>

                  {submitted && (
                    <p className="text-sm text-green-400">Thanks — your message has been sent.</p>
                  )}
                </form>
              </motion.div>
            </ContactCard>
          </div>
        </div>
      </div>
    </section>
  );
}
