export type GtagEventParams = Record<string, string | number | boolean | undefined>;

export const trackEvent = (eventName: string, params?: GtagEventParams) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
};
