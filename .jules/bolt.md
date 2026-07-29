## 2024-07-13 - [Image Fill Performance Pattern]
**Learning:** Next.js `<Image>` components using the `fill` property without a corresponding `sizes` property cause the browser to download unnecessarily large image sizes, acting as a performance bottleneck specific to this architecture.
**Action:** Always include a responsive `sizes` property when using `<Image fill>` to ensure optimal image loading and prevent oversized resource downloads.
