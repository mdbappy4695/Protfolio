import Layout from "./components/Layout/Layout";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Experience from "./pages/Experience/Experience";
import Project from "./pages/Projects/Project";
import TechStack from "./pages/TechStack/TechStack";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/MobileNav/MobileNav";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import SectionRail from "./components/SectionRail/SectionRail";
import { profile } from "./data/profile";

function App() {
  const [theme] = useTheme();
  const year = new Date().getFullYear();

  return (
    <>
      <div id={theme}>
        <ScrollProgress />
        <SectionRail />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Experience />
          <Education />
          <TechStack />
          <Project />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <div className="text-center">
            © {year} {profile.name}
          </div>
        </div>
      </div>
      <ScrollToTop
        smooth
        style={{ backgroundColor: "white", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
