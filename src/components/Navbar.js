import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar__nav">
      <li className="navbar__item">
        <NavLink exact to="/" className="navbar__link">Home</NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/aieditor" className="navbar__link">AI Editor</NavLink>
      </li>
      <li className="navbar__item">
        <NavLink to="/blueprint" className="navbar__link">Blueprint</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
