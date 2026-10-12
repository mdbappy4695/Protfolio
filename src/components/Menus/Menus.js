import React from "react";
import "./Menus.css";
import FadeIn from "../FadeIn/FadeIn";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { profile } from "../../data/profile";

const navLinks = [
  { to: "home", label: "Home", Icon: FcHome },
  { to: "about", label: "About", Icon: FcAbout },
  { to: "experience", label: "Work Experience", Icon: FcPortraitMode },
  { to: "education", label: "Education", Icon: FcReadingEbook },
  { to: "techstack", label: "Tech Stack", Icon: FcBiotech },
  { to: "projects", label: "Projects", Icon: FcVideoProjector },
  { to: "contact", label: "Contact", Icon: FcBusinessContact },
];

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <FadeIn>
            <div className="navbar-profile-pic">
              <img
                src={profile.profileImage}
                alt={`${profile.name} profile`}
              />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="nav-items">
              <div className="nav-item">
                {navLinks.map(({ to, label, Icon }) => (
                  <div className="nav-link" key={to}>
                    <Link
                      to={to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                    >
                      <Icon aria-hidden="true" />
                      {label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            {navLinks.map(({ to, label, Icon }) => (
              <div className="nav-link" key={to}>
                <Link
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  title={label}
                  aria-label={label}
                >
                  <Icon aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
