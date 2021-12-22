import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Header from './components/header/Header';
import Login from './components/Login';
import FridgeLists from './components/FridgeLists';
import EditFridgeTempPage from './components/EditFridgeTempPage';
import RecordFridgeTemp from './components/RecordFridgeTemp';
import NavigationBar from './components/NavigationBar/NavigationBar';
import FoodTempForm from './components/tempForms/FoodTempForm'


const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='fridgelists' element={<FridgeLists />} />
          <Route path='edit/:id' element={<EditFridgeTempPage />} />
          <Route path='fridgetemp' element={<RecordFridgeTemp />} />
          <Route path='foodtemp' element={<FoodTempForm />} />
        </Routes>
      </Router>
    </Fragment>
  )
};

export default App;