import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function NavBar() {
  const { user, logout, ready } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!ready) return null;

  return (
    <nav className="navbar navbar-expand-md navbar-dark"
      style={{
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '8px 20px',
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold fs-4">CaféReserve</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <div className="d-flex flex-md-row flex-wrap ms-auto align-items-center gap-2">
            <Link to="/about" className="nav-link text-white">About Us</Link>
            <Link to="/contact" className="nav-link text-white">Contact Us</Link>
          
          <Link className="nav-link text-white" to="/view-bookings">View Bookings</Link>
                

            {user ? (
              <>
                {user.role === 'USER' && (
                  <>
                    <Link to="/view-bookings" className="nav-link text-white">My Bookings</Link>
                    <Link to="/profile" className="nav-link text-white">Profile</Link>
                  </>
                )}

                {user.role === 'ADMIN' && (
                  <>
                    <Link to="/admin/meals" className="nav-link text-white">Manage Meals</Link>
                    <Link to="/admin/bookings" className="nav-link text-white">All Bookings</Link>
                    <Link to="/profile" className="nav-link text-white">Admin Profile</Link>
                  </>
                )}
              

                <button onClick={handleLogout} className="btn btn-danger btn-sm ms-md-2">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link text-white">Login</Link>
                <Link to="/register" className="nav-link text-white">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
