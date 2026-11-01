import { useEffect, useState } from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";
import CopyRIght from "../Components/CopyRIght/CopyRIght";
import Cursor from "../Components/Cursor/Cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import GlowBg from "../Components/GLowBg/GlowBg";

const RootLayout = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const percent =
          scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
        setScrollPercent(Math.min(100, Math.max(0, percent)));
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 750, once: true, offset: 35, easing: "ease-out-cubic" });
    AOS.refresh();
  }, []);

  return (
    <div className="portfolio-shell">
      <ToastContainer theme="dark" position="bottom-right" />
      <div className="site-progress" aria-hidden="true">
        <ProgressBar percent={scrollPercent} height={2} />
      </div>
      <GlowBg />
      <Cursor />
      <Outlet />
      <CopyRIght />
    </div>
  );
};

export default RootLayout;
