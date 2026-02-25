export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6" style={{ background: "#001f5a" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Marca */}
          <div>
            <p className="text-xl font-extrabold text-white mb-1">La Segunda Patagones</p>
            <p className="text-xs text-blue-300 mb-4">Agencia Oficial e Integral</p>
            <div className="flex flex-wrap gap-1.5">
              {["🛡️ La Segunda", "💊 Avalian", "✈️ Coovaeco"].map((s, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded-full text-blue-200"
                  style={{ background: "rgba(255,255,255,0.08)" }}>{s}</span>
              ))}
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
          <p className="text-xs text-blue-400">© {new Date().getFullYear()} Agencia Integral La Segunda Patagones. Todos los derechos reservados.</p>
          <p className="text-xs text-blue-500">Agencia oficial de La Segunda Seguros · Avalian · Coovaeco</p>
        </div>
      </div>
    </footer>
  );
}
