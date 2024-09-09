import React, { useState, useRef } from "react";
import "../../styles/digitalfashion.css"; // Import the CSS file

interface Project {
  name: string;
  year: number;
  images: string[];
  description: string;
}

const projects: Project[] = [
  {
    name: "Netizens",
    year: 2022,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
    ],
    description: "Description for House of Error",
  },
  {
    name: "Human human",
    year: 2021,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
    ],
    description: "Description for House of Error",
  },
  {
    name: "The Second Self",
    year: 2020,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
    ],
    description: "Description for House of Error",
  },
  {
    name: "AR filters",
    year: 2019,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
    ],
    description: "Description for House of Error",
  },
  {
    name: "Do it for the Gram",
    year: 2019,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
    ],
    description: "Description for House of Error",
  },
  {
    name: "Piece of me",
    year: 2018,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
    ],
    description: "Description for House of Error",
  },
  {
    name: "Paperdoll",
    year: 2018,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
    ],
    description: "Description for House of Error",
  },

  // Add other projects similarly
];

const MaDesign: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  // Create refs for each project
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleImageChange = (
    projectIndex: number,
    direction: "next" | "prev"
  ) => {
    const activeProject = projects[projectIndex];
    if (currentImage) {
      const currentIndex = activeProject.images.indexOf(currentImage);
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % activeProject.images.length
          : (currentIndex - 1 + activeProject.images.length) %
            activeProject.images.length;
      setCurrentImage(activeProject.images[newIndex]);
    }
  };

  const scrollToProject = (index: number) => {
    const projectElement = projectRefs.current[index];
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false);
  };

  return (
    <div className="container">
      {/* Dropdown Menu */}
      <div className="dropdown-menu">
        <button
          className="dropdown-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          Select a Project
        </button>
        {showMenu && (
          <div className="dropdown-content">
            {projects.map((project, index) => (
              <button key={project.name} onClick={() => scrollToProject(index)}>
                {project.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Project Cards */}
      {projects.map((project, index) => (
        <div
          key={project.name}
          className="project-card"
          ref={(el) => (projectRefs.current[index] = el)} // Assign each project card its ref
        >
          <div className="project-text">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
          <div className="project-images">
            <button
              className="image-nav prev"
              onClick={() => handleImageChange(index, "prev")}
            >
              ‹
            </button>
            {project.images[0] && (
              <img src={project.images[0]} alt={`${project.name} image`} />
            )}
            <button
              className="image-nav next"
              onClick={() => handleImageChange(index, "next")}
            >
              ›
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaDesign;
