// src/pages/LesMonstres/LesMonstres.jsx
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import BackgroundPage from '../../components/Background-Page/Background-Page';
import ListPerso from '../../components/ListPerso/ListPerso';
import { WorldAPI } from '../../api/world-API';

const LesMonstres = () => {
  const [habitants, setHabitants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await WorldAPI.fetchAllWorld();
        const monsters = data.habitants.filter(habitant => habitant.categorie === 'Monstre');
        setHabitants(monsters.map(habitant => habitant.id)); // Assurez-vous de passer les IDs
      } catch (error) {
        console.error("Erreur lors de la récupération des monstres :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <BackgroundPage>
      <div className={styles.container}>
        <h1 className={styles.title}>Les Monstres</h1>
        {habitants.length > 0 ? (
          <ListPerso habitants={habitants} categorie={['Monstre']} />
        ) : (
          <p>Aucun monstre trouvé.</p>
        )}
      </div>
    </BackgroundPage>
  );
};

export default LesMonstres;






