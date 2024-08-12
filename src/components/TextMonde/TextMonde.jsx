// TextMonde.jsx
import React, { useState, useEffect } from 'react';
import { WorldAPI } from '../../api/world-API';
import S from '../TextMonde/style.module.css';

const TextMonde = ({ id }) => {
  const [monde, setMonde] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonde = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await WorldAPI.fetchAllWorld();
        const mondeData = data.mondes.find(m => m.id === id.toString()); // Filtrer pour obtenir le monde par ID
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
    <div className={S.MondeContainer}>
      <h1 className={S.mondeTitle}>{monde.title}</h1>
      <div className={S.mondeImageContainer}>
        {monde.image && <img src={monde.image} alt={monde.title} className={S.mondeImage} />}
      </div>
      <p className={S.mondeContent}>{monde.content}</p>
    </div>
  );
};

// L'export doit se trouver ici
export default TextMonde;




















