import React, { useState, useRef } from "react";
import "../../styles/pastwork.css"; // Import the CSS file

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
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892983/PastWork/Netizens/Look1003_pzibpl.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892978/PastWork/Netizens/0001_uoyk6v.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892984/PastWork/Netizens/Look2a_hvmhqc.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892985/PastWork/Netizens/Look2_g78fch.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892979/PastWork/Netizens/Look3a_ixghil.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892979/PastWork/Netizens/Look3_tot4id.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892986/PastWork/Netizens/0050_tdfnqk.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892986/PastWork/Netizens/0001_6_x0pwmh.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892988/PastWork/Netizens/0132_nxwude.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892989/PastWork/Netizens/0276_1_adw5uu.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892990/PastWork/Netizens/0206_x645bz.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892994/PastWork/Netizens/Look1_9_cpsugj.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892994/PastWork/Netizens/Look1_10_xxccq2.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892992/PastWork/Netizens/Horselook001_3_aftteu.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725892991/PastWork/Netizens/Horselook001_2_yvln19.png",
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
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911719/PastWork/Human%20human/look_4_back_cwdlvh.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911721/PastWork/Human%20human/rendera4_x6rit2.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911749/PastWork/Human%20human/rendernr444444_73_kzm4jj.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911766/PastWork/Human%20human/rendera4_63_agnf9m.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911760/PastWork/Human%20human/rendera4_34_lql9xb.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911729/PastWork/Human%20human/look3vol22_45_j6ueyo.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911719/PastWork/Human%20human/look3render2_u72ej0.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725911718/PastWork/Human%20human/look_12_hshcv8.png",
    ],
    description: (
      <span>
        <strong>Human Human</strong> is an experimental project inspired by
        Brian Christian’s book
        <em>
          The Most Human Human: What Talking with Computers Teaches Us About
          What It Means to Be Alive
        </em>
        . It explores the potential of AI to engage with creativity, emotional
        intelligence, and self-awareness.
        <br />
        <br />
        Through structured dialogues, the project pushes ChatGPT beyond its
        computational abilities, probing its originality, empathy, and
        introspection. These conversations challenge the boundaries between
        artificial and human thought, raising questions about the nature of
        intelligence and what defines humanity in a world of evolving
        technology.
        <br />
        <br />
        More than a tech experiment, <em>Human Human</em> is a reflection on the
        convergence of organic and synthetic realms, urging viewers to
        reconsider what it means to be human as the line between man and machine
        blurs. Ultimately, it asks us to reflect on thought, emotion, and
        creativity in a world where AI increasingly mimics human traits.
        <br />
        <br />
        <em>
          <a
            href="https://www.youtube.com/watch?v=gRijSnyp6WE&t=7s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Human human, conversation with AI, video 1.
          </a>
          <a
            href="https://www.youtube.com/watch?v=onpWtah3Dks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Human human, conversation with AI, video 2.
          </a>
          <a
            href="https://www.youtube.com/watch?v=Ke4yYlSzUvI&t=3s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Human human, conversation with AI, video 3.
          </a>
        </em>{" "}
        Human human was presented at the Gerðarsafn Museum in 2021.
      </span>
    ),
    credits: (
      <span>
        <strong>Sound</strong> Bjarki
      </span>
    ),
  },
  {
    name: "The Second Self",
    year: 2020,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958571/PastWork/SecondSelf/simi_i_klofi_7_asfbfu.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958573/PastWork/SecondSelf/simi_i_klofi_8_wycwws.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958583/PastWork/SecondSelf/vol1_gpnh9y.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958563/PastWork/SecondSelf/sfffs_az0w2i.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958578/PastWork/SecondSelf/studiosssss_qs2sf7.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958557/PastWork/SecondSelf/Look_i_vinnslu_11_fbwqsl.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958544/PastWork/SecondSelf/Linger1e_e4etke.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958541/PastWork/SecondSelf/Look_i_vinnslu_2_za5kzx.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958530/PastWork/SecondSelf/glittergrl4_qko33b.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958528/PastWork/SecondSelf/glitter_grl1_gzjsf6.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958525/PastWork/SecondSelf/glittergrl2_mvsjjd.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958520/PastWork/SecondSelf/Default_Modelist_4_axjpwt.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958522/PastWork/SecondSelf/Default_Modelist_6_bghxaf.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958518/PastWork/SecondSelf/Default_Modelist_5_aorl22.jpg",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958484/PastWork/SecondSelf/medtippiipeys_12_ltvahs.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958479/PastWork/SecondSelf/Penis_2_umcecy.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958462/PastWork/SecondSelf/hanskataska_project_22_vozd4w.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958448/PastWork/SecondSelf/handataska_%C3%B0projevt_39_t5vfpg.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958425/PastWork/SecondSelf/faranlegssta_lookid_2_xj9yqs.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958420/PastWork/SecondSelf/faranlegssta_lookid_3_t81rx8.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958415/PastWork/SecondSelf/Default_Modelist_3_ao52da.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958403/PastWork/SecondSelf/skikkjavol1_1_q3bvae.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958401/PastWork/SecondSelf/skikkjavol1_2_bbqdpa.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958263/PastWork/SecondSelf/tv%C3%A6r_linur_ut_2_jz2pij.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958257/PastWork/SecondSelf/tvo_fot_hanga_a_sla_1_jo45es.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725958254/PastWork/SecondSelf/fot_hanga_utum_eyru_1_i8le8i.png",
    ],
    description: (
      <span>
        <>
          <p>
            Following the project <em>"Do It for the Gram"</em>, the journey
            with the digital avatar — an uncanny replica of the creator —
            evolved into a deeper exploration of digital identity. This project
            focuses on the objectification of the self in the virtual world and
            the complex ethical questions that arise in the digital frontier.
          </p>
          <p>
            Inspired by works such as Elizabeth Wilson’s{" "}
            <em>Adorned in Dreams</em> and Jean Baudrillard’s{" "}
            <em>Simulacra and Simulation</em>, the avatar's exploration
            highlights the dual role of the self as both observer and observed
            in a society where identities are constantly curated, commodified,
            and consumed online. The digital avatar became a key tool in
            understanding how we package, present, and perceive ourselves in the
            digital age.
          </p>
          <p>
            The ethical landscape of platforms like OnlyFans was a significant
            focus. Through the avatar, the project raises questions about
            digital consent, agency, and the commodification of virtual
            identity. What happens when a digital replica, representing the
            self, becomes an object for consumption?
          </p>
          <p>
            Drawing from Eric Hoffman’s <em>The Performance of the Self</em>,
            the project examined the performative nature of online personas,
            exploring how they influence audience perceptions and expectations.
            Virtual celebrities like Hatsune Miku and Gorillaz further deepened
            the discussion on how we relate to fully digital beings, and whether
            they reflect society’s increasing immersion into a virtual world.
          </p>
          <p>
            Donna Haraway’s <em>Staying with the Trouble</em> provided a guiding
            framework, suggesting that the divide between the digital and real
            is increasingly blurred, if it ever truly existed. The avatar's
            evolution into a touchpoint for exploring identity, objectification,
            and ethics encourages reflection on how technology continues to
            reshape our values and perceptions of reality.
          </p>
        </>
      </span>
    ),
    credits: undefined,
  },
  {
    name: "AR filters",
    year: 2019,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725544743/Digital%20Fashion/WaningMoon1_lrljga.png",
    ],
    description: (
      <span>
        <strong>Art direction & Fashion</strong> Sigríður Birna Matthíasdóttir &
        Sólveig Dóra Hansdóttir
        <br />
        <strong>Architecture</strong> Arís Eva Vilhelmsdóttir
        <br />
        <strong>Sound</strong> Jack Armitage & Ari Árelíus
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
