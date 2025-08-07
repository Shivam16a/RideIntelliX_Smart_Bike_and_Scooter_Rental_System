const Booking = require('../models/Booking');

// Create new booking
exports.createBooking = async (req, res, next) => {
    const { vehicle, pickupLocation, dropLocation, startTime, endTime, totalAmount } = req.body;
    try {
        const booking = await Booking.create({
            user: req.user._id,
            vehicle,
            pickupLocation,
            dropLocation,
            startTime,
            endTime,
            totalAmount
        });
        res.status(201).json(booking);
    } catch (err) {
        next(err);
    }
};

// Get all bookings (admin use)
exports.getAllBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (err) {
        next(err);
    }
};

// Get bookings by logged-in user
exports.getMyBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find({ user: req.user._id })
            .populate('vehicle', 'model brand');

        res.status(200).json(bookings);
    } catch (err) {
        next(err);
    }
};

// Update booking status
exports.updateBookingStatus = async (req, res, next) => {
    try {
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json(booking);
    } catch (err) {
        next(err);
    }
};

exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Use correct field names based on your schema
    booking.pickupLocation = req.body.pickupLocation || booking.pickupLocation;
    booking.dropLocation = req.body.dropLocation || booking.dropLocation;
    booking.startTime = req.body.startTime || booking.startTime;
    booking.endTime = req.body.endTime || booking.endTime;
    booking.totalAmount = req.body.totalAmount || booking.totalAmount;
    booking.bookingStatus = req.body.bookingStatus || booking.bookingStatus;

    const updated = await booking.save();
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Update failed' });
  }
};

// Delete booking
exports.deleteBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (err) {
        next(err);
    }
};
