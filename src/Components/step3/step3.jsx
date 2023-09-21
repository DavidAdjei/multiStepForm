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
                        priceNo= {1}
                        handleCheckboxChange={this.props.handleCheckboxChange}
                    />
                    <AddOns
                        service="Larger storage"
                        description="Extra 1TB of cloud storage"
                        additionalPrice="+$2/mo"
                        priceNo= {2}
                        handleCheckboxChange={this.props.handleCheckboxChange}
                    />
                    <AddOns
                        service="Customizable profile"
                        description="Custom theme on your profile"
                        additionalPrice="+$2/mo"
                        priceNo= {2}
                        handleCheckboxChange={this.props.handleCheckboxChange}
                    />
                </div>
                <div className={`${this.props.showYearlyPlans ? 'yearlyAddOns' : 'hide'}`}>
                    <AddOns
                        service="Online Service"
                        description="Access to multiplayer games"
                        additionalPrice="+$10/yr"
                        priceNo= {10}
                        handleCheckboxChange={this.props.handleCheckboxChange}
                    />
                    <AddOns
                        service="Larger storage"
                        description="Extra 1TB of cloud storage"
                        additionalPrice="+$20/yr"
                        priceNo= {20}
                        handleCheckboxChange={this.props.handleCheckboxChange}
                    />
                    <AddOns
                        service="Customizable profile"
                        description="Custom theme on your profile"
                        additionalPrice="+$20/yr"
                        priceNo= {20}
                        handleCheckboxChange={this.props.handleCheckboxChange}
                    />
                </div>
            </div>
            <div className='buttonsColumn'>
                <Link to='/step2' className='goBackButton' onClick={()=>this.props.setActiveStep(2)}>
                    Go Back
                </Link>
                <Link to='/step4' className='nextButton' onClick={()=>this.props.setActiveStep(4)}>
                    Next Step
                </Link>
            </div>
      </div>
    )
  }
}
