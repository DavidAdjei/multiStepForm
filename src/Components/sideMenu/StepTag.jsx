import React from 'react';
import './sideMenu.css'

const StepTag = ({ stepNumber, stepName, step }) => {
  return (
    <div className="stepTag">
      <div className="stepNumber">{stepNumber}</div>
      <div className="stepName">
              <span>{step}</span> {stepName }
      </div>
    </div>
  );
};

export default StepTag;