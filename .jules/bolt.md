## 2024-05-24 - Scroll Event Performance Learnings
**Learning:** The app attaches synchronous scroll event listeners in multiple places (`Header.tsx`, `StickyAppointment.tsx`, `LandingHeader.tsx`). This causes constant re-evaluations during scroll, potentially leading to jank and main thread blocking.
**Action:** Replace direct scroll event listeners with throttled versions or CSS/Intersection Observer alternatives to improve scroll performance.
