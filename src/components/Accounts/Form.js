import React, { useState } from 'react';
import { Registeration } from './Registeration';
import { FormSuccess } from './FormSuccess';


export const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? <Registeration submitForm={submitForm} /> : <FormSuccess />}
    </div>
  )
};