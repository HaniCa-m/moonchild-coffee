import Hero from "@/components/layout/Hero";
import Navbar from "@/components/ui/layout/Navbar";
import FeaturedCoffee from "@/components/sections/FeaturedCoffee/FeaturedCoffee";
import About from "@/components/sections/About/About";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import Gallery from "@/components/sections/Gallery/Gallery";
import ReservationCTA from "@/components/sections/ReservationCTA/ReservationCTA";
import Footer from "@/components/layout/Footer";

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
        <ReservationCTA />
        <Footer />
      </main>
    </div>
  );
}