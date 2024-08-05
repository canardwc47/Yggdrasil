// src/pages/LesDieux/LesDieux.jsx
import React from 'react';
import styles from './style.module.css';
import BackgroundPage from '../../components/Background-Page/Background-Page';

const LesDieux = () => {
  return (
    <BackgroundPage>
      <div className={styles.container}>
        <h1>Les Dieux</h1>
        {/* Ajoute ton contenu ici */}
      </div>
    </BackgroundPage>
  );
};

export default LesDieux;
