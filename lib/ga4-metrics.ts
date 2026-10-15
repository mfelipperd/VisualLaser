import { getGoogleAccessToken } from "./google-auth";

const SCOPE = "https://www.googleapis.com/auth/analytics.readonly";
const WINDOW_DAYS = 28;
const DATA_LAG_DAYS = 2;
const KEY_EVENTS = ["agendar_consulta_click", "whatsapp_click", "generate_lead"];

interface Ga4Row {
  dimensionValues?: { value: string }[];
  metricValues?: { value: string }[];
}

interface Ga4ReportResponse {
  rows?: Ga4Row[];
}

async function runReport(
  accessToken: string,
  propertyId: string,
  body: Record<string, unknown>
): Promise<Ga4Row[]> {
  const response = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    throw new Error(`GA4 Data API respondeu ${response.status}: ${await response.text()}`);
  }

  const data: Ga4ReportResponse = await response.json();
  return data.rows ?? [];
}

function formatDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

function num(row: Ga4Row, index: number): number {
  return Number(row.metricValues?.[index]?.value ?? 0);
}

function dimAt(row: Ga4Row, index: number): string {
  return row.dimensionValues?.[index]?.value ?? "";
}

// GA4 appends a "dateRange" dimension as the last value in each row when the
// request has multiple dateRanges, so this works regardless of how many
// explicit dimensions the report has.
function splitByTrailingDateRange(rows: Ga4Row[]) {
  const current: Ga4Row[] = [];
  const previous: Ga4Row[] = [];
  for (const row of rows) {
    const dateRange = row.dimensionValues?.[row.dimensionValues.length - 1]?.value;
    (dateRange === "date_range_1" ? previous : current).push(row);
  }
  return { current, previous };
}

function totalsFromRows(rows: Ga4Row[]) {
  const row = rows[0];
  return {
    sessions: row ? num(row, 0) : 0,
    activeUsers: row ? num(row, 1) : 0,
    conversions: row ? num(row, 2) : 0,
    engagementRate: row ? num(row, 3) : 0,
  };
}

function eventCountsFromRows(rows: Ga4Row[]): Map<string, number> {
  return new Map(rows.map((row) => [dimAt(row, 0), num(row, 0)]));
}

interface KeyedMetrics {
  key: string;
  sessions: number;
  conversions: number;
}

function keyedMetricsFromRows(rows: Ga4Row[]): KeyedMetrics[] {
  return rows.map((row) => ({
    key: dimAt(row, 0),
    sessions: num(row, 0),
    conversions: num(row, 1),
  }));
}

function diffKeyed(current: KeyedMetrics[], previous: KeyedMetrics[]) {
  const prevMap = new Map(previous.map((r) => [r.key, r]));
  return current
    .map((r) => {
      const prev = prevMap.get(r.key);
      return {
        key: r.key,
        sessions: r.sessions,
        conversions: r.conversions,
        sessionsDelta: r.sessions - (prev?.sessions ?? 0),
        conversionsDelta: r.conversions - (prev?.conversions ?? 0),
        isNew: !prev,
      };
    })
    .sort((a, b) => b.sessionsDelta - a.sessionsDelta);
}

export async function computeGa4Metrics() {
  const propertyId = process.env.GA4_PROPERTY_ID?.trim();
  if (!propertyId) {
    throw new Error("GA4_PROPERTY_ID não configurada");
  }
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
  const dateRanges = [
    { startDate: range.startDate, endDate: range.endDate },
    { startDate: prevRange.startDate, endDate: prevRange.endDate },
  ];

  const [totalsRows, eventRows, channelRows, pageRows] = await Promise.all([
    runReport(accessToken, propertyId, {
      dateRanges,
      metrics: [
        { name: "sessions" },
        { name: "activeUsers" },
        { name: "conversions" },
        { name: "engagementRate" },
      ],
    }),
    runReport(accessToken, propertyId, {
      dateRanges,
      dimensions: [{ name: "eventName" }],
      metrics: [{ name: "eventCount" }],
      dimensionFilter: {
        filter: { fieldName: "eventName", inListFilter: { values: KEY_EVENTS } },
      },
      limit: 50,
    }),
    runReport(accessToken, propertyId, {
      dateRanges,
      dimensions: [{ name: "sessionDefaultChannelGroup" }],
      metrics: [{ name: "sessions" }, { name: "conversions" }],
      limit: 20,
    }),
    runReport(accessToken, propertyId, {
      dateRanges,
      dimensions: [{ name: "landingPagePlusQueryString" }],
      metrics: [{ name: "sessions" }, { name: "conversions" }],
      limit: 20,
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    }),
  ]);

  const totalsSplit = splitByTrailingDateRange(totalsRows);
  const currentTotals = totalsFromRows(totalsSplit.current);
  const previousTotals = totalsFromRows(totalsSplit.previous);

  const eventsSplit = splitByTrailingDateRange(eventRows);
  const currentEventCounts = eventCountsFromRows(eventsSplit.current);
  const previousEventCounts = eventCountsFromRows(eventsSplit.previous);
  const keyEvents = KEY_EVENTS.map((name) => {
    const current = currentEventCounts.get(name) ?? 0;
    const previous = previousEventCounts.get(name) ?? 0;
    return { name, current, previous, delta: current - previous };
  });

  const channelsSplit = splitByTrailingDateRange(channelRows);
  const channelDiffs = diffKeyed(
    keyedMetricsFromRows(channelsSplit.current),
    keyedMetricsFromRows(channelsSplit.previous)
  );

  const pagesSplit = splitByTrailingDateRange(pageRows);
  const topLandingPages = diffKeyed(
    keyedMetricsFromRows(pagesSplit.current),
    keyedMetricsFromRows(pagesSplit.previous)
  ).slice(0, 10);

  return {
    propertyId,
    generatedAt: new Date().toISOString(),
    currentPeriod: { ...range, ...currentTotals },
    previousPeriod: { ...prevRange, ...previousTotals },
    keyEvents,
    channels: {
      gainers: channelDiffs.filter((d) => d.sessionsDelta > 0).slice(0, 10),
      losers: channelDiffs.filter((d) => d.sessionsDelta < 0).slice(-10).reverse(),
    },
    topLandingPages,
  };
}
