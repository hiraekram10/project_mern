const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const port = 5000; // Change this to any port you prefer

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = "ashhadshahzeb:<db_password>@cluster0.e6hon.mongodb.net/"; 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Schema Definition (Example: Court Booking Schema)
const courtBookingSchema = new mongoose.Schema({
  courtName: String,
  date: String,
  timeSlot: String,
  isAvailable: Boolean,
});

const CourtBooking = mongoose.model('CourtBooking', courtBookingSchema);

// API Endpoints

// Get all available slots for a specific date
app.get('/available-slots', async (req, res) => {
  const { date } = req.query;
  try {
    const availableSlots = await CourtBooking.find({ date, isAvailable: true });
    res.json(availableSlots);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch available slots' });
  }
});

// Book a court slot
app.post('/book-slot', async (req, res) => {
  const { courtName, date, timeSlot } = req.body;
  try {
    const booking = new CourtBooking({
      courtName,
      date,
      timeSlot,
      isAvailable: false, // Mark as unavailable once booked
    });
    await booking.save();
    res.status(201).json({ message: 'Court booked successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Unable to book the court' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
