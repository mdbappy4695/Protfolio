import React from "react";
import "./About.css";
import FadeIn from "../../components/FadeIn/FadeIn";
import { profile } from "../../data/profile";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="row">
        <FadeIn variant="left" className="col-md-4 col-xl-4 col-lg-4 col-xs-12 about-img">
          <img src={profile.profileImage} alt={`${profile.name} profile`} />
        </FadeIn>
        <FadeIn
          variant="right"
          delay={120}
          className="col-md-8 col-xl-8 col-lg-8 col-xs-12 about-content"
        >
          <h1>About me</h1>
          <p>{profile.about}</p>
          <p className="about-soft-skills">
            <strong>Soft skills:</strong> {profile.softSkills}
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default About;
