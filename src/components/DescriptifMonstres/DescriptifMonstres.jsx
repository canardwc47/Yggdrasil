// DescriptifMonstres.jsx
import React from 'react';
import styles from '../DescriptifMonstres/style.module.css'; // Importez les styles pour ce composant

const DescriptifMonstres = () => {
  return (
    <div className={styles.descriptifContainer}>
        <h1 className={styles.title}>Les Monstres</h1>
      <p>
        Dans la mythologie nordique, les monstres représentent des forces chaotiques et destructrices souvent en conflit avec les dieux et les humains. Ces créatures incluent les géants, des êtres colossaux qui incarnent le désordre et le danger, ainsi que divers êtres surnaturels et dangereux, comme les dragons et les revenants. Ils habitent des royaumes hostiles et inaccessibles, tels que Jotunheim et Helheim, et sont souvent associés à des forces de ténèbres. Inévitablement, ces monstres jouent un rôle essentiel dans les mythes, signalant les défis majeurs et les conflits qui mènent les récits de la fin du monde, ou Ragnarök.
      </p>
    </div>
  );
};

export default DescriptifMonstres;
