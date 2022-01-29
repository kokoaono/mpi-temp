import React, { useState } from 'react';
import Login from './Login';
import Home from '../home/Home'

export const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function submitLoginForm() {
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? <Login submitLoginForm={submitLoginForm} /> : <Home />}
    </>

  )
};