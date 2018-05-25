import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar__nav">
      <li className="navbar__item">
        <Link to="/" className="navbar__link">Home</Link>
      </li>
      <li className="navbar__item">
        <Link to="/aieditor" className="navbar__link">AI Editor</Link>
      </li>
      <li className="navbar__item">
        <Link to="/blueprint" className="navbar__link">Blueprint</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
