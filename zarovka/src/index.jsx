import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Bulb from './components/Bulb';

const App = () => (
  <>
    <Bulb on={true} />
    <Bulb on={false} />
    <Bulb on={true} />
    <Bulb on />
  </>
);

render(<App />, document.querySelector('#app'));
