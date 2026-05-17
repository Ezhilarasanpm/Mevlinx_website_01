import { motion } from "framer-motion";
import { Sparkles, Zap, Cloud, Shield, Headphones, Target, Search, Smartphone } from "lucide-react";
import { SectionHeader } from "./Services";

const points = [
  { icon: Sparkles, title: "Modern UI/UX", desc: "Interfaces engineered for clarity and conversion." },
  { icon: Zap, title: "Fast Delivery", desc: "Sprint-based shipping with weekly milestones." },
  { icon: Cloud, title: "Scalable Cloud", desc: "Auto-scaling architecture from day one." },
  { icon: Shield, title: "Secure Systems", desc: "SOC 2-aligned practices and encrypted data." },
  { icon: Headphones, title: "Dedicated Support", desc: "A real team on standby — 24/7." },
  { icon: Target, title: "Industry-Specific", desc: "Domain-aware solutions, not templates." },
  { icon: Search, title: "SEO Friendly", desc: "Built to rank and load instantly." },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Pixel-perfect on every viewport." },
];

export function WhyUs() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
eyebrow="Why MevlinX"
          title={<>Engineered to <span className="text-gradient">Outperform</span></>}
subtitle="Eight reasons enterprise teams pick MevlinX as their long-term technology partner."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="relative glass rounded-2xl p-6 overflow-hidden group"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-primary opacity-20 blur-2xl group-hover:opacity-50 transition-opacity" />
              <p.icon className="h-7 w-7 text-sky" />
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
