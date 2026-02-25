const beneficios = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    titulo: "Red médica nacional",
    descripcion: "Acceso a miles de médicos y clínicas en todo el país, sin importar dónde estés.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titulo: "Planes flexibles",
    descripcion: "Opciones adaptadas para vos solo, toda tu familia o los colaboradores de tu empresa.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    titulo: "Respaldo cooperativo",
    descripcion: "Más de 80 años de trayectoria de La Segunda Cooperativa te respaldan en cada decisión.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    titulo: "Asesoramiento personalizado",
    descripcion: "Un asesor real te guía en la elección del plan. Sin bots. Sin letra chica.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titulo: "Mejores precios garantizados",
    descripcion: "Tarifas competitivas y planes que se adaptan a tu presupuesto real.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titulo: "Atención inmediata",
    descripcion: "Contacto directo con nuestros asesores por WhatsApp. Respuesta en el día.",
  },
];

export default function Beneficios() {
  return (
    <section className="py-20 px-4 sm:px-6" style={{ background: "#f5f7fa" }} aria-label="Beneficios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="badge">¿Por qué COOP360?</div>
          <h2 className="section-title">No vendemos seguros. Vendemos soluciones.</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Integramos servicios, modernizamos la atención y te acompañamos en cada etapa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className="card-hover bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(0, 48, 135, 0.08)", color: "#003087" }}
              >
                {b.icon}
              </div>
              <h3 className="font-700 text-lg mb-2" style={{ fontWeight: 700, color: "#0f172a" }}>
                {b.titulo}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
