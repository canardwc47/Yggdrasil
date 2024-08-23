// LesDieux.jsx
import React, { useState, useEffect } from 'react';
import { WorldAPI } from '../../api/world-API';
import ListPerso from '../../components/ListPerso/ListPerso';
import DescriptifDieux from '../../components/DescriptifDieux/DescriptifDieux'; // Le nouveau composant pour le descriptif

const LesDieux = () => {
  const [ases, setAses] = useState([]);
  const [vanes, setVanes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [asesData, vanesData] = await Promise.all([
          WorldAPI.fetchAses(),
          WorldAPI.fetchVanes()
        ]);
        setAses(asesData);
        setVanes(vanesData);
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
      
      <DescriptifDieux /> {/* Le descriptif des dieux */}
      
      <ListPerso habitants={ases.map(h => h.id)} categorie={['Ases']} />
      
      <ListPerso habitants={vanes.map(h => h.id)} categorie={['Vanes']} />
    </div>
  );
};

export default LesDieux;

















