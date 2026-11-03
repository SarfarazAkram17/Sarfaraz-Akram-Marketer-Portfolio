import { useEffect, useRef } from "react";

// A card that tilts in 3D toward the pointer, with a moving light glare.
// Children can use `transform: translateZ(...)` to float above the card.
// Falls back to a plain card on touch screens and with reduced motion.
const TiltCard = ({ as: Tag = "div", max = 9, className = "", children, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return undefined;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const tick = () => {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      el.style.setProperty("--rx", `${cx.toFixed(2)}deg`);
      el.style.setProperty("--ry", `${cy.toFixed(2)}deg`);
      raf =
        Math.abs(tx - cx) > 0.02 || Math.abs(ty - cy) > 0.02
          ? window.requestAnimationFrame(tick)
          : 0;
    };

    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      ty = (px - 0.5) * 2 * max;
      tx = -(py - 0.5) * 2 * max;
      el.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
      el.classList.add("is-hot");
      if (!raf) raf = window.requestAnimationFrame(tick);
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      el.classList.remove("is-hot");
      if (!raf) raf = window.requestAnimationFrame(tick);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [max]);

  return (
    <Tag ref={ref} className={`tilt ${className}`} {...rest}>
      <div className="tilt-inner">
        {children}
        <span className="tilt-glare" aria-hidden="true" />
      </div>
    </Tag>
  );
};

export default TiltCard;
