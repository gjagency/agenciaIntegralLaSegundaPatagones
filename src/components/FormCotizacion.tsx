"use client";
import { useState } from "react";

type Servicio = "seguros" | "prepaga" | "viajes" | "";

interface FormData {
  servicio: Servicio;
  nombre: string;
  telefono: string;
  email: string;
  localidad: string;
  // Seguros
  tipoSeguro: string;
  // Prepaga
  cantPersonas: string;
  edadTitular: string;
  // Viajes
  destinoViaje: string;
  cantViajeros: string;
  fechaAproximada: string;
  comentario: string;
}

const servicioConfig = {
  seguros: {
    label: "Seguros",
    emoji: "🛡️",
    marca: "La Segunda",
    color: "#003087",
    bg: "rgba(0,48,135,0.08)",
    border: "#003087",
  },
  prepaga: {
    label: "Medicina Prepaga",
    emoji: "💊",
    marca: "Avalian",
    color: "#e30613",
    bg: "rgba(227,6,19,0.08)",
    border: "#e30613",
  },
  viajes: {
    label: "Viajes y Turismo",
    emoji: "✈️",
    marca: "Coovaeco",
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
    border: "#059669",
  },
};

const TOTAL_STEPS = 3;

export default function FormCotizacion() {
  const [step, setStep] = useState(1);
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    servicio: "",
    nombre: "",
    telefono: "",
    email: "",
    localidad: "",
    tipoSeguro: "",
    cantPersonas: "",
    edadTitular: "",
    destinoViaje: "",
    cantViajeros: "",
    fechaAproximada: "",
    comentario: "",
  });

  const set = (key: keyof FormData, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const config = form.servicio ? servicioConfig[form.servicio] : null;

  const handleEnviar = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEnviado(true);
    }, 1200);
  };

  if (enviado) {
    return (
      <section id="cotizar" className="py-20 px-4 sm:px-6" style={{ background: "linear-gradient(135deg, #f5f7fa, #eef1f8)" }}>
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(0,48,135,0.08)" }}>
            <svg className="w-10 h-10" style={{ color: "#003087" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#001f5a" }}>¡Consulta recibida!</h2>
          <p className="text-gray-500">Un asesor de la Agencia La Segunda Patagones te contactará a la brevedad para brindarte el mejor asesoramiento.</p>
          <p className="mt-4 text-sm text-gray-400">También podés llamarnos: <a href="tel:02920475999" className="font-semibold" style={{ color: "#003087" }}>02920-475999</a></p>
        </div>
      </section>
    );
  }

  return (
    <section id="cotizar" className="py-20 px-4 sm:px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f5f7fa 0%, #eef1f8 100%)" }}>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #003087 0%, transparent 70%)", transform: "translate(30%,-30%)" }} />

      <div className="max-w-xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="badge">Sin cargo · Sin compromiso</div>
          <h2 className="section-title">Consultá con un asesor real</h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base">
            Completá el formulario y te contactamos hoy mismo. Agencia oficial en Dr. Baraja 312, Patagones.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Step indicator */}
          <div className="px-8 pt-8">
            <div className="step-indicator">
              {[1, 2, 3].map((n) => (
                <>
                  <div
                    key={`dot-${n}`}
                    className="step-dot"
                    style={{
                      background: step >= n ? (config?.color || "#003087") : "#f3f4f6",
                      color: step >= n ? "white" : "#9ca3af",
                    }}
                  >
                    {step > n ? (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : n}
                  </div>
                  {n < 3 && (
                    <div key={`line-${n}`} className={`step-line ${step > n ? "active" : ""}`}
                      style={{ background: step > n ? (config?.color || "#003087") : "#e5e7eb" }} />
                  )}
                </>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 -mt-2 mb-6">
              {step === 1 && "Elegí el servicio"}
              {step === 2 && "Tus datos de contacto"}
              {step === 3 && "Detalle de tu consulta"}
            </p>
          </div>

          <div className="px-6 sm:px-8 pb-8">

            {/* PASO 1 — Elegir servicio */}
            {step === 1 && (
              <div>
                <p className="font-semibold text-sm mb-4" style={{ color: "#374151" }}>¿Qué servicio necesitás?</p>
                <div className="space-y-3">
                  {(Object.entries(servicioConfig) as [Servicio, typeof servicioConfig.seguros][]).map(([key, cfg]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => { set("servicio", key); setStep(2); }}
                      className="w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all"
                      style={{
                        borderColor: form.servicio === key ? cfg.color : "#e5e7eb",
                        background: form.servicio === key ? cfg.bg : "white",
                      }}
                    >
                      <span className="text-2xl">{cfg.emoji}</span>
                      <div className="flex-1">
                        <p className="font-bold text-sm" style={{ color: "#0f172a" }}>{cfg.label}</p>
                        <p className="text-xs text-gray-400">{cfg.marca}</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PASO 2 — Datos personales */}
            {step === 2 && (
              <div className="space-y-4">
                {config && (
                  <div className="flex items-center gap-2 p-3 rounded-xl mb-2" style={{ background: config.bg }}>
                    <span className="text-lg">{config.emoji}</span>
                    <span className="text-sm font-semibold" style={{ color: config.color }}>
                      {config.label} — {config.marca}
                    </span>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Nombre y apellido *</label>
                    <input
                      type="text" required placeholder="Juan García"
                      value={form.nombre} onChange={e => set("nombre", e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label">Teléfono / WhatsApp *</label>
                    <input
                      type="tel" required placeholder="02920-XXXXXX"
                      value={form.telefono} onChange={e => set("telefono", e.target.value)}
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email" placeholder="tu@email.com"
                    value={form.email} onChange={e => set("email", e.target.value)}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="form-label">Localidad *</label>
                  <select value={form.localidad} onChange={e => set("localidad", e.target.value)} className="form-input">
                    <option value="">Seleccioná tu localidad</option>
                    <option>Carmen de Patagones</option>
                    <option>Viedma</option>
                    <option>Villalonga</option>
                    <option>Stroeder</option>
                    <option>Otra localidad</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setStep(1)} className="btn-outline-azul flex-1 text-sm" style={{ padding: "11px" }}>
                    ← Atrás
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!form.nombre || !form.telefono || !form.localidad}
                    className="btn-primary flex-[2] text-sm"
                    style={{
                      padding: "11px",
                      background: config ? `linear-gradient(135deg, ${config.color}, ${config.color}cc)` : undefined,
                    }}
                  >
                    Continuar →
                  </button>
                </div>
              </div>
            )}

            {/* PASO 3 — Detalle específico */}
            {step === 3 && (
              <div className="space-y-4">
                {config && (
                  <div className="flex items-center gap-2 p-3 rounded-xl mb-2" style={{ background: config.bg }}>
                    <span className="text-lg">{config.emoji}</span>
                    <span className="text-sm font-semibold" style={{ color: config.color }}>
                      Contanos más sobre tu consulta de {config.label}
                    </span>
                  </div>
                )}

                {/* Seguros */}
                {form.servicio === "seguros" && (
                  <div>
                    <label className="form-label">¿Qué tipo de seguro buscás?</label>
                    <select value={form.tipoSeguro} onChange={e => set("tipoSeguro", e.target.value)} className="form-input">
                      <option value="">Seleccioná...</option>
                      <option>Seguro de auto</option>
                      <option>Seguro del hogar</option>
                      <option>Vida / Accidentes personales</option>
                      <option>Comercio o empresa</option>
                      <option>Otro / No sé cuál</option>
                    </select>
                  </div>
                )}

                {/* Prepaga */}
                {form.servicio === "prepaga" && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Edad del titular</label>
                      <input
                        type="number" min={1} max={99} placeholder="Ej: 35"
                        value={form.edadTitular} onChange={e => set("edadTitular", e.target.value)}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Cantidad de personas</label>
                      <select value={form.cantPersonas} onChange={e => set("cantPersonas", e.target.value)} className="form-input">
                        <option value="">Seleccioná...</option>
                        <option>Solo yo (individual)</option>
                        <option>2 personas</option>
                        <option>3 a 4 personas</option>
                        <option>5 o más personas</option>
                        <option>Plan empresarial</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Viajes */}
                {form.servicio === "viajes" && (
                  <div className="space-y-4">
                    <div>
                      <label className="form-label">Destino o tipo de viaje</label>
                      <select value={form.destinoViaje} onChange={e => set("destinoViaje", e.target.value)} className="form-input">
                        <option value="">Seleccioná...</option>
                        <option>Nacional (Argentina)</option>
                        <option>Internacional</option>
                        <option>Excursión / día de campo</option>
                        <option>Viaje grupal / empresa</option>
                        <option>No sé, quiero opciones</option>
                      </select>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">Cantidad de viajeros</label>
                        <input
                          type="number" min={1} placeholder="Ej: 2"
                          value={form.cantViajeros} onChange={e => set("cantViajeros", e.target.value)}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">Fecha aproximada</label>
                        <input
                          type="text" placeholder="Ej: Julio 2025"
                          value={form.fechaAproximada} onChange={e => set("fechaAproximada", e.target.value)}
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <label className="form-label">Comentario adicional (opcional)</label>
                  <textarea
                    rows={2}
                    placeholder="Cualquier detalle que quieras agregar..."
                    value={form.comentario} onChange={e => set("comentario", e.target.value)}
                    className="form-input resize-none"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setStep(2)} className="btn-outline-azul flex-1 text-sm" style={{ padding: "11px" }}>
                    ← Atrás
                  </button>
                  <button
                    type="button"
                    onClick={handleEnviar}
                    disabled={loading}
                    className="btn-primary flex-[2] text-sm"
                    style={{
                      padding: "11px",
                      background: config ? `linear-gradient(135deg, ${config.color}, ${config.color}cc)` : undefined,
                    }}
                  >
                    {loading ? "Enviando..." : "Quiero que me contacten ✓"}
                  </button>
                </div>

                <p className="text-center text-xs text-gray-400">
                  Tu información es confidencial. No compartimos tus datos.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Contacto directo debajo del form */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3">
          <a href="tel:02920475999"
            className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,48,135,0.08)" }}>
              <svg className="w-5 h-5" style={{ color: "#003087" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">Llamanos directamente</p>
              <p className="text-sm font-bold" style={{ color: "#003087" }}>02920-475999</p>
            </div>
          </a>
          <a href="mailto:seguropatagones@lasegunda.com.ar"
            className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(0,48,135,0.08)" }}>
              <svg className="w-5 h-5" style={{ color: "#003087" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">Mail</p>
              <p className="text-sm font-bold truncate" style={{ color: "#003087" }}>seguropatagones@<br className="sm:hidden"/>lasegunda.com.ar</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
