import React from "react";
import "./Projects.css";
import FadeIn from "../../components/FadeIn/FadeIn";
import { profile } from "../../data/profile";

const Projects = () => {
  return (
    <div className="container project" id="projects">
      <FadeIn>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center projects-intro">{profile.projectsIntro}</p>
      </FadeIn>
      <div className="row" id="ads">
        {profile.projects.map((project, index) => (
          <FadeIn
            key={project.id}
            variant="scale"
            delay={index * 50}
            className="col-md-4"
          >
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">{project.badge}</span>
                <img src={project.image} alt={project.alt} />
              </div>
              <div className="card-image-overly m-auto mt-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="card-detail-badge">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">{project.title}</h6>
                </div>
                {project.summary && (
                  <p className="project-summary">{project.summary}</p>
                )}
                <div className="project-actions">
                  <a
                    className="ad-btn"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                  {project.github && (
                    <a
                      className="ad-btn ad-btn-github"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Projects;
