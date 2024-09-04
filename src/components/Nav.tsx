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
          <NavLink
            to="../pages/work"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Work
          </NavLink>
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
