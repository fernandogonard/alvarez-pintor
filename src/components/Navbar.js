import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="#top">Alberto Álvarez</a>
        <ul className="navbar-links">
          <li><a href="#biografia">Biografía</a></li>
          <li><a href="#obra">Obra</a></li>
          <li><a href="#prensa">Prensa</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
