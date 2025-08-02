import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us-section py-5">
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5">
        {/* Profile Image */}
        <div className="profile-image-wrapper">
          <img
            src="/user.jpg"
            alt="Ajay Kumar - Full Stack Developer"
            className="profile-image shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Text Content */}
        <div className="text-wrapper">
          <h1 className="name-title">GADDAM AJAY KUMAR</h1>
          <h5 className="sub-title">Full Stack Developer | Student at CMRIT</h5>

          <div className="about-text mt-4">
            <h2 className="section-title mb-3">About Me</h2>

            <p>
              Hello! I’m <strong>Gaddam Ajay Kumar</strong>, a passionate Full Stack Developer and student at
              <strong> CMR Institute of Technology (CMRIT)</strong>. I enjoy building scalable and user-focused web applications that solve real-world problems.
            </p>

            <p>
              <strong>Why CaféReserve?</strong> I wanted to solve the frustration people face while reserving cafés. So I built a solution that allows
              <em> instant booking, real-time availability</em>, and a smooth user experience.
            </p>

            <p>
              This project demonstrates my skills in backend design, secure APIs, and frontend UI/UX. It's responsive, fast, and built with modern tools.
            </p>

            <p>
              <strong>CaféReserve</strong> is more than just a booking platform—it's a demonstration of how I turn ideas into full-fledged applications.
            </p>

            <p className="signature">
              — Thank you! I hope to contribute my energy and skills to your team.
            </p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .about-us-section {
          background: linear-gradient(135deg, #101820, #203a43, #2c5364);
          color: #ffffff;
          border-radius: 18px;
          padding: 3rem 2rem;
          max-width: 1100px;
          margin: 4rem auto;
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }
        .container {
          gap: 2rem;
          flex-wrap: wrap;
        }
        .profile-image-wrapper {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          border: 6px solid #4dd0e1;
          background: white;
          box-shadow: 0 0 20px rgba(0,0,0,0.2);
          transition: transform 0.4s ease;
        }
        .profile-image-wrapper:hover {
          transform: scale(1.05);
        }
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .text-wrapper {
          max-width: 650px;
        }
        .name-title {
          font-size: 2.6rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: #aefeff;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
        }
        .sub-title {
          color: #dddddd;
          font-size: 1.1rem;
        }
        .section-title {
          font-size: 2rem;
          font-weight: bold;
          color: #ffffff;
          border-bottom: 2px solid #4dd0e1;
          padding-bottom: 6px;
        }
        .about-text p {
          margin-bottom: 1rem;
          font-size: 1.1rem;
          line-height: 1.7;
          color: #e0f7fa;
        }
        strong {
          color: #ffe082;
        }
        em {
          font-style: italic;
          color: #80deea;
        }
        .signature {
          font-size: 1.2rem;
          text-align: right;
          font-style: italic;
          color: #b2ebf2;
        }
        @media (max-width: 768px) {
          .about-us-section {
            padding: 2rem 1.2rem;
          }
          .profile-image-wrapper {
            width: 140px;
            height: 140px;
          }
          .name-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
