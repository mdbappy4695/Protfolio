import Layout from "./components/Layout/Layout";
import { useTheme } from "./context/ThemeContext";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Experience from "./pages/Experience/Experience";
import Project from "./pages/Projects/Project";
import TechStack from "./pages/TechStack/TechStack";
import ScrollToTop from "react-scroll-to-top";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
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
          <Tada>
            <div className="text-center">Made With bappy @ 2023</div>
          </Tada>
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
