import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Player } from '@lottiefiles/react-lottie-player';
import LoginHere from './animations/LoginHere.json';
import { useAuth } from '../context/AuthContext';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  

  const handleChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json(); // 🔄 Convert response to JSON

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    
    
    localStorage.setItem('token', data.token);
    localStorage.setItem('email', data.user.email); 
    localStorage.setItem('role', data.user.role);   
    
    
    alert(`Login successful! Welcome ${data.user.name}`);
    login(data); 
    navigate('/');
  } catch (error) {
    console.error("Login error:", error);
    alert(`Login failed: ${error.message}`);
  }
};


  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100 px-3"
      style={{
        background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
      }}
    >
      <div
        className="container bg-white rounded-4 shadow-lg py-4 px-3 px-md-5"
        style={{ maxWidth: '1000px' }}
      >
        <div className="row align-items-center">
          {/* Animation Column */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
            <Player
              autoplay
              loop
              src={LoginHere}
              style={{ height: '300px', width: '300px' }}
            />
          </div>

          {/* Form Column */}
          <div className="col-12 col-md-6">
            <h2 className="text-center mb-4" style={{ color: '#ff6a00' }}>
              🚀 Login
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-start">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2 text-start">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4 text-end d-flex justify-content-between align-items-center">
                <div className="mb-4 text-end">
                  <span>New user? </span>
                  <Link to="/register" style={{ color: '#ee0979', fontWeight: 'bold' }}>
                    Register here
                  </Link>
                </div>
                <Link to="/reset-password" style={{ color: '#ee0979' }}>
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="btn w-100 fw-bold"
                style={{
                  borderRadius: '30px',
                  backgroundColor: '#ff6a00',
                  color: 'white',
                  padding: '10px',
                  fontSize: '18px',
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
