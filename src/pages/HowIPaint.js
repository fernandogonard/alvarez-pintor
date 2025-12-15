
import React from 'react';
import { useTranslation } from 'react-i18next';
import './HowIPaint.css';

function HowIPaint() {
  const { t } = useTranslation();
  return (
    <div className="how-i-paint">
      <h1>{t('howipaint.title')}</h1>
      <p>{t('howipaint.p1')}</p>
      <p>{t('howipaint.p2')}</p>
      <p>{t('howipaint.p3')}</p>
      <p>{t('howipaint.p4')}</p>
      <p>{t('howipaint.p5')}</p>

      <div className="media">
        <img src="/assets/process/photo1.png" alt={t('howipaint.alt1')} />
        <img src="/assets/process/photo2.png" alt={t('howipaint.alt2')} />
        <video controls>
          <source src="/assets/process/video.mp4" type="video/mp4" />
          {t('howipaint.videoFallback')}
        </video>
      </div>
    </div>
  );
}

export default HowIPaint;