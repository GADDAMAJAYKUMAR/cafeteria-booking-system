import React, { useState } from 'react';

const restaurants = [
  {
    name: 'Sunset Café',
    tables: [1, 2, 3, 4],
    timeSlots: ['08:00 AM', '09:00 AM', '12:00 PM', '01:00 PM', '07:00 PM'],
  },
  {
    name: 'Sunset Café', // duplicate
    tables: [5, 6],
    timeSlots: ['08:30 AM', '10:00 AM', '12:30 PM', '02:00 PM', '08:00 PM'],
  },
  {
    name: 'Green Leaf Bistro',
    tables: [1, 2],
    timeSlots: ['08:00 AM', '11:00 AM', '01:00 PM', '07:30 PM'],
  },
  {
    name: 'Ocean View Diner',
    tables: [1, 2, 3],
    timeSlots: ['09:00 AM', '12:00 PM', '01:30 PM', '08:00 PM'],
  },
];

const TableBookingForm = () => {
  const [bookingData, setBookingData] = useState({
    restaurant: '',
    table: '',
    mealType: '',
    date: '',
    time: '',
    seats: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({
      ...bookingData,
      [name]: name === 'seats' ? Number(value) : value,
    });
  };

  const getTables = () => {
    const selected = restaurants.find(r => r.name === bookingData.restaurant);
    return selected ? selected.tables : [];
  };

  const getTimeSlots = () => {
    const selected = restaurants.find(r => r.name === bookingData.restaurant);
    return selected ? selected.timeSlots : [];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:8081/api/bookings/table', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      console.log("Booking Data:", bookingData);
      alert("✅ Your table has been booked successfully!");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("❌ Booking failed. Please try again.");
    }
  };

  return (
    <div className="card p-4 shadow-lg" style={{
      background: 'linear-gradient(145deg, #f3f4f6, #e5e7eb)',
      borderRadius: '20px',
      maxWidth: '700px',
      margin: 'auto'
    }}>
      <h3 className="mb-4 text-center" style={{ color: '#4f46e5' }}>
        🍽️ Book Your Table
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Restaurant</label>
          <select className="form-control" name="restaurant" value={bookingData.restaurant} onChange={handleChange} required>
            <option value="">Select a Restaurant</option>
            {[...new Set(restaurants.map(r => r.name))].map((name, index) => (
              <option key={index} value={name}>{name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Table Number</label>
          <select className="form-control" name="table" value={bookingData.table} onChange={handleChange} required disabled={!bookingData.restaurant}>
            <option value="">Select Table</option>
            {getTables().map((table, i) => (
              <option key={i} value={table}>Table {table}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Meal Type</label>
          <select className="form-control" name="mealType" value={bookingData.mealType} onChange={handleChange} required>
            <option value="">Select Meal</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Booking Date</label>
          <input
            type="date"
            name="date"
            className="form-control"
            value={bookingData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Time Slot</label>
          <select className="form-control" name="time" value={bookingData.time} onChange={handleChange} required disabled={!bookingData.restaurant}>
            <option value="">Select Time</option>
            {getTimeSlots().map((slot, i) => (
              <option key={i} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="form-label">Number of Seats</label>
          <input
            type="number"
            name="seats"
            className="form-control"
            min="1"
            max="10"
            value={bookingData.seats}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          style={{ backgroundColor: '#4f46e5', borderColor: '#4f46e5' }}
        >
          ✅ Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default TableBookingForm;
