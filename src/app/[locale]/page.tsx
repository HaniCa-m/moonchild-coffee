import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  );
}