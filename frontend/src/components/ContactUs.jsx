// src/components/ContactUs.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './ContactUs.css'; // optional, use if external styles

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Contact Me</h2>
        <p style={styles.text}>Let's connect and collaborate!</p>

        <div style={styles.links}>
          <a
            href="https://www.linkedin.com/in/ajay-kumar-gaddam-299475294/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FaLinkedin style={styles.icon} /> LinkedIn
          </a>
          <a
            href="https://github.com/GADDAMAJAYKUMAR"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <FaGithub style={styles.icon} /> GitHub
          </a>
          <a
            href="mailto:gaddamajaykumar11@gmail.com"
            style={styles.link}
          >
            <FaEnvelope style={styles.icon} /> Email Me
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(to right, #000046, #1CB5E0)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px',
  },
  card: {
    backgroundColor: '#ffffffee',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
    textAlign: 'center',
    maxWidth: '500px',
    width: '100%',
  },
  heading: {
    color: '#1CB5E0',
    fontSize: '2rem',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '1.1rem',
    marginBottom: '25px',
    color: '#333',
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    fontSize: '1.1rem',
    color: '#000046',
    background: '#f0f8ff',
    padding: '10px 15px',
    borderRadius: '10px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: '8px',
    fontSize: '1.3rem',
  },
};

export default ContactUs;
