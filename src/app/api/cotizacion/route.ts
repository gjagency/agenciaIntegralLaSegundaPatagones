import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();

  // Fixed base columns + all service-specific data in JSONB
  const data: Record<string, string> = {};
  if (body.comentario)      data.comment         = body.comentario;
  if (body.tipoSeguro)      data.insurance_type  = body.tipoSeguro;
  if (body.tipoCobertura)   data.coverage_type   = body.tipoCobertura;
  if (body.tienePrepaga)    data.has_health_plan = body.tienePrepaga;
  if (body.edadTitular)     data.holder_age      = body.edadTitular;
  if (body.cantPersonas)    data.people_count    = body.cantPersonas;
  if (body.destinoViaje)    data.trip_type       = body.destinoViaje;
  if (body.cantViajeros)    data.travelers_count = body.cantViajeros;
  if (body.fechaAproximada) data.approx_date     = body.fechaAproximada;

  const { error } = await supabase.from("quotations").insert([
    {
      service:  body.servicio,
      name:     body.nombre,
      phone:    body.telefono,
      email:    body.email || null,
      location: body.localidad,
      data:     Object.keys(data).length ? data : null,
    },
  ]);

  if (error) {
    console.error("Supabase error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Send notification email
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const serviceLabel: Record<string, string> = {
      seguros: "La Segunda – Seguros",
      prepaga: "Avalian – Prepaga",
      viajes:  "Coovaeco – Viajes",
    };

    const rows = [
      ["Servicio",   serviceLabel[body.servicio] || body.servicio],
      ["Nombre",     body.nombre],
      ["Teléfono",   body.telefono],
      ["Email",      body.email || "—"],
      ["Localidad",  body.localidad],
      body.tipoCobertura   && ["Tipo de cobertura",   body.tipoCobertura],
      body.tienePrepaga    && ["¿Tiene prepaga?",     body.tienePrepaga],
      body.tipoSeguro      && ["Tipo de seguro",      body.tipoSeguro],
      body.edadTitular     && ["Edad del titular",    body.edadTitular],
      body.cantPersonas    && ["Cantidad de personas",body.cantPersonas],
      body.destinoViaje    && ["Tipo de viaje",       body.destinoViaje],
      body.cantViajeros    && ["Cant. de viajeros",   body.cantViajeros],
      body.fechaAproximada && ["Fecha aproximada",    body.fechaAproximada],
      body.comentario      && ["Comentario",          body.comentario],
    ]
      .filter(Boolean)
      .map(
        (r) =>
          `<tr><td style="padding:6px 12px;font-weight:600;color:#555;white-space:nowrap">${r![0]}</td><td style="padding:6px 12px;color:#111">${r![1]}</td></tr>`
      )
      .join("");

    await transporter.sendMail({
      from:    `"La Segunda Patagones" <${process.env.SMTP_USER}>`,
      to:      process.env.MAIL_TO,
      subject: `Nueva consulta: ${serviceLabel[body.servicio] || body.servicio} — ${body.nombre}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden">
          <div style="background:#003087;padding:20px 24px">
            <h2 style="color:white;margin:0;font-size:18px">Nueva consulta recibida</h2>
          </div>
          <div style="padding:24px">
            <table style="width:100%;border-collapse:collapse;background:#f9fafb;border-radius:8px">
              ${rows}
            </table>
            <p style="margin-top:20px">
              <a href="${req.nextUrl.origin}/api/cotizaciones/csv?secret=${process.env.CSV_SECRET}"
                style="display:inline-block;background:#003087;color:white;padding:10px 20px;border-radius:8px;text-decoration:none;font-size:13px;font-weight:600">
                ⬇️ Descargar CSV actualizado
              </a>
            </p>
            <p style="margin-top:12px;font-size:12px;color:#9ca3af">
              Agencia Integral La Segunda · Dr. Baraja 312, Carmen de Patagones · 02920-475999
            </p>
          </div>
        </div>
      `,
    });
  } catch (mailErr) {
    console.error("Mail error:", mailErr);
  }

  return NextResponse.json({ ok: true });
}
