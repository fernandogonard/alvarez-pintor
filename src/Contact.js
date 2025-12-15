
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-container">
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.text')}</p>
      <p className="contact-email">contacto@arteejemplo.com</p>
    </div>
  );
};

export default Contact;