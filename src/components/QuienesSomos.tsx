"use client";

import { motion } from "framer-motion";

export default function QuienesSomos() {
  return (
    <section
      id="quienes-somos"
      className="bg-white py-24 md:py-22 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#002870] mb-4">
            Quiénes Somos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos una agencia integral de servicios sociales, seguros y salud,
            comprometidos con brindar soluciones con vocación de servicio y
            atención personalizada.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 text-gray-700 text-lg leading-relaxed"
        >
          <div className="space-y-6">
            <p>
              En <strong className="text-[#002870]">COOP 360</strong> somos la
              agencia integral de servicios sociales de la Cooperativa Agrícola
              Ganadera e Industrial de Patagones y Viedma.
            </p>

            <p>
              Con más de 35 años de trayectoria en la comarca, trabajamos para
              brindar soluciones integrales en seguros, salud y servicios
              sociales, acompañando a cada persona con compromiso y
              responsabilidad.
            </p>

            <p>
              Nos caracteriza la cercanía, la atención personalizada y el trato
              humano, porque creemos que cada asociado y asegurado merece un
              servicio a medida, basado en la confianza y acompañamiento
              permanente.
            </p>
          </div>

          <div className="space-y-6">
            <p>
              Sabemos que cada etapa de la vida demanda soluciones específicas
              y por eso ofrecemos una gama completa de servicios para cuidarte
              en todos los momentos.
            </p>

            <p className="font-semibold text-[#002870]">
              En COOP 360 estamos para cuidarte hoy y acompañarte siempre.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}