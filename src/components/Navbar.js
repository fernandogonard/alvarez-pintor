
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Cierra el menú al hacer clic en un enlace
  const handleLinkClick = () => setOpen(false);

  const { t } = useTranslation();
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
        {/* Selector de idioma solo visible en desktop */}
        <div className="navbar-lang desktop-only">
          <LanguageSelector />
        </div>
        <ul className={`navbar-links${open ? ' show' : ''}`}>
          <li><a href="#biografia" onClick={handleLinkClick}>{t('nav.biography')}</a></li>
          <li><a href="#obra" onClick={handleLinkClick}>{t('nav.gallery')}</a></li>
          <li><a href="#prensa" onClick={handleLinkClick}>{t('nav.press')}</a></li>
          <li><a href="#blog" onClick={handleLinkClick}>{t('nav.blog')}</a></li>
          <li><a href="#contacto" onClick={handleLinkClick}>{t('nav.contact')}</a></li>
          {/* Selector de idioma solo visible en móvil, dentro del menú */}
          <li className="mobile-only"><LanguageSelector /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
