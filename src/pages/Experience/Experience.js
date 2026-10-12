import React from "react";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    role: "Software Developer – HRM System",
    company: "Recom Consulting Ltd. | Level 5, House 18, Road 1/A, Block J, Baridhara, Dhaka 1212",
    duration: "2024 – Present",
    responsibilities: [
      "Developed and maintained HRM modules including Employee Management, Lunch Request, Leave Management, Appraisal, and Survey.",
      "Built and consumed ASP.NET Core Web APIs for seamless integration with Angular 12 frontend.",
      "Designed SQL Server queries, stored procedures, and views to automate and optimize HR processes.",
      "Implemented Ng Bootstrap modals, reusable components, and responsive UI for better user experience.",
      "Improved overall system performance with optimized API calls and database tuning.",
      "Collaborated in an Agile team environment to deliver high-quality features on time."
    ],
    projects: [
      {
        name: "HRM Lunch Request System",
        description: [
          "Developed Angular components for managing employees and guest lunch requests.",
          "Integrated with .NET Core Web API for real-time CRUD operations.",
          "Applied guest count updates, simultaneous employee/guest deletions, and modal-based UI interactions."
        ]
      },
      {
        name: "HRM Leave Management System",
        description: [
          "Designed and developed leave request, approval, and tracking system.",
          "Built APIs in .NET Core to handle leave application workflows.",
          "Used SQL stored procedures to calculate available leave balances dynamically.",
          "Integrated with Angular frontend to display employee leave records and approval history."
        ]
      },
      {
        name: "Exit Interview Management",
        description: [
          "Designed Angular component for template/question management.",
          "Executed dynamic views: list view, detail view, and setup view.",
          "Merged with backend API for saving, editing, and deleting interview templates."
        ]
      }
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <h1>Professional Experience</h1>
      {experiences.map((exp) => (
        <div key={exp.id} className="experience-card">
          <h2>{exp.role}</h2>
          <h4>{exp.company} | {exp.duration}</h4>
          
          <ul className="responsibilities">
            {exp.responsibilities.map((res, index) => (
              <li key={index}>{res}</li>
            ))}
          </ul>

          <h3>Projects:</h3>
          {exp.projects.map((proj, index) => (
            <div key={index} className="project-card">
              <h4>{proj.name}</h4>
              <ul>
                {proj.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Experience;
