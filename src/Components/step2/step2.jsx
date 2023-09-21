import React from 'react';
import './stepTwo.css';
import { Link } from 'react-router-dom';
import Arcade from '../../assets/images/icon-arcade.svg'
import Advanced from '../../assets/images/icon-advanced.svg'
import Pro from '../../assets/images/icon-pro.svg'
import MonthlyPlan from './monthly';
import YearlyPlan from './yearly';


function Step2({showYearlyPlans, toggleYearlyPlans, handlePlanSelection, selected, setActiveStep}) {
  const nextStepRoute = '/step3';

    return (
      <div className="stepTwo">
        <div className='stepTwoSection'>
          <div className='info'>
            <h1 className='heading'>Select your plan</h1>
            <p className='instructions'>You have the option of monthly or yearly billing</p>
          </div>
          <div className={`monthlyPlans ${showYearlyPlans ? 'hide' : ''}`}>
          <MonthlyPlan
            selected={selected.name === 'Arcade'}
            onClick={() => handlePlanSelection('Arcade', 'Monthly', '$9/mo', 9)}
            image={Arcade}
            name='Arcade'
            price='$9/mo'
          />
          <MonthlyPlan
            selected={selected.name === 'Advanced'}
            onClick={() => handlePlanSelection('Advanced', 'Monthly', '$12/mo', 12)}
            image={Advanced}
            name='Advanced'
            price='$12/mo'
          />
          <MonthlyPlan
            selected={selected.name === 'Pro'}
            onClick={() => handlePlanSelection('Pro', 'Monthly', '$15/mo', 15)}
            image={Pro}
            name='Pro'
            price='$15/mo'
          />
        </div>
        <div className={`yearlyPlans ${showYearlyPlans ? '' : 'hide'}`}>
          <YearlyPlan
            selected={selected.name === 'Arcade'}
            onClick={() => handlePlanSelection('Arcade', 'Yearly', '$90/yr', 90)}
            image={Arcade}
            name='Arcade'
            price='$90/mo'
            discount='2 months free'
          />
          <YearlyPlan
            selected={selected.name === 'Advanced'}
            onClick={() => handlePlanSelection('Advanced', 'Yearly', '$120/yr', 120)}
            image={Advanced}
            name='Advanced'
            price='$120/mo'
            discount='2 months free'
          />
          <YearlyPlan
            selected={selected.name === 'Pro'}
            onClick={() => handlePlanSelection('Pro', 'Yearly', '$150/yr', 150)}
            image={Pro}
            name='Pro'
            price='$150/mo'
            discount='2 months free'
          />
        </div>
          <div className='planToggle'>
            <span className={showYearlyPlans ? '' : 'bolded'}>Monthly</span>
            <button className='clickToToggle' onClick={toggleYearlyPlans}>
              <span className={`circle ${showYearlyPlans ? 'hide' : ''}`}></span>
              <span className={`circleRight ${showYearlyPlans ? '' : 'hide'}`}></span>
            </button>
            <span className={showYearlyPlans ? 'bolded' : ''}>Yearly</span>
          </div>
        </div>
        <div className='buttonsColumn'>
          <Link to='/' className='goBackButton' onClick={()=>setActiveStep(1)}>
            Go Back
          </Link>
          <Link to={nextStepRoute} className='nextButton' onClick={()=>setActiveStep(3)}>
            Next Step
          </Link>
        </div>
      </div>
    );
}

export default Step2;
