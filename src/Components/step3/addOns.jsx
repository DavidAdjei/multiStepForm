import React from 'react';
import './step3.css';
import { useState } from 'react';

function AddOns({ service, description, additionalPrice, priceNo,  handleCheckboxChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const addOnsClasses = isChecked ? 'addOns active' : 'addOns';

  return (
    <div className={addOnsClasses}>
      <div className='addOnsLeft'>
        <input
          type="checkbox"
          onClick={handleCheckbox}
          onChange={() => handleCheckboxChange(service, additionalPrice, priceNo)}
          checked={isChecked}
        />
        <div className='addOnsDesc'>
          <span className='service'>{service}</span>
          <span>{description}</span>
        </div>
      </div>
      <div className='addOnsRight'>
        <p className='price'>{additionalPrice}</p>
      </div>
    </div>
  );
}

export default AddOns;
