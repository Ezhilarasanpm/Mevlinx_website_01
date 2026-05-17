import { motion } from "framer-motion";
import { ClipboardList, Compass, Code, FlaskConical, Rocket, LifeBuoy } from "lucide-react";
import { SectionHeader } from "./Services";

const steps = [
  { icon: ClipboardList, title: "Requirement Analysis", desc: "Deep discovery into goals, users, and constraints." },
  { icon: Compass, title: "UI/UX Planning", desc: "Wireframes, flows, and prototype validation." },
  { icon: Code, title: "Development", desc: "Modular engineering with weekly visible progress." },
  { icon: FlaskConical, title: "Testing", desc: "Automated, manual, and security testing layers." },
  { icon: Rocket, title: "Deployment", desc: "Zero-downtime releases on cloud infrastructure." },
  { icon: LifeBuoy, title: "Support & Maintenance", desc: "Continuous monitoring and feature evolution." },
];

export function Process() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Process"
          title={<>From Idea to <span className="text-gradient">Production</span></>}
          subtitle="A repeatable, transparent process that turns ambitious ideas into live products."
        />

        <div className="mt-20 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />
          <div className="space-y-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className={`md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}
              >
                <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="inline-flex items-center gap-3 glass-strong rounded-2xl px-5 py-4 border-glow">
                    <span className="text-xs font-mono text-sky">0{i + 1}</span>
                    <s.icon className="h-5 w-5 text-sky" />
                    <h3 className="font-semibold">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground max-w-md md:inline-block">{s.desc}</p>
                </div>
                <div className="hidden md:flex justify-center relative">
                  <div className="h-4 w-4 rounded-full bg-gradient-primary shadow-glow" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
