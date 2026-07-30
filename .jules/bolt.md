## 2024-07-30 - [Next.js Image Fill Anti-Pattern]
**Learning:** Using the Next.js `<Image>` component with the `fill` property without providing a `sizes` property causes the browser to download unnecessarily large image sizes, leading to poor performance, especially on mobile devices.
**Action:** Always include a `sizes` property that accurately reflects the image's display size across different breakpoints when using `fill`.
