const express = require('express');
const router = express.Router();
const { bookTable } = require('../controllers/bookingController');

// ✅ Import your controller here
const { getAllBookings } = require('../controllers/bookingController');



module.exports = router;


router.post('/table', bookTable);
router.get('/all', getAllBookings);

router.get('/bookings', async (req, res) => {
  const email = req.query.email;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  try {
    const bookings = await Booking.find({ email }); // Mongoose query
    res.json(bookings);
  } catch (err) {
    console.error('Error fetching bookings:', err); // Log the error for debugging
    res.status(500).json({ message: 'Error fetching bookings', error: err.message });
  }
});


module.exports = router;
