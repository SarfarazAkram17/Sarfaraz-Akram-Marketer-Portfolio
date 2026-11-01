import { HiArrowUpRight } from "react-icons/hi2";
import { LuMegaphone, LuShare2 } from "react-icons/lu";
// import { LiaMedalSolid } from "react-icons/lia"; // Award metric (paused)
import servicesData from "../../servicesData";
import skillGroups from "../../skillsData";

const platformCount = skillGroups.reduce(
  (total, group) => total + group.skills.length,
  0,
);

const openTab = (tab) =>
  window.dispatchEvent(new CustomEvent("portfolio-tab", { detail: tab }));

const About = () => (
  <section
    className="section-block section-wrap"
    id="about"
    aria-labelledby="about-title"
  >
    <div className="section-heading" data-aos="fade-up">
      <div>
        <div className="section-kicker">A little context</div>
        <h2 className="section-title" id="about-title">
          Marketing with a plan.
        </h2>
      </div>
      <p className="section-description">
        I enjoy the whole process: understanding a business, finding the right
        audience, and turning attention into real customers.
      </p>
    </div>

    <div className="about-grid">
      <article className="about-story" data-aos="fade-up">
        <p>
          I’m a digital marketer from Bangladesh who loves helping small and
          growing businesses get noticed online. I focus on{" "}
          <strong>social media, paid ads, and search</strong> so every
          campaign has a clear goal and a way to measure it.
        </p>
        <p>
          I plan content, run Facebook and Instagram campaigns, and build the
          landing pages and websites that turn clicks into enquiries. I’m always
          testing new ideas, reading the data, and learning what works. Away
          from work, I’m passionate about cricket and proud to have earned a black
          belt, a good reminder that discipline and patience pay off.
        </p>
        <p>
          I work as a <strong>contract-based service provider</strong>: every
          project starts with an agreed scope, timeline, and deliverables, with
          simple plans, realistic goals, and regular updates so you always know
          where your budget is going.
        </p>
      </article>

      <aside className="about-aside" data-aos="fade-left">
        <div>
          <span className="aside-label">How I like to work</span>
          <p className="aside-statement">
            Good marketing should feel{" "}
            <span>clear, honest, and measurable.</span>
          </p>
        </div>
        <div className="skill-line" aria-label="Primary focus areas">
          {["Meta Ads", "Facebook", "Instagram", "SEO", "Landing pages"].map(
            (skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ),
          )}
        </div>
      </aside>
    </div>

    <div
      className="metric-strip"
      aria-label="Portfolio highlights"
      data-aos="fade-up"
    >
      <a className="metric-panel" href="#services">
        <strong>
          <LuMegaphone aria-hidden="true" />{" "}
          {String(servicesData.length).padStart(2, "0")}
        </strong>
        <span>Services offered</span>
      </a>
      <a
        className="metric-panel"
        href="#portfolio"
        onClick={() => openTab("skills")}
      >
        <strong>
          <LuShare2 aria-hidden="true" />{" "}
          {String(platformCount).padStart(2, "0")}
        </strong>
        <span>Marketing skills</span>
      </a>
      {/* Award metric (paused)
      <a
        className="metric-panel"
        href="#portfolio"
        onClick={() => openTab("awards")}
      >
        <strong>
          <LiaMedalSolid aria-hidden="true" /> 01
        </strong>
        <span>Award</span>
      </a>
      */}
    </div>

    <div className="about-cta">
      <a className="text-link" href="#contact">
        Let’s grow your business <HiArrowUpRight aria-hidden="true" />
      </a>
    </div>
  </section>
);

export default About;
