import Navbar from "@/components/ui/layout/Navbar";
import Reservation from "@/components/sections/Reservation/Reservation";
import Footer from "@/components/layout/Footer";

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main>
        <Reservation />
      </main>
      <Footer />
    </>
  );
}