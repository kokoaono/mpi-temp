import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './components/Accounts/AuthContext';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  (
    <ChakraProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  ),
  document.getElementById("root"));