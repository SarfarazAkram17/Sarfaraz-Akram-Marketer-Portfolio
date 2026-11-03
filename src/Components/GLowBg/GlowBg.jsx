import { useEffect, useRef } from "react";

// Page-wide 3D particle field. Points sit at different depths; scrolling flies
// the camera forward through them and the pointer shifts the viewpoint.
const COUNT = 150;
const DEPTH = 1500;
const FOV = 520;

const GlowBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return undefined;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const points = Array.from({ length: COUNT }, () => ({
      x: (Math.random() - 0.5) * 2400,
      y: (Math.random() - 0.5) * 1700,
      z: Math.random() * DEPTH,
      r: Math.random() * 1.3 + 0.6,
      gold: Math.random() < 0.13,
    }));

    let w = 0;
    let h = 0;
    let raf = 0;
    let mx = 0;
    let my = 0;
    let sx = 0;
    let sy = 0;
    let scroll = window.scrollY;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) draw(0);
    };

    const draw = (time) => {
      scroll += (window.scrollY - scroll) * 0.07;
      sx += (mx - sx) * 0.05;
      sy += (my - sy) * 0.05;
      ctx.clearRect(0, 0, w, h);

      const camera = scroll * 0.9 + (reduce ? 0 : time * 0.025);
      const shown = [];

      for (const p of points) {
        const z = (((p.z - camera) % DEPTH) + DEPTH) % DEPTH;
        const s = FOV / (z + FOV);
        const alpha = Math.min(1, z / 140) * Math.min(1, s * 1.6) * 1.1;
        shown.push({
          x: w / 2 + (p.x - sx * 140) * s,
          y: h / 2 + (p.y - sy * 90) * s,
          s,
          alpha,
          p,
        });
      }

      // faint links between close, bright points: reads as a network
      ctx.lineWidth = 1;
      for (let i = 0; i < shown.length; i += 1) {
        const a = shown[i];
        if (a.alpha < 0.3) continue;
        for (let j = i + 1; j < shown.length; j += 1) {
          const b = shown[j];
          if (b.alpha < 0.3) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 11000) {
            ctx.strokeStyle = `rgba(130,145,255,${(0.16 * Math.min(a.alpha, b.alpha) * (1 - d2 / 11000)).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const d of shown) {
        if (d.alpha <= 0.02) continue;
        ctx.fillStyle = d.p.gold
          ? `rgba(255,191,90,${d.alpha.toFixed(3)})`
          : `rgba(160,172,255,${d.alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.p.r * d.s * 5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (time) => {
      draw(time);
      raf = window.requestAnimationFrame(loop);
    };
    const onMove = (event) => {
      mx = (event.clientX / window.innerWidth - 0.5) * 2;
      my = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    const onVisibility = () => {
      if (reduce) return;
      if (document.hidden) {
        window.cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        raf = window.requestAnimationFrame(loop);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      raf = window.requestAnimationFrame(loop);
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="ambient-backdrop" aria-hidden="true">
      <span className="ambient-orb ambient-orb--blue" />
      <span className="ambient-orb ambient-orb--gold" />
      <canvas ref={canvasRef} className="ambient-canvas" />
    </div>
  );
};

export default GlowBg;
