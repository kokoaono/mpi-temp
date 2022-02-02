import React, { useState, useContext } from 'react';

const authContext = React.createContext();

export const useAuth = () => {
  useContext(authContext)
};


export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });

  const setAuthData = data => {
    setAuth({ data })
  };

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  )
};