export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6" style={{ background: "#001f5a" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Marca */}
          <div>
            <p className="text-xl font-extrabold text-white mb-1">Coop 360</p>
            <p className="text-xs text-blue-300 mb-4">Agencia Oficial e Integral</p>
            <div className="flex flex-wrap gap-1.5">
  
          

            {/* AVALIAN CON IMAGEN */}
            <div className="flex flex-col gap-2">
  
              <span
                className="flex items-center justify-center px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <img
                  src="/avalian.png"
                  alt="Avalian"
                  className="h-8 w-auto object-contain"
                />
              </span>

              <span
                className="flex items-center justify-center px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <img
                  src="/avalian.png"
                  alt="Avalian"
                  className="h-8 w-auto object-contain"
                />
              </span>
              <span
              className="flex items-center justify-center px-3 py-1 rounded-full shadow-sm"
              style={{ background: "#ffffff" }}
            >
              <img
                src="/coovaeco.png"
                alt="Coovaeco"
                className="h-8 w-auto object-contain"
              />
            </span>

            </div>

          </div>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-3">Contacto</p>
            <div className="space-y-2 text-sm text-blue-200">
              <p>📍 Dr. Baraja 312, Patagones</p>
              <a href="tel:02920475999" className="block hover:text-white transition-colors">📞 02920-475999</a>
              <a href="mailto:seguropatagones@lasegunda.com.ar" className="block hover:text-white transition-colors text-xs">✉️ seguropatagones@lasegunda.com.ar</a>
            </div>
          </div>

          {/* Sucursales */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-blue-400 mb-3">Sucursales</p>
            <div className="space-y-1.5 text-sm text-blue-200">
              <p>Carmen de Patagones (Central)</p>
              <p>Villalonga</p>
              <p>Stroeder</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="text-xs text-blue-400">© {new Date().getFullYear()} Agencia Integral Coop 360 Patagones. Todos los derechos reservados.</p>
          <p className="text-xs text-blue-500">Agencia oficial de Coop 360 Seguros · Avalian · Coovaeco</p>
        </div>
        <div className="mt-10 text-right">
  <a
    href="https://www.gj.agency/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-xs text-gray-200 hover:text-white transition-colors duration-300"
  >
     Desarrollado por — © 2026 G&amp;J Agency.
  </a>
</div>
      </div>
    </footer>
  );
}
