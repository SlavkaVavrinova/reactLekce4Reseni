import React from 'react';
import { render } from 'react-dom';
import Animal from './Components/Animal';
import './style.css';

const App = () => {
  return (
    <div className="zoo">
      <Animal name="Lev král zvířat" species="lev.jpg" />
      <Animal name="Gibon opičák" species="gibon.jpg" />
      <Animal name="Nosorožec dvojroháč" species="nosorozec.jpg" />
      <Animal name="Panda nepandová" species="panda.jpg" />
      <Animal name="Papoušek mluvící" species="papousek.jpg" />
      <Animal name="Slon největší zvíře" species="slon.jpg" />
      <Animal name="Surikatí family" species="surikata.jpg" />
      <Animal name="Tygr drsňák" species="tygr.jpg" />
      <Animal name="Velbloud dvojhrbáč" species="velbloud.jpg" />
      <Animal name="Žirafa krkatá" species="zirafa.jpg" />
    </div>
  );
};

render(<App />, document.querySelector('#app'));
