
import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Navbar from './components/Navbar';
import ArtisticDivider from './components/ArtisticDivider';
import Biography from './pages/Biography';
import Gallery from './pages/Gallery';
import HowIPaint from './pages/HowIPaint';
import Association from './pages/Association';
import Press from './pages/Press';

import Blog from './Blog';
import Contact from './Contact';
import Footer from './components/Footer';

function App() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '90px 0 50px 0' }}>
        {/* Título internacionalizable */}
        <h1 id="top">{t('title')}</h1>
        {/* IMAGEN DESTACADA Section */}
        <section className="imagen-destacada" style={{ padding: '50px 20px', textAlign: 'center' }}>
          <img src="/assets/obra-destacada.png" alt={t('featured.alt')} style={{ maxWidth: '100%', height: 'auto' }} />
          <p style={{ marginTop: '10px', fontSize: '14px', color: '#555' }}>{t('featured.caption')}</p>
        </section>
        <ArtisticDivider />
        <section id="biografia"><Biography /></section>
        <ArtisticDivider />
        <section id="obra"><Gallery /></section>
        <ArtisticDivider />
        <section id="como-pinto"><HowIPaint /></section>
        <ArtisticDivider />
        <section id="asociacion"><Association /></section>
        <ArtisticDivider />
        <section id="prensa"><Press /></section>
        <ArtisticDivider />
        <section id="blog"><Blog /></section>
        <ArtisticDivider />
        <section id="contacto"><Contact /></section>
      </div>
      <Footer />
    </>
  );
}

export default App;
