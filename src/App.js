import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Form } from './components/Accounts/Form';
import Home from './components/home/Home';
import Login from './components/Accounts/Login';
import { NotFound } from './components/NotFound';
import WithBackgroundImage from './components/home/Example';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<WithBackgroundImage />} />
          <Route path='/home' element={<Home />} />
          <Route path='register' element={<Form />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </Fragment>
  )
};

export default App;