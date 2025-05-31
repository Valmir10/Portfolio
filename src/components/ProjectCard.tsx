// src/components/ProjectCard.tsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string;
  repoUrl?: string;
  liveUrl?: string;
  imageSrc: string;
  imageAlt?: string;
  hideRepoIcon?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  skills,
  repoUrl,
  liveUrl,
  imageSrc,
  imageAlt = "",
  hideRepoIcon = false,
}) => (
  <div className="project-container">
    <div className="project-information-left-container">
      <div className="project-information-wrapper">
        <div className="project-name-header">
          <h1>{title}</h1>
        </div>
        <div className="project-text-information">
          <h3>{description}</h3>
        </div>
        <div className="project-skills-container">
          <h3>{skills}</h3>
        </div>
        <div className="project-navigation-container">
          <div className="project-navigation-wrapper">
            {!hideRepoIcon && repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-project-container"
              >
                <div className="github-project-img-container">
                  <FaGithub className="github-icon-project-img" />
                </div>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-project-container"
              >
                <div className="visit-project-img-contianer">
                  <MdArrowOutward className="visit-icon-project-img" />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className="project-image-container">
      <div className="project-image-wrapper">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  </div>
);

export default ProjectCard;

/*


// src/components/ProjectCard.tsx
import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

interface ProjectCardProps {
  title: string;
  description: string;
  skills: string;
  repoUrl?: string;
  liveUrl?: string;
  imageSrc: string;
  imageAlt?: string;
  hideRepoIcon?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  skills,
  repoUrl,
  liveUrl,
  imageSrc,
  imageAlt = "",
  hideRepoIcon = false,
}) => (
  <div className="project-container">
    <div className="project-information-left-container">
      <div className="project-information-wrapper">
        <div className="project-name-header">
          <h1>{title}</h1>
        </div>
        <div className="project-text-information">
          <h3>{description}</h3>
        </div>
        <div className="project-skills-container">
          <h3>{skills}</h3>
        </div>
        <div className="project-navigation-container">
          <div className="project-navigation-wrapper">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-project-container"
              >
                <div className="visit-project-img-contianer">
                  <MdArrowOutward className="visit-icon-project-img" />
                </div>
              </a>
            )}
            {!hideRepoIcon && repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-project-container"
              >
                <div className="github-project-img-container">
                  <FaGithub className="github-icon-project-img" />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
    <div className="project-image-container">
      <div className="project-image-wrapper">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  </div>
);

export default ProjectCard;



*/
