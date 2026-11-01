import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const INTERACTIVE_SELECTOR =
  "a[href], button:not(:disabled), select, [role='button'], [data-cursor-label], input[type='button'], input[type='submit'], input[type='reset']";
const TEXT_ENTRY_SELECTOR =
  "textarea, [contenteditable='true'], input:not([type='button']):not([type='submit']):not([type='reset']):not([type='checkbox']):not([type='radio']):not([type='range']):not([type='color']):not([type='file'])";

const Cursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const supportsFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      !cursor ||
      !ring ||
      !dot ||
      !supportsFinePointer.matches ||
      prefersReducedMotion.matches
    ) {
      return;
    }

    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let ringX = 0;
    let ringY = 0;
    let hasPointerPosition = false;
    let releaseTimer = 0;
    document.body.classList.add("custom-cursor-enabled");

    const updateRingPosition = () => {
      const deltaX = pointerX - ringX;
      const deltaY = pointerY - ringY;
      ringX += deltaX * 0.18;
      ringY += deltaY * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      if (Math.abs(deltaX) > 0.12 || Math.abs(deltaY) > 0.12) {
        frame = window.requestAnimationFrame(updateRingPosition);
        return;
      }

      ringX = pointerX;
      ringY = pointerY;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      frame = 0;
    };

    const handlePointerMove = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      cursor.classList.add("is-visible");

      if (!hasPointerPosition) {
        ringX = pointerX;
        ringY = pointerY;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
        hasPointerPosition = true;
      }

      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;

      const target = event.target instanceof Element ? event.target : null;
      const textEntry = target?.closest(TEXT_ENTRY_SELECTOR);
      const interactiveElement = target?.closest(INTERACTIVE_SELECTOR);
      const isInteractive = Boolean(interactiveElement && !textEntry);

      cursor.classList.toggle("is-hidden", Boolean(textEntry));
      cursor.classList.toggle(
        "is-interactive",
        isInteractive
      );
      ring.dataset.label = isInteractive
        ? interactiveElement.dataset.cursorLabel ||
          (interactiveElement.matches("a[href]") ? "OPEN" : "SELECT")
        : "";

      if (!frame && (pointerX !== ringX || pointerY !== ringY)) {
        frame = window.requestAnimationFrame(updateRingPosition);
      }
    };

    const handlePointerLeave = () => {
      cursor.classList.remove("is-visible", "is-pressed");
      hasPointerPosition = false;
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      if (releaseTimer) window.clearTimeout(releaseTimer);
      releaseTimer = 0;
    };
    const handlePointerDown = () => {
      if (releaseTimer) window.clearTimeout(releaseTimer);
      releaseTimer = 0;
      cursor.classList.add("is-pressed");
    };
    const handlePointerUp = () => {
      if (releaseTimer) window.clearTimeout(releaseTimer);
      releaseTimer = window.setTimeout(() => {
        cursor.classList.remove("is-pressed");
        releaseTimer = 0;
      }, 120);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      document.body.classList.remove("custom-cursor-enabled");
      if (frame) window.cancelAnimationFrame(frame);
      if (releaseTimer) window.clearTimeout(releaseTimer);
    };
  }, []);

  return createPortal(
    <span ref={cursorRef} className="portfolio-cursor" aria-hidden="true">
      <span ref={ringRef} className="portfolio-cursor__ring" data-label="" />
      <span ref={dotRef} className="portfolio-cursor__dot" />
    </span>,
    document.body
  );
};

export default Cursor;
