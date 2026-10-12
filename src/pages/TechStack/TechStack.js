import React from "react";
import "./Techstack.css";
import FadeIn from "../../components/FadeIn/FadeIn";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <div className="container techstack" id="techstack">
      <FadeIn>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center techstack-intro">
          Including programming languages, frameworks, databases, front-end and
          back-end tools, and APIs
        </p>
      </FadeIn>
      <div className="row">
        {TechstackList.map((tech, index) => (
          <FadeIn key={tech._id} delay={index * 40} className="col-md-3">
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                      <tech.icon className="tech-icon" aria-hidden="true" />
                    </div>
                    <div className="media-body">
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
