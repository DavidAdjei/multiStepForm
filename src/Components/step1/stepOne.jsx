import React from 'react';
import './stepOne.css';
import FormField from './formField';
import { useNavigate } from 'react-router';

export default function StepOne({ formData, setFormData, validateForm, setActiveStep }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate('/step2');
      setActiveStep(2);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const { displayName, email, phoneNumber, errors } = formData;

  return (
    <div className='stepOne'>
      <div className='info'>
        <h1 className='heading'>Personal info</h1>
        <p className='instructions'>
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form className='stepOneForm' onSubmit={handleSubmit}>
        <FormField
          label='Name'
          id='name'
          name='displayName'
          type='text'
          value={displayName}
          onChange={handleInputChange}
          placeholder='e.g. Stephen King'
          error={errors.displayName}
        />
        <FormField
          label='Email'
          id='email'
          name='email'
          type='text'
          value={email}
          onChange={handleInputChange}
          placeholder='e.g. stephenking@lorem.com'
          error={errors.email}
        />
        <FormField
          label='Phone Number'
          id='phoneNumber'
          name='phoneNumber'
          type='number'
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder='e.g. +1 234 567 890'
          error={errors.phoneNumber}
        />
        <button className='nextButton1' type='submit'>
          Next Step
        </button>
      </form>
    </div>
  );
}
