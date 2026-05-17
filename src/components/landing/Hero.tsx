import { motion } from "framer-motion";
import { ArrowRight, Play, Cloud, Smartphone, BarChart3, Server } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

export function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* glow orbs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-royal/30 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-sky/25 blur-[140px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Building <span className="text-gradient">Digital Solutions</span> for Every Industry
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            We craft powerful cloud platforms, websites, mobile apps, UI/UX systems, and enterprise software for startups, businesses, and industries worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.03] transition-transform"
            >
              Get Started
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-strong font-semibold hover:bg-white/10 transition-colors"
            >
              <Play className="h-4 w-4 text-sky" />
              View Projects
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden border-glow glass shadow-card">
            <img
              src={heroVisual}
alt="MevlinX platform mockups"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
          {/* floating chips */}
          <FloatingChip className="-left-4 top-10 animate-float" icon={<Cloud className="h-4 w-4" />} label="99.99% Uptime" />
          <FloatingChip className="-right-4 top-1/3 animate-float [animation-delay:1s]" icon={<BarChart3 className="h-4 w-4" />} label="+340% growth" />
          <FloatingChip className="left-8 -bottom-4 animate-float [animation-delay:2s]" icon={<Smartphone className="h-4 w-4" />} label="Mobile Ready" />
          <FloatingChip className="-right-2 -bottom-2 animate-float [animation-delay:0.5s]" icon={<Server className="h-4 w-4" />} label="Cloud Native" />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingChip({ icon, label, className = "" }: { icon: React.ReactNode; label: string; className?: string }) {
  return (
    <div className={`absolute glass-strong rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-medium shadow-glow ${className}`}>
      <span className="text-sky">{icon}</span>
      {label}
    </div>
  );
}
