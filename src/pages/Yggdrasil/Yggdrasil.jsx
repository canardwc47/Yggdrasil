import React from 'react';
import styles from './style.module.css';
import treeImage from '../../assets-img/Yggdrasil (2).png';
import cloud1 from '../../assets-img/nuage 1 (1).png';
import cloud2 from '../../assets-img/nuage2 (1).png';
import cloud3 from '../../assets-img/nuage3 (1).png';
import cloud4 from '../../assets-img/nuage4 (1).png';
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
      <img src={treeImage} alt="Arbre Yggdrasil" className={styles.tree} />

      {/* Ajout des cercles avec les noms des mondes et positions ajustables */}
      <div className={styles.worldCircle} onClick={() => handleNavigation(1)} style={{ top: '18%', left: '50%' }}>
        <img src={asgard} alt="Asgard" />
        <p>Asgard</p>
      </div>
      <div className={styles.worldCircle} onClick={() => handleNavigation(2)} style={{ top: '34%', left: '65%' }}>
        <img src={midgard} alt="Midgard" />
        <p>Midgard</p>
      </div>
      <div className={styles.worldCircle} onClick={() => handleNavigation(3)} style={{ top: '28%', left: '35%' }}>
        <img src={vanaheim} alt="Vanaheim" />
        <p>Vanaheim</p>
      </div>
      <div className={styles.worldCircle} onClick={() => handleNavigation(4)} style={{ top: '49%', left: '50%' }}>
        <img src={jotunheim} alt="Jotunheim" />
        <p>Jotunheim</p>
      </div>
      <div className={styles.worldCircle} onClick={() => handleNavigation(5)} style={{ top: '59%', left: '25%' }}>
        <img src={alfheim} alt="Alfheim" />
        <p>Alfheim</p>
      </div>
      <div className={styles.worldCircle} onClick={() => handleNavigation(6)} style={{ top: '70%', left: '75%' }}>
        <img src={nidavellir} alt="Nidavellir" />
        <p>Nidavellir</p>
      </div>
      <div className={styles.worldCircle} onClick={() => handleNavigation(7)} style={{ top: '42%', left: '80%' }}>
        <img src={muspelheim} alt="Muspelheim" />
        <p>Muspelheim</p>
      </div>
      <div className={styles.worldCircle} onClick={() => handleNavigation(8)} style={{ top: '84%', left: '40%' }}>
        <img src={niflheim} alt="Niflheim" />
        <p>Niflheim</p>
      </div>
      <div className={styles.worldCircle} onClick={() => handleNavigation(9)} style={{ top: '90%', left: '60%' }}>
        <img src={helheim} alt="Helheim" />
        <p>Helheim</p>
      </div>
    </div>
  );
};

export default Yggdrasil;





