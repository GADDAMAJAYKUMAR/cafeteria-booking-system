import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError('You must be logged in to view your profile.');
        return;
      }

      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/auth/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();
        console.log('Profile response:', data);

        if (!response.ok) {
          throw new Error(data.message || 'Failed to fetch profile');
        }

        setUser(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, []);

  if (error) {
    return <div className="alert alert-danger mt-5">{error}</div>;
  }

  if (!user) {
    return <div className="text-center mt-5">Loading your profile...</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100  bg-opacity-75">
      <div
        className="p-5 rounded-4 shadow-lg text-white  bg-success"
        style={{
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          width: '90%',
          maxWidth: '500px'
        }}
      >
        <h2 className="mb-4 text-center">👤 Your Profile</h2>
        <hr style={{ borderColor: 'rgba(255,255,255,0.2)' }} />
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
      </div>
    </div>
  );
};

export default Profile;
