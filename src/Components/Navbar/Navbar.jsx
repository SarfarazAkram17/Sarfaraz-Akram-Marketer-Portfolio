import { useEffect, useRef, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const navLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Services", target: "services" },
  { label: "Portfolio", target: "portfolio" },
  { label: "Contact", target: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuButtonRef = useRef(null);

  const handleScrollTo = (target) => {
    const wasMobileMenuOpen = isOpen;
    document.getElementById(target)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
    setIsOpen(false);
    if (wasMobileMenuOpen) menuButtonRef.current?.focus();
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        let closest = "home";
        let closestOffset = Infinity;
        navLinks.forEach(({ target }) => {
          const element = document.getElementById(target);
          if (!element) return;
          const offset = Math.abs(element.getBoundingClientRect().top - 110);
          if (offset < closestOffset) {
            closest = target;
            closestOffset = offset;
          }
        });
        setActiveSection(closest);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const renderLinks = () =>
    navLinks.map(({ label, target }) => (
      <button
        key={target}
        type="button"
        onClick={() => handleScrollTo(target)}
        aria-current={activeSection === target ? "location" : undefined}
        className={`nav-link ${activeSection === target ? "active-link" : ""}`}
      >
        {label}
      </button>
    ));

  return (
    <header className="site-header">
      <div className="nav-inner">
        <button
          type="button"
          className="brand-mark"
          onClick={() => handleScrollTo("home")}
          aria-label="Sarfaraz Akram, home"
        >
          <span className="brand-monogram">SA</span>
          <span className="brand-name">
            Sarfaraz <span>Akram</span>
          </span>
        </button>

        <nav className="desktop-nav" aria-label="Main navigation">
          {renderLinks()}
        </nav>

        <button
          type="button"
          className="nav-contact cursor-pointer"
          onClick={() => handleScrollTo("contact")}
        >
          Hire me <HiArrowUpRight aria-hidden="true" />
        </button>

        <button
          ref={menuButtonRef}
          className="mobile-menu-button"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <IoCloseOutline size={22} /> : <IoMenuOutline size={22} />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${isOpen ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {navLinks.map(({ label, target }) => (
          <button
            key={target}
            type="button"
            tabIndex={isOpen ? 0 : -1}
            onClick={() => handleScrollTo(target)}
            aria-current={activeSection === target ? "location" : undefined}
            className={activeSection === target ? "active-link" : ""}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
