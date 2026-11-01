import { useEffect } from "react";
import { useLocation } from "react-router";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Showcase from "../Components/Showcase/Showcase";
import Contact from "../Components/Contact/Contact";
import Navbar from "../Components/Navbar/Navbar";
import { IoArrowUpOutline } from "react-icons/io5";

const HomeLayout = () => {
  const { hash } = useLocation();
  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    if (!hash) return undefined;

    const section = document.getElementById(hash.slice(1));
    if (!section) return undefined;

    const frame = window.requestAnimationFrame(() => {
      const root = document.documentElement;
      const previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      section.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
      root.style.scrollBehavior = previousBehavior;
    });

    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <>
      <Navbar />
      <main className="site-main">
        <Home />
        <About />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <button
        className="back-top"
        type="button"
        aria-label="Back to top"
        onClick={backToTop}
      >
        <IoArrowUpOutline aria-hidden="true" />
      </button>
    </>
  );
};

export default HomeLayout;
