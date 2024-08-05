// src/pages/LesMonstres/LesMonstres.jsx
import React from 'react';
import styles from './style.module.css';
import BackgroundPage from '../../components/Background-Page/Background-Page';

const LesMonstres = () => {
  return (
    <BackgroundPage>
      <div className={styles.container}>
        <h1>Les Monstres</h1>
        {/* Ajoute ton contenu ici */}
      </div>
    </BackgroundPage>
  );
};

export default LesMonstres;
