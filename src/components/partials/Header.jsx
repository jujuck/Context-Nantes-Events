import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-bg-secondary">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/favoris" className="nav-link">
              Favoris
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
