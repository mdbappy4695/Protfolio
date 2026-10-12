import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./SectionRail.css";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "techstack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SectionRail = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) =>
      document.getElementById(id)
    ).filter(Boolean);

    if (!elements.length || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const ratios = {};

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios[entry.target.id] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });

        let bestId = active;
        let bestRatio = 0;
        SECTIONS.forEach(({ id }) => {
          const ratio = ratios[id] || 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestRatio > 0) {
          setActive(bestId);
        }
      },
      {
        threshold: [0.15, 0.35, 0.55, 0.75],
        rootMargin: "-20% 0px -35% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="section-rail" aria-label="Section navigation">
      {SECTIONS.map(({ id, label }) => (
        <Link
          key={id}
          to={id}
          spy={false}
          smooth
          offset={-80}
          duration={400}
          className={`section-rail__dot ${
            active === id ? "section-rail__dot--active" : ""
          }`}
          aria-label={`Go to ${label}`}
          title={label}
          onClick={() => setActive(id)}
        />
      ))}
    </nav>
  );
};

export default SectionRail;
