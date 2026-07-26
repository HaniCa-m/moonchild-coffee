import Navbar from "@/components/ui/layout/Navbar";
import Menu from "@/components/sections/menu/menu";
import Footer from "@/components/layout/Footer";

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <Menu />
      </main>
      <Footer />
    </>
  );
}