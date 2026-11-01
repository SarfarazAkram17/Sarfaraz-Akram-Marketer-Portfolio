import { HiArrowUpRight } from "react-icons/hi2";
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
    <div className="section-heading" data-aos="fade-up">
      <div>
        <div className="section-kicker">What I do</div>
        <h2 className="section-title" id="services-title">
          Services that grow your business.
        </h2>
      </div>
      <p className="section-description">
        From the first ad to the final report, I help businesses get found,
        get trusted and get customers, with a clear plan behind every step. All services are provided on a contract basis.
      </p>
    </div>

    <div className="service-grid">
      {servicesData.map((service, index) => (
        <article
          className="service-card"
          key={service.key}
          data-aos="fade-up"
          data-aos-delay={(index % 3) * 80}
        >
          <div className="service-top">
            <span className="service-icon">
              <service.icon aria-hidden="true" />
            </span>
            <span className="service-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
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
        </article>
      ))}
    </div>

    <ol className="process-strip" aria-label="How I work" data-aos="fade-up">
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
