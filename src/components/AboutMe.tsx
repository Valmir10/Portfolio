import { useState, useEffect } from "react";
import "../styles/AboutMe.css";
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiExpress, SiDocker, SiPhp, SiVuedotjs, SiDotnet } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { PiFileSql } from "react-icons/pi";
import { TbBrandCSharp } from "react-icons/tb";

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
    <section id="experince" className="about-me-section">
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
                            <h3>2026</h3>
                          </div>
                          <div className="malmo-jensen-role">
                            <h2>Software Developer</h2>
                          </div>
                          <div className="malmo-jensen-text">
                            <h3>Dizparc</h3>
                          </div>
                        </div>
                      </div>

                      <div className="loni-cosmetics-container">
                        <div className="loni-cosmetic-wrapper">
                          <div className="loni-cosmetic-year">
                            <h3>2025</h3>
                          </div>
                          <div className="loni-cosmetic-role">
                            <h2>Full Stack Developer</h2>
                          </div>
                          <div className="loni-cosmetic-text">
                            <h3>Twentyfour</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="experience-information-row-2">
                      <div className="karlstad-university-container">
                        <div className="karlstad-university-wrapper">
                          <div className="karlstad-university-year">
                            <h3>2024 - 2026</h3>
                          </div>
                          <div className="karlstad-univesity-role">
                            <h2>Web Developer Student</h2>
                          </div>
                          <div className="karlstad-university-text">
                            <h3>Jensen Yrkeshögskola</h3>
                          </div>
                        </div>
                      </div>

                      <div className="osbeck-high-school-container">
                        <div className="osbeck-high-scholl-wrapper">
                          <div className="osbeck-high-scholl-year">
                            <h3>Winter 2025</h3>
                          </div>
                          <div className="osbeck-high-school-role">
                            <h2>Freelance Web Developer</h2>
                          </div>
                          <div className="osbeck-high-school-text">
                            <h3>Loni Cosmetics</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="experience-information-row-3">
                      <div className="karlstad-university-container">
                        <div className="karlstad-university-wrapper">
                          <div className="karlstad-university-year">
                            <h3>2023 - 2024</h3>
                          </div>
                          <div className="karlstad-univesity-role">
                            <h2>Web Developer Student</h2>
                          </div>
                          <div className="karlstad-university-text">
                            <h3>Karlstad University</h3>
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
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <FaReact className="skill-icon-img" />
                        </div>
                      </div>
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <SiTypescript className="skill-icon-img" />
                        </div>
                      </div>
                    </div>

                    <div className="skills-information-row-2">
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <IoLogoJavascript className="skill-icon-img" />
                        </div>
                      </div>
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <RiNextjsFill className="skill-icon-img" />
                        </div>
                      </div>
                    </div>

                    <div className="skills-information-row-3">
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <FaNodeJs className="skill-icon-img" />
                        </div>
                      </div>
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <SiExpress className="skill-icon-img" />
                        </div>
                      </div>
                    </div>

                    <div className="skills-information-row-4">
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <TbBrandCSharp className="skill-icon-img" />
                        </div>
                      </div>
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <SiDotnet className="skill-icon-img" />
                        </div>
                      </div>
                    </div>

                    <div className="skills-information-row-5">
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <SiVuedotjs className="skill-icon-img" />
                        </div>
                      </div>
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <SiPhp className="skill-icon-img" />
                        </div>
                      </div>
                    </div>

                    <div className="skills-information-row-6">
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <SiDocker className="skill-icon-img" />
                        </div>
                      </div>
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <DiMongodb className="skill-icon-img" />
                        </div>
                      </div>
                    </div>

                    <div className="skills-information-row-7">
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <PiFileSql className="skill-icon-img" />
                        </div>
                      </div>
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <FaHtml5 className="skill-icon-img" />
                        </div>
                      </div>
                    </div>

                    <div className="skills-information-row-8">
                      <div className="skill-icon-container">
                        <div className="skill-icon-wrapper">
                          <FaCss3 className="skill-icon-img" />
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
                      I'm finishing my Web Development studies at Jensen
                      Yrkeshögskola in Malmö and will graduate in May 2026.
                      <br />
                      <br />
                      At Dizparc, where I'm completing my internship as a
                      Software Developer, I'm building a digital solution for
                      retail that connects software with in store hardware
                      systems. The backend is built in C# and .NET with SQL, and
                      the system communicates with distributed devices through
                      APIs. I also work on the frontend in TypeScript and with
                      cloud solutions in Azure, including CI/CD pipelines through
                      Azure DevOps.
                      <br />
                      <br />
                      Before Dizparc, I interned at Twentyfour in Copenhagen as a
                      full stack developer on client facing systems. I worked on
                      the Koebt integration platform connecting multiple services
                      through APIs in a microservices architecture. When a major
                      update broke the documentation system, I set up the
                      environment using Docker, traced the problem across
                      services, and restored automated data flows.
                      <br />
                      <br />
                      Across both internships I've been involved in sprint
                      planning, requirement analysis and code reviews. I enjoy
                      discussing technical decisions with both developers and non
                      technical stakeholders, and I value clear communication
                      when translating system design into real business impact.
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
