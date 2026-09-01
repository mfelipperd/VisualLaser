import { NextRequest, NextResponse } from "next/server";
import { computeSeoMetrics } from "@/lib/seo-metrics";

export const runtime = "nodejs";

const GITHUB_OWNER = "mfelipperd";
const GITHUB_REPO = "VisualLaser";
const GITHUB_BRANCH = "main";
const REPORT_PATH = "reports/seo-latest.json";

async function commitReportToGitHub(content: string) {
  const token = process.env.GITHUB_TOKEN?.trim();
  if (!token) {
    throw new Error("GITHUB_TOKEN não configurada");
  }

  const apiBase = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${REPORT_PATH}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  };

  let sha: string | undefined;
  const existing = await fetch(`${apiBase}?ref=${GITHUB_BRANCH}`, { headers });
  if (existing.ok) {
    const data = await existing.json();
    sha = data.sha;
  } else if (existing.status !== 404) {
    throw new Error(`Falha ao consultar arquivo existente: ${existing.status} ${await existing.text()}`);
  }

  const response = await fetch(apiBase, {
    method: "PUT",
    headers,
    body: JSON.stringify({
      message: "chore: atualiza relatório automático de SEO",
      content: Buffer.from(content).toString("base64"),
      branch: GITHUB_BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error(`Falha ao commitar relatório: ${response.status} ${await response.text()}`);
  }
}

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET?.trim();

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  try {
    const metrics = await computeSeoMetrics();
    await commitReportToGitHub(JSON.stringify(metrics, null, 2));
    return NextResponse.json({ ok: true, generatedAt: metrics.generatedAt });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro desconhecido" },
      { status: 502 }
    );
  }
}
