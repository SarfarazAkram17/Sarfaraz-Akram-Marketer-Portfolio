import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaWhatsapp } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import HeroStage from "./HeroStage";
// import { FiDownload } from "react-icons/fi"; // re-enable with the resume button below

const Hero = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const roleWords = [
    "Digital Marketer",
    "Meta Ads Specialist",
    "Social Media Marketer",
  ];

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const updatePreference = () => setReduceMotion(motionPreference.matches);
    updatePreference();
    motionPreference.addEventListener("change", updatePreference);
    return () =>
      motionPreference.removeEventListener("change", updatePreference);
  }, []);

  return (
    <section className="hero-section section-wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          Contract-based digital marketer in Bangladesh
        </div>
        <h1 className="hero-title" id="hero-title">
          <span>Sarfaraz</span>
          <span>Akram</span>
        </h1>
        <p className="hero-role">
          I’m a{" "}
          <span>
            {reduceMotion ? (
              roleWords[0]
            ) : (
              <Typewriter
                words={roleWords}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={38}
                delaySpeed={1700}
              />
            )}
          </span>
        </p>
        <p className="hero-description">
          I help businesses grow online with Facebook and Instagram marketing,
          Meta ads, SEO, and landing pages that convert. I care about the
          numbers that matter: more reach, more leads, and more customers.
          Available for contract-based projects.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="button-primary">
            Get a free consultation <HiArrowUpRight aria-hidden="true" />
          </a>
          <a href="#services" className="button-secondary">
            View services <HiArrowDown aria-hidden="true" />
          </a>
          {/* Resume button: re-enable once /public/Sarfaraz-Akram-Resume.pdf
              is replaced with a digital marketing resume.
          <a
            href="/Sarfaraz-Akram-Resume.pdf"
            className="button-secondary"
            download
          >
            Download Resume <FiDownload aria-hidden="true" />
          </a>
          */}
          <div className="social-links" aria-label="Social profiles">
            <a
              className="social-link"
              href="https://wa.me/8801973254091"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Sarfaraz Akram on WhatsApp"
            >
              <FaWhatsapp size={18} aria-hidden="true" />
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/sarfarazakram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarfaraz Akram on LinkedIn"
            >
              <LiaLinkedinIn size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <HeroStage />
    </section>
  );
};

export default Hero;
