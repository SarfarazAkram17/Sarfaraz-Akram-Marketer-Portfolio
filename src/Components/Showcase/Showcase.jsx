import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { LuShare2 } from "react-icons/lu";
// import { LuCodeXml } from "react-icons/lu";            // Projects tab (paused)
// import { PiCertificate } from "react-icons/pi";        // Certificates tab (paused)
// import { LiaMedalSolid } from "react-icons/lia";        // Awards tab (paused)
import MarketingSkills from "./MarketingSkills";
// import Projects from "./Projects";                     // Projects tab (paused)
// import Certificates from "./Certificates";             // Certificates tab (paused)
// import Awards from "./Awards";                       // Awards tab (paused)

const tabs = [
  {
    key: "skills",
    label: "Marketing skills",
    icon: <LuShare2 aria-hidden="true" />,
  },
  // Paused until there is marketing work / a marketing certificate to show:
  // { key: "projects", label: "Projects", icon: <LuCodeXml aria-hidden="true" /> },
  // { key: "certificates", label: "Certificates", icon: <PiCertificate aria-hidden="true" /> },
  // { key: "awards", label: "Awards", icon: <LiaMedalSolid aria-hidden="true" /> },
];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const tabRefs = useRef([]);

  useEffect(() => {
    const selectTab = (event) => {
      if (tabs.some((tab) => tab.key === event.detail)) setActiveTab(event.detail);
    };
    window.addEventListener("portfolio-tab", selectTab);
    return () => window.removeEventListener("portfolio-tab", selectTab);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => AOS.refreshHard());
    return () => window.cancelAnimationFrame(frame);
  }, [activeTab]);

  const panel = {
    skills: <MarketingSkills />,
    // projects: <Projects />,
    // certificates: <Certificates />,
    // awards: <Awards />,
  }[activeTab];

  const handleTabKeyDown = (event, index) => {
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    setActiveTab(tabs[nextIndex].key);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      className="section-block showcase-section section-wrap"
      id="portfolio"
      aria-labelledby="portfolio-title"
    >
      <div className="section-heading showcase-head" data-aos="fade-up">
        <div>
          <div className="section-kicker">Skills &amp; expertise</div>
          <h2 className="section-title" id="portfolio-title">Skills that drive growth.</h2>
        </div>
        <p className="section-description">
          The platforms and disciplines I work with every day to help
          businesses grow online.
        </p>
      </div>

      <div className="showcase-tabs" role="tablist" aria-label="Portfolio content">
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            ref={(element) => { tabRefs.current[index] = element; }}
            type="button"
            role="tab"
            id={`tab-${tab.key}`}
            aria-controls="portfolio-panel"
            aria-selected={activeTab === tab.key}
            tabIndex={activeTab === tab.key ? 0 : -1}
            className="showcase-tab"
            onClick={() => setActiveTab(tab.key)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id="portfolio-panel"
        className="showcase-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
      >
        {panel}
      </div>
    </section>
  );
};

export default Showcase;
