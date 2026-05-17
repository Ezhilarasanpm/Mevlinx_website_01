import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeader } from "./Services";

const testimonials = [
  {
    name: "Aarav Mehta", role: "CTO, GreenFields Agro",
quote: "MevlinX rebuilt our entire farm-to-market platform in 10 weeks. Performance up 4x, ops cost down 38%.",
    initials: "AM",
  },
  {
    name: "Sara Khan", role: "Founder, MediBook",
    quote: "Their UX team understood healthcare workflows better than our internal product team. Truly world-class.",
    initials: "SK",
  },
  {
    name: "Daniel Roy", role: "VP Engineering, FleetIQ",
    quote: "Cloud architecture, mobile apps, dashboards — all delivered on time, at quality we couldn't match in-house.",
    initials: "DR",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Loved by <span className="text-gradient">Founders & Teams</span></>}
subtitle="What leaders we've partnered with say about working with MevlinX."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong border-glow rounded-3xl p-8 flex flex-col"
            >
              <div className="flex gap-1 text-sky">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-gradient-primary grid place-items-center font-semibold text-primary-foreground">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
