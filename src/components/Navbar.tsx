export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* Marca */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex items-center flex-shrink-0">
            <span className="text-lg sm:text-xl font-extrabold" style={{ color: "#003087" }}>
              COOP360
            </span>
            <span className="mx-1.5 text-gray-300 font-light hidden sm:inline">|</span>
            <span className="hidden sm:inline text-sm font-semibold" style={{ color: "#6b7280" }}>
              Patagones
            </span>
          </div>

          {/* Redes sociales */}
          <div className="hidden md:flex items-center gap-2 ml-2">
            <a
              href="https://www.instagram.com/la_segundasegurospatagones?utm_source=qr&igsh=MTAxdWR0dTVsOGtnMA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-6 h-6 text-pink-600 hover:opacity-80 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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
              className="flex items-center justify-center w-6 h-6 text-blue-600 hover:opacity-80 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Teléfono + CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:02920475999"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition"
            style={{ color: "#003087" }}
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

          <a
            href="#cotizar"
            className="btn-primary"
            style={{ padding: "8px 18px", fontSize: "0.875rem" }}
          >
            Cotizá gratis
          </a>
        </div>

      </div>
    </header>
  );
}