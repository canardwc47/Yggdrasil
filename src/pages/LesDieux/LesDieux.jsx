// src/pages/LesDieux/LesDieux.jsx
import React from 'react';
import styles from './style.module.css';
import BackgroundPage from '../../components/Background-Page/Background-Page';
import ListDieux from '../../components/ListDieux/ListDieux';

const LesDieux = () => {
  return (
    <BackgroundPage>
      <div className={styles.container}>
        <h1 className={styles.title}>Les Dieux</h1>
        <ListDieux /> {/* Utilisation du nouveau composant ListDieux */}
      </div>
    </BackgroundPage>
  );
};

export default LesDieux;
















