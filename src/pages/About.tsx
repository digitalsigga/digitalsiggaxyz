import "../styles/about.css";

function About() {
  return (
    <>
      <div className="aboutContainer">
        <div className="aboutLeft">
          <h2>Sigríður Birna Matthíasdóttir / Digital Sigga</h2>
          <p className="aboutContent">
            Sigríður is a digital fashion designer and a web developer. She
            studied fashion at Studio Bercot in Paris, did MA in Design in
            Iceland University of the Arts, with a focus on speculative design &
            digital/virtual fashion, and finally BS in Computer Science.
          </p>
        </div>
        <div className="aboutRight">
          <h2>Get in touch</h2>
          <p className="aboutContent">
            <a href="mailto:sigga.irl@digitalsigga.xyz">
              sigga.irl@digitalsigga.xyz
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
