import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Planes de Medicina Prepaga | Cotizá Hoy",
  description:
    "Cotizá planes de medicina prepaga para vos, tu familia o tu empresa. Asesoramiento personalizado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>

        {/* Meta Pixel */}
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){
              n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];
              t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'TU_PIXEL_ID');
            fbq('track', 'PageView');
            `,
          }}
        />

        {/* Google Ads Global Tag */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-TU_ID"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-TU_ID');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
