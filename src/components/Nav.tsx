import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-container">
      <p>
        <NavLink
          to="../pages/home"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Sigríður Birna Matthíasdóttir
        </NavLink>
      </p>
      <ul>
        <li>
          <NavLink
            to="../pages/about"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <a
            href="https://sigridurbirna.cargo.site/"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Projects
          </a>
        </li>
        <li>
          <NavLink
            to="../pages/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
