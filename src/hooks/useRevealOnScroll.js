import { useLayoutEffect } from "react";

// Any element with `data-reveal` stands up into place (a 3D entrance) the
// first time it scrolls into view. Optional `data-delay="120"` staggers it.
// Skipped entirely with reduced motion, so nothing is ever hidden.
export default function useRevealOnScroll() {
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.style.setProperty("--d", `${el.dataset.delay || 0}ms`);
      el.classList.add("reveal");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
