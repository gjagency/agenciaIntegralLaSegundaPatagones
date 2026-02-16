import Hero from "@/components/Hero";
import Beneficios from "@/components/Beneficios";
import Planes from "@/components/Planes";
import FormCotizacion from "@/components/FormCotizacion";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="font-sans text-gray-800">

      {/* Hero — Igual al estilo institucional corporativo */}
      <Hero />

      {/* Beneficios estilo empresa confiable */}
      <Beneficios />

      {/* Planes tipo “búsqueda de producto” */}
      <Planes />

      {/* Llamado a cotizar + formulario */}
      <FormCotizacion />

      {/* Footer corporativo */}
      <footer className="bg-gray-900 text-white py-10 text-center px-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Este sitio es una creación comercial inspirada en el estilo del sitio de La Segunda. Información de contacto real será provista por ti.
        </p>
      </footer>

      {/* Botón flotante WhatsApp */}
      <WhatsAppFloat />

    </main>
  );
}
