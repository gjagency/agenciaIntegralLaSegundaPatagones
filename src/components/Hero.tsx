export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      aria-label="COOP360 - Agencia Integral de la Cooperativa en Patagones"
    >
      {/* Imagen de fondo institucional */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Agencia integral de servicios"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003087]/95 via-[#003087]/85 to-[#001d4f]/95"></div>
      </div>

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div className="space-y-8 max-w-xl">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Agencia Integral Cooperativa
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Todo en un solo lugar
          </h1>

          <p className="text-lg text-gray-200">
            Gestioná tu <strong>prepaga</strong>, organizá tus <strong>viajes </strong> 
             y protegé lo que más querés con nuestros <strong>seguros</strong>.  
            Asesoramiento personalizado y respaldo cooperativo.
          </p>

          {/* Botones */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#servicios"
              className="bg-emerald-400 text-[#003087] font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              Ver servicios
            </a>

            <a
              href="#contacto"
              className="border border-white/40 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white hover:text-[#003087] transition-all duration-300"
            >
              Asesoramiento
            </a>
          </div>
        </div>

        {/* Logo lado derecho */}
       
      </div>
    </section>
  );
}