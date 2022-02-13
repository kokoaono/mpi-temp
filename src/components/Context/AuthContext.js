import React, { useState, createContext, useContext } from 'react';

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext)
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  console.log(auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
};