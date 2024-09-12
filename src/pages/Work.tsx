import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/work.css";

interface Pages {
  name: string;
  image: string;
  description: JSX.Element;
  link: JSX.Element;
}

// Sample projects
// eslint-disable-next-line react-refresh/only-export-components
export const page: Pages[] = [
  {
    name: "Archives",
    image:
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725555871/MA%20Design/Sigridur_Birna_Filtorial_Rakata_a3k1y1.jpg",
    description: (
      <span>
        <h3>From blabla</h3>
      </span>
    ),
    link: <Link to="/work/pastwork">View Work</Link>,
  },
  {
    name: "Digital fashion",
    image:
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725555871/MA%20Design/Sigridur_Birna_Filtorial_Rakata_a3k1y1.jpg",
    description: (
      <span>
        <h3>Recent digital fashion</h3>
      </span>
    ),
    link: <Link to="/work/digitalfashion">View Work</Link>,
  },
];

const Work: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Function to scroll to the project card when clicked from the dropdown menu
  const scrollToProject = (index: number) => {
    const projectElement = projectRefs.current[index];
    if (projectElement) {
      projectElement.scrollIntoView({ behavior: "smooth" });
    }
    setShowMenu(false); // Close the menu after selecting
  };

  return (
    <div className="container">
      {/* Dropdown Menu */}
      <div className="dropdown-menu">
        <button
          className="dropdown-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          Work
        </button>
        {showMenu && (
          <div className="dropdown-content">
            {page.map((project, index) => (
              <button key={project.name} onClick={() => scrollToProject(index)}>
                {project.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Project Cards */}
      {page.map((project, index) => (
        <div
          key={project.name} // Correct key assignment
          className="project-card"
          ref={(el) => (projectRefs.current[index] = el)} // Assign each project card its ref based on index
        >
          <div className="project-text">
            <h2>{project.name}</h2> {/* Correct reference to project.name */}
            {project.description}{" "}
            {/* Correct reference to project.description */}
            <div className="project-link">{project.link}</div>{" "}
            {/* Correct reference to project.link */}
          </div>
          <div>
            {" "}
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
