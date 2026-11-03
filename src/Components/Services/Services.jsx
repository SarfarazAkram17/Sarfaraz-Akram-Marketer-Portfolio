import { HiArrowUpRight } from "react-icons/hi2";
import TiltCard from "../Tilt3D/TiltCard";
import servicesData, { processSteps } from "../../servicesData";

// Scroll to the contact form and pre-fill its subject line.
const requestService = (title) => {
  window.dispatchEvent(
    new CustomEvent("contact-subject", { detail: `${title} inquiry` }),
  );
  document.getElementById("contact")?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
};

const Services = () => (
  <section
    className="section-block services-section section-wrap"
    id="services"
    aria-labelledby="services-title"
  >
    <div className="section-heading" data-reveal>
      <h2 className="section-title" id="services-title">
        Services that grow your business.
      </h2>
      <p className="section-description">
        From the first ad to the final report, I help businesses get found,
        get trusted and get customers, with a clear plan behind every step.
        All services are provided on a contract basis.
      </p>
    </div>

    <div className="service-grid">
      {servicesData.map((service, index) => (
        <div
          className="service-slot"
          key={service.key}
          data-reveal
          data-delay={(index % 3) * 90}
        >
          <TiltCard as="article" className="service-card" max={8}>
            <span className="service-icon">
              <service.icon aria-hidden="true" />
            </span>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <ul className="service-points">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <button
              type="button"
              className="text-link service-cta"
              onClick={() => requestService(service.title)}
              data-cursor-label="ASK"
              aria-label={`Ask about ${service.title}`}
            >
              Ask about this <HiArrowUpRight aria-hidden="true" />
            </button>
          </TiltCard>
        </div>
      ))}
    </div>

    <ol className="process-strip" aria-label="How I work" data-reveal>
      {processSteps.map((step, index) => (
        <li className="process-step" key={step.title}>
          <strong>{String(index + 1).padStart(2, "0")}</strong>
          <h3>{step.title}</h3>
          <span>{step.text}</span>
        </li>
      ))}
    </ol>
  </section>
);

export default Services;
