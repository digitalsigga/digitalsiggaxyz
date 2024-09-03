import "../styles/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <p>Sigríður Birna Matthíasdóttir</p>
      <ul>
        <li>
          <Link to="../pages/about">About</Link>
        </li>
        <li>
          <a href="https://sigridurbirna.cargo.site/">Projects</a>
        </li>
        <li>
          <Link to="../pages/contact">Contact</Link>
        </li>
        <li>
          <Link to="../pages/home">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
