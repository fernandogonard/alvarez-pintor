import React from 'react';
import './ArtisticDivider.css';

const ArtisticDivider = () => (
  <div className="artistic-divider">
    <svg viewBox="0 0 400 30" width="100%" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20 Q 200 0 390 20 Q 300 30 200 20 Q 100 10 10 20 Z" fill="#e0e0e0" opacity="0.7"/>
      <path d="M10 20 Q 200 5 390 20" stroke="#bdbdbd" strokeWidth="2.5" fill="none" opacity="0.8"/>
    </svg>
  </div>
);

export default ArtisticDivider;
