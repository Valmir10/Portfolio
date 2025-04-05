import { useState, useEffect } from "react";

import "./AboutMe.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { PiFileSql } from "react-icons/pi";

const AboutMe = () => {
  const [activeSection, setActiveSection] = useState("experience");
  const [fadeClass, setFadeClass] = useState("fade-enter");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeClass("fade-enter-active");
    }, 50);
  }, []);

  const handleChangeSection = (section: string) => {
    if (isTransitioning || section === activeSection) return;
    setIsTransitioning(true);

    setFadeClass("fade-exit");

    setTimeout(() => {
      setActiveSection(section);
      setFadeClass("fade-enter");

      setTimeout(() => {
        setFadeClass("fade-enter-active");
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  return (
    <section className="about-me-section">
      <div className="about-me-content-container">
        <div className="about-me-menu-container">
          <div className="left-menu-container">
            <div
              className={`experience-option-container ${
                activeSection === "experience" ? "active" : ""
              }`}
              onClick={() => handleChangeSection("experience")}
            >
              <h2>Experience</h2>
            </div>

            <div
              className={`skills-option-container ${
                activeSection === "skills" ? "active" : ""
              }`}
              onClick={() => handleChangeSection("skills")}
            >
              <h2>Skills</h2>
            </div>

            <div
              className={`about-me-option-container ${
                activeSection === "about-me" ? "active" : ""
              }`}
              onClick={() => handleChangeSection("about-me")}
            >
              <h2>About me</h2>
            </div>
          </div>

          <div
            className={`right-menu-container ${fadeClass}`}
            key={activeSection}
          >
            {activeSection === "experience" && (
              <>
                <div className="experience-text-header">
                  <h1>Experience</h1>
                </div>

                <div className="experience-option-right-contianer">
                  <div className="experience-information-container">
                    <div className="experience-information-row-1">
                      <div className="malmo-jensen-container">
                        <div className="malmo-jensen-wrapper">
                          <div className="malmo-jensen-year">
                            <h3>2024 - present</h3>
                          </div>
                          <div className="malmo-jensen-role">
                            <h2>Front-End Developer</h2>
                          </div>
                          <div className="malmo-jensen-text">
                            <h3>Jensen College Student</h3>
                          </div>
                        </div>
                      </div>

                      <div className="loni-cosmetics-container">
                        <div className="loni-cosmetic-wrapper">
                          <div className="loni-cosmetic-year">
                            <h3>Winter - 2025</h3>
                          </div>
                          <div className="loni-cosmetic-role">
                            <h2>Freelance Web Developer</h2>
                          </div>
                          <div className="loni-cosmetic-text">
                            <h3>E-commerce Startup</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="experience-information-row-2">
                      <div className="karlstad-university-container">
                        <div className="karlstad-university-wrapper">
                          <div className="karlstad-university-year">
                            <h3>2023 - 2024</h3>
                          </div>
                          <div className="karlstad-univesity-role">
                            <h2>Web Developer</h2>
                          </div>
                          <div className="karlstad-university-text">
                            <h3>Karlstad University Student</h3>
                          </div>
                        </div>
                      </div>

                      <div className="osbeck-high-school-container">
                        <div className="osbeck-high-scholl-wrapper">
                          <div className="osbeck-high-scholl-year">
                            <h3>2019 - 2022</h3>
                          </div>
                          <div className="osbeck-high-school-role">
                            <h2>Student</h2>
                          </div>
                          <div className="osbeck-high-school-text">
                            <h3>Osbeckgymnasiet Student</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeSection === "skills" && (
              <>
                <div className="skills-text-header">
                  <h1>Skills</h1>
                </div>

                <div className="skills-option-right-contianer">
                  <div className="skills-information-container">
                    <div className="skills-information-row-1">
                      <div className="html-container">
                        <div className="html-wrapper">
                          <FaHtml5 className="html-icon-img" />
                        </div>
                      </div>

                      <div className="css-container">
                        <div className="css-wrapper">
                          <FaCss3 className="css-icon-img" />
                        </div>
                      </div>
                    </div>

                    <div className="skills-information-row-2">
                      <div className="javascript-container">
                        <div className="javascript-wrapper">
                          <IoLogoJavascript className="javascript-icon-img" />
                        </div>
                      </div>

                      <div className="react-container">
                        <div className="react-wrapper">
                          <FaReact className="react-icon-img" />
                        </div>
                      </div>
                    </div>

                    <div className="skills-information-row-3">
                      <div className="typescript-container">
                        <div className="typescript-wrapper">
                          <SiTypescript className="typescript-icon-img" />
                        </div>
                      </div>

                      <div className="node-js-container">
                        <div className="node-js-wrapper">
                          <FaNodeJs className="node-js-icon-img" />
                        </div>
                      </div>
                    </div>

                    <div className="skills-information-row-4">
                      <div className="express-js-container">
                        <div className="express-js-wrapper">
                          <SiExpress className="express-js-icon-img" />
                        </div>
                      </div>

                      <div className="next-js-container">
                        <div className="next-js-wrapper">
                          <RiNextjsFill className="next-js-icon-img" />
                        </div>
                      </div>
                    </div>

                    <div className="skills-information-row-5">
                      <div className="mongodb-container">
                        <div className="mongodb-wrapper">
                          <DiMongodb className="mongodb-icon-img" />
                        </div>
                      </div>

                      <div className="sql-container">
                        <div className="sql-wrapper">
                          <PiFileSql className="sql-icon-img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeSection === "about-me" && (
              <>
                <div className="about-me-text-header">
                  <h1>About Me</h1>
                </div>

                <div className="about-me-option-right-contianer">
                  <div className="about-me-text-container">
                    <h3>
                      I’m Valmir, a 21-year-old web developer who thrives on
                      building interactive, high-performance applications. With
                      a strong focus on clean, scalable code, I enjoy tackling
                      complex challenges and optimizing web solutions for
                      efficiency and usability. <br></br>
                      <br></br> Web development is more than just code—it’s
                      about understanding how users interact with technology. By
                      merging design principles with technical expertise, I
                      create responsive and user-friendly solutions that feel
                      seamless and intuitive to use.
                    </h3>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
