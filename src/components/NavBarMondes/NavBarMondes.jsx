// NavBarMonde.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavBarMonde = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/les-mondes/1">Asgard</Link></li>
        <li><Link to="/les-mondes/2">Midgard</Link></li>
        <li><Link to="/les-mondes/3">Vanaheim</Link></li>
        <li><Link to="/les-mondes/4">Jotunheim</Link></li>
        <li><Link to="/les-mondes/5">Alfheim</Link></li>
        <li><Link to="/les-mondes/6">Nidavellir</Link></li>
        <li><Link to="/les-mondes/7">Muspelheim</Link></li>
        <li><Link to="/les-mondes/8">Niflheim</Link></li>
        <li><Link to="/les-mondes/9">Helheim</Link></li>
      </ul>
    </nav>
  );
};

export default NavBarMonde;


