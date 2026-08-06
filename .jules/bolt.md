## 2024-03-24 - [Next.js Image Next.js Image Optimization Anti-Pattern]
**Learning:** `Next.js Image` tags with `fill` property that are used full-bleed or for background covers frequently lack the `sizes` property. This results in Next.js pulling the largest available image size across all device types, negatively impacting performance.
**Action:** When inspecting components that use `next/image` with the `fill` property, always ensure a `sizes` attribute is provided to aid the browser in downloading the optimal image size.
