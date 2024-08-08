// TextMonde.jsx
import React, { useState, useEffect } from 'react';
import { WorldAPI } from '../../api/note-api'; // Assurez-vous que le chemin et le nom de l'import sont corrects
import S from './style.module.css'; // Chemin d'importation relatif au fichier TextMonde.jsx

const TextMonde = ({ id }) => {
  const [monde, setMonde] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonde = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await WorldAPI.fetchWorldById(id); // Utilisation de la méthode correcte
        setMonde(data);
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
      <h1 className="monde-title">{monde.title}</h1>
      <div className="monde-image-container">
        {monde.image && <img src={monde.image} alt={monde.title} style={{ width: '100%', height: 'auto' }} />}
      </div>
      <p className="monde-content">{monde.content}</p>
    </div>
  );
};

export default TextMonde;


