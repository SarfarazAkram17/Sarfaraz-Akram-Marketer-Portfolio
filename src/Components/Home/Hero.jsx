import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { FaWhatsapp } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";
import myPic from "../../assets/my-pic.png";
// import { FiDownload } from "react-icons/fi"; // re-enable with the resume button below

const Hero = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const roleWords = [
    "Digital Marketer",
    "Meta Ads Specialist",
    "Social Media Marketer",
    "Growth-focused strategist",
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
      <div className="hero-copy" data-aos="fade-up">
        <div className="eyebrow">Contract-based digital marketer · Bangladesh</div>
        <h1 className="hero-title" id="hero-title">
          <span className="hero-name">Sarfaraz</span>
          <br />
          <span className="hero-accent">Akram.</span>
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
          numbers that matter: more reach, more leads, and more customers. Available for contract-based projects.
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

      <div
        className="hero-visual"
        data-aos="fade-left"
        aria-label="Profile portrait"
      >
        <div className="portrait-orbit" aria-hidden="true" />
        <div className="visual-index">
          <strong>PROFILE / 01</strong>
          <span>DIGITAL · MARKETING</span>
        </div>
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={6}
          glareEnable={false}
          tiltEnable={!reduceMotion}
          transitionSpeed={900}
          className="portrait-stage"
        >
          <div className="portrait-frame">
            <img src={myPic} alt="Portrait of Sarfaraz Akram" />
          </div>
        </Tilt>
        <div className="visual-caption">
          <span className="caption-dot" />
          <span>Strategy first. Growth you can measure.</span>
        </div>
      </div>

      <div className="hero-scroll-note" aria-hidden="true">
        Scroll to explore
      </div>
    </section>
  );
};

export default Hero;