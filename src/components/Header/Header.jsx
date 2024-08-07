// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header/style.module.css';
import logo from '../../assets-img/logo.png'; // Assure-toi que le chemin est correct

const Header = ({ position }) => {
  const headerClass = position === 'absolute' ? styles.headerAbsolute : styles.headerRelative;
  
  return (
    <header className={headerClass}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Yggdrasil</Link></li>
          <li><Link to="/les-mondes">Les Mondes</Link></li>
          <li><Link to="/les-dieux">Les Dieux</Link></li>
          <li><Link to="/les-monstres">Les Monstres</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


