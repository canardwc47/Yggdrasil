// src/pages/LesDieux/LesDieux.jsx
import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import BackgroundPage from '../../components/Background-Page/Background-Page';
import ListPerso from '../../components/ListPerso/ListPerso';
import { WorldAPI } from '../../api/world-API';

const LesDieux = () => {
  const [habitants, setHabitants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await WorldAPI.fetchAllWorld();

        // Filtrage des habitants par catégorie (Ases et Vanes)
        const gods = data.habitants.filter(
          habitant => habitant.categorie === 'Ases' || habitant.categorie === 'Vanes'
        );

        setHabitants(gods);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des dieux:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <BackgroundPage>
      <div className={styles.container}>
        <h1 className={styles.title}>Les Dieux</h1>
        {loading ? (
          <p>Loading...</p>
        ) : habitants.length > 0 ? (
          <ListPerso habitants={habitants} />
        ) : (
          <p>Aucun dieu trouvé.</p>
        )}
      </div>
    </BackgroundPage>
  );
};

export default LesDieux;















