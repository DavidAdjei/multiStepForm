import React, { Component } from 'react';
import StepTwoMonthly from './stepTwoMonthly';
import { Routes, Route } from 'react-router-dom';

export default class Step2 extends Component {
  render() {
    return (
        <div className='buttonsColumn'>
            <button>
                Go Back
            </button>
            <button>
                Next Step
            </button>
        </div>
    )
  }
}
