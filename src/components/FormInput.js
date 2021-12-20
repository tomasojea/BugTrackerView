import { useState } from 'react';
import { useContext } from 'react';
import { FormContext } from './FormWrapper';

function FormInput(props) {

const {
    label, 
    type = 'text', 
    name, 
    value, 
    onChange
  } = props;
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;


  return (
    <div className="FormInput">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default FormInput;