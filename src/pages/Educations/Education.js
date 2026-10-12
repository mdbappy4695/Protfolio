import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import FadeIn from "../../components/FadeIn/FadeIn";
import { profile } from "../../data/profile";

const Education = () => {
  return (
    <div className="education" id="education">
      <FadeIn>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Details
        </h2>
        <hr />
      </FadeIn>
      <VerticalTimeline>
        {profile.education.map((item) => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "var(--color-surface)",
              color: "var(--color-text)",
              border: "1px solid var(--color-border)",
            }}
            contentArrowStyle={{ borderRight: "7px solid var(--color-surface)" }}
            date={item.date}
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">{item.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.institution}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
