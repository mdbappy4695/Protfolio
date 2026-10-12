import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import "./MobileNav.css";
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

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <div className="mobile-nav">
      <div className="mobile-nav-header">
        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={handleOpen}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <AiOutlineMenuFold size={30} className="mobile-nav-icon" aria-hidden="true" />
          ) : (
            <GiHamburgerMenu size={30} className="mobile-nav-icon" aria-hidden="true" />
          )}
        </button>
        <span className="mobile-nav-title">{profile.name}</span>
      </div>
      {open && (
        <div className="mobile-nav-menu">
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
                    onClick={handleMenuClick}
                  >
                    <Icon aria-hidden="true" />
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
