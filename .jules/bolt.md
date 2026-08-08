## 2024-08-08 - Next.js Image Component missing sizes prop with fill

**Learning:** When using the Next.js `<Image>` component with the `fill` property, omitting the `sizes` property causes the browser to download unnecessarily large image sizes, which degrades performance (especially on mobile/smaller viewports). This anti-pattern was found in multiple places across this codebase.

**Action:** Always ensure the `sizes` property is included when using the `fill` property on Next.js `<Image>` components to optimize image loading performance based on the specific container size and viewport breakpoints.
