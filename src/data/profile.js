export const profile = {
  name: "Md Bappy",
  tagline:
    "Junior Software Engineer building enterprise HRM with Angular, ASP.NET Core, and SQL Server — plus Microsoft Fabric data (Lake / Warehouse) and MERN side projects.",
  roles: ["Full Stack Developer!", ".NET Developer!", "Angular Developer!"],
  about: `I am a Software Developer with 2 years of experience building enterprise HRM systems at Recom Consulting Ltd. using Angular, ASP.NET Core Web API, and SQL Server for 1,000+ employees. I thrive in Agile teams and love shipping clean, reliable features with the business.

I have shipped modules such as Attendance, Leave, Lunch Request, and Exit Interview, with 50+ REST APIs, optimized SQL procedures, and reusable Angular components. I also work with Microsoft Fabric — including Data Lake and Warehouse — to connect application data to modern analytics and reporting in a way that feels natural for both developers and decision-makers.

I build with the MERN stack too, and I am looking for full-stack / .NET roles where I can grow across apps and the Microsoft data platform.`,
  softSkills:
    "Agile collaborator, strong problem-solving (Beecrowd: 127 problems solved), clear communication, quick learner, and positive team player.",
  profileImage: "images/profile.jpg",
  resumeFileName: "md-bappy.pdf",
  whatsapp: "01969602383",
  contact: {
    email: "mdbappy4605@gmail.com",
    phone: "01571180195",
    address: "Bhuigor, Narayanganj",
  },
  social: {
    linkedin: "https://www.linkedin.com/in/md-bappy-91b70b1ab",
    github: "https://github.com/mdbappy4695",
    facebook: "",
  },
  certifications: [
    {
      id: 1,
      name: "Learning & Earning Development Project (LEDP) — Digital Marketing",
      year: "2021",
    },
    {
      id: 2,
      name: "AI Agent Development Bootcamp for Programmers (Ostad)",
      year: "2025",
    },
  ],
  experiences: [
    {
      id: 1,
      role: "Junior Software Engineer (Full-Stack .NET Developer)",
      company: "Recom Consulting Ltd.",
      location:
        "Level 5, House 18, Road 1/A, Block J, Baridhara, Dhaka 1212",
      duration: "August 2024 – Present",
      responsibilities: [
        "Developed and maintained HRM modules including Employee Management, Lunch Request, Leave Management, Attendance Management, Appraisal, and Survey.",
        "Built and consumed ASP.NET Core Web APIs for seamless integration with Angular 12 frontend.",
        "Designed SQL Server queries, stored procedures, and views to automate and optimize HR processes.",
        "Implemented Ng Bootstrap modals, reusable components, and responsive UI for better user experience.",
        "Improved overall system performance with optimized API calls and database tuning.",
        "Worked with Microsoft Fabric (Data Lake / Warehouse) to support analytics and reporting alongside HRM APIs and SQL Server.",
        "Collaborated in an Agile team environment to deliver high-quality features on time.",
      ],
      projects: [
        {
          name: "HRM Lunch Request System",
          description: [
            "Developed Angular components for managing employees and guest lunch requests.",
            "Integrated with .NET Core Web API for real-time CRUD operations.",
            "Applied guest count updates, simultaneous employee/guest deletions, and modal-based UI interactions.",
          ],
        },
        {
          name: "HRM Leave Management System",
          description: [
            "Designed and developed leave request, approval, and tracking system.",
            "Built APIs in .NET Core to handle leave application workflows.",
            "Used SQL stored procedures to calculate available leave balances dynamically.",
            "Integrated with Angular frontend to display employee leave records and approval history.",
          ],
        },
        {
          name: "HRM Attendance Management System",
          description: [
            "Developed an interactive Angular component for employee attendance tracking with location-based and system attendance options.",
            "Integrated .NET Core Web API to record attendance logs and validate geo-location data.",
            "Created SQL stored procedures to fetch, filter, and analyze attendance reports efficiently.",
            "Designed responsive UI with toggle-based views and real-time status updates.",
          ],
        },
        {
          name: "Exit Interview Management",
          description: [
            "Designed Angular component for template/question management.",
            "Executed dynamic views: list view, detail view, and setup view.",
            "Merged with backend API for saving, editing, and deleting interview templates.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "B.Sc in Computer Science & Engineering (CSE)",
      institution: "Shaikh Burhanuddin Post Graduate College",
      date: "2017 – 2022",
    },
    {
      id: 2,
      degree: "HSC (Science)",
      institution: "Hazi Misir Ali University College",
      date: "2017",
    },
    {
      id: 3,
      degree: "SSC (Science)",
      institution: "Hazi Pandey Ali High School",
      date: "2015",
    },
  ],
  projectsIntro:
    "Day-to-day I ship enterprise HRM with Angular and ASP.NET Core (see Experience). Below are selected full-stack demos—React, Node, Express, MongoDB, and Next.js—showing end-to-end UI, APIs, and deployment.",
  projects: [
    {
      id: 1,
      title: "Shopping Website",
      badge: "Full stack",
      tags: ["Node", "Express", "React", "MongoDB"],
      image: "images/ecommerce website.png",
      alt: "Shopping website project screenshot",
      summary:
        "Built a responsive ecommerce storefront with product categories, cart flow, and user authentication for a seamless shopping experience.",
      url: "https://ecommerce-backend-cadu.onrender.com/",
    },
    {
      id: 2,
      title: "Doctor Appointment App",
      badge: "MERN Stack",
      tags: ["Node", "Express", "React", "MongoDB"],
      image: "images/doctor-appointment.png",
      alt: "Doctor appointment app screenshot",
      summary:
        "Full-stack booking app for scheduling doctor visits with React UI and Node/Express APIs backed by MongoDB.",
      url: "https://doctor-appointment-au4p.onrender.com",
    },
    {
      id: 3,
      title: "Blog App",
      badge: "Blog app",
      tags: ["Node", "Express", "CRUD", "MongoDB"],
      image: "images/blogapp.png",
      alt: "Blog application screenshot",
      summary:
        "Auth-aware blogging platform with Redux Toolkit and full CRUD for creating and managing posts.",
      url: "https://funny-lollipop-8459fb.netlify.app/",
    },
    {
      id: 4,
      title: "IMDB Clone",
      badge: "Next.js",
      tags: ["Next.js", "React", "Axios API"],
      image: "images/imd.png",
      alt: "IMDB clone project screenshot",
      summary:
        "Movie discovery site with Next.js showing top-rated and popular titles via Axios API integration.",
      url: "https://delightful-cajeta-7f00f8.netlify.app/",
    },
    {
      id: 5,
      title: "Expense System Management",
      badge: "MERN Stack",
      tags: ["Node", "Express", "CRUD", "MongoDB"],
      image: "images/expense.jpg",
      alt: "Expense management system screenshot",
      summary:
        "Expense tracking app with CRUD workflows so users can record, update, and review spending in one place.",
      url: "https://transcendent-caramel-a1746f.netlify.app/",
    },
  ],
};
