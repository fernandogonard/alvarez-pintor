import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Cierra el menú al hacer clic en un enlace
  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a className="navbar-logo" href="#top">Alberto Álvarez</a>
        <button
          className={`navbar-burger${open ? ' open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links${open ? ' show' : ''}`}>
          <li><a href="#biografia" onClick={handleLinkClick}>Biografía</a></li>
          <li><a href="#obra" onClick={handleLinkClick}>Obra</a></li>
          <li><a href="#prensa" onClick={handleLinkClick}>Prensa</a></li>
          <li><a href="#blog" onClick={handleLinkClick}>Blog</a></li>
          <li><a href="#contacto" onClick={handleLinkClick}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
