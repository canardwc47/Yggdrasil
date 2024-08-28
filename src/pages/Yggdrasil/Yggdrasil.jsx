// src/pages/Yggdrasil/Yggdrasil.jsx

import React from 'react';
import styles from './style.module.css';
import treeImage from '../../assets-img/Yggdrasil (2).png';
import cloud1 from '../../assets-img/nuage 1 (1).png';
import cloud2 from '../../assets-img/nuage2.png';
import cloud3 from '../../assets-img/nuage3 (1).png';
import cloud4 from '../../assets-img/nuage4 (1).png';
import cloud5 from '../../assets-img/nuage5 (1).png';
import cloud6 from '../../assets-img/nuage6.png';
import { useNavigate } from 'react-router-dom';

// Importation des images des mondes
import asgard from '../../assets-img/AsgardCercle.png';
import midgard from '../../assets-img/MidgardCercle.png';
import vanaheim from '../../assets-img/VanaheimCercle.png';
import jotunheim from '../../assets-img/JotunheimCercle.png';
import alfheim from '../../assets-img/AlheimCercle.png';
import nidavellir from '../../assets-img/NivaldirCercle.png';
import muspelheim from '../../assets-img/MuspelheimCercle.png';
import niflheim from '../../assets-img/NiflheimCercle.png';
import helheim from '../../assets-img/HelheimCercle.png';

const Yggdrasil = () => {
  const navigate = useNavigate();

  const handleNavigation = (id) => {
    navigate(`/les-mondes/${id}`);
  };

  return (
    <div className={styles.container}>
      <img src={cloud1} alt="Nuage 1" className={`${styles.cloud} ${styles.cloud1}`} />
      <img src={cloud2} alt="Nuage 2" className={`${styles.cloud} ${styles.cloud2}`} />
      <img src={cloud3} alt="Nuage 3" className={`${styles.cloud} ${styles.cloud3}`} />
      <img src={cloud4} alt="Nuage 4" className={`${styles.cloud} ${styles.cloud4}`} />
      <img src={cloud5} alt="Nuage 5" className={`${styles.cloud} ${styles.cloud5}`} />
      <img src={cloud6} alt="Nuage 6" className={`${styles.cloud} ${styles.cloud6}`} />
      <img src={treeImage} alt="Arbre Yggdrasil" className={styles.tree} />

      {/* Titre et texte descriptif */}
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Yggdrasil</h1>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Yggdrasil, l'arbre de vie, est le centre de l'univers dans la mythologie nordique. Il relie les neuf mondes et assure la cohésion du cosmos. Son tronc massif et ses branches s'étendent à travers les cieux, reliant les royaumes des dieux, des hommes et des créatures mystiques, tandis que ses racines plongent profondément dans les terres de l'obscurité et des secrets anciens.
        </p>
      </div>

      {/* Ajout des cercles avec les noms des mondes et positions ajustables */}
      <div className={`${styles.worldCircle} ${styles.circle1}`} onClick={() => handleNavigation(1)} style={{ top: '32%', left: '50%' }}>
        <img src={asgard} alt="Asgard" />
        <p>Asgard</p>
      </div>
      <div className={`${styles.worldCircle} ${styles.circle2}`} onClick={() => handleNavigation(2)} style={{ top: '52%', left: '45%' }}>
        <img src={midgard} alt="Midgard" />
        <p>Midgard</p>
      </div>
      <div className={`${styles.worldCircle} ${styles.circle3}`} onClick={() => handleNavigation(3)} style={{ top: '65%', left: '32%' }}>
        <img src={vanaheim} alt="Vanaheim" />
        <p>Vanaheim</p>
      </div>
      <div className={`${styles.worldCircle} ${styles.circle4}`} onClick={() => handleNavigation(4)} style={{ top: '77%', left: '23%' }}>
        <img src={jotunheim} alt="Jotunheim" />
        <p>Jotunheim</p>
      </div>
      <div className={`${styles.worldCircle} ${styles.circle5}`} onClick={() => handleNavigation(5)} style={{ top: '41%', left: '18%' }}>
        <img src={alfheim} alt="Alfheim" />
        <p>Alfheim</p>
      </div>
      <div className={`${styles.worldCircle} ${styles.circle6}`} onClick={() => handleNavigation(6)} style={{ top: '66%', left: '62%' }}>
        <img src={nidavellir} alt="Nidavellir" />
        <p>Nidavellir</p>
      </div>
      <div className={`${styles.worldCircle} ${styles.circle7}`} onClick={() => handleNavigation(7)} style={{ top: '48%', left: '80%' }}>
        <img src={muspelheim} alt="Muspelheim" />
        <p>Muspelheim</p>
      </div>
      <div className={`${styles.worldCircle} ${styles.circle8}`} onClick={() => handleNavigation(8)} style={{ top: '80%', left: '45%' }}>
        <img src={niflheim} alt="Niflheim" />
        <p>Niflheim</p>
      </div>
      <div className={`${styles.worldCircle} ${styles.circle9}`} onClick={() => handleNavigation(9)} style={{ top: '75%', left: '70%' }}>
        <img src={helheim} alt="Helheim" />
        <p>Helheim</p>
      </div>
    </div>
  );
};

export default Yggdrasil;







