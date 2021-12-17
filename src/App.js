import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Header from './components/Header';
import Login from './components/Login';
import FoodTempForm from './components/tempForms/FoodTempForm';
import FridgeLists from './components/FridgeLists';
import EditFridgeTempPage from './components/EditFridgeTempPage';
import FridgeTempForm from './components/FridgeTempForm';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='fridgelists' element={<FridgeLists />} />
          <Route path='edit/:id' element={<EditFridgeTempPage />} />
          <Route path='foodtemp' element={<FoodTempForm />} />
          <Route path='temp' element={<FridgeTempForm />} />
        </Routes>
      </Router>
    </Fragment>
  )
};

export default App;