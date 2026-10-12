import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-4 col-xl-4 col-lg-4 col-xs-12 about-img">
              <img src="images/profile.jpg" alt="profile_pic" />
            </div>
            <div className="col-md-8 col-xl-8 col-lg-8 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                I am an enthusiastic Software Developer with 1.5 years of professional experience in developing enterprise-grade HRM solutions using Angular, ASP.NET Core Web API, and SQL Server. I specialize in building scalable, secure, and maintainable applications that serve 1,000+ employees and streamline core HR operations.

Over the past year, I have contributed to the successful delivery of 4+ major HRM modules including Attendance Management, Leave Management, Lunch Request System, and Exit Interview Management. These systems improved workflow automation by 40%, reduced manual effort, and enhanced data accuracy across the organization.

I have developed and integrated 50+ RESTful APIs, optimized 15+ SQL stored procedures, and improved application performance by 45% through query tuning and architectural refinements. On the frontend, I’ve built 35+ reusable Angular components, ensuring consistency and responsiveness across multiple modules and devices.

With a foundation in the MERN stack (MongoDB, Express.js, React, Node.js), I bring full-stack adaptability and a deep understanding of modern web development. I’m passionate about clean architecture, scalable design patterns, and delivering solutions that provide measurable business value.

Currently, I’m seeking opportunities to contribute to innovative projects, solve complex technical challenges, and continue growing as a full-stack developer in a collaborative and forward-thinking environment.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
