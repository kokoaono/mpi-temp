import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Form } from './components/Accounts/Form';
import Home from './components/home/Home';
import Login from './components/Accounts/Login';
import { NotFound } from './components/NotFound';
import LandingPage from './components/home/LandingPage';
import ForgotPwd from './components/ForgotPwd';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='requestpassword' element={<ForgotPwd />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Form />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  )
};

export default App;