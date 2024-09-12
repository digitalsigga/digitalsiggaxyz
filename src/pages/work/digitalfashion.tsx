import { useRef, useState } from "react";
import "../../styles/digitalfashion.css"; // Import the CSS file
import { digitalfashionprojects } from "./digitalfashionprojects";

// Add other projects similarly
const DigitalFashion: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>(
    digitalfashionprojects.map(() => 0)
  );

  // Create refs for each project
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleImageChange = (
    projectIndex: number,
    direction: "next" | "prev"
  ) => {
    const activeProject = digitalfashionprojects[projectIndex];
    const newIndex =
      direction === "next"
        ? (currentImageIndex[projectIndex] + 1) % activeProject.images.length
        : (currentImageIndex[projectIndex] - 1 + activeProject.images.length) %
          activeProject.images.length;
    setCurrentImageIndex((prevIndexes) => {
      const newIndexes = [...prevIndexes];
      newIndexes[projectIndex] = newIndex;
      return newIndexes;
    });
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
          Projects
        </button>
        {showMenu && (
          <div className="dropdown-content">
            {digitalfashionprojects.map((digitalfashionprojects, index) => (
              <button
                key={digitalfashionprojects.name}
                onClick={() => scrollToProject(index)}
              >
                {digitalfashionprojects.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Project Cards */}
      {digitalfashionprojects.map((digitalfashionprojects, index) => (
        <div
          key={digitalfashionprojects.name}
          className="project-card"
          ref={(el) => (projectRefs.current[index] = el)} // Assign each project card its ref
        >
          <div className="project-text">
            <h2>{digitalfashionprojects.name}</h2>
            <p>{digitalfashionprojects.description}</p>
            <p>{digitalfashionprojects.credits}</p>
          </div>
          <div className="project-images">
            <button
              className="image-nav prev"
              onClick={() => handleImageChange(index, "prev")}
            >
              ‹
            </button>
            {digitalfashionprojects.images.length > 0 && (
              <img
                src={digitalfashionprojects.images[currentImageIndex[index]]}
                alt={`${digitalfashionprojects.name} image`}
              />
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

export default DigitalFashion;
