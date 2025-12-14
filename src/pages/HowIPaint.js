import React from 'react';
import './HowIPaint.css';

function HowIPaint() {
  return (
    <div className="how-i-paint">
      <h1>Cómo Pinto</h1>
      <p>El pincel se apoya en la boca.</p>
      <p>El cuello guía.<br />La cabeza corrige.</p>
      <p>La respiración ordena el movimiento.</p>
      <p>Pintar así no es una hazaña.</p>
      <p>Es un oficio aprendido<br />con tiempo.</p>

      <div className="media">
        <img src="/assets/process/photo1.png" alt="Proceso de pintura 1" />
        <img src="/assets/process/photo2.png" alt="Proceso de pintura 2" />
        <video controls>
          <source src="/assets/process/video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
}

export default HowIPaint;