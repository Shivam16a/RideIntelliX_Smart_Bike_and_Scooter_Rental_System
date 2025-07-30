const express = require('express');
const router = express.Router();
const {
    createBooking,
    getAllBookings,
    getMyBookings,
    updateBookingStatus,
    deleteBooking
} = require('../controllers/bookingController');

const { protect } = require('../middleware/authMiddleware');

// Protected Routes
router.post('/', protect, createBooking);               // Create booking
router.get('/mybookings', protect, getMyBookings);      // Logged-in user's bookings

// Admin routes (add isAdmin middleware later if needed)
router.get('/', protect, getAllBookings);               // All bookings
router.put('/:id/status', protect, updateBookingStatus); // Update status
router.delete('/:id', protect, deleteBooking);          // Delete booking

module.exports = router;
