import { motion } from "framer-motion";
import {
  Sprout, Stethoscope, GraduationCap, Building, Shirt, UtensilsCrossed,
  Dumbbell, Truck, ShoppingCart, HardHat, Landmark, Plane,
} from "lucide-react";
import { SectionHeader } from "./Services";

const industries = [
  { icon: Sprout, name: "Agriculture", desc: "Smart farming & yield analytics" },
  { icon: GraduationCap, name: "Education", desc: "LMS & school management" },
  { icon: Building, name: "Real Estate", desc: "Listings & property CRM" },
  { icon: Shirt, name: "Textile", desc: "Production & inventory ERP" },
  { icon: UtensilsCrossed, name: "Restaurants", desc: "POS, ordering & delivery" },
  { icon: Dumbbell, name: "Fitness & Gym", desc: "Memberships & bookings" },
  { icon: Truck, name: "Logistics", desc: "Fleet & shipment tracking" },
  { icon: ShoppingCart, name: "E-Commerce", desc: "Storefronts & marketplaces" },
  { icon: HardHat, name: "Construction", desc: "Project & resource ops" },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Industries"
          title={<>Solutions for <span className="text-gradient">Every Industry</span></>}
          subtitle="Domain-tuned platforms shipped for verticals where reliability is non-negotiable."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="group relative glass border-glow rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl glass-strong grid place-items-center group-hover:bg-gradient-primary group-hover:shadow-glow transition-all">
                  <ind.icon className="h-5 w-5 text-sky group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold">{ind.name}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
