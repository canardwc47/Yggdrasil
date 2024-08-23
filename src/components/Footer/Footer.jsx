// src/components/Footer.jsx
import React from 'react';
import S from '../Footer/style.module.css';
import logo from '../../assets-img/logo.png'; // Assure-toi que le chemin est correct

const Footer = ({ position }) => {
  const footerClass = position === 'absolute' ? S.footerAbsolute : S.footerRelative;
  
  return (
    <footer className={footerClass}>
      <div className={S.left}>
        <ul className={S.ul}>
          <li className={S.li}><a href="/">Yggdrasil</a></li>
          <li className={S.li}><a href="/les-mondes">Les Mondes</a></li>
          <li className={S.li}><a href="/les-dieux">Les Dieux</a></li>
          <li className={S.li}><a href="/les-monstres">Les Monstres</a></li>
        </ul>
      </div>
      <div className={S.center}>
        <img src={logo} alt="Logo" className={S.logo} />
      </div>
      <div className={S.right}>
        <ul className={S.ul}>
          <li className={S.li}><a href="/mentions-legales">Mentions légales</a></li>
          <li className={S.li}><a href="/cgv">CGV</a></li>
          <li className={S.li}><a href="mailto:yggdrasil@gmail.com">yggdrasil@gmail.com</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;




