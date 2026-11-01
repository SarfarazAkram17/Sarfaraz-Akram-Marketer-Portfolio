/*
PROJECT CASE-STUDY PAGE IS PAUSED. Uncomment this file together with the
/project/:projectName route in src/main.jsx when you have work to show.

import { Link, useParams } from "react-router";
import { useEffect } from "react";
import projectsData from "../../projectsData";
import { GoArrowLeft } from "react-icons/go";
import { HiArrowUpRight } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { SlLayers } from "react-icons/sl";
import { LuCodeXml } from "react-icons/lu";

const ProjectDetails = () => {
  const { projectName } = useParams();
  const project = projectsData.find((item) => item.name === projectName);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [projectName]);

  if (!project) {
    return (
      <main className="detail-page">
        <div className="detail-not-found">
          <div className="section-kicker">404 / project not found</div>
          <h1>That case study isn’t here.</h1>
          <p>Head back to the portfolio to explore the available projects.</p>
          <Link to="/#portfolio" className="button-primary mt-6">
            <GoArrowLeft aria-hidden="true" /> Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const techs = project.techs || [];
  const features = project.features || [];

  return (
    <main className="detail-page">
      <nav className="detail-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <MdOutlineKeyboardArrowRight aria-hidden="true" />
        <Link to="/#portfolio">Projects</Link>
        <MdOutlineKeyboardArrowRight aria-hidden="true" />
        <span aria-current="page">{project.name}</span>
      </nav>

      <section className="detail-hero" aria-labelledby="project-title">
        <div data-aos="fade-up">
          <div className="section-kicker">Project / Case study</div>
          <h1 className="detail-title" id="project-title">{project.title}</h1>
          <p className="detail-description">{project.desc}</p>
          {project.status && <span className="project-status detail-status">{project.status}</span>}
          <div className="detail-metrics">
            <div className="detail-metric">
              <strong>{techs.length}</strong>
              <span>Technologies</span>
            </div>
            <div className="detail-metric">
              <strong>{features.length}</strong>
              <span>Feature areas</span>
            </div>
          </div>
          <div className="detail-actions">
            <a
              className="button-primary"
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live demo <HiArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="button-secondary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View source <HiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="detail-image-wrap" data-aos="fade-left">
          <img src={project.image} alt={`${project.title} interface`} />
        </div>
      </section>

      <div className="detail-content-grid">
        <aside>
          <section className="detail-panel" aria-labelledby="tech-title">
            <h2 id="tech-title"><LuCodeXml aria-hidden="true" /> Built with</h2>
            <div className="detail-techs">
              {techs.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
          </section>
          <section className="detail-panel" aria-labelledby="challenge-title">
            <h2 id="challenge-title"><SlLayers aria-hidden="true" /> A challenge</h2>
            <p>{project.challanges || "The project’s core challenge was bringing its main user flows together into one dependable experience."}</p>
          </section>
          <section className="detail-panel" aria-labelledby="future-title">
            <h2 id="future-title"><HiArrowUpRight aria-hidden="true" /> Looking ahead</h2>
            <p>{project.futurePlan || "No additional future plans have been documented for this project."}</p>
          </section>
        </aside>

        <section className="detail-panel" aria-labelledby="features-title">
          <h2 id="features-title"><SlLayers aria-hidden="true" /> Key features</h2>
          <div className="feature-list">
            {features.map((feature, index) => (
              <article className="feature-item" key={`${feature.title}-${index}`}>
                <h3><span className="feature-marker" aria-hidden="true" />{feature.title}</h3>
                <ul>
                  {(feature.points || []).map((point, pointIndex) => (
                    <li key={`${point}-${pointIndex}`}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetails;
*/
