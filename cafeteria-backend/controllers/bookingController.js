const Booking = require('../models/Booking');

exports.bookTable = async (req, res) => {
  try {
    const { restaurant, table, mealType, date, time, seats, email } = req.body;


    if (!restaurant || !table || !mealType || !date || !time || !seats || !email) {
       return res.status(400).json({ message: 'All fields are required' });
    }
   const newBooking = new Booking({ restaurant, table, mealType, date, time, seats, email });
    await newBooking.save();

    res.status(201).json({ message: 'Booking successful', booking: newBooking });
  } catch (error) {
    console.error('Booking Error:', error);
    res.status(500).json({ message: 'Server error while booking' });
  }
};


exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ email: req.query.email });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving bookings', error });
  }
};
