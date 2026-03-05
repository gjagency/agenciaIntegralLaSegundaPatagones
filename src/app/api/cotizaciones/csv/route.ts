import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// All possible columns — base + every service-specific key
const BASE_HEADERS = ["id", "created_at", "service", "name", "phone", "email", "location"];
const BASE_LABELS  = ["ID", "Fecha", "Servicio", "Nombre", "Teléfono", "Email", "Localidad"];

const DATA_HEADERS = [
  "insurance_type",
  "coverage_type",
  "has_health_plan",
  "holder_age",
  "people_count",
  "trip_type",
  "travelers_count",
  "approx_date",
  "comment",
];
const DATA_LABELS = [
  "Tipo de seguro",
  "Tipo de cobertura",
  "Tiene prepaga",
  "Edad del titular",
  "Cantidad de personas",
  "Tipo de viaje",
  "Cantidad de viajeros",
  "Fecha aproximada",
  "Comentario",
];
const ALL_HEADERS = [...BASE_HEADERS, ...DATA_HEADERS];
const ALL_LABELS  = [...BASE_LABELS,  ...DATA_LABELS];

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!secret || secret !== process.env.CSV_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("quotations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!data || data.length === 0) return new NextResponse("No data yet", { status: 200 });

  const escape = (v: unknown) => `"${String(v ?? "").replace(/"/g, '""')}"`;

  const csvRows = [
    ALL_LABELS.join(","),
    ...data.map((row) =>
      ALL_HEADERS.map((h) =>
        BASE_HEADERS.includes(h)
          ? escape(row[h])
          : escape(row.data?.[h])
      ).join(",")
    ),
  ];

  const date = new Date().toISOString().split("T")[0];
  return new NextResponse(csvRows.join("\n"), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="quotations-${date}.csv"`,
    },
  });
}
