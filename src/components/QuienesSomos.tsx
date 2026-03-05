"use client";

import { motion } from "framer-motion";

export default function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="bg-white py-32 font-['Plus_Jakarta_Sans',sans-serif] text-gray-800"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">

        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold text-[#002870] mb-4">
            <span className="block">Quiénes Somos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Una agencia integral de servicios sociales, seguros y salud,
            con una trayectoria sólida, compromiso con las personas
            y atención centrada en la confianza.
          </p>
        </motion.div>

        {/* Contenido principal con columnas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >

          {/* Texto */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              En <strong className="text-[#002870]">COOP 360</strong> somos la
              agencia integral de servicios sociales de la Cooperativa Agrícola
              Ganadera e Industrial de Patagones y Viedma, enfocada en brindar
              soluciones humanas, eficaces y accesibles para cada persona.
            </p>

            <p className="text-lg leading-relaxed">
              Con más de 35 años de trayectoria en la comarca, acompañamos a
              nuestros asociados y asegurados con un compromiso claro hacia
              la excelencia y la confianza permanente.
            </p>

            <p className="text-lg leading-relaxed">
              Nos distingue nuestra atención personalizada, cercanía y trato
              humano, porque creemos que cada historia merece una solución
              a medida, con responsabilidad y transparencia.
            </p>

            <p className="text-xl font-semibold text-[#002870]">
              En COOP 360 estamos para cuidarte hoy y acompañarte siempre.
            </p>
          </div>

          {/* Lado visual (puede ser imagen, gráficos, iconos institucionales) */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#002870]/50 to-[#003087]/40 rounded-3xl shadow-xl" />
            <img
                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"

              alt="Equipo profesional institucional"
              className="relative w-full h-auto rounded-3xl object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}