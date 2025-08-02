import React, { useState } from 'react';
import Lottie from 'lottie-react';
import pointingMan from './animations/pointingMan.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    role: '', // new field
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmpassword) {
    alert('Passwords do not match!');
    return;
  }
   try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      alert('🎉 Registration successful!');
      navigate('/login');
    } catch (err) {
      alert('❌ Registration failed: ' + err.message);
      console.error(err);
    }
  };
  return (
    <div
      className="d-flex flex-column flex-lg-row justify-content-center align-items-center min-vh-100 px-3 py-4"
      style={{
        background: 'linear-gradient(to right, #fc5c7d, #6a82fb)',
      }}
    >
      <style>
        {`
          .btn-hover:hover {
            background-color: #4a148c !important;
            transform: scale(1.03);
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          }
          .btn-outline-primary:hover {
            background-color: #6a82fb !important;
            color: white !important;
            transform: scale(1.03);
          }
        `}
      </style>

      <div
        className="mb-4 mb-lg-0 d-flex justify-content-center align-items-center"
        style={{ width: '100%', maxWidth: '400px' }}
      >
        <Lottie
          animationData={pointingMan}
          loop={true}
          style={{ width: '100%', maxWidth: '300px' }}
        />
      </div>

      <div
        className="bg-white p-4 p-md-5 rounded-4 shadow-lg w-100"
        style={{ maxWidth: '480px' }}
      >
        <h2 className="fw-bold text-center mb-4" style={{ color: '#6a1b9a' }}>
          ✨ Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              className="form-control rounded-pill"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              className="form-control rounded-pill"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-pill"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Confirm Password</label>
            <input
              type="password"
              className="form-control rounded-pill"
              name="confirmpassword"
              required
              value={formData.confirmpassword}
              onChange={handleChange}
              placeholder="Confirm password"
            />
          </div>

          <div className="mb-4 text-start">
            <label className="form-label fw-semibold">Role</label>
            <select
              name="role"
              className="form-select rounded-pill"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn w-100 rounded-pill fw-bold mb-3 btn-hover"
            style={{
              backgroundColor: '#6a1b9a',
              color: 'white',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Register
          </button>
        </form>

        <div className="text-center">
          <p className="mb-1 fw-medium">Already have an account?</p>
          <button
            className="btn btn-outline-primary rounded-pill px-4"
            onClick={() => navigate('/login')}
            style={{ transition: 'all 0.3s ease-in-out' }}
          >
            Login Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
