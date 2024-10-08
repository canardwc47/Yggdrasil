import React from 'react';
import S from './style.module.css';

const GrandeCard = ({ habitant, onClose, onNext, onPrev }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Appelle la fonction onClose si on clique sur l'overlay
    }
  };

  return (
    <div className={S.overlay} onClick={handleOverlayClick}>
      <button className={S.closeButton} onClick={onClose}>✕</button> {/* Bouton de fermeture */}
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





