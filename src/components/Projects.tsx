import React from "react";
import "../styles/Projects.css";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

interface Project {
  title: string;
  description: string;
  skills: string[];
  repoUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Food Delivery Website",
    description:
      "This project lets you order food effortlessly. Browse the menu, place your order, and enjoy fast, fresh delivery. A true Taste of Life!",
    skills: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB"],
    repoUrl: "https://github.com/Valmir10/food-delivery-webbsite",
    liveUrl: "https://valmir10.github.io/food-delivery-webbsite/",
  },
  {
    title: "NeonCode",
    description:
      "An AI powered coding arena where you solve challenges, earn XP, and climb the ranks. Let the AI Fixer judge your code and rise from Script Kiddie to Cyber Architect.",
    skills: ["React", "TypeScript", "Vite", "Node.js", "Express", "Groq AI"],
    repoUrl: "https://github.com/Valmir10/NeonCode",
    liveUrl: "https://valmir10.github.io/NeonCode/",
  },
  {
    title: "OmniBank",
    description:
      "Take full control of your finances in one place. Aggregate bank accounts, set real time budget alerts, and swap currencies with atomic crypto exchanges. All powered by a secure and modern dashboard.",
    skills: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Socket.io"],
    repoUrl: "https://github.com/Valmir10/OmniBank",
    liveUrl: "https://valmir10.github.io/OmniBank/",
  },
  {
    title: "Loni Cosmetics",
    description:
      "Experience Loni Cosmetics, an online store for high quality hair products with effortless browsing, secure checkout, and fast delivery.",
    skills: ["HTML", "CSS"],
    liveUrl: "https://lonicosmetics.se/",
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="projects-section">
    <div className="projects-header">
      <h2>Projects</h2>
      <p>A selection of things I've built</p>
    </div>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-card-number">
            0{index + 1}
          </div>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-description">{project.description}</p>
          <div className="project-card-skills">
            {project.skills.map((skill, i) => (
              <span key={i} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
          <div className="project-card-links">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FaGithub />
                <span>Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link project-link-live"
              >
                <MdArrowOutward />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
