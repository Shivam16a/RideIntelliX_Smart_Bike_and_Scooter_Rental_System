import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    user: '',
    vehicle: '',
    pickupLocation: '',
    dropLocation: '',
    startTime: '',
    endTime: '',
    totalAmount: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/bookings/create', formData);
      setMessage('Booking Successful!');
    } catch (err) {
      console.error(err);
      setMessage('Booking Failed. Please check details.');
    }
  };

  return (
    <div className="booking-form" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Book Your Ride</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user" placeholder="User ID" value={formData.user} onChange={handleChange} required /><br /><br />
        <input type="text" name="vehicle" placeholder="Vehicle ID" value={formData.vehicle} onChange={handleChange} required /><br /><br />
        <input type="text" name="pickupLocation" placeholder="Pickup Location" value={formData.pickupLocation} onChange={handleChange} required /><br /><br />
        <input type="text" name="dropLocation" placeholder="Drop Location" value={formData.dropLocation} onChange={handleChange} required /><br /><br />
        <label>Start Time:</label>
        <input type="datetime-local" name="startTime" value={formData.startTime} onChange={handleChange} required /><br /><br />
        <label>End Time:</label>
        <input type="datetime-local" name="endTime" value={formData.endTime} onChange={handleChange} required /><br /><br />
        <input type="number" name="totalAmount" placeholder="Total Amount ₹" value={formData.totalAmount} onChange={handleChange} required /><br /><br />
        <button type="submit">Submit Booking</button>
      </form>
      <p style={{ color: 'green' }}>{message}</p>
    </div>
  );
};

export default BookingForm;