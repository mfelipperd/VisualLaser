const GITHUB_OWNER = "mfelipperd";
const GITHUB_REPO = "VisualLaser";
const GITHUB_BRANCH = "main";

export async function commitReportToGitHub(
  path: string,
  content: string,
  message: string
) {
  const token = process.env.GITHUB_TOKEN?.trim();
  if (!token) {
    throw new Error("GITHUB_TOKEN não configurada");
  }

  const apiBase = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;
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
      message,
      content: Buffer.from(content).toString("base64"),
      branch: GITHUB_BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });

  if (!response.ok) {
    throw new Error(`Falha ao commitar relatório: ${response.status} ${await response.text()}`);
  }
}
