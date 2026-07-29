## 2024-05-24 - [Unoptimized Next.js Images with Fill]
**Learning:** Found multiple instances of the `<Image fill />` pattern without the `sizes` attribute. By default, Next.js assumes images with `fill` take up `100vw`, downloading massive image variants even for small containers (like logos fixed at 80px width).
**Action:** Always verify `<Image fill />` includes an accurate `sizes` prop mapped to the container's rendered size. When container sizes are fixed, provide absolute pixel values (e.g. `sizes="80px"`). When responsive, provide precise viewport-based queries.
