import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/layout/Navbar";
import FeaturedCoffee from "@/components/sections/FeaturedCoffee/FeaturedCoffee";
import About from "@/components/sections/About/About";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Gallery from "@/components/sections/Gallery/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />
        <FeaturedCoffee />
        <About />
        <Testimonials />
        <Gallery />
      </main>
    </div>
  );
}