const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  restaurant: { type: String, required: true },
  table: { type: Number, required: true },
  mealType: { type: String, required: true },
  date: { type: String, required: true }, // or Date, but 'YYYY-MM-DD' as String for ease
  time: { type: String, required: true },
  seats: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
