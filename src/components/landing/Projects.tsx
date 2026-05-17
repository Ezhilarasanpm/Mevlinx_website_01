import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./Services";
import agri from "@/assets/project-agri.jpg";
import hospital from "@/assets/project-hospital.jpg";
import textile from "@/assets/project-textile.jpg";
import turf from "@/assets/project-turf.jpg";
import restaurant from "@/assets/project-restaurant.jpg";
import realestate from "@/assets/project-realestate.jpg";
import school from "@/assets/project-school.jpg";
import logistics from "@/assets/project-logistics.jpg";

const projects = [
  { img: agri, tag: "Agriculture", title: "Smart Agriculture Platform", desc: "IoT-driven crop monitoring and yield analytics dashboard." },
  { img: turf, tag: "Mobile App", title: "Turf Booking App", desc: "Real-time slot booking with payments and reviews." },
  { img: restaurant, tag: "Hospitality", title: "Restaurant Ordering Site", desc: "Menu, cart, and KOT pipeline with delivery integration." },
  { img: realestate, tag: "PropTech", title: "Real Estate CRM", desc: "Lead pipeline, listings, and deal closure analytics." },
  { img: school, tag: "EdTech", title: "School Management Software", desc: "Attendance, grading, fees, and parent portals." },
  { img: logistics, tag: "Logistics", title: "Logistics Tracking System", desc: "Fleet visibility, route optimization, and ETAs." },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Featured Work"
          title={<>Featured <span className="text-gradient">Projects</span></>}
          subtitle="A glimpse into platforms we've shipped across continents and industries."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              className="group relative glass border-glow rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-sky uppercase tracking-wider">{p.tag}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="mt-2 font-semibold leading-snug">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
