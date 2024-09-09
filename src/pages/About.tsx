import "../styles/about.css";

function About() {
  const imageUrls = [
    "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725875180/AboutMe/Sigga1_axquad.png",
    // "https://res.cloudinary.com/dvlggqgbf/image/upload/v1725875181/AboutMe/Sigga2_sbk22m.png",
    // Add more image URLs here if needed
  ];
  return (
    <div className="aboutContainer">
      <div className="aboutLeft">
        <section id="bio">
          <h1>Sigríður Birna Matthíasdóttir | Digital Sigga</h1>
          <h2>Digital Artist | Designer | Programmer</h2>
          <p>
            Sigríður Birna Matthíasdóttir, also known as{" "}
            <strong>Digital Sigga</strong>, is an Icelandic digital artist,
            designer, and programmer who operates at the crossroads of physical
            and virtual worlds. Her work, rooted in both fashion and technology,
            challenges conventional notions of identity, sustainability, and the
            boundaries between the real and the digital.
          </p>

          <p>
            Originally trained in fashion design at{" "}
            <strong>Studio Berçot in Paris</strong>, Sigríður shifted her focus
            to digital fashion after becoming disillusioned with the wasteful
            practices prevalent in the fashion industry. By using 3D design
            tools like <strong>CLO 3D</strong>, she creates virtual garments
            that not only critique the environmental impact of fast fashion but
            also reimagine how we express ourselves in online spaces.
          </p>

          <p>
            Sigríður holds a <strong>Master’s degree in Design</strong> from the{" "}
            <strong>Iceland University of the Arts</strong>, where she focused
            on how online avatars and digital identities are transforming the
            way we perform and present ourselves. Drawing inspiration from{" "}
            <strong>cyborg anthropology</strong> and digital culture, her work
            seeks to blur the lines between virtual personas and real-world
            existence.
          </p>

          <p>
            In addition to her artistic pursuits, Sigríður is also a programmer
            with a <strong>Bachelor’s degree in Computer Science</strong> from
            the <strong>University of Iceland</strong>. Her technical expertise
            spans front-end and back-end development, including{" "}
            <strong>JavaScript, React, Python</strong>, and more, allowing her
            to explore new modes of digital interaction and design.
          </p>

          <p>
            Sigríður’s work has been showcased at events such as{" "}
            <strong>Dutch Design Week</strong>,{" "}
            <strong>London Design Festival</strong>, and{" "}
            <strong>Design March Reykjavík</strong>, where she continues to
            explore new ideas in digital art and fashion.
          </p>
        </section>
      </div>
      <div className="aboutRight">
        {imageUrls.map((url, index) => (
          <figure key={index}>
            <img src={url} alt={`Fashion ${index}`} />
            <figcaption>Portrait by Billie Jane</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default About;
