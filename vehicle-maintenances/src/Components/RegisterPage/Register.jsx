import React, { useState } from 'react';
import './Login.css'; // Reuse the same CSS as Login
import { FaUserAlt, FaKey, FaEnvelope, FaPhone, FaUsers } from 'react-icons/fa'; // For icons
import { Link, useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios'; // For API calls

const Register = () => {
  const navigate = useNavigate(); // For navigation after successful registration

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    phone: '',
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState(''); // To handle error messages
  const [successMessage, setSuccessMessage] = useState(''); // To handle success messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        phoneNumber: formData.phone,
        username: formData.username,
        password: formData.password,
      });

      console.log('Registration successful:', response.data);
      setSuccessMessage(response.data); // Display success message
      setTimeout(() => {
        navigate('/'); // Redirect to login page after success
      }, 2000); // 2 seconds delay
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      setErrorMessage(
        error.response?.data || 'Something went wrong. Please try again!'
      );
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-icon">
          <FaUserAlt size={40} />
        </div>
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaUserAlt />
            </span>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaEnvelope />
            </span>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaUsers />
            </span>
            <select
              className="form-control"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Role
              </option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaPhone />
            </span>
            <input
              type="tel"
              className="form-control"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit" className="btn btn-primary w-100">
            REGISTER
          </button>
        </form>
        {successMessage && (
          <div className="alert alert-success mt-3" role="alert">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-danger mt-3" role="alert">
            {errorMessage}
          </div>
        )}
        <div className="forgot-password">
          <Link to="/">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
