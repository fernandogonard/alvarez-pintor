import React from 'react';
import { useTranslation } from 'react-i18next';
import './Press.css';

function Press() {
  const { t } = useTranslation();
  return (
    <div className="press">
      <h1>{t('press.title')}</h1>
      <ul>
        <li>
          <span>2024</span> – <a href="https://ahoramardelplata.com.ar/ultimas-noticias/alberto-alvarez-el-delegado-argentino-la-asociacion-mundial-pintores-la-boca-y-el-pie-suiza-n5358762" target="_blank" rel="noopener noreferrer">{t('press.articles.0.title')}</a> – Ahora Mar del Plata<br/>
          {t('press.articles.0.desc')}
        </li>
        <li>
          <span>2024</span> – <a href="https://contrastemdp.com.ar" target="_blank" rel="noopener noreferrer">{t('press.articles.1.title')}</a> – Contraste MDP (05/09/2024)<br/>
          {t('press.articles.1.desc')}
            <img src="/assets/press/articulo1.png" alt="Contraste MDP - Andino" />
            <div>
              <span>2024</span> – <a href="https://contrastemdp.com.ar" target="_blank" rel="noopener noreferrer">{t('press.articles.1.title')}</a> – Contraste MDP (05/09/2024)<br/>
              {t('press.articles.1.desc')}
            </div>
        </li>
        <li>
          <span>2024</span> – <a href="https://www.lacapitalmdp.com/obras-pintadas-con-el-pincel-en-la-boca-podran-verse-en-la-muestra-andino/#google_vignette" target="_blank" rel="noopener noreferrer">{t('press.articles.2.title')}</a> – Diario La Capital (Mar del Plata) (05/09/2024)<br/>
          {t('press.articles.2.desc')}
            <img src="/assets/press/articulo2.png" alt="La Capital - Andino" />
            <div>
              <span>2024</span> – <a href="https://www.lacapitalmdp.com/obras-pintadas-con-el-pincel-en-la-boca-podran-verse-en-la-muestra-andino/#google_vignette" target="_blank" rel="noopener noreferrer">{t('press.articles.2.title')}</a> – Diario La Capital (Mar del Plata) (05/09/2024)<br/>
              {t('press.articles.2.desc')}
            </div>
        </li>
        <li>
          <span>2023</span> – <a href="https://wwwold.municipiosanjuan.gob.ar" target="_blank" rel="noopener noreferrer">{t('press.articles.3.title')}</a> – Municipio de San Juan (05/07/2023)<br/>
          {t('press.articles.3.desc')}
            <img src="/assets/press/articulo3.png" alt="San Juan - Juego de Damas" />
            <div>
              <span>2023</span> – <a href="https://wwwold.municipiosanjuan.gob.ar" target="_blank" rel="noopener noreferrer">{t('press.articles.3.title')}</a> – Municipio de San Juan (05/07/2023)<br/>
              {t('press.articles.3.desc')}
            </div>
        </li>
        <li>
          <span>2021</span> – <a href="https://www.lavoz.com.ar/historias-de-vida/alberto-alvarez-la-nariz-y-la-boca-son-mis-manos-y-mis-brazos/" target="_blank" rel="noopener noreferrer">“La nariz y la boca son mis manos y mis brazos”</a> – La Voz del Interior<br/>
          Entrevista y perfil del pintor.
        </li>
        <li>
          <span>2016</span> – <a href="https://lacapitalmdp.com" target="_blank" rel="noopener noreferrer">“Alberto Álvarez: ‘La silla de ruedas es mi pasaporte a todo lo que logré’”</a> – Diario La Capital (03/10/2016)<br/>
          Entrevista y perfil del pintor. Se detalla su historia, premios y visión de vida.
        </li>
        <li>
          <span>1999</span> – <a href="https://www.lanacion.com.ar/salud/alberto-alvarez-la-silla-de-ruedas-puede-limitar-mi-cuerpo-pero-no-mi-espiritu-nid16081999/" target="_blank" rel="noopener noreferrer">“Arte para una tarjeta navideña”</a> – La Nación (22/12/1999)<br/>
          Crónica sobre la editorial Pintores sin Manos y sus artistas. Se menciona a Álvarez como ejemplo de pintor con la boca.
        </li>
      </ul>
    </div>
  );
}

export default Press;