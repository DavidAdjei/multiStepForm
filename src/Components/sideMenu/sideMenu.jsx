import React, { Component } from 'react';
import './sideMenu.css';
import StepTag from './StepTag'; 

export default class SideMenu extends Component {
  render() {
    const { activeStep } = this.props;

    return (
      <div className="sideMenu">
        <StepTag
          stepNumber={1}
          stepName="Your Info"
          step="Step 1"
          activeStep ={activeStep}
        />
        <StepTag
          stepNumber={2}
          stepName="Select Plans"
          step="Step 2"
          activeStep ={activeStep}
        />
        <StepTag
          stepNumber={3}
          stepName="Add-ons"
          step="Step 3"
          activeStep ={activeStep}
        />
        <StepTag
          stepNumber={4}
          stepName="Summary"
          step="Step 4"
          activeStep ={activeStep}
        />
      </div>
    );
  }
}
