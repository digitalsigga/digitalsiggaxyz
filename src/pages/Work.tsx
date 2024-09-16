import "../styles/work.css";
import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

interface Pages {
  name: string;
  image: string;
  year: string;
  description: JSX.Element;
  link: string; // Change link type to string
}

// Sample projects
export const page: Pages[] = [
  {
    name: "Digital fashion",
    image:
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148226/Digital%20Fashion/wanderingmoon/WaningMoon1_j1is57.png",
    year: "2023-2024",
    description: (
      <span>
        This work in digital fashion explores the creative possibilities of
        virtual clothing and styling. Using tools like CLO3D, Blender, and
        Affinity Photo, it involves designing and creating digital garments that
        blend the worlds of fashion and technology. The pieces range from
        realistic clothing simulations to imaginative, unconventional designs
        that push beyond what’s possible with traditional materials.
        <br />
        <br />
        The process often starts with designing 3D garments in CLO3D, allowing
        for experimentation with shapes, textures, and patterns in a precise and
        flexible way. The designs are then brought into Blender to add details,
        refine shapes, and explore different settings and lighting for the final
        look. Affinity Photo is used to enhance the visuals, combining digital
        garments with photographs to create striking, polished images.
        <br />
        <br />
        This approach is hands-on and experimental, focusing on the joy of
        creating something new and visually engaging. Digital fashion offers the
        chance to explore styles and concepts without the limitations of
        physical materials, providing a fresh take on self-expression and
        design.
      </span>
    ),
    link: "/work/digitalfashion", // Change link type to string
  },
  {
    name: "Archives",
    image:
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725555871/MA%20Design/Sigridur_Birna_Filtorial_Rakata_a3k1y1.jpg",
    year: "2017-2022",
    description: (
      <span>
        The theme of these works revolves around exploring identity in the
        digital age by blending physical and virtual realms. Originating from an
        MA final project at Iceland University of the Arts, these projects
        examine how digital tools and technologies influence self-expression,
        identity, and representation.
        <br />
        <br />
        By investigating the intersections of fashion, digital avatars, and
        augmented reality, the work reflects on the interaction and mutual
        shaping of our online and offline selves. It delves into themes such as
        the impact of social media on personal identity, the evolution of
        self-representation through digital platforms, and the aesthetic and
        philosophical implications of merging digital and physical experiences.
        Through these explorations, the work aims to illuminate how technology
        and creativity are reshaping our understanding of presenting and
        perceiving ourselves in a constantly evolving digital landscape.
      </span>
    ),
    link: "/work/pastwork", // Change link type to string
  },
];

const Work: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate(); // Initialize navigate
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Function to navigate to the project page when clicked from the dropdown menu
  const navigateToProject = (link: string) => {
    navigate(link);
    setShowMenu(false); // Close the menu after navigating
  };

  return (
    <div className="workContainer">
      {/* Dropdown Menu */}
      <div className="work-dropdown-menu">
        <button
          className="work-dropdown-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          Work
        </button>

        {showMenu && (
          <div className="work-dropdown-content">
            {page.map((project) => (
              <button
                key={project.name}
                onClick={() => navigateToProject(project.link)} // Use navigateToProject
              >
                {project.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Project Cards */}
      {page.map((project, index) => (
        <div
          key={project.name}
          className="work-card"
          ref={(el) => (projectRefs.current[index] = el)}
        >
          <div className="work-text">
            <Link to={project.link} className="work-name-link">
              <h2>{project.name}</h2>
            </Link>
            <p>{project.description}</p>
            <p>{project.year}</p>
          </div>
          <div className="work-image">
            <img src={project.image} alt={project.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
