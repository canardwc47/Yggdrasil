import React, { useEffect, useState } from 'react';
import { WorldAPI } from '../../api/note-api';

const WorldsComponent = () => {
  const [worlds, setWorlds] = useState([]);
  const [world, setWorld] = useState(null);

  useEffect(() => {
    // Fetch all worlds
    WorldAPI.fetchAllWorlds().then((data) => {
      setWorlds(data.mondes);
    });

    // Fetch a world by ID
    WorldAPI.fetchWorldById(1).then((data) => {
      setWorld(data);
    });
  }, []);

  return (
    <div>
      <h1>All Worlds</h1>
      <ul>
        {worlds.map((world) => (
          <li key={world.id}>{world.title}</li>
        ))}
      </ul>

      <h1>World with ID 1</h1>
      {world && <div>{world.title}</div>}
    </div>
  );
};

export default WorldsComponent;




