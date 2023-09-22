import './App.css';
import StepOne from './Components/step1/stepOne';
import Step2 from './Components/step2/step2';
import SideMenu from './Components/sideMenu/sideMenu';
import Step3 from './Components/step3/step3';
import Step4 from './Components/step4/step4.jsx'
import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Step5 from './Components/step5/step5';

function App() {
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    phoneNumber: '',
    errors: {
      displayName: '',
      email: '',
      phoneNumber: '',
    },
  });
  const [isValid, setIsValid] = useState(null)
  const [showYearlyPlans, setShowYearlyPlans] = useState(false);
  const [selected, setSelected] = useState({
    name: 'Arcade',
    type: 'Monthly',
    price: '$9/mo',
    priceNo: 9
  });
  const [activeStep, setActiveStep] = useState(1)

  const [selectedAddOns, setSelectedAddOns] = useState([]); 

   const toggleYearlyPlans = () => {
     setShowYearlyPlans((prevState) => !prevState);
     showYearlyPlans ? setSelected({ name: 'Arcade', type: 'Month', price: '$9/mo', priceNo: 9 }) :
       setSelected({ name: 'Arcade', type: 'Yearly', price: '$90/yr', priceNo: 90 })
       
   };
  
  const validateForm = () => {
    const { displayName, email, phoneNumber } = formData;
    let errors = {};
    setIsValid(true)

    if (!displayName) {
      errors.displayName = 'This field is required';
      setIsValid(false)
    }

    if (!email) {
      errors.email = 'This field is required';
      setIsValid(false)
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
      setIsValid(false)
    }

    if (!phoneNumber) {
      errors.phoneNumber = 'This field is required';
      setIsValid(false)
    }

    setFormData((prevFormData) => ({ ...prevFormData, errors }));
    return isValid;
  };

  const handlePlanSelection = (planName, planType, planPrice, priceNo) => {
    setSelected({
      name: planName,
      type: planType,
      price: planPrice,
      priceNo: priceNo
    });
  };

  const handleCheckboxChange = (name, price, priceNo) => {
  const isAlreadySelected = selectedAddOns.some((addOn) => addOn.name === name);

  if (isAlreadySelected) {
    const updatedSelectedAddOns = selectedAddOns.filter((addOn) => addOn.name !== name);
    setSelectedAddOns(updatedSelectedAddOns);
  } else {
    const updatedSelectedAddOns = [...selectedAddOns, { name, price, priceNo }];
    setSelectedAddOns(updatedSelectedAddOns);
  }
};

  return (
    <section className="App">
      <SideMenu
        setActiveStep={setActiveStep}
        activeStep ={activeStep}
      />
      <Routes>
        <Route
          path="/"
          element={
            <StepOne
              formData={formData}
              setFormData={setFormData}
              validateForm={validateForm}
              setActiveStep = {setActiveStep}
            />}
        />
        <Route
          path="/step2"
          element={
            isValid ? (
            <Step2
              showYearlyPlans={showYearlyPlans}
              toggleYearlyPlans={toggleYearlyPlans}
              handlePlanSelection={handlePlanSelection}
              selected={selected}
              setActiveStep = {setActiveStep}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />
        <Route
          path="/step3"
          element={
            isValid ? (
              <Step3
                showYearlyPlans={showYearlyPlans}
                handleCheckboxChange={handleCheckboxChange}
                selectedAddOns={selectedAddOns}
                setActiveStep = {setActiveStep}
              />):  (
              <Navigate to="/" />
            )
          } />
        <Route
          path='/step4'
          element={
            isValid ? (
              <Step4
                selected={selected}
                selectedAddOns={selectedAddOns}
                showYearlyPlans={showYearlyPlans}
                setSelectedAddOns={setSelectedAddOns}
                setActiveStep = {setActiveStep}
              />):  (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path='/step5'
          element={
            isValid ? (
              <Step5/>):  (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </section>
  );
}

export default App;
