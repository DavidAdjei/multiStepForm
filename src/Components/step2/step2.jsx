import React, { Component } from 'react';
import './stepTwo.css';
import { Link } from 'react-router-dom';
import Arcade from '../../assets/images/icon-arcade.svg'
import Advanced from '../../assets/images/icon-advanced.svg'
import Pro from '../../assets/images/icon-pro.svg'

export default class Step2 extends Component {
  render() {
  
    const nextStepRoute = '/step3';
    return (
      <div className="stepTwo">
        <div className='stepTwoSection'>
          <div className='info'>
            <h1 className='heading'> Select your plan</h1>
            <p className='instructions'> You have the option of monthly or yearly billinig</p>
          </div>
          <div className={`monthlyPlans ${this.props.showYearlyPlans ? 'hide' : ''}`}>
            <div className='planDetails'>
              <div className='planImage'>
                <img src={Arcade} alt="arcade" />
              </div>
              <div className='planDesc'>
                <span>Arcade</span>
                <span>$9/mo</span>
              </div>
            </div>
            <div className='planDetails'>
              <div className='planImage'>
                <img src={Advanced} alt="advanced" />
              </div>
              <div className='planDesc'>
                <span>Advanced</span>
                <span>$12/mo</span>
              </div>
            </div>
            <div className='planDetails'>
              <div className='planImage'>
                <img src={Pro} alt="pro" />
              </div>
              <div className='planDesc'>
                <span>Pro</span>
                <span>$15/mo</span>
              </div>
            </div>
          </div>
          <div className={`yearlyPlans ${this.props.showYearlyPlans ? '' : 'hide'}`}>
            <div className='planDetails'>
              <div className='planImage'>
                <img src="../../../public/assets/images/icon-arcade.svg" alt="arcade" />
              </div>
              <div className='planDesc'>
                <span>Arcade</span>
                <span>$90/yr</span>
                <span>2 months free</span>
              </div>
            </div>
            <div className='planDetails'>
              <div className='planImage'>
                <img src="../../../public/assets/images/icon-advanced.svg" alt="advanced" />
              </div>
              <div className='planDesc'>
                <span>Advanced</span>
                <span>$120/yr</span>
                <span>2 months free</span>
              </div>
            </div>
            <div className='planDetails'>
              <div className='planImage'>
                <img src="../../../public/assets/images/icon-pro.svg" alt="pro" />
              </div>
              <div className='planDesc'>
                <span>Pro</span>
                <span>$150/yr</span>
                <span>2 months free</span>
              </div>
            </div>
          </div>
          <div className='planToggle'>
            <span className={this.props.showYearlyPlans ? '' : 'bolded'}>Monthly</span>
            <button className='clickToToggle' onClick={this.props.toggleYearlyPlans}>
              <span className={`circle ${this.props.showYearlyPlans ? 'hide' : ''}`}></span>
              <span className={`circleRight ${this.props.showYearlyPlans ? '' : 'hide'}`}></span>
            </button>
            <span className={this.props.showYearlyPlans ? 'bolded' : ''}>Yearly</span>
          </div>
        </div>
        <div className='buttonsColumn'>
          <Link to='/' className='goBackButton'>
            Go Back
          </Link>
          <Link to={nextStepRoute} className='nextButton'>
            Next Step
          </Link>
        </div>
      </div>
    )
  }
}