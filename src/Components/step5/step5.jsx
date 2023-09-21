import React, { Component } from 'react'
import check from '../../assets/images/icon-thank-you.svg'
import './step5.css'
export default class Step5 extends Component {
  render() {
    return (
      <div className='step5'>
        <div className='image5'>
            <img src={check} alt="checkmark" />
        </div>
        <div>
            <h1 className="heading">Thank you!</h1>
        </div>
        <div className='message'>
            <p className='instructions'>
               Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com. 
            </p>
        </div>
      </div>
    )
  }
}
