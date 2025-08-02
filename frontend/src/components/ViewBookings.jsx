import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const userEmail = localStorage.getItem('email'); // must be stored during login

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/bookings`, {
          params: { email: userEmail }
        });
        setBookings(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userEmail) {
      fetchBookings();
    } else {
      setLoading(false);
    }
  }, [userEmail]);

  if (loading) return <p>Loading bookings...</p>;
  if (!userEmail) return <p>Please log in to view bookings.</p>;
  if (bookings.length === 0) return <p>No bookings found.</p>;

  return (
    <div className="container mt-4">
      <h2>Your Bookings</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Restaurant</th>
            <th>Table</th>
            <th>Meal Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>Seats</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, index) => (
            <tr key={index}>
              <td>{b.restaurant}</td>
              <td>{b.table}</td>
              <td>{b.mealType}</td>
              <td>{b.date}</td>
              <td>{b.time}</td>
              <td>{b.seats}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;
