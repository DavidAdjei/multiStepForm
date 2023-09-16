import React, { Component } from 'react';
import './sideMenu.css';
import StepTag from './StepTag'; 

export default class SideMenu extends Component {
  render() {
    return (
      <div className="sideMenu">
        <StepTag stepNumber={1} stepName="Your Info" step="Step 1" />
        <StepTag stepNumber={2} stepName="Select Plans" step="Step 2"/>
        <StepTag stepNumber={3} stepName="Add-ons" step="Step 3"/>
        <StepTag stepNumber={4} stepName="Summary" step="Step 4"/>
      </div>
    );
  }
}
