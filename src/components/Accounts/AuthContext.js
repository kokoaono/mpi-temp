import React, { useState, useContext, useEffect } from 'react';

const authContext = React.createContext();

export const useAuth = () => {
  useContext(authContext)
};


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });

  const setAuthData = data => {
    setAuth({ data })
  };

  useEffect(() => {
    setAuth({ loading: false, data: JSON.parse(localStorage.getItem('users')) })
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(auth.data))
  }, [auth.data])

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  )
};