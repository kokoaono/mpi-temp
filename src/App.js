import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FridgeTempForm from './components/FridgeTempForm';
import Home from './components/home/Home';
import Header from './components/Header';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='temp' element={<FridgeTempForm />} />
        </Routes>
      </Router>
    </div>
  )
};

export default App;