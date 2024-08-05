// src/pages/LesMondes/LesMondes.jsx
import React from 'react';
import styles from './style.module.css';
import BackgroundPage from '../../components/Background-Page/Background-Page';

const LesMondes = () => {
  return (
    <BackgroundPage>
      <div className={styles.container}>
        <h1>Les Mondes</h1>
        {/* Ajoute ton contenu ici */}
      </div>
    </BackgroundPage>
  );
};

export default LesMondes;

