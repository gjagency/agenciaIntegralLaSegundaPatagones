import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencia Integral La Segunda Patagones | Seguros, Prepaga y Viajes",
  description:
    "Agencia oficial e integral de La Segunda Seguros, Avalian Prepaga y Coovaeco Viajes en Carmen de Patagones. Cotizá sin cargo. Asesoramiento personalizado. Sucursales en Villalonga y Stroeder.",
  keywords:
    "La Segunda Patagones, Avalian prepaga, Coovaeco viajes, seguros Patagones, medicina prepaga Patagones, seguro de auto, agencia integral La Segunda",
  authors: [{ name: "Agencia Integral La Segunda Patagones" }],
  openGraph: {
    title: "Agencia Integral La Segunda Patagones | Seguros, Prepaga y Viajes",
    description:
      "Agencia oficial e integral de La Segunda, Avalian y Coovaeco. Cotizá sin cargo en Patagones.",
    type: "website",
    locale: "es_AR",
    siteName: "Agencia Integral La Segunda Patagones",
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
              name: "Agencia Integral La Segunda Patagones",
              description: "Agencia oficial de La Segunda Seguros, Avalian Prepaga y Coovaeco Viajes.",
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
