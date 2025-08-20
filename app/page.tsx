import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PSVL from "@/components/PSVL";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <PSVL />
      <Testimonials />
    </main>
  );
}
