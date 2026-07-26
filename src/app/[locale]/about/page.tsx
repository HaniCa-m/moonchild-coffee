import Navbar from "@/components/ui/layout/Navbar";
import AboutPage from "@/components/sections/About/AboutPage";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main>
        <AboutPage />
      </main>

      <Footer />
    </>
  );
}