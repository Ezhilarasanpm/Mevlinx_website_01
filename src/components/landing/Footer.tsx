import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-dark.png";

const cols = [
  {
    title: "Services",
    links: ["Cloud Services", "Web Development", "Mobile Apps", "UI/UX Design", "Custom Software", "AI Automation"],
  },
  {
    title: "Company",
    links: ["About", "Industries", "Projects", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Case Studies", "Documentation", "Support", "Privacy Policy", "Terms of Service"],
  },
];

export function Footer() {
  return (
    <footer className="relative pt-24 pb-10 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <img src={logo} alt="MevlinX Technologies" className="h-8 w-auto" />
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              MevlinX Technologies builds cloud-native software, mobile experiences, and enterprise platforms for ambitious companies worldwide.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-sky" />mevlinx.sales@gmail.com</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-sky" /> +91 9442390928</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-sky" /> Global · Remote-first</div>
            </div>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-lg glass hover:bg-gradient-primary hover:text-primary-foreground transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-sm font-semibold uppercase tracking-wider text-foreground">{c.title}</div>
                <ul className="mt-5 space-y-3 text-sm">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} MevlinX Technologies. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
