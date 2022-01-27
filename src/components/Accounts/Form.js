import React, { useState } from 'react';
import { Registration } from './Registration';
import { FormSuccess } from './FormSuccess';


export const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? <Registration submitForm={submitForm} /> : <FormSuccess />}
    </div>
  )
};