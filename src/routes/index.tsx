import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Industries } from "@/components/landing/Industries";
import { Projects } from "@/components/landing/Projects";
import { WhyUs } from "@/components/landing/WhyUs";
import { Process } from "@/components/landing/Process";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Projects />
      <WhyUs />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}