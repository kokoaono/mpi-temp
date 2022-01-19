import React, { useState } from 'react';
import { FormSignup } from './FormSignup';
import { FormSuccess } from './FormSuccess';

export const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  }
  return (
    <div>
      {/* <FormSignup /> */}
      {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
    </div>
  )
};
