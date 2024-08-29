import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextMonde from '../../components/TextMonde/TextMonde';
import NavBarMonde from '../../components/NavBarMondes/NavBarMondes';
import { WorldAPI } from '../../api/world-API';
import ListPerso from '../../components/ListPerso/ListPerso';

const LesMondes = () => {
  const { id } = useParams();
  const [monde, setMonde] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentHabitants, setCurrentHabitants] = useState([]);

  useEffect(() => {
    const fetchMonde = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await WorldAPI.fetchAllWorld();
        const mondeData = data.mondes.find(m => m.id === id.toString());
        setMonde(mondeData);
        setCurrentHabitants(mondeData.habitants); // Set the current habitants
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMonde();
  }, [id]);

  const handleMondeChange = (newMonde) => {
    setMonde(newMonde);
    setCurrentHabitants(newMonde.habitants);
  };

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
      <NavBarMonde />
      <TextMonde id={id} onMondeChange={handleMondeChange} /> {/* Pass the handler to TextMonde */}
      <ListPerso habitants={currentHabitants} /> {/* Pass the updated habitants */}
    </div>
  );
};

export default LesMondes;






