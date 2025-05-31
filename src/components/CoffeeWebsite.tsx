import React from "react";
import coffeeWebsiteImage from "../img/coffe-website-image.png";
import ProjectCard from "./ProjectCard";

const CoffeeWebsite: React.FC = () => (
  <ProjectCard
    title="Coffee Website"
    description="Order your perfect coffee in seconds. Explore rich flavors – from smooth vanilla to bold espresso – and enjoy freshly brewed comfort, anytime."
    skills="Html, Css, JavaScript, Node.js, Express.js, SQL"
    repoUrl="https://github.com/Valmir10/coffe-webbsite"
    liveUrl="https://github.com/Valmir10/coffe-webbsite"
    imageSrc={coffeeWebsiteImage}
    imageAlt="Screenshot of Coffee Website"
  />
);

export default CoffeeWebsite;
