import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/md.pdf";
import "./Home.css";
import FadeIn from "../../components/FadeIn/FadeIn";
import MagneticButton from "../../components/MagneticButton/MagneticButton";
import { useTheme } from "../../context/ThemeContext";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { profile } from "../../data/profile";

const Home = () => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className="container-fluid home-container" id="home">
      <div className="home-atmosphere" aria-hidden="true">
        <span className="home-orb home-orb--teal" />
        <span className="home-orb home-orb--coral" />
        <span className="home-orb home-orb--gold" />
      </div>

      <button
        type="button"
        className="theme-btn"
        onClick={handleTheme}
        aria-label={
          theme === "light" ? "Switch to dark mode" : "Switch to light mode"
        }
      >
        {theme === "light" ? (
          <BsMoonStarsFill size={24} />
        ) : (
          <BsFillSunFill size={24} />
        )}
      </button>

      <div className="container home-content">
        <FadeIn>
          <p className="home-greeting">Hi, I&apos;m</p>
          <h1 className="home-name">{profile.name}</h1>
          <h2 className="home-roles">
            <Typewriter
              options={{
                strings: profile.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="home-tagline">{profile.tagline}</p>
        </FadeIn>
        <FadeIn delay={150}>
          <div className="home-buttons">
            <MagneticButton>
              <a
                className="btn btn-hire"
                href={`https://api.whatsapp.com/send?phone=${profile.whatsapp}`}
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                className="btn btn-cv"
                href={Resume}
                download={profile.resumeFileName}
              >
                My Resume
              </a>
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Home;
