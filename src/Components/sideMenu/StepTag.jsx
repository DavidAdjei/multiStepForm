import React from 'react';
import './sideMenu.css'

export default function StepTag({ stepNumber, stepName, step, activeStep }) {
  return (
    <div className='stepTag'>
       <div className={`stepNumber ${activeStep === stepNumber ? 'isActive' : ''}`}>{stepNumber}</div>
       <div className="stepName">
          <span>{step}</span> {stepName }
       </div>
    </div> 
  );
}








