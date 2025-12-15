
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Biography.css';

function Biography() {
  const { t } = useTranslation();
  return (
    <div className="biography">
      <h1>{t('biography.title')}</h1>
      <p>{t('biography.p1')}</p>
      <p>{t('biography.p2')}</p>
      <p>{t('biography.p3')}</p>
      <p>{t('biography.p4')}</p>
      <p>{t('biography.p5')}</p>
      <p>{t('biography.p6')}</p>
      <p>{t('biography.p7')}</p>
      <p>{t('biography.p8')}</p>
    </div>
  );
}

export default Biography;