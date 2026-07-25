import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/layout/Navbar";
import FeaturedCoffee from "@/components/sections/FeaturedCoffee/FeaturedCoffee";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />
        <FeaturedCoffee />
      </main>
    </div>
  );
}