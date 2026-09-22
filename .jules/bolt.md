## 2024-05-24 - Missing sizes attribute on Next.js Image with fill
**Learning:** When using the Next.js `<Image>` component with the `fill` property, always ensure the `sizes` property is also included to prevent the browser from downloading unnecessarily large image sizes. Many codebase components missed this, causing large full-viewport images to be downloaded inside small grid items.
**Action:** Always verify grid contexts when setting up `<Image fill />` components and explicitly calculate the max width (e.g. `(max-width: 768px) 100vw, 33vw` or fixed `80px`) to save bandwidth and improve performance.

## 2024-03-24 - Unthrottled scroll event listener anti-pattern
**Learning:** React/Next.js scroll events attached directly via `window.addEventListener('scroll', handler)` block the main thread and cause layout thrashing/jank because they fire synchronously with the browser's scroll action.
**Action:** When adding scroll event handlers, always wrap them in `requestAnimationFrame` to decouple the execution from the scroll event frequency, and use the `{ passive: true }` option on `addEventListener` to tell the browser the handler will not call `preventDefault()`, allowing for smoother scrolling.
