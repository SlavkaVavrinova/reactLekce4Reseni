import React from 'react';
import './style.css';

import zena from './img/female.png';
import muz from './img/male.png';

const Person = ({ gender, name }) => {
  return (
    <div className={gender === 'f' ? ' person person--f' : 'person person--m'}>
      <img
        className="person__img"
        src={gender === 'f' ? zena : muz}
        alt={gender === 'f' ? 'Ikona žena' : 'Ikona muž'}
      />
      <p>{name}</p>
    </div>
  );
};

export default Person;

/*

const Person = (props) => {
  return (
    <div
      className={
        props.gender === 'f' ? ' person person--f' : 'person person--m'
      }
    >
      <img
        className="person__img"
        src={props.gender === 'f' ? zena : muz}
        alt={props.gender === 'f' ? 'Ikona žena' : 'Ikona muž'}
      />
      {props.name}
    </div>
  );
};
*/
