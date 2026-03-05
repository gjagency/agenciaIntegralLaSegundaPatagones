export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* 🔹 Marca + Logos */}
        <div className="flex items-center gap-6">
          {/* Texto institucional */}
          <div className="flex flex-col leading-tight">
            <span
              className="text-2xl font-extrabold tracking-tight"
              style={{ color: "#003087" }}
            >
              COOP360
            </span>

            <span className="text-sm font-medium text-gray-600 tracking-wide">
              Agencia Integral
            </span>

            <span className="text-sm font-medium text-gray-600 tracking-wide">
              Patagones
            </span>
          </div>
          {/* Logo principal */}
          <a href="/" className="flex items-center">
            <img
              src="/coop.png"
              alt="COOP360"
              draggable={false}
              className="h-19 w-auto object-contain"
            />
          </a>



          {/* Logo secundario */}
          <a href="/" className="hidden md:flex items-center">
            <img
              src="/cooperativa.png"
              alt="Cooperativa"
              draggable={false}
              className="h-19 w-auto object-contain opacity-90"
            />
          </a>

        </div>

        {/* 🔹 Lado derecho */}
        <div className="flex items-center gap-6">

          {/* Redes sociales */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/reel/DUTcqhygDqD/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-pink-600 hover:opacity-70 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37a4 4 0 1 1-4.63-4.63 4 4 0 0 1 4.63 4.63z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-blue-600 hover:opacity-70 transition"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>

          {/* Teléfono */}
          <a
            href="tel:02920475999"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#003087] hover:opacity-80 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            02920-475999
          </a>

          {/* Botón CTA */}
          <a
  href="#cotizar"
  className="bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-xl shadow-md hover:bg-red-700 hover:shadow-lg hover:scale-105 transition-all duration-200"
>
  Cotizá gratis
</a>

        </div>
      </div>
    </header>
  );
}