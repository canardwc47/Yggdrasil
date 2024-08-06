// src/pages/Yggdrasil/Yggdrasil.jsx
import React from 'react';
import styles from './style.module.css';
import treeImage from '../../assets-img/Yggdrasil (2).png';
import cloud1 from '../../assets-img/nuage 1 (1).png';
import cloud2 from '../../assets-img/nuage2 (1).png';
import cloud3 from '../../assets-img/nuage3 (1).png';
import cloud4 from '../../assets-img/nuage4 (1).png';



const Yggdrasil = () => {
  return (
    <div className={styles.container}>
      <img src={cloud1} alt="Nuage 1" className={`${styles.cloud} ${styles.cloud1}`} />
      <img src={cloud2} alt="Nuage 2" className={`${styles.cloud} ${styles.cloud2}`} />
      <img src={cloud3} alt="Nuage 3" className={`${styles.cloud} ${styles.cloud3}`} />
      <img src={cloud4} alt="Nuage 4" className={`${styles.cloud} ${styles.cloud4}`} />
      <img src={treeImage} alt="Arbre Yggdrasil" className={styles.tree} />
    </div>
  );
};

export default Yggdrasil;

