import React, { useState } from 'react';
import Login from './Login';
import Home from '../home/Home'
import { AuthProvider } from './AuthContext';

export const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function submitLoginForm() {
    setIsLoggedIn(true);
  };

  return (
    <AuthProvider>
      {!isLoggedIn ? <Login submitLoginForm={submitLoginForm} /> : <Home />}
    </AuthProvider>
  )
};