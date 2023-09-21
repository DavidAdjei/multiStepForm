import React from 'react';
import "./stepTwo.css"

function YearlyPlan(props) {
  return (
    <div
      className={`planDetails ${props.selected ? 'selected' : ''}`}
      onClick={props.onClick}
    >
      <div className='planImage'>
        <img src={props.image} alt={props.name} />
      </div>
      <div className='planDesc'>
        <span className='planName'>{props.name}</span>
        <span className='planPrice'>{props.price}</span>
        <span className='planDiscount'>{props.discount}</span>
      </div>
    </div>
  );
}

export default YearlyPlan;
