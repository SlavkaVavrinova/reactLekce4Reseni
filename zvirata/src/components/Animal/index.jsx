import React from 'react';
import './style.css';

const Animal = ({ name, species }) => {
  return (
    <div className="animal">
      <img src={`/assets/${species}`} alt={species} />
      {name}
    </div>
  );
};

export default Animal;
