import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import FormCotizacion from "@/components/FormCotizacion";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuienesSomos from "@/components/QuienesSomos";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Servicios />
        <FormCotizacion />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
