// GrandeCard.jsx
import React from 'react';
import S from './style.module.css';

const GrandeCard = ({ habitant, onClose, onNext, onPrev }) => {
  return (
    <div className={S.overlay}>
      <button className={S.backButton} onClick={onClose}>◄</button> {/* Utilisation de la flèche de retour en arrière */}
      <button className={S.prevButton} onClick={onPrev}>◄</button>
      <div className={S.grandeCard}>
        <div className={S.grandeCardContent}>
          <div className={S.imageContainer}>
            <img src={habitant.image} alt={habitant.name} className={S.grandeCardImage} />
          </div>
          <div className={S.textContent}>
            <h2 className={S.habitantName}>{habitant.name}</h2>
            <h3>Description</h3>
            <p>{habitant.description}</p>
            <h3>Traits Particuliers</h3>
            <p>{habitant.traits_particuliers}</p>
            <h3>Symboles</h3>
            <p>{habitant.symboles.join(', ')}</p>
            <h3>Lieu de Vie</h3>
            <p>{habitant.lieu_de_vie}</p>
          </div>
        </div>
      </div>
      <button className={S.nextButton} onClick={onNext}>►</button>
    </div>
  );
};

export default GrandeCard;




