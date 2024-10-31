import React, { useState } from 'react';
import './Login.css'; // Importing the CSS
import { FaUserAlt, FaKey } from 'react-icons/fa'; // For icons
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    type: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data submitted:', formData);
    // Add your login logic here
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
        <div className="forgot-password">
          <Link to="/forget-password">Forgot password?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
