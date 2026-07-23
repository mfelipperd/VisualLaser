## 2024-06-25 - Prevent Oversized Image Downloads

**Learning:** When using the Next.js `<Image>` component with the `fill` property, the `sizes` property must also be explicitly set. Omitting `sizes` is an anti-pattern in this codebase that causes the browser to download full-resolution images even on small screens, leading to unnecessarily large payload sizes and degraded performance. The layout relies on `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` which means the image size relative to the viewport changes drastically across breakpoints.

**Action:** Always include the `sizes` property alongside `fill` on Next.js `<Image>` components, tailored to the surrounding layout grid (e.g., `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"` for a standard responsive grid).
