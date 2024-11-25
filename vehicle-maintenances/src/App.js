import React from 'react';
import './App.css';
import './main.scss';
import Dashbord from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App d-flex align-items-center justify-content-center vh-100" style={{ backgroundImage: 'url("your-background-image.jpg")', backgroundSize: 'cover' }}>
      <Dashbord />
    </div>
  );
}

export default App;
