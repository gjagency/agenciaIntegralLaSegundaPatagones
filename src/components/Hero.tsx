export default function Hero() {
  return (
    <section
      className="relative bg-gradient-to-r from-[#003049] via-[#002f45] to-[#002032] text-white overflow-hidden"
      aria-label="COOP360 - Agencia Integral de la Cooperativa en Patagones"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Texto Izquierdo */}
        <div className="space-y-6 max-w-xl">
          {/* Badge institucional */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm text-white">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Agencia de la Cooperativa
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            COOP360 <br />
            <span className="text-[#7FFFD4]">Tu visión integral</span>
          </h1>

          <p className="text-lg text-[#e0ebf0]">
            El espacio donde resolvés seguros, salud y servicios cooperativos 
            en un mismo lugar, con acompañamiento en cada etapa de tu vida.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#servicios"
              className="bg-[#7FFFD4] text-[#003049] font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              Conocer servicios
            </a>

            <a
              href="#contacto"
              className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#003049] transition"
            >
              Hablar con un asesor
            </a>
          </div>
        </div>

        {/* Imagen Derecha */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/logo-cooperativa.png"
            alt="La Cooperativa de Patagones y Viedma"
            className="w-96 opacity-15 rounded-2xl"
          />
        </div>

      </div>

      {/* Onda Footer */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 80L1440 0V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}