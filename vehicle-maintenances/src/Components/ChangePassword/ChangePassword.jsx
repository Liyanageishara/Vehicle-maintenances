// ChangePassword.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ChangePassword.css'; // Import your custom CSS for styling
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Password changed successfully');
      // Add logic for updating password here
      navigate('/'); // Navigate back to login or home page after success
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="change-password-background">
      <div className="change-password-container">
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit} className="change-password-form">
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Enter New Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Re-type New Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#ff007f', border: 'none' }}>
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
