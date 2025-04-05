import "./Hero.css";
import downloadCvImage from "../img/download-cv.png";
import emailIconHero from "../img/email-icon-hero.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import heroImage from "../img/hero-image-portfolio.jpg";

const Hero = () => {
  return (
    <section className="hero-section-container">
      <div className="hero-image-content-container">
        <div className="hero-image-container">
          <div className="flame-hero-container"></div>
          <img src={heroImage}></img>
        </div>
      </div>

      <div className="hero-text-container">
        <div className="hero-content-text-container">
          <div className="text-1-hero">
            <h3>Web Developer</h3>
          </div>

          <div className="text-2-hero">
            <h1>Hello i’m</h1>
            <br className="break-line"></br>
            <h1 id="hero-valmir-zogaj">Valmir Zogaj.</h1>
          </div>

          <div className="text-3-hero">
            <h3>
              Frontend developer student in Malmö, passionate about building
              seamless and dynamic web experiences. I focus on creating
              intuitive, high-performance applications that combine design and
              functionality
            </h3>
          </div>

          <div className="hero-information">
            <div className="download-cv-container">
              <a
                href="/CV/CV-portfolio-english.pdf"
                download
                className="cv-link-container"
              >
                <button>
                  <span className="download-cv-text">
                    <span>Download</span>
                    <span>CV</span>
                  </span>
                  <span className="download-cv-img-container">
                    <img src={downloadCvImage} alt="download-cv-img" />
                  </span>
                </button>
              </a>
            </div>

            <div className="hero-information-social-media-container">
              <div className="social-media-wrapper">
                <div className="email-hero-contianer">
                  <a
                    href="https://outlook.live.com/mail/0/deeplink/compose?to=valmir8@hotmail.se"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="email-link-container"
                  >
                    <div className="email-hero-img-container">
                      <img src={emailIconHero} alt="email-picture" />
                    </div>
                  </a>
                </div>

                <div className="github-hero-contianer">
                  <a
                    href="https://github.com/Valmir10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-github-container"
                  >
                    <div className="github-hero-img-container">
                      <FaGithub className="github-icon" />
                    </div>
                  </a>
                </div>

                <div className="linkedin-hero-container ">
                  <a
                    href="https://www.linkedin.com/in/valmir-zogaj-943356268/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link-container"
                  >
                    <div className="linkedin-hero-img-container">
                      <FaLinkedin className="linkedin-icon" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
