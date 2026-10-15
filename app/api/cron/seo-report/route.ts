import { NextRequest, NextResponse } from "next/server";
import { computeSeoMetrics } from "@/lib/seo-metrics";
import { commitReportToGitHub } from "@/lib/github-report";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET?.trim();

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const metrics = await computeSeoMetrics();
    await commitReportToGitHub(
      "reports/seo-latest.json",
      JSON.stringify(metrics, null, 2),
      "chore: atualiza relatório automático de SEO"
    );
    return NextResponse.json({ ok: true, generatedAt: metrics.generatedAt });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 502 }
    );
  }
}
