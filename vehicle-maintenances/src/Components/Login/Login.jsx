import React, { useState } from 'react';
import './Login.css'; // Importing the CSS
import { FaUserAlt, FaKey } from 'react-icons/fa'; // For icons
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // For making API calls

const Login = () => {
  const navigate = useNavigate(); // For redirecting on successful login

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    type: '',
  });

  const [errorMessage, setErrorMessage] = useState(''); // To handle error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username: formData.username,
        password: formData.password,
      });

      // If login is successful, navigate based on user type
      console.log('Login successful:', response.data);
      if (formData.type === 'Admin') {
        navigate('/dashboard'); // Redirect to Admin Dashboard
      } else if (formData.type === 'User') {
        navigate('/dashboard'); // Redirect to User Dashboard
      }
    } catch (error) {
      console.error('Login error:', error.response || error.message);
      // Handle different types of error responses
      if (error.response) {
        // Backend-specific error
        const backendMessage =
          error.response.data.message || 'Login failed. Please try again!';
        setErrorMessage(backendMessage);
      } else {
        // General error
        setErrorMessage('Something went wrong. Please try again!');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-icon">
          <FaUserAlt size={40} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaUserAlt />
            </span>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaKey />
            </span>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <select
              className="form-control"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            LOGIN
          </button>
        </form>
        {errorMessage && (
          <div className="alert alert-danger mt-3" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="forgot-password">
          <Link to="/forget-password">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
