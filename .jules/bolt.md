## 2026-07-02 - [Next.js Image `fill` Property Anti-Pattern]
**Learning:** Using the Next.js `<Image>` component with the `fill` property without providing the `sizes` property is an anti-pattern. Without `sizes`, the browser downloads a full-width image (100vw) regardless of the actual rendered size on screen, causing massive unnecessary data transfer and slower rendering, particularly on grid layouts.
**Action:** Whenever using `<Image fill />`, explicitly define the `sizes` property corresponding to the CSS layout breakpoints to serve appropriately sized images.
