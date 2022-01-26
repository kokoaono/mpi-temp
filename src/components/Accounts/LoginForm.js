import React, { useState } from 'react';
import Login from './Login';
import Home from '../home/Home'

export const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitLoginForm() {
    setIsSubmitted(true);
  };

  return (
    <>
      {!isSubmitted ? <Login submitLoginForm={submitLoginForm} /> : <Home />}
    </>

  )
};
