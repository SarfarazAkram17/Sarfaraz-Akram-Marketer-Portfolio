/*
PROJECTS ARE PAUSED. Uncomment this file, add entries to src/projectsData.js,
and re-enable the Projects tab in Showcase.jsx when you have work to show.

import { useState } from "react";
import { Link } from "react-router";
import { HiArrowDown, HiArrowUp, HiArrowUpRight } from "react-icons/hi2";
import projectsData from "../../projectsData";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            key={project.name}
            data-aos={project.aos || "fade-up"}
            className={`project-card ${index === 0 ? "project-card-featured" : ""}`}
          >
            <div className="project-art">
              <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              <span className="project-number">PROJECT / {String(index + 1).padStart(2, "0")}</span>
              {project.status && <span className="project-status">{project.status}</span>}
            </div>
            <div className="project-body">
              <span className="project-category">Full-stack application</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.desc}</p>
              <div className="project-techs" aria-label={`${project.title} technologies`}>
                {project.techs.slice(0, 5).map((tech) => (
                  <span className="project-tech" key={tech}>{tech}</span>
                ))}
                {project.techs.length > 5 && (
                  <span className="project-tech">+{project.techs.length - 5}</span>
                )}
              </div>
              <div className="project-links">
                <div className="project-link-group">
                  <a
                    className="text-link"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    Live demo <HiArrowUpRight aria-hidden="true" />
                  </a>
                  <a
                    className="text-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source on GitHub`}
                  >
                    Source <HiArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                <Link
                  className="text-link"
                  to={`/project/${encodeURIComponent(project.name)}`}
                  aria-label={`Read details about ${project.title}`}
                  data-cursor-label="VIEW"
                >
                  Case study <HiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {projectsData.length > 3 && (
        <button
          type="button"
          onClick={() => setShowAll((expanded) => !expanded)}
          className="show-all-button"
          aria-expanded={showAll}
        >
          {showAll ? "Show fewer projects" : `View all ${projectsData.length} projects`}
          {showAll ? <HiArrowUp aria-hidden="true" /> : <HiArrowDown aria-hidden="true" />}
        </button>
      )}
    </div>
  );
};

export default Projects;
*/
