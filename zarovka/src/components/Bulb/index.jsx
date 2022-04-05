import React from 'react';
import './style.css';

const Bulb = ({ on }) => {
  return <div className={on === true ? 'bulb bulb--on' : 'bulb'}></div>;
};

export default Bulb;

/* 

Kratší totožná varianta

const Bulb = ({ on }) => {
  return <div className={on ? 'bulb bulb--on' : 'bulb'}></div>;
};


Zápis s props
const Bulb = ( props ) => {
  return <div className={props.on === true ? 'bulb bulb--on' : 'bulb'}></div>;
};

*/
