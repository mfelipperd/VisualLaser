## 2024-07-03 - Next.js Image `fill` without `sizes` Anti-Pattern

**Learning:** Using the Next.js `<Image>` component with the `fill` property without also specifying the `sizes` property causes the browser to download unoptimized, unnecessarily large image sizes. The browser needs the `sizes` attribute to understand what size of image to request before the page layout is fully calculated.
**Action:** Always include the `sizes` property when using the Next.js `<Image>` component with the `fill` property to prevent excessive bandwidth usage and improve load times. Determine the appropriate sizes based on the surrounding layout or CSS grid constraints.
