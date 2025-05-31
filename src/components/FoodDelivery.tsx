import React from "react";
import foodDeliveryImage from "../img/food-delivery-image.png";
import ProjectCard from "./ProjectCard";

const FoodDelivery: React.FC = () => (
  <ProjectCard
    title="Food Delivery Website"
    description="This project lets you order food effortlessly. Browse the menu, place your order, and enjoy fast, fresh delivery – a true Taste of Life!"
    skills="Html, Css, React, Node.js, Express.js, MongoDB"
    repoUrl="https://github.com/Valmir10/food-delivery-webbsite"
    liveUrl="https://valmir10.github.io/food-delivery-webbsite/"
    imageSrc={foodDeliveryImage}
    imageAlt="Screenshot of Food Delivery Website"
  />
);

export default FoodDelivery;
