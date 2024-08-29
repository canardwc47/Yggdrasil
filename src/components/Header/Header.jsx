import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header/style.module.css';
import logo from '../../assets-img/logo.png';

const Header = ({ position }) => {
  const [navOpen, setNavOpen] = useState(false);
  const headerClass = position === 'absolute' ? styles.headerAbsolute : styles.headerRelative;
  
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className={headerClass}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <nav className={`${styles.nav} ${navOpen ? styles.open : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleNav}>Yggdrasil</Link></li>
          <li><Link to="/les-mondes" onClick={toggleNav}>Les Mondes</Link></li>
          <li><Link to="/les-dieux" onClick={toggleNav}>Les Dieux</Link></li>
          <li><Link to="/les-monstres" onClick={toggleNav}>Les Monstres</Link></li>
        </ul>
      </nav>
      <div className={styles.burger} onClick={toggleNav}>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
        <div className={styles.burgerLine}></div>
      </div>
    </header>
  );
};

export default Header;




