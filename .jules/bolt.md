## 2024-06-14 - Missing `sizes` attribute on Next.js `<Image>` with `fill`

**Learning:** Next.js `<Image>` components using the `fill` prop default to `100vw` size, causing the browser to download unnecessarily large image sizes, which degrades performance (LCP, bundle size, bandwidth). This is a common anti-pattern in the codebase.
**Action:** Always include the `sizes` property when using the `fill` property on Next.js `<Image>` components to prevent downloading unnecessarily large image sizes. Adjust `sizes` to match responsive behavior (e.g., `sizes="(max-width: 768px) 100vw, 50vw"` or `sizes="80px"` for fixed containers).
