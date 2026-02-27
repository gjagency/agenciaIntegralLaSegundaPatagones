"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Stethoscope,
  Plane,
  ArrowRight,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";
export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#001a45] font-['Plus_Jakarta_Sans',sans-serif]"
      aria-label="COOP360 - Agencia Integral"
    >
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Agencia integral"
          className="w-full h-full object-cover object-right-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002870] via-[#003087]/90 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* IZQUIERDA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs font-bold tracking-wider text-emerald-50 uppercase">
                COOP360 Agencia Integral
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Todo en un <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                solo lugar.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-blue-100/90 leading-relaxed mb-10 max-w-xl font-light">
              Gestioná tu <strong className="text-white">prepaga</strong>, organizá tus{" "}
              <strong className="text-white">viajes</strong> y protegé lo que más querés con nuestros{" "}
              <strong className="text-white">seguros</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#servicios"
                className="group flex items-center justify-center gap-3 bg-emerald-400 text-[#002870] font-bold px-8 py-4 rounded-full transition-all hover:scale-105 hover:bg-emerald-300"
              >
                Ver servicios
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contacto"
                className="flex items-center justify-center px-8 py-4 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
              >
                Asesoramiento
              </a>
            </div>
          </motion.div>

          {/* DERECHA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 translate-y-8">
              <FeatureCard
                icon={Stethoscope}
                title="Prepaga"
                desc="Cobertura médica completa."
              />
              <FeatureCard
                icon={Plane}
                title="Turismo"
                desc="Viajes sin preocupaciones."
              />
            </div>

            <div className="space-y-4">
              <FeatureCard
                icon={ShieldCheck}
                title="Seguros"
                desc="Protección para tu familia."
              />
              <div className="p-6 rounded-3xl bg-[#003087]/80 backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center text-center h-full min-h-[180px]">
                <span className="text-4xl font-black text-white">+15k</span>
                <span className="text-blue-200 text-sm">
                  Socios confían en nosotros
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group">
      <div className="w-12 h-12 rounded-2xl bg-[#003087]/60 flex items-center justify-center mb-5 text-emerald-400 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-blue-100/70 text-sm">{desc}</p>
    </div>
  );
}