import "../styles/footer.css";
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p>
          <a href="mailto:sigga.irl@digitalsigga.xyz">
            <FaEnvelope size={20} />
          </a>
        </p>
        <p>
          <a
            href="https://instagram.com/digitalsigga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>{" "}
          <a
            href="https://github.com/digitalsigga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/digitalsigga/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
