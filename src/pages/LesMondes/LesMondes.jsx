// LesMondes.js
import React from 'react';
import TextMonde from '../../components/TextMonde/TextMonde';

const LesMondes = () => {
  const mondeIds = [1, 2]; // IDs des mondes que vous souhaitez afficher

  return (
    <div>
      {mondeIds.map(id => (
        <TextMonde key={id} id={id} />
      ))}
    </div>
  );
};

export default LesMondes;




