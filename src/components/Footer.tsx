import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>
          Contact:{" "}
          <a href="mailto:sigga.irl@digitalsigga.xyz">
            sigga.irl@digitalsigga.xyz
          </a>
        </p>
        <p>
          Follow me on:
          <a
            href="https://instagram.com/digitalsigga"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Instagram
          </a>
          ,
          <a
            href="https://github.com/digitalsigga"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>
          , and
          <a
            href="https://www.linkedin.com/in/digitalsigga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
