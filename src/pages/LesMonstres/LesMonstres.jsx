// LesMonstres.jsx
import React, { useState, useEffect } from 'react';
import { WorldAPI } from '../../api/world-API';
import ListPerso from '../../components/ListPerso/ListPerso';
import DescriptifMonstres from '../../components/DescriptifMonstres/DescriptifMonstres'; // Le composant pour le descriptif

const LesMonstres = () => {
  const [monstres, setMonstres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const monstresData = await WorldAPI.fetchMonstres(); // Appel à l'API pour récupérer les monstres
        setMonstres(monstresData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="page-background"> {/* Assurez-vous d'avoir le même style que LesMondes.jsx */}
      
      <DescriptifMonstres /> {/* Le descriptif des monstres */}
      
      <ListPerso habitants={monstres.map(h => h.id)} categorie={['Monstres']} /> {/* Affichage des monstres */}
      
    </div>
  );
};

export default LesMonstres;







