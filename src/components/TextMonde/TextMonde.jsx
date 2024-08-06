// TextMonde.js
import React, { useState, useEffect } from 'react';
import { NoteAPI } from '../../api/note-api';
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
        const data = await NoteAPI.fetchById(id);
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

