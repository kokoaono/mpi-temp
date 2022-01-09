import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/Login';
import FridgeList from './components/FridgeList';
// import EditFridgeTempPage from './components/EditFridgeTempPage';
import { FoodApp } from './components/Food/FoodApp';
import { EditFood } from './components/Food/EditFood';
import Basic from './components/Basic'





const App = () => {
  return (
    <Fragment>
      <Basic />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='fridgelist' element={<FridgeList />} />
          <Route path='edit/:foodId' element={<EditFood />} />
          <Route path='foodtemp' element={<FoodApp />} />
        </Routes>
      </Router>
    </Fragment>
  )
};

export default App;