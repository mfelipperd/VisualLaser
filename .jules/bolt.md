## 2024-05-24 - Missing sizes attribute on Next.js Image with fill
**Learning:** When using the Next.js `<Image>` component with the `fill` property, always ensure the `sizes` property is also included to prevent the browser from downloading unnecessarily large image sizes. Many codebase components missed this, causing large full-viewport images to be downloaded inside small grid items.
**Action:** Always verify grid contexts when setting up `<Image fill />` components and explicitly calculate the max width (e.g. `(max-width: 768px) 100vw, 33vw` or fixed `80px`) to save bandwidth and improve performance.
## 2024-05-24 - Throttling Scroll Event Listeners
**Learning:** Unthrottled scroll event listeners using `window.addEventListener('scroll', handler)` without `{ passive: true }` and `requestAnimationFrame` can block the main thread and cause layout thrashing/jank, especially when performing DOM reads like `document.getElementById(...).offsetTop`.
**Action:** Always wrap scroll event handlers in `requestAnimationFrame` to decouple the logic from the raw event frequency and add `{ passive: true }` to the event listener options to prevent main thread blocking.
