// NavBarMonde.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Supprimez useParams ici
import S from './style.module.css'; // Importation des styles avec "S"

const NavBarMonde = () => {
  const mondes = [
    { id: "1", name: "Asgard" },
    { id: "2", name: "Midgard" },
    { id: "3", name: "Vanaheim" },
    { id: "4", name: "Jotunheim" },
    { id: "5", name: "Alfheim" },
    { id: "6", name: "Nidavellir" },
    { id: "7", name: "Muspelheim" },
    { id: "8", name: "Niflheim" },
    { id: "9", name: "Helheim" }
  ];

  return (
    <nav className={S.navContainer}>
      <ul className={S.navList}>
        {mondes.map(monde => (
          <li key={monde.id} className={S.navItem}>
            <Link to={`/les-mondes/${monde.id}`} className={S.navLink}>
              {monde.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBarMonde;







