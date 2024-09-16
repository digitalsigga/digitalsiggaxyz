interface Project {
  name: string;
  year: number;
  images: string[];
  description: JSX.Element;
  credits: JSX.Element | null;
}

export const digitalfashionprojects: Project[] = [
  {
    name: "House of Error - Waning Moon",
    year: 2024,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148226/Digital%20Fashion/wanderingmoon/WaningMoon1_j1is57.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148231/Digital%20Fashion/wanderingmoon/WaningMoon2_cysngy.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148222/Digital%20Fashion/wanderingmoon/WaningMoon3_gn0mbo.png",
    ],
    description: (
      <span>
        House of Error's debut digital fashion collection, "Waning Moon," stands
        at the intersection of technology, mysticism, and feminist empowerment.
        This collection transcends the conventional separation of myth and
        machine, embedding the narrative of female resilience and empowerment
        within its digital craftsmanship. "Waning Moon" pays homage to women's
        historical and ongoing contributions to technology and the arts,
        critiquing systematic biases that have marginalized female voices in
        these fields. By integrating digital artistry with themes of ecological
        futures , non-linear storytelling, and myth-making, the collection
        advocates for a symbiotic relationship between technology and
        spirituality, challenging patriarchal narratives. House of Error
        presents a vision of the future where technology serves as a medium for
        inclusive, equitable narratives, contributing to the discourse on
        gender, spirituality, and technology's role in society, in an abstract
        and playful way.
      </span>
    ),
    credits: (
      <span>
        <strong>Art direction & Fashion</strong> Sigríður Birna Matthíasdóttir
        <br />
        <strong>Photography</strong> Kevin Pages
        <br />
        <strong>Models</strong> Sigríður Birna Matthíasdóttir, Sólveig Dóra
        Handsóttir & Una Schram
      </span>
    ),
  },

  {
    name: "DSDB",
    year: 2023,
    images: [
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148483/Digital%20Fashion/DSDB/DSDB6_xpe8se.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB3_qfbsg5.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148483/Digital%20Fashion/DSDB/DSDB1_wvfqga.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB7_dlv4jb.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB4_uqpdf1.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB5_dwqu4z.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB9_bxbdzp.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148482/Digital%20Fashion/DSDB/DSDB2_t6pm7l.png",
      "https://res.cloudinary.com/dvlggqgbf/image/upload/v1726148484/Digital%20Fashion/DSDB/DSDB8_l4wnbc.png",
    ],
    description: (
      <span>
        Drawing inspiration from insightful works such as "Datafeminism" by
        Catherine D'Ignazio and Lauren F. Klein, as well as "Atlas of AI" by
        Kate Crawford, the Digital Sigga Database (DSDB) project emerges as a
        thoughtful exploration into the ethics and potential of AI-driven visual
        narratives.
        <br />
        <br />
        The increasing prevalence of AI-generated images brings to light not
        just technological wonders, but also ethical dilemmas. With concerns
        regarding the sourcing of these images often not adhering to ethical
        standards, the DSDB seeks to chart a more conscientious path. The
        designer's approach is centered on curating a personal dataset, ensuring
        its provenance and integrity, to lay a foundation for future AI
        experiments.
        <br />
        <br />
        DSDB stands as a testament to the designer's commitment to merging
        technological prowess with ethical responsibility, emphasizing the
        importance of transparency and ethics in the rapidly evolving landscape
        of AI imagery.
        <br />
        <br />
      </span>
    ),
    credits: (
      <span>
        <strong>Art direction & Fashion</strong> Sigríður Birna Matthíasdóttir
        <br />
        <strong>Photography</strong> Kevin Pages
        <br />
        <strong>Model</strong> Sigríður Birna Matthíasdóttir
      </span>
    ),
  },
];
