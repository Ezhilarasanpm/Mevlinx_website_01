import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl glass-strong border-glow p-10 md:p-16 text-center"
        >
          <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-royal/40 blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-sky/30 blur-3xl animate-pulse-glow" />
          <div className="absolute inset-0 grid-bg opacity-40" />

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Build Your <span className="text-gradient">Next Digital Product?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
Let MevlinX Technologies transform your ideas into powerful digital experiences trusted by industries worldwide.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mevlinx.sales@gmail.com&su=Project%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.04] transition-transform pointer-events-auto"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mevlinx.sales@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl glass font-semibold hover:bg-white/10 pointer-events-auto"
              >
                <MessageCircle className="h-4 w-4 text-sky" />
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
