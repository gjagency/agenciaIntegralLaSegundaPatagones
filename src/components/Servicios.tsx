const servicios = [
  {
    logo: "/laseg.svg",
    marca: "COOP360",
    color: "#003087",
    bg: "rgba(0,48,135,0.07)",
    descripcion:
      "Auto, hogar, vida, accidentes personales y más. Más de 80 años de trayectoria con la cooperativa más confiable del país.",
    productos: ["Seguro de auto", "Seguro del hogar", "Vida y AP", "Comercios y empresas", "Y mucho mas!",],
  },
  {
    logo: "/avalian.png",
    marca: "Avalian",
    color: "#e30613",
    bg: "rgba(227,6,19,0.07)",
    descripcion:
      "Planes de salud para vos, tu familia y tu empresa. Red médica nacional, especialistas y cobertura integral.",
    productos: ["Plan individual", "Plan familiar", "Plan empresas", "Adultos mayores", "Y mucho mas!",],
  },
  {
    logo: "/coovaeco.png",
    marca: "Coovaeco",
    color: "#059669",
    bg: "rgba(5,150,105,0.07)",
    descripcion:
      "Paquetes turísticos, excursiones y viajes nacionales e internacionales. Organizamos tu próxima aventura.",
    productos: ["Viajes nacionales", "Viajes internacionales", "Excursiones", "Grupos y empresas", "Y mucho mas!",],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 px-4 sm:px-6" style={{ background: "#F0F7F0Nuestras sucursales" }} aria-label="Nuestros servicios">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="badge">Agencia Integral</div>
          <h2 className="section-title">Seguros, salud y viajes. Todo en un mismo lugar.</h2>          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Somos tu agencia oficial y certificada de confianza. Te acompañamos con asesoramiento personalizado en Patagones, Villalonga y Stroeder.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((s, i) => (
  <div
    key={i}
    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    {/* Logo centrado */}
    <div className="w-40 h-24 flex items-center justify-center mb-6">
      <img
        src={s.logo}
        alt="logo"
        className="h-20 w-auto object-contain"
      />
    </div>

    {/* Descripción */}
    <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
      {s.descripcion}
    </p>

    {/* Productos */}
    <ul className="space-y-2 mb-6">
      {s.productos.map((p, j) => (
        <li
          key={j}
          className="flex items-center justify-center gap-2 text-sm text-gray-600"
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: s.color }}
          />
          {p}
        </li>
      ))}
    </ul>

    {/* Botón */}
    <a
      href="#cotizar"
      className="mt-auto px-6 py-2.5 rounded-lg text-sm font-semibold transition-all hover:scale-105"
      style={{
        border: `1px solid ${s.color}`,
        color: s.color,
      }}
    >
      Consultar →
    </a>
  </div>
))}
        </div>

    
      </div>
    </section>
  );
}
