import { NextRequest, NextResponse } from "next/server";
import { computeGa4Metrics } from "@/lib/ga4-metrics";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const queryToken = request.nextUrl.searchParams.get("token");
  const expectedToken = process.env.GA4_REPORT_TOKEN?.trim();
  const providedToken =
    authHeader?.replace(/^Bearer\s+/i, "") ?? queryToken ?? undefined;

  if (!expectedToken || providedToken !== expectedToken) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const metrics = await computeGa4Metrics();
    return NextResponse.json(metrics);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 502 }
    );
  }
}
