import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './main.scss';
import Dashbord from './Components/Dashboard/Dashboard';
import FuelUsage from './Components/FuelUsage/FuelUsage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FuelUsage />} />
          <Route path="/Dashbord" element={<Dashbord />} />
          <Route path="/FuelUsage" element={<FuelUsage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
