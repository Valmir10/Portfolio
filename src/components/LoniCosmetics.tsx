import React from "react";
import LoniCosmeticsImage from "../img/Loni-Cosmetics-image.png";

import ProjectCard from "./ProjectCard";

const LoniCosmetics: React.FC = () => (
  <ProjectCard
    title="Loni Cosmetics"
    description="Experience Loni Cosmetics, an online store for high‑quality hair products with effortless browsing, secure checkout, and fast delivery."
    skills="HTML, CSS"
    liveUrl="https://lonicosmetics.se/"
    imageSrc={LoniCosmeticsImage}
    imageAlt="Screenshot of Loni Cosmetics"
    hideRepoIcon
  />
);

export default LoniCosmetics;

/*
import React from "react";
import LoniCosmeticsImage from "../img/Loni-Cosmetics-image.png";
import ProjectCard from "./ProjectCard";

const LoniCosmetics: React.FC = () => (
  <ProjectCard
    title="Loni Cosmetics"
    description="Experience Loni Cosmetics, an online store for high‑quality hair products with effortless browsing, secure checkout, and fast delivery."
    skills="Html, Css"
    repoUrl="https://lonicosmetics.se/"
    liveUrl="https://lonicosmetics.se/"
    imageSrc={LoniCosmeticsImage}
    imageAlt="Screenshot of Loni Cosmetics"
  />
);

export default LoniCosmetics;



*/
