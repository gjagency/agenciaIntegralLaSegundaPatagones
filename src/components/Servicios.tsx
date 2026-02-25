const servicios = [
  {
    emoji: "🛡️",
    marca: "La Segunda",
    color: "#003087",
    bg: "rgba(0,48,135,0.07)",
    titulo: "Seguros",
    descripcion: "Auto, hogar, vida, accidentes personales y más. Más de 80 años de trayectoria con la cooperativa más confiable del país.",
    productos: ["Seguro de auto", "Seguro del hogar", "Vida y AP", "Comercios y empresas"],
  },
  {
    emoji: "💊",
    marca: "Avalian",
    color: "#e30613",
    bg: "rgba(227,6,19,0.07)",
    titulo: "Medicina Prepaga",
    descripcion: "Planes de salud para vos, tu familia y tu empresa. Red médica nacional, especialistas y cobertura integral.",
    productos: ["Plan individual", "Plan familiar", "Plan empresas", "Adultos mayores"],
  },
  {
    emoji: "✈️",
    marca: "Coovaeco",
    color: "#059669",
    bg: "rgba(5,150,105,0.07)",
    titulo: "Viajes y Turismo",
    descripcion: "Paquetes turísticos, excursiones y viajes nacionales e internacionales. Organizamos tu próxima aventura.",
    productos: ["Viajes nacionales", "Viajes internacionales", "Excursiones", "Grupos y empresas"],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6" style={{ background: "#f5f7fa" }} aria-label="Nuestros servicios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="badge">Agencia Integral</div>
          <h2 className="section-title">Tres servicios, una sola agencia</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Somos agencia oficial y certificada de las tres marcas. Asesoramiento personalizado en Patagones, Villalonga y Stroeder.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s, i) => (
            <div key={i} className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: s.bg }}>
                  {s.emoji}
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wide uppercase" style={{ color: s.color }}>{s.marca}</p>
                  <h3 className="text-lg font-bold" style={{ color: "#0f172a" }}>{s.titulo}</h3>
                </div>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.descripcion}</p>

              <ul className="space-y-2 mt-auto">
                {s.productos.map((p, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href="#cotizar"
                className="mt-6 block text-center py-2.5 rounded-lg text-sm font-semibold transition-all btn-outline-azul"
                style={{ borderColor: s.color, color: s.color }}
              >
                Consultar →
              </a>
            </div>
          ))}
        </div>

        {/* Sucursales */}
        <div className="mt-14 grid sm:grid-cols-3 gap-4">
          {[
            { nombre: "Patagones (Central)", dir: "Dr. Baraja 312", tel: "02920-475999" },
            { nombre: "Villalonga", dir: "Sucursal Villalonga", tel: "Consultá por WhatsApp" },
            { nombre: "Stroeder", dir: "Sucursal Stroeder", tel: "Consultá por WhatsApp" },
          ].map((s, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(0,48,135,0.08)" }}>
                <svg className="w-4 h-4" style={{ color: "#003087" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: "#001f5a" }}>{s.nombre}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.dir}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.tel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
