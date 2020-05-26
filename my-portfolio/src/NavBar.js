import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/ca-projects-list">Coder Acadmey Projects</Link>
      </li>
      <li>
        <Link to="/personal-projects-list">Personal Projects</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
