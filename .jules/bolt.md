## 2024-05-24 - Next.js Image fill Anti-pattern
**Learning:** When using Next.js <Image> with the 'fill' property without a 'sizes' prop, the browser downloads the largest possible image (assuming 100vw). This is a critical performance bottleneck causing large payloads and bad LCP, especially in grid layouts.
**Action:** Always include a 'sizes' property accurately reflecting the grid layout behavior (e.g., '(max-width: 768px) 100vw, 33vw') when utilizing the 'fill' property on <Image> components.
