// LesMondes.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextMonde from '../../components/TextMonde/TextMonde';
import NavBarMonde from '../../components/NavBarMondes/NavBarMondes';
import { WorldAPI } from '../../api/world-API'; // Supposons que c'est l'API pour récupérer les mondes et habitants
import ListPerso from '../../components/ListPerso/ListPerso';

const LesMondes = () => {
  const { id } = useParams(); // Récupère l'ID du monde à partir de l'URL
  const [monde, setMonde] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonde = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await WorldAPI.fetchAllWorld();
        const mondeData = data.mondes.find(m => m.id === id.toString());
        setMonde(mondeData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMonde();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!monde) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <NavBarMonde /> {/* Affiche la barre de navigation des mondes */}
      <TextMonde id={id} /> {/* Affiche les détails du monde */}
      <ListPerso habitants={monde.habitants} /> {/* Affiche les habitants du monde */}
    </div>
  );
};

export default LesMondes;





