import { motion } from "framer-motion";
import {
  Cloud, Globe, Smartphone, Palette, Code2, Building2, Bot, ShoppingBag, Megaphone, Network,
} from "lucide-react";

const services = [
  { icon: Cloud, title: "Cloud Services", desc: "Scalable, secure cloud infrastructure on AWS, Azure & GCP." },
  { icon: Globe, title: "Website Development", desc: "Lightning-fast, SEO-ready websites built for conversion." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android." },
  { icon: Palette, title: "UI/UX Design", desc: "Pixel-perfect interfaces with research-driven UX." },
  { icon: Bot, title: "AI Automation", desc: "Intelligent agents and workflows that compound output." },
  { icon: ShoppingBag, title: "E-Commerce", desc: "High-converting storefronts with seamless checkout." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What we do"
          title={<>Our <span className="text-gradient">Premium Services</span></>}
          subtitle="End-to-end product engineering, from cloud infrastructure to interfaces users love."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
              className="group relative glass border-glow rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, subtitle,
}: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <div className="inline-flex glass px-3 py-1 rounded-full text-xs font-medium text-sky uppercase tracking-wider">
        {eyebrow}
      </div>
      <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
