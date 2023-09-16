import React from 'react';

const FormField = ({ label, id, name, type, placeholder, value, onChange, error }) => {
  return (
    <div className='formFields'>
          <label
              htmlFor={id}>
              {label}
              {error && <span className='error'>{error}</span>}
          </label>
      <input
        className={error ? 'inputField inputFieldError' : 'inputField'}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
