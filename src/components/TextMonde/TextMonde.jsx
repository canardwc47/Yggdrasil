import React, { useState, useEffect } from 'react';
import { WorldAPI } from '../../api/world-API';
import S from './style.module.css';

const TextMonde = ({ id, onMondeChange }) => {
  const [monde, setMonde] = useState(null);
  const [allMondes, setAllMondes] = useState([]);
  const [currentMondeIndex, setCurrentMondeIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMonde = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await WorldAPI.fetchAllWorld();
        setAllMondes(data.mondes);
        const mondeData = data.mondes.find(m => m.id === id.toString());
        setMonde(mondeData);
        setCurrentMondeIndex(data.mondes.findIndex(m => m.id === id.toString()));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMonde();
  }, [id]);

  const goToNextMonde = () => {
    setCurrentMondeIndex((prevIndex) => (prevIndex + 1) % allMondes.length);
  };

  const goToPrevMonde = () => {
    setCurrentMondeIndex((prevIndex) => 
      prevIndex === 0 ? allMondes.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (allMondes.length > 0) {
      const selectedMonde = allMondes[currentMondeIndex];
      setMonde(selectedMonde);
      onMondeChange(selectedMonde); // Notify parent component of the change
    }
  }, [currentMondeIndex, allMondes, onMondeChange]);

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
      <div className={S.carouselWrapper}>
        <button onClick={goToPrevMonde} className={S.carouselButton}>←</button>
        <h1 className={S.mondeTitle}>{monde.title}</h1>
        <button onClick={goToNextMonde} className={S.carouselButton}>→</button>
      </div>
      <div className={S.mondeImageContainer}>
        {monde.image && <img src={monde.image} alt={monde.title} className={S.mondeImage} />}
      </div>
      <p className={S.mondeContent}>{monde.content}</p>
    </div>
  );
};

export default TextMonde;









































