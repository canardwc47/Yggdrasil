import React from 'react';
import styles from '../Footer/style.module.css';
import logo from '../../assets-img/logo.png'; // Assure-toi que le chemin est correct

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <ul>
          <li><a href="/">Yggdrasil</a></li>
          <li><a href="/les-dieux">Les Dieux</a></li>
          <li><a href="/les-monstres">Les Monstres</a></li>
        </ul>
      </div>
      <div className={styles.center}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.right}>
        <ul>
          <li><a href="/mentions-legales">Mentions légales</a></li>
          <li><a href="/cgv">CGV</a></li>
          <li><a href="mailto:yggdrasil@gmail.com">yggdrasil@gmail.com</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
