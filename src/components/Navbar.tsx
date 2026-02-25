export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Marca */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="flex items-center flex-shrink-0">
            <span className="text-lg sm:text-xl font-extrabold" style={{ color: "#003087" }}>LA SEGUNDA</span>
            <span className="mx-1.5 text-gray-300 font-light hidden sm:inline">|</span>
            <span className="hidden sm:inline text-sm font-semibold" style={{ color: "#6b7280" }}>Patagones</span>
          </div>
          {/* Badges servicios */}
          <div className="hidden md:flex items-center gap-1.5 ml-2">
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(0,48,135,0.08)", color: "#003087" }}>Seguros</span>
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(227,6,19,0.08)", color: "#e30613" }}>Prepaga</span>
            <span className="text-xs px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(16,185,129,0.1)", color: "#059669" }}>Viajes</span>
          </div>
        </div>

        {/* Teléfono + CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:02920475999"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "#003087" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            02920-475999
          </a>
          <a href="#cotizar" className="btn-primary" style={{ padding: "8px 18px", fontSize: "0.875rem" }}>
            Cotizá gratis
          </a>
        </div>
      </div>
    </header>
  );
}
