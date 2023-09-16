import React, { Component } from 'react'

export default class StepTwoMonthly extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className='heading'> Select your plan</h1>
          <p className='instructions'> You have the option of monthly or yearly billinig</p>
        </div>
        <div>
          <div>
            <div><img src="" alt="" /></div>
            <div><span>Arcade</span> $9/mo</div>
          </div>
          <div>
            <div><img src="" alt="" /></div>
            <div><span>Advanced</span>$12/mo</div>
          </div>
          <div>
            <div><img src="" alt="" /></div>
            <div><span>Pro</span>$15/mo</div>
          </div>
        </div>
        <div>
          <span>Monthly</span>
          <span>Yearly</span>
        </div>
      </div>
    )
  }
}
