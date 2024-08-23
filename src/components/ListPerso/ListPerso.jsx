import React, { useState, useEffect } from 'react';
import PetiteCard from '../PetiteCard/PetiteCard';
import GrandeCard from '../GrandeCard/GrandeCard';
import S from './style.module.css';
import { WorldAPI } from '../../api/world-API';

const ListPerso = ({ habitants, categorie }) => {
  const [habitantsDetails, setHabitantsDetails] = useState([]);
  const [selectedHabitantIndex, setSelectedHabitantIndex] = useState(null);

  useEffect(() => {
    const fetchHabitantsDetails = async () => {
      const details = await Promise.all(
        habitants.map(async (id) => {
          const data = await WorldAPI.fetchHabitantById(id);
          return data;
        })
      );

      // Filtrer les habitants par catégorie si elle est spécifiée et valide
      const filteredDetails = details.filter(habitant => {
        // Vérification supplémentaire pour éviter les erreurs
        if (habitant && habitant.categorie) {
          if (Array.isArray(categorie) && categorie.length > 0) {
            return categorie.includes(habitant.categorie);
          }
          return true; // Pas de catégorie spécifiée, inclure tous les habitants
        }
        return false; // Si l'habitant ou la catégorie est manquant
      });

      setHabitantsDetails(filteredDetails);
    };

    fetchHabitantsDetails();
  }, [habitants, categorie]);

  const openGrandeCard = (index) => {
    setSelectedHabitantIndex(index);
  };

  const closeGrandeCard = () => {
    setSelectedHabitantIndex(null);
  };

  const goToNextHabitant = () => {
    setSelectedHabitantIndex((prevIndex) => (prevIndex + 1) % habitantsDetails.length);
  };

  const goToPrevHabitant = () => {
    setSelectedHabitantIndex((prevIndex) =>
      prevIndex === 0 ? habitantsDetails.length - 1 : prevIndex - 1
    );
  };

  const getTitle = () => {
    if (!categorie) return "Les Habitants";
    if (categorie.includes('Ases') && categorie.includes('Vanes')) return "Les Dieux";
    if (categorie.includes('Ases')) return "Les Ases";
    if (categorie.includes('Vanes')) return "Les Vanes";
    if (categorie.includes('Monstres')) return null;
    return "Les Habitants";
  };

  return (
    <div className={S.habitantsContainer}>
      <h2 className={S.habitantsTitle}>{getTitle()}</h2>
      <div className={S.habitantsGrid}>
        {habitantsDetails.length > 0 ? (
          habitantsDetails.map((habitant, index) => (
            <div key={habitant.id} onClick={() => openGrandeCard(index)}>
              <PetiteCard image={habitant.image} name={habitant.name} />
            </div>
          ))
        ) : (
          <p>Aucun habitant trouvé dans cette catégorie.</p>
        )}
      </div>
      {selectedHabitantIndex !== null && (
        <GrandeCard
          habitant={habitantsDetails[selectedHabitantIndex]}
          onClose={closeGrandeCard}
          onNext={goToNextHabitant}
          onPrev={goToPrevHabitant}
        />
      )}
    </div>
  );
};

export default ListPerso;


























