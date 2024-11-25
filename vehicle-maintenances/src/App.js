import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './main.scss';
import Login from './Components/Login/Login';
import ForgetPassword from './Components/Forget_Password/ForgetPassword';
import OTPComponent from './Components/OTP/OTP';
import ChangePassword from './Components/ChangePassword/ChangePassword';
import AddDetails from './Components/AddDetails/AddDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/otp" element={<OTPComponent />} /> {/* OTP route */}
          <Route path="/change-password" element={<ChangePassword />} /> {/* Change Password route */}
          <Route path="/add-details" element={<AddDetails />} /> {/* Add Details route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;