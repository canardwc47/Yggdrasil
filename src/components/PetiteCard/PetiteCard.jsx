// PetiteCard.jsx
import React from 'react';
import S from './style.module.css';

const PetiteCard = ({ image, name }) => {
  return (
    <div className={S.cardContainer}>
      <div className={S.card}>
        <img src={image} alt={name} className={S.cardImage} />
      </div>
      <p className={S.cardName}>{name}</p> {/* Nom en dehors de la carte */}
    </div>
  );
};

export default PetiteCard;




