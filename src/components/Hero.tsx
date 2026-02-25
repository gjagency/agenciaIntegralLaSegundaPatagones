export default function Hero() {
  return (
    <section
      className="gradient-hero min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
      aria-label="Agencia Integral La Segunda Patagones"
    >
      {/* Círculos decorativos */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(227,6,19,0.12) 0%, transparent 65%)", transform: "translate(25%, -25%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          {/* Badges de marcas */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              🛡️ La Segunda Seguros
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              💊 Avalian Prepaga
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}>
              ✈️ Coovaeco Viajes
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            Tu agencia integral<br />
            <span style={{ color: "#ffc8cb" }}>en Patagones</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
            Somos la agencia oficial de La Segunda, Avalian y Coovaeco. Seguros, medicina prepaga y viajes — todo en un solo lugar, con asesoramiento real.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#cotizar" className="btn-primary text-base">Consultar sin cargo</a>
            <a href="#servicios" className="btn-outline-white text-base">Ver servicios</a>
          </div>

          {/* Trust */}
          <div className="mt-10 flex flex-wrap gap-5 text-blue-100 text-sm">
            {["Agencia oficial y certificada", "3 sucursales: Patagones, Villalonga y Stroeder", "Asesor humano, sin bots"].map((t, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0 56L1440 56L1440 18C1200 56 960 0 720 18C480 36 240 0 0 18L0 56Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
