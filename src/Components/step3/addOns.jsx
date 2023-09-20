import React, { useState } from 'react';
import './step3.css';

function AddOns({ service, description, additionalPrice }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const addOnsClasses = isChecked ? 'addOns active' : 'addOns';

  return (
    <div className={addOnsClasses}>
      <div className='addOnsLeft'>
        <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
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
