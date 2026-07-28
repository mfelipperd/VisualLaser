## 2024-07-28 - Missing `sizes` attribute on Next.js `<Image>` with `fill`
**Learning:** The Next.js `<Image>` component downloads large images when the `fill` property is used without a `sizes` attribute, leading to unnecessary bandwidth consumption and slower page loads.
**Action:** Always provide the `sizes` attribute alongside `fill` in `<Image>` to guide the browser in selecting the appropriate image size, especially for responsive layouts or fixed-width containers.
