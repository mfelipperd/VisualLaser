import { NextRequest, NextResponse } from "next/server";
import { computeGa4Metrics } from "@/lib/ga4-metrics";
import { commitReportToGitHub } from "@/lib/github-report";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET?.trim();

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const metrics = await computeGa4Metrics();
    await commitReportToGitHub(
      "reports/ga4-latest.json",
      JSON.stringify(metrics, null, 2),
      "chore: atualiza relatório automático do GA4"
    );
    return NextResponse.json({ ok: true, generatedAt: metrics.generatedAt });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 502 }
    );
  }
}
