import Navbar from "@/components/ui/layout/Navbar";
import Contact from "@/components/sections/Contact/Contact";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <Contact />
      </main>

      <Footer />
    </>
  );
}