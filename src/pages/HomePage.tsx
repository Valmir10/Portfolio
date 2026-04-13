import "../styles/Home-page.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Effects from "../utils/Effects";
import CursorGlow from "../components/CursorGlow";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <CursorGlow />
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Effects />
    </div>
  );
};

export default HomePage;
