import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);

  const isLoggedIn = localStorage.getItem('user');

  const handleBookNow = () => {
    isLoggedIn ? navigate('/booking') : setShowPopup(true);
  };

  const handleClose = () => setShowPopup(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
  

    if (heroRef.current) observer.observe(heroRef.current);
    return () => heroRef.current && observer.unobserve(heroRef.current);
  }, []);



  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`hero d-flex flex-column justify-content-center align-items-center text-center text-white ${
          heroVisible ? 'visible' : ''
        }`}
      >
        <h1 className="display-3 fw-bold mb-3 fade-in">
          Welcome to <span className="brand">CaféReserve</span>
        </h1>
        <p className="lead mb-4 fade-in delay-1">
          Reserve your favorite café spot with ease & style.
        </p>
        <button onClick={handleBookNow} className="btn btn-custom fade-in delay-2">
          Book Now
        </button>
        <div className="scroll-down mt-5 fade-in delay-3">
          <i className="bi bi-chevron-double-down fs-2"></i>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5 text-center bg-light">
        <div className="container">
          <h2 className="mb-5 fw-bold text-dark">Why Choose Us?</h2>
          <div className="row g-4">
            {[
              {
                icon: 'bi-calendar2-check',
                color: 'text-primary',
                title: 'Quick Booking',
                desc: 'Reserve a table within seconds at your favorite cafés.',
              },
              {
                icon: 'bi-clock-history',
                color: 'text-success',
                title: 'Live Availability',
                desc: 'See real-time table availability before you book.',
              },
              {
                icon: 'bi-person-circle',
                color: 'text-danger',
                title: 'Your Dashboard',
                desc: 'Manage your reservations and preferences easily.',
              },
            ].map((f, i) => (
              <div className="col-md-4" key={i}>
                <div className="feature-card p-4 shadow rounded h-100">
                  <i className={`bi ${f.icon} display-5 ${f.color} mb-3`}></i>
                  <h5>{f.title}</h5>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white py-4">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} CaféReserve • All Rights Reserved By Ajay
        </p>
      </footer>

      {/* Login Modal */}
      <Modal show={showPopup} onHide={handleClose} centered>
        <Modal.Body className="text-center p-4">
          <h5 className="mt-3 text-danger fw-bold">Please login to continue booking.</h5>
          <Link to="/login" className="btn btn-outline-primary mt-3" onClick={handleClose}>
            Go to Login
          </Link>
        </Modal.Body>
      </Modal>

      {/* Styles */}
      <style>{`
        .hero {
          height: 90vh;
          opacity: 0;
          transform: translateY(50px);
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), 
                      url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092') center/cover no-repeat;
          padding: 40px;
          transition: opacity 1s ease, transform 1s ease;
          margin-top: 60px; /* Allow NavBar space */
        }

        .hero.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .brand {
          color: #ff6f61;
        }

        .btn-custom {
          background: #ff6f61;
          color: white;
          padding: 12px 36px;
          font-weight: 600;
          border-radius: 30px;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .btn-custom:hover {
          background: #e35b50;
          transform: scale(1.05);
        }

        .feature-card {
          background: #ffffff;
          border: 1px solid #eaeaea;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }

        .scroll-down i {
          color: white;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        footer {
          background-color: #333;
        }

        .fade-in {
          opacity: 0;
          animation: fadeIn 1s ease-in forwards;
        }

        .delay-1 { animation-delay: 0.3s; }
        .delay-2 { animation-delay: 0.6s; }
        .delay-3 { animation-delay: 0.9s; }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>

      {/* Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
    </>
  );
};

export default Home;
