import React from 'react';
import './style.css';

const Bulb = ({ on }) => {
  return <div className={on === true ? 'bulb bulb--on' : 'bulb'}></div>;
};

export default Bulb;

/* varianta 2

const Bulb = ( props ) => {
  return <div className={props.on === true ? 'bulb bulb--on' : 'bulb'}></div>;
};

*/
