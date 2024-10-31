import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTP.css';

const OTPComponent = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('OTP Submitted:', otp);
    // Add OTP verification logic here
    navigate('/change-password'); // Navigate to ChangePassword page
  };

  return (
    <div className="otp-background">
      <div className="otp-container">
        <h2>Enter OTP</h2>
        <form onSubmit={handleSubmit} className="otp-form">
          <input
            type="text"
            className="otp-input"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleChange}
            required
          />
          <button type="submit" className="otp-button">
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPComponent;
