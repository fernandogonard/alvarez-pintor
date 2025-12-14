import React, { useState } from 'react';
import './Gallery.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const galleryImages = [
  // Serie Andino
  { src: '/assets/gallery/andino1.png', alt: 'Andino 1' },
  { src: '/assets/gallery/andino2.png', alt: 'Andino 2' },
  { src: '/assets/gallery/andino3.png', alt: 'Andino 3' },
  // Paisajes
  { src: '/assets/gallery/paisaje1.png', alt: 'Paisaje 1' },
  { src: '/assets/gallery/paisaje2.png', alt: 'Paisaje 2' },
  { src: '/assets/gallery/paisaje3.png', alt: 'Paisaje 3' },
  // Naturalezas Muertas
  { src: '/assets/gallery/naturaleza1.png', alt: 'Naturaleza Muerta 1' },
  { src: '/assets/gallery/naturaleza2.png', alt: 'Naturaleza Muerta 2' },
  { src: '/assets/gallery/naturaleza3.png', alt: 'Naturaleza Muerta 3' },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  // Helper to get images for each section
  const getImages = (start, end) => galleryImages.slice(start, end);

  const handleImageClick = (idx) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <div className="gallery">
      <h1>Obra</h1>

      <section className="series">
        <h2>Serie Andino</h2>
        <div className="images">
          {getImages(0, 3).map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              onClick={() => handleImageClick(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </section>

      <section className="series">
        <h2>Paisajes</h2>
        <div className="images">
          {getImages(3, 6).map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              onClick={() => handleImageClick(i + 3)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </section>

      <section className="series">
        <h2>Naturalezas Muertas</h2>
        <div className="images">
          {getImages(6, 9).map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              onClick={() => handleImageClick(i + 6)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages.map(img => ({ src: img.src, alt: img.alt }))}
        index={index}
      />
    </div>
  );
}

export default Gallery;