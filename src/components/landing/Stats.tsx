// import { motion } from "framer-motion";

// const stats = [
//   { value: "100+", label: "Projects Completed" },
//   { value: "50+", label: "Happy Clients" },
//   { value: "10+", label: "Industries Served" },
//   { value: "24/7", label: "Technical Support" },
// ];

// const logos = [
//   "Acme Corp", "Northwind", "Globex", "Initech", "Umbrella", "Vandelay",
//   "Stark Industries", "Wayne Enterprises", "Pied Piper", "Hooli",
// ];

// export function Stats() {
//   return (
//     <section className="relative py-20">
//       <div className="mx-auto max-w-7xl px-6">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//           {stats.map((s, i) => (
//             <motion.div
//               key={s.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="glass border-glow rounded-2xl p-6 md:p-8 text-center"
//             >
//               <div className="text-4xl md:text-5xl font-bold text-gradient">{s.value}</div>
//               <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="mt-16 relative overflow-hidden">
//           <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
//           <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
//           <div className="flex gap-12 animate-marquee w-max">
//             {[...logos, ...logos].map((name, i) => (
//               <div
//                 key={i}
//                 className="text-2xl font-display font-semibold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap"
//               >
//                 {name}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
