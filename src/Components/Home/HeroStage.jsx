import { useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiMeta, SiGoogleads } from "react-icons/si";
import { LuSearch, LuLayoutTemplate } from "react-icons/lu";
import myPic from "../../assets/my-pic.png";

const DESIGN_SIZE = 640; // stage is 640px; the portrait coin inside is 350px
const COIN_LAYERS = Array.from({ length: 21 }, (_, i) => i);

const orbit = [
  { key: "facebook", name: "Facebook", Icon: FaFacebookF, color: "#7aa2ff" },
  { key: "instagram", name: "Instagram", Icon: FaInstagram, color: "#ff7fae" },
  { key: "meta", name: "Meta Ads", Icon: SiMeta, color: "#5aa8ff" },
  { key: "google", name: "Google Ads", Icon: SiGoogleads, color: "#ffc857" },
  { key: "linkedin", name: "LinkedIn", Icon: FaLinkedinIn, color: "#6db5ff" },
  { key: "youtube", name: "YouTube", Icon: FaYoutube, color: "#ff6b62" },
  { key: "tiktok", name: "TikTok", Icon: FaTiktok, color: "#5eead4" },
];

// The hero's 3D scene: a gold portrait coin, an orbiting ring of platform
// icons and floating service chips. Everything shares one 3D space and
// responds to the pointer. Static pose with reduced motion.
const HeroStage = () => {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const rigRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    const rig = rigRef.current;
    if (!wrap || !stage || !rig) return undefined;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const fine = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    let px = 0;
    let py = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;
    const start = performance.now();

    const fit = () => {
      const k = Math.min(1, wrap.clientWidth / DESIGN_SIZE);
      stage.style.setProperty("--k", k.toFixed(4));
    };

    const render = (now) => {
      const t = (now - start) / 1000;
      cx += (px - cx) * 0.06;
      cy += (py - cy) * 0.06;
      const sway = reduce ? 0 : Math.sin(t * 0.7) * 11;
      rig.style.setProperty("--ry", `${(cx * 26 + sway - 8).toFixed(2)}deg`);
      rig.style.setProperty("--rx", `${(-cy * 15 + 7).toFixed(2)}deg`);
      rig.style.setProperty("--a", `${(reduce ? 24 : t * 9).toFixed(2)}deg`);
      rig.style.setProperty("--gx", `${(50 + cx * 38).toFixed(1)}%`);
      rig.style.setProperty("--gy", `${(35 + cy * 30).toFixed(1)}%`);
    };

    const loop = (now) => {
      render(now);
      raf = window.requestAnimationFrame(loop);
    };
    const onMove = (event) => {
      px = (event.clientX / window.innerWidth - 0.5) * 2;
      py = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    fit();
    render(start);
    const resizeObserver = new ResizeObserver(fit);
    resizeObserver.observe(wrap);

    let visibility;
    if (!reduce) {
      if (fine)
        window.addEventListener("pointermove", onMove, { passive: true });
      raf = window.requestAnimationFrame(loop);
      // stop animating when the hero is off screen
      visibility = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !raf)
          raf = window.requestAnimationFrame(loop);
        if (!entry.isIntersecting && raf) {
          window.cancelAnimationFrame(raf);
          raf = 0;
        }
      });
      visibility.observe(wrap);
    }

    return () => {
      window.removeEventListener("pointermove", onMove);
      resizeObserver.disconnect();
      visibility?.disconnect();
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-visual" ref={wrapRef}>
      <div className="stage" ref={stageRef} aria-label="Profile portrait">
        <div className="stage-floor" aria-hidden="true" />
        <div className="rig" ref={rigRef}>
          <div className="stage-glow" aria-hidden="true" />

          <div className="ring ring--inner" aria-hidden="true" />
          <div className="ring ring--outer" aria-hidden="true">
            {orbit.map(({ key, name, Icon, color }, index) => (
              <div
                className="orb"
                key={key}
                style={{
                  "--t": `${((360 / orbit.length) * index).toFixed(2)}deg`,
                }}
              >
                <div className="orb-face" style={{ "--c": color }} title={name}>
                  <Icon aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          <div className="coin">
            {COIN_LAYERS.map((i) => (
              <i
                className="coin-layer"
                key={i}
                style={{ "--i": i }}
                aria-hidden="true"
              />
            ))}
            <div className="coin-face coin-front">
              <img src={myPic} alt="Portrait of Sarfaraz Akram" />
              <span className="coin-glare" aria-hidden="true" />
            </div>
            <div className="coin-face coin-back" aria-hidden="true">
              <span>SA</span>
            </div>
          </div>

          <div
            className="chip"
            style={{ "--x": "-215px", "--y": "-200px", "--z": "120px" }}
          >
            <div className="chip-body" style={{ "--delay": "0s" }}>
              <span className="chip-icon">
                <SiMeta aria-hidden="true" />
              </span>
              <span>
                <strong>Meta Ads</strong>
                <small>Facebook &amp; Instagram</small>
              </span>
            </div>
          </div>
          <div
            className="chip"
            style={{ "--x": "215px", "--y": "-72px", "--z": "170px" }}
          >
            <div className="chip-body" style={{ "--delay": "-2s" }}>
              <span className="chip-icon">
                <LuSearch aria-hidden="true" />
              </span>
              <span>
                <strong>SEO</strong>
                <small>Found on Google</small>
              </span>
            </div>
          </div>
          <div
            className="chip"
            style={{ "--x": "-205px", "--y": "205px", "--z": "145px" }}
          >
            <div className="chip-body" style={{ "--delay": "-4s" }}>
              <span className="chip-icon">
                <LuLayoutTemplate aria-hidden="true" />
              </span>
              <span>
                <strong>Landing pages</strong>
                <small>Clicks into leads</small>
              </span>
            </div>
          </div>
          <div
            className="chip chip--status"
            style={{ "--x": "165px", "--y": "248px", "--z": "100px" }}
          >
            <div className="chip-body" style={{ "--delay": "-1s" }}>
              <span className="status-dot" aria-hidden="true" />
              <span>
                <strong>Open for contracts</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStage;