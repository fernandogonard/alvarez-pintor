
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Association.css';

function Association() {
  const { t } = useTranslation();
  return (
    <div className="association">
      <h1>{t('association.title')}</h1>
      <p>{t('association.p1')}</p>
      <p>{t('association.p2')}</p>
      <p>{t('association.p3')}</p>
    </div>
  );
}

export default Association;