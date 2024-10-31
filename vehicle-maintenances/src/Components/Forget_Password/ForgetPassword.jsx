import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ForgetPassword.css'; // Custom CSS for additional styling
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="forget-password-container d-flex align-items-center justify-content-center">
      <div className="forget-password-card p-4 text-center">
        <h2 className="mb-3">Forgot Password?</h2>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter email or Phone no..."
        />
        <button
          className="btn btn-primary w-100 mb-3"
          style={{ backgroundColor: '#ff007f', border: 'none' }}
          onClick={() => navigate('/otp')} // Navigate to OTP page on click
        >
          Reset Password
        </button>
        <hr />
        <button
          className="btn btn-light w-100 mb-3"
          onClick={() => navigate('/')} // Navigate to Login page on click
        >
          BACK
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
