import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FridgeTempForm from './components/FridgeTempForm';
import Home from './components/home/Home';
import Header from './components/Header';
import FoodTempForm from './components/FoodTempForm';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='temp' element={<FridgeTempForm />} />
          <Route path='foodtemp' element={<FoodTempForm />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;