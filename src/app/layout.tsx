import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencia Integral COOP360 | Redes Sociales",
  description:
    "Agencia oficial e integral de COOP360. Gestión de redes sociales, contenidos digitales y estrategias para potenciar tu presencia online en Carmen de Patagones. Sucursales en Villalonga y Stroeder.",
  keywords:
    "COOP360 Patagones, redes sociales, marketing digital, gestión de redes, contenidos digitales, agencia integral Patagones",
  authors: [{ name: "Agencia Integral COOP360 Patagones" }],
  openGraph: {
    title: "Agencia Integral COOP360 Patagones | Redes Sociales",
    description:
      "Agencia oficial de COOP360 especializada en redes sociales y presencia digital en Patagones.",
    type: "website",
    locale: "es_AR",
    siteName: "Agencia Integral COOP360 Patagones",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "Agencia Integral COOP360 Patagones",
              description: "Agencia oficial de COOP360 Seguros, Avalian Prepaga y Coovaeco Viajes.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dr. Baraja 312",
                addressLocality: "Carmen de Patagones",
                addressRegion: "Buenos Aires",
                addressCountry: "AR",
              },
              telephone: "+54-2920-475999",
              email: "seguropatagones@lasegunda.com.ar",
              url: "https://lasegundapatagones.com.ar",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
