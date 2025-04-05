import "./home-page.css";
import Header from "./Header";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
