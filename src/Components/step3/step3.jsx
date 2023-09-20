import React, { Component } from 'react'
import AddOns from './addOns'
import { Link } from 'react-router-dom';

export default class Step3 extends Component {
  render() {
    return (
        <div className='stepThree'>
            <div className='stepThreeSection'>
                <div className='info'>
                    <h1 className="heading">Pick add-ons</h1>
                    <p className="instructions">Add-ons help enhance your gaming experience.</p>
                </div>
                <div className={`${this.props.showYearlyPlans ? 'hide' : 'monthlyAddOns'} `}>
                    <AddOns
                        service="Online Service"
                        description="Access to multiplayer games"
                        additionalPrice="+$1/mo"
                    />
                    <AddOns
                        service="Larger storage"
                        description="Extra 1TB of cloud storage"
                        additionalPrice="+$2/mo"
                    />
                    <AddOns
                        service="Customizable profile"
                        description="Custom theme on your profile"
                        additionalPrice="+$2/mo"
                    />
                </div>
                <div className={`${this.props.showYearlyPlans ? 'yearlyAddOns' : 'hide'}`}>
                    <AddOns
                        service="Online Service"
                        description="Access to multiplayer games"
                        additionalPrice="+$10/mo"
                    />
                    <AddOns
                        service="Larger storage"
                        description="Extra 1TB of cloud storage"
                        additionalPrice="+$20/mo"
                    />
                    <AddOns
                        service="Customizable profile"
                        description="Custom theme on your profile"
                        additionalPrice="+$20/mo"
                    />
                </div>

            </div>
            <div className='buttonsColumn'>
                <Link to='/step2' className='goBackButton'>
                    Go Back
                </Link>
                <Link to='/step4' className='nextButton'>
                    Next Step
                </Link>``
            </div>
      </div>
    )
  }
}
