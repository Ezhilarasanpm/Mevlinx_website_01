import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import logo from "@/assets/logo-dark.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between gap-6 px-4 md:px-6 py-3 rounded-2xl transition-all duration-500 ${
          scrolled ? "glass-strong shadow-card" : "glass"
        }`}
      >
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="MevlinX Technologies"
            className="h-8 w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
             className="px-4 py-2 text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/8"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-primary-foreground bg-gradient-primary shadow-glow hover:scale-[1.03] transition-transform"
          >
            <Sparkles className="h-4 w-4" />
            Get Started
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden mx-auto max-w-7xl mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-fade-in">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
             className="px-4 py-3 text-lg font-medium rounded-lg hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
