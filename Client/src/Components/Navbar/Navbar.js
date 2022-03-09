import React, { useState } from "react";
import "./navbar.css";
// Icon Link
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [ShowMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <h3>Laptop Bazar </h3>
        </div>

        <div
          className={
            ShowMediaIcons ? "menu-link mobile-menu-link" : "menu-links"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/NewArrivals">New Arrivals</Link>
            </li>

            <li>
              <Link to="/Deals">Deals</Link>
            </li>

            <li>
              <Link to="/About">About</Link>
            </li>

            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="color-mode">
          <ul className="color-mode-desktop">
            <li>
              <Link to="/Login">Login / Register</Link>
            </li>
          </ul>
        </div>

        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!ShowMediaIcons)}>
            {" "}
            <FaBars />{" "}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
