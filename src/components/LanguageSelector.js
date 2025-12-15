
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' }
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const current = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div ref={ref} className="lang-selector-dropdown">
      <button
        className="lang-selector-btn"
        onClick={() => setOpen(v => !v)}
        aria-label="Seleccionar idioma"
      >
        <span style={{ fontSize: 20, marginRight: 6 }}>🌐</span>
        <span style={{ fontWeight: 500 }}>{current.flag}</span>
        <span style={{ margin: '0 4px', fontWeight: 500 }}>{current.label}</span>
        <span style={{ fontSize: 12, marginLeft: 2 }}>▼</span>
      </button>
      {open && (
        <ul className="lang-selector-menu">
          {languages.map(lang => (
            <li key={lang.code}>
              <button
                className={`lang-selector-item${i18n.language === lang.code ? ' active' : ''}`}
                onClick={() => { i18n.changeLanguage(lang.code); setOpen(false); }}
                aria-label={lang.label}
              >
                <span style={{ fontSize: 18, marginRight: 8 }}>{lang.flag}</span>
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
