import React, { useState, useRef } from "react";
import "../../styles/digitalfashion.css"; // Import the CSS file

interface Project {
  name: string;
  year: number;
  images: string[];
  description: JSX.Element;
  credits: JSX.Element;
}

const projects: Project[] = [
  {
    name: "Netizens",
    year: 2022,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725893305/PastWork/0001_rdnvha.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892990/PastWork/0206_x645bz.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892988/PastWork/0132_nxwude.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892988/PastWork/0276_km03a8.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892983/PastWork/Look1003_pzibpl.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892984/PastWork/Look2a_hvmhqc.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892981/PastWork/7_ae3tvv.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892983/PastWork/8_n7qjfz.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892979/PastWork/Look3_tot4id.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892979/PastWork/Look3a_ixghil.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892974/PastWork/8_rpkvdm.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892994/PastWork/Look1_9_cpsugj.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892994/PastWork/Look1_10_xxccq2.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892992/PastWork/Horselook001_3_aftteu.png",
    ],
    description: (
      <span>
        <strong>Netizens Collective</strong> is an interdisciplinary,
        concept-driven digital fashion group founded by fashion designer{" "}
        <strong>Sól Hansdóttir</strong>
        and <strong>Digital Sigga</strong>. Though Netizens managed to produce
        their first collection, the project was temporarily paused due to other
        commitments.
        <br />
        <br />
        The collective’s only experimental collection, <em>Kuml</em>, is an
        innovative fashion film inspired by the concept of "Burials and Grave
        Goods" (<em>Kuml og haugfé</em>) from the Viking Age. This future-facing
        afterlife experiment explores the notion of rebirth in a digital world,
        imagining how burial traditions might evolve. In Viking times, items
        such as jewelry, tools, and even animals were interred with the dead,
        and <em>Kuml</em> reimagines these practices for the digital age.
        <br />
        <br />
        The <em>Kuml</em> collection includes three distinct looks, each set in
        a separate architectural monument designed by architect{" "}
        <strong>Arís Eva Vilhelmsdóttir</strong>, with each site evoking a
        burial space. The project was awarded a grant by the Icelandic Design
        Fund.
        <br />
        <br />
        The <em>Kuml</em> fashion film debuted at Dutch Design Week 2022 and was
        later showcased at Design March 2023 in the Nordic House Iceland. It
        also featured at Hafnarhaus for Vetrarhátið and again for Menningarnótt
        2024.
        <br />
        <br />
        <a
          href="https://www.youtube.com/watch?v=Pv49iZMVhDA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch the film here.
        </a>
      </span>
    ),
    credits: (
      <span>
        <strong>Art direction & Fashion</strong> Sigríður Birna Matthíasdóttir &
        Sólveig Dóra Hansdóttir
        <br />
        <strong>Architecture</strong> Arís Eva Vilhelmsdóttir
        <br />
        <strong>Sound</strong> Jack Armitage & Ari Árelíus
      </span>
    ),
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

const PastWork: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>(
    projects.map(() => 0)
  );

  // Create refs for each project
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleImageChange = (
    projectIndex: number,
    direction: "next" | "prev"
  ) => {
    const activeProject = projects[projectIndex];
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
            <p>{project.credits}</p>
          </div>
          <div className="project-images">
            <button
              className="image-nav prev"
              onClick={() => handleImageChange(index, "prev")}
            >
              ‹
            </button>
            {project.images.length > 0 && (
              <img
                src={project.images[currentImageIndex[index]]}
                alt={`${project.name} image`}
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

export default PastWork;
