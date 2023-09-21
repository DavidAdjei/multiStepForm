import React from 'react';
import { Link } from 'react-router-dom';
import './step4.css';

export default function Step4({ selected, selectedAddOns, showYearlyPlans, setSelectedAddOns, setActiveStep }) {
function calculateTotalAddOnsPrice(addOns) {
  let total = 0;
  for (let i = 0; i < addOns.length; i++) {
    total += addOns[i].priceNo;
  }
  console.log(total)
  return total;
}

  const grandTotal = (selected.priceNo) + calculateTotalAddOnsPrice(selectedAddOns);

  return (
    <div className='step4'>
      <div className='stepFourSection'>
        <div className='info'>
          <h1 className='heading'>Finishing Up</h1>
          <p className='instructions'>Double-check everything looks OK before confirming</p>
        </div>
        <div className='monthlyConfirmation'>
          <div className='summary'>
            <div className='planSummary'>
              <div className='planSummaryLeft'>
                <p className='planName'>
                  {selected.name} ({selected.type})
                </p>
                <Link to={'/step2'} className='toStepTwo' onClick={()=>setSelectedAddOns([])}>
                  Change
                </Link>
              </div>
              <div className='planSummaryRight'>{selected.price}</div>
            </div>
            <hr />
            <div className='addOnsSummary'>
              {selectedAddOns.length > 0 ? (
                <ul>
                  {selectedAddOns.map((addOn, index) => (
                    <li key={index}>
                      {addOn.name} <span>{addOn.price}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No add-ons selected</p>
              )}
            </div>
          </div>
          <div className='calculateTotal'>
            <p>Total (per {showYearlyPlans ? 'year' : 'month'}):</p>
            <span>${grandTotal}/{showYearlyPlans ? 'yr' : 'mo'}</span>
          </div>
        </div>
      </div>
      <div className='buttonsColumn'>
        <Link to='/step3' className='goBackButton'
          onClick={() => {
            setSelectedAddOns([]);
            setActiveStep(3)
            }}>
          Go Back
        </Link>
        <Link to={'/step5'} className='nextButton'>
          Confirm
        </Link>
      </div>
    </div>
  );
}