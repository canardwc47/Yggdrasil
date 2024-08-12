// LesMondes.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import TextMonde from '../../components/TextMonde/TextMonde';
import NavBarMonde from '../../components/NavBarMondes/NavBarMondes';

const LesMondes = () => {
  const { id } = useParams(); // Récupère l'ID du monde à partir de l'URL

  return (
    <div>
      <NavBarMonde /> {/* Affiche la barre de navigation des mondes */}
      <TextMonde id={id} /> {/* Affiche le monde correspondant */}
    </div>
  );
};

export default LesMondes;




