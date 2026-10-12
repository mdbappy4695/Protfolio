import React from "react";
import "./Experience.css";
import FadeIn from "../../components/FadeIn/FadeIn";
import { profile } from "../../data/profile";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <FadeIn>
        <h1>Professional Experience</h1>
      </FadeIn>
      {profile.experiences.map((exp, index) => (
        <FadeIn key={exp.id} delay={index * 100}>
          <article className="experience-card">
            <h2>{exp.role}</h2>
            <p className="experience-meta">
              <span className="experience-company">{exp.company}</span>
              <span className="experience-duration">{exp.duration}</span>
            </p>
            <p className="experience-location">{exp.location}</p>

            <ul className="responsibilities">
              {exp.responsibilities.map((res) => (
                <li key={res}>{res}</li>
              ))}
            </ul>

            <h3 className="experience-projects-title">Key projects</h3>
            {exp.projects.map((proj, projIndex) => (
              <FadeIn key={proj.name} delay={80 + projIndex * 60}>
                <div className="experience-project">
                  <h4>{proj.name}</h4>
                  <ul>
                    {proj.description.map((desc) => (
                      <li key={desc}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </article>
        </FadeIn>
      ))}
    </div>
  );
};

export default Experience;
