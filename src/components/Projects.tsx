import "./projects.css";
import foodDeliveryImage from "../img/food-delivery-image.png";
import coffeWebsiteImage from "../img/coffe-website-image.png";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section className="projects-section-container">
      <div className="project-1-container">
        <div className="project-information-left-container">
          <div className="project-information-wrapper">
            <div className="project-name-header">
              <h1>Food Delivery Website</h1>
            </div>

            <div className="project-text-information">
              <h3>
                This project lets you order food effortlessly. Browse the menu,
                place your order, and enjoy fast, fresh delivery – a true Taste
                of Life!
              </h3>
            </div>

            <div className="project-skills-container">
              <h3>Html, Css, React, Node.js, Express.js, Mongodb</h3>
            </div>

            <div className="project-navigation-container">
              <div className="project-navigation-wrapper">
                <div className="visit-project-container">
                  <a
                    href="https://github.com/Valmir10/food-delivery-webbsite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-food-delivery-webbsite-container"
                  >
                    <div className="visit-project-img-contianer">
                      <MdArrowOutward className="visit-icon-project-img" />
                    </div>
                  </a>
                </div>

                <div className="github-project-container">
                  <a
                    href="https://github.com/Valmir10/food-delivery-webbsite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-food-delivery-webbsite-container"
                  >
                    <div className="github-project-img-container">
                      <FaGithub className="github-icon-project-img" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-image-container">
          <div className="project-image-wrapper">
            <img src={foodDeliveryImage} alt="" />
          </div>
        </div>
      </div>

      <div className="project-2-container">
        <div className="project-information-left-container">
          <div className="project-information-wrapper">
            <div className="project-name-header">
              <h1>Coffe Website</h1>
            </div>

            <div className="project-text-information">
              <h3>
                Order your perfect coffee in seconds. Explore rich flavors –
                from smooth vanilla to bold espresso – and enjoy freshly brewed
                comfort, anytime.
              </h3>
            </div>

            <div className="project-skills-container">
              <h3>Html, Css, Javascript, Node.js, Express.js, Sql</h3>
            </div>

            <div className="project-navigation-container">
              <div className="project-navigation-wrapper">
                <div className="visit-project-container">
                  <a
                    href="https://github.com/Valmir10/coffe-webbsite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-coffe-webbsite-container"
                  >
                    <div className="visit-project-img-contianer">
                      <MdArrowOutward className="visit-icon-project-img" />
                    </div>
                  </a>
                </div>

                <div className="github-project-container">
                  <a
                    href="https://github.com/Valmir10/coffe-webbsite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-coffe-webbsite-container"
                  >
                    <div className="github-project-img-container">
                      <FaGithub className="github-icon-project-img" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-image-container">
          <div className="project-image-wrapper">
            <img src={coffeWebsiteImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
