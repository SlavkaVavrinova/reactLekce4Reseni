import React from 'react';
import { render } from 'react-dom';
import Person from './Components/Person';
import './style.css';

const App = () => {
  return (
    <>
      <Person name="Jana Nováková" gender="f" />
      <Person name="Josef Malý" gender="m" />
      <Person name="Klára Malá" gender="f" />
      <Person name="Jan Novák" gender="m" />
    </>
  );
};

render(<App />, document.querySelector('#app'));
