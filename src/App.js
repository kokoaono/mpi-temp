import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/Login';
import FridgeList from './components/FridgeList';
import EditFridgeTempPage from './components/EditFridgeTempPage';
// import NavigationBar from './components/NavigationBar/NavigationBar';
import { FoodApp } from './components/Food/FoodApp';





const App = () => {
  return (
    <Fragment>
      <Router>
        {/* <NavigationBar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='fridgelist' element={<FridgeList />} />
          <Route path='edit/:id' element={<EditFridgeTempPage />} />
          <Route path='foodtemp' element={<FoodApp />} />
        </Routes>
      </Router>
    </Fragment>
  )
};

export default App;