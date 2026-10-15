import { getGoogleAccessToken } from "./google-auth";

const SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";
const WINDOW_DAYS = 28;
const DATA_LAG_DAYS = 3;

interface SearchAnalyticsRow {
  keys?: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface SearchAnalyticsResponse {
  rows?: SearchAnalyticsRow[];
}

async function querySearchAnalytics(
  accessToken: string,
  siteUrl: string,
  startDate: string,
  endDate: string,
  dimensions: string[],
  rowLimit = 500
): Promise<SearchAnalyticsRow[]> {
  const response = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
      siteUrl
    )}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startDate, endDate, dimensions, rowLimit }),
    }
  );

  if (!response.ok) {
    throw new Error(`Search Console API respondeu ${response.status}: ${await response.text()}`);
  }

  const data: SearchAnalyticsResponse = await response.json();
  return data.rows ?? [];
}

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function sumTotals(rows: SearchAnalyticsRow[]) {
  const clicks = rows.reduce((s, r) => s + r.clicks, 0);
  const impressions = rows.reduce((s, r) => s + r.impressions, 0);
  const weightedPosition = rows.reduce((s, r) => s + r.position * r.impressions, 0);
  return {
    clicks,
    impressions,
    ctr: impressions > 0 ? clicks / impressions : 0,
    position: impressions > 0 ? weightedPosition / impressions : 0,
  };
}

function diffByKey(
  currentRows: SearchAnalyticsRow[],
  previousRows: SearchAnalyticsRow[]
) {
  const prevMap = new Map(previousRows.map((r) => [r.keys?.[0] ?? "", r]));
  return currentRows
    .map((r) => {
      const key = r.keys?.[0] ?? "";
      const prev = prevMap.get(key);
      return {
        key,
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: r.ctr,
        position: r.position,
        clicksDelta: r.clicks - (prev?.clicks ?? 0),
        positionDelta: prev ? r.position - prev.position : null,
        isNew: !prev,
      };
    })
    .sort((a, b) => b.clicksDelta - a.clicksDelta);
}

export async function computeSeoMetrics() {
  const siteUrl = process.env.SEARCH_CONSOLE_SITE_URL?.trim() || "https://visuallaser.med.br/";
  const accessToken = await getGoogleAccessToken(SCOPE);

  const end = new Date();
  end.setDate(end.getDate() - DATA_LAG_DAYS);
  const start = new Date(end);
  start.setDate(start.getDate() - (WINDOW_DAYS - 1));
  const prevEnd = new Date(start);
  prevEnd.setDate(prevEnd.getDate() - 1);
  const prevStart = new Date(prevEnd);
  prevStart.setDate(prevStart.getDate() - (WINDOW_DAYS - 1));

  const range = { startDate: formatDate(start), endDate: formatDate(end) };
  const prevRange = { startDate: formatDate(prevStart), endDate: formatDate(prevEnd) };

  const [
    currentTotalsRows,
    previousTotalsRows,
    currentQueries,
    previousQueries,
    currentPages,
    previousPages,
  ] = await Promise.all([
    querySearchAnalytics(accessToken, siteUrl, range.startDate, range.endDate, []),
    querySearchAnalytics(accessToken, siteUrl, prevRange.startDate, prevRange.endDate, []),
    querySearchAnalytics(accessToken, siteUrl, range.startDate, range.endDate, ["query"], 1000),
    querySearchAnalytics(accessToken, siteUrl, prevRange.startDate, prevRange.endDate, ["query"], 1000),
    querySearchAnalytics(accessToken, siteUrl, range.startDate, range.endDate, ["page"], 1000),
    querySearchAnalytics(accessToken, siteUrl, prevRange.startDate, prevRange.endDate, ["page"], 1000),
  ]);

  const currentTotals = sumTotals(currentTotalsRows);
  const previousTotals = sumTotals(previousTotalsRows);

  const queryDiffs = diffByKey(currentQueries, previousQueries);
  const pageDiffs = diffByKey(currentPages, previousPages);

  const missedOpportunities = currentQueries
    .filter((r) => r.clicks === 0 && r.impressions >= 20 && r.position <= 15)
    .map((r) => ({
      query: r.keys?.[0] ?? "",
      impressions: r.impressions,
      position: r.position,
    }))
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 25);

  return {
    site: siteUrl,
    generatedAt: new Date().toISOString(),
    currentPeriod: { ...range, ...currentTotals },
    previousPeriod: { ...prevRange, ...previousTotals },
    topQueryMovers: {
      gainers: queryDiffs.filter((d) => d.clicksDelta > 0).slice(0, 15),
      losers: queryDiffs.filter((d) => d.clicksDelta < 0).slice(-15).reverse(),
      new: queryDiffs.filter((d) => d.isNew && d.clicks > 0).slice(0, 15),
    },
    topPageMovers: {
      gainers: pageDiffs.filter((d) => d.clicksDelta > 0).slice(0, 10),
      losers: pageDiffs.filter((d) => d.clicksDelta < 0).slice(-10).reverse(),
    },
    missedClickOpportunities: missedOpportunities,
  };
}
