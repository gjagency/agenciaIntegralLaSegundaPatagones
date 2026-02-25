const planes = [
  {
    id: "individual",
    nombre: "Individual",
    descripcion: "El plan ideal si buscás cobertura completa para vos solo.",
    destacado: false,
    incluye: [
      "Consultas médicas ilimitadas",
      "Urgencias y emergencias 24hs",
      "Estudios de diagnóstico",
      "Internaciones cubiertas",
    ],
  },
  {
    id: "familiar",
    nombre: "Familiar",
    descripcion: "Protegé a toda tu familia con una sola cobertura integral.",
    destacado: true,
    incluye: [
      "Todo lo del plan Individual",
      "Hasta 5 integrantes del grupo familiar",
      "Pediatría especializada",
      "Cobertura en emergencias 24/7",
    ],
  },
  {
    id: "empresas",
    nombre: "Empresas",
    descripcion: "Beneficios de salud para tus colaboradores y su familia.",
    destacado: false,
    incluye: [
      "Planes personalizados por empresa",
      "Asesor comercial exclusivo",
      "Facturación unificada",
      "Reportes y gestión online",
    ],
  },
];

export default function Planes() {
  return (
    <section id="planes" className="py-20 px-4 sm:px-6 bg-white" aria-label="Planes disponibles">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="badge">Planes COOP360</div>
          <h2 className="section-title">Elegí la cobertura que necesitás</h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto">
            Tres soluciones pensadas para cada etapa de tu vida.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {planes.map((plan) => (
            <div
              key={plan.id}
              className={`card-hover rounded-2xl p-8 flex flex-col relative border ${
                plan.destacado
                  ? "border-transparent text-white"
                  : "border-gray-100 bg-white shadow-sm"
              }`}
              style={
                plan.destacado
                  ? {
                      background: "linear-gradient(145deg, #003087, #001f5a)",
                      boxShadow: "0 20px 60px rgba(0,48,135,0.3)",
                    }
                  : {}
              }
            >
              {plan.destacado && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-700 px-4 py-1 rounded-full"
                  style={{
                    background: "#e30613",
                    color: "white",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}
                >
                  Más elegido
                </div>
              )}

              <h3
                className="text-2xl font-800 mb-3"
                style={{
                  fontWeight: 800,
                  color: plan.destacado ? "#ffffff" : "#001f5a",
                }}
              >
                {plan.nombre}
              </h3>
              <p
                className="text-sm mb-6 leading-relaxed"
                style={{ color: plan.destacado ? "rgba(255,255,255,0.8)" : "#6b7280" }}
              >
                {plan.descripcion}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.incluye.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: plan.destacado ? "#4ade80" : "#e30613" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span style={{ color: plan.destacado ? "rgba(255,255,255,0.9)" : "#374151" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#cotizar"
                className={plan.destacado ? "btn-primary text-center w-full" : ""}
                style={
                  !plan.destacado
                    ? {
                        display: "block",
                        textAlign: "center",
                        padding: "12px 0",
                        borderRadius: "8px",
                        border: "2px solid #003087",
                        color: "#003087",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        transition: "all 0.2s",
                      }
                    : {}
                }
              >
                Cotizar este plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
