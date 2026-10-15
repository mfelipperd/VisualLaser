import crypto from "crypto";

const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";

function base64url(input: Buffer | string): string {
  return (Buffer.isBuffer(input) ? input : Buffer.from(input))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function getGoogleAccessToken(scope: string): Promise<string> {
  const clientEmail = process.env.GOOGLE_SA_CLIENT_EMAIL?.trim();
  const privateKeyRaw = process.env.GOOGLE_SA_PRIVATE_KEY?.trim();

  if (!clientEmail || !privateKeyRaw) {
    throw new Error(
      "GOOGLE_SA_CLIENT_EMAIL / GOOGLE_SA_PRIVATE_KEY não configuradas"
    );
  }

  const privateKey = privateKeyRaw.replace(/\\n/g, "\n");
  const now = Math.floor(Date.now() / 1000);

  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = base64url(
    JSON.stringify({
      iss: clientEmail,
      scope,
      aud: TOKEN_ENDPOINT,
      exp: now + 3600,
      iat: now,
    })
  );
  const signingInput = `${header}.${claim}`;
  const signature = base64url(
    crypto.createSign("RSA-SHA256").update(signingInput).sign(privateKey)
  );
  const jwt = `${signingInput}.${signature}`;

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!response.ok) {
    throw new Error(`Falha ao obter access token: ${await response.text()}`);
  }

  const data = await response.json();
  return data.access_token;
}
