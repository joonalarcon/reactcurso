import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <h2>Logo</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutme" className="nav-link">
            <h2>AboutMe</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/skills" className="nav-link">
            <h2>Skills</h2>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <h2>Contact</h2>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
