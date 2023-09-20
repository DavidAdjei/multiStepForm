import './App.css';
import StepOne from './Components/step1/stepOne';
import Step2 from './Components/step2/step2';
import SideMenu from './Components/sideMenu/sideMenu';
import Step3 from './Components/step3/step3';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

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
  const [showYearlyPlans, setShowYearlyPlans] = useState(false)
  const toggleYearlyPlans = () => {
  setShowYearlyPlans((prevState) => !prevState);
};


  return (
    <section className="App">
      <SideMenu />
      <Routes>
        <Route path="/" element={
          <StepOne
            formData={formData}
            setFormData={setFormData}
          />}
        />
        <Route path="/step2" 
          element={
            <Step2
              showYearlyPlans={showYearlyPlans}
              toggleYearlyPlans={toggleYearlyPlans}
            />}
        />
        <Route
          path='/step3'
          element={
            <Step3
              showYearlyPlans={showYearlyPlans}
            />
          }
        />
      </Routes>
    </section>
  );
}

export default App;
