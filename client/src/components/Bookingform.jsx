import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Bookingform = () => {

  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [form, setForm] = useState({
    pickup: '',
    drop: '',
    startDate: '',
    endDate: '',
    phone: '',
    payment: 'UPI'
  });

  useEffect(() => {
    axios.get(`http://localhost:5700/api/vehicle/${id}`)
      .then(res => setVehicle(res.data))
      .catch(err => console.log(err));
  }, [id]);

  //  Submit booking form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const durationDays = Math.ceil((new Date(form.endDate) - new Date(form.startDate)) / (1000 * 60 * 60 * 24));
    const total = durationDays * vehicle.price; // if vehicle has price


    try {
      const token = localStorage.getItem('token'); //  get token

      const response = await axios.post(
        'http://localhost:5700/api/booking', //  correct backend route
        {
          vehicle: id, //  vehicle ID
          pickupLocation: form.pickup,
          dropLocation: form.drop,
          startTime: form.startDate,
          endTime: form.endDate,
          totalAmount: total, 
          paymentMethod: form.payment,
          contactNumber: form.phone
        },
        {
          headers: {
            Authorization: `Bearer ${token}` // include auth token
          }
        }
      );

      const booking = response.data;
    // Redirect to payment page with booking ID and amount
    window.location.href = `/payment?amount=${total}&bookingId=${booking._id}`;


    } catch (err) {
      console.error("Booking failed:", err.response?.data || err.message);
      alert("Booking failed. Please login and try again.");
    }
  };

  if (!vehicle) return <p>Loading...</p>;

  return <>
    <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: "90px" }}>
      <div className="card shadow p-4" style={{ maxWidth: '600px', width: '100%', borderRadius: '12px' }}>
        <h3 className="text-center mb-4 text-primary">
          <i className="fa fa-calendar-check me-2"></i>
          Book {vehicle.Brand} {vehicle.Model}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">
              <i className="fa fa-map-marker-alt me-2 text-danger"></i>Pickup Location
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter pickup location"
              required
              onChange={e => setForm({ ...form, pickup: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              <i className="fa fa-map-marker me-2 text-success"></i>Drop Location
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter drop location"
              required
              onChange={e => setForm({ ...form, drop: e.target.value })}
            />
          </div>

          <div className="row">
            <div className="mb-3 col-md-6">
              <label className="form-label">
                <i className="fa fa-calendar-day me-2 text-primary"></i>Start Date
              </label>
              <input
                type="date"
                className="form-control"
                required
                onChange={e => setForm({ ...form, startDate: e.target.value })}
              />
            </div>

            <div className="mb-3 col-md-6">
              <label className="form-label">
                <i className="fa fa-calendar-day me-2 text-primary"></i>End Date
              </label>
              <input
                type="date"
                className="form-control"
                required
                onChange={e => setForm({ ...form, endDate: e.target.value })}
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">
              <i className="fa fa-phone me-2 text-info"></i>Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
              required
              onChange={e => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="form-label">
              <i className="fa fa-money-check-alt me-2 text-warning"></i>Payment Method
            </label>
            <select
              className="form-select"
              onChange={e => setForm({ ...form, payment: e.target.value })}
              value={form.payment}
            >
              <option>UPI</option>
              <option>Card</option>
              <option>Cash On Delivery</option>
            </select>
          </div>

          <div className="text-center" style={{marginTop:"90px"}}>
            <button type="submit" className="btn btn-success w-100">
              <i className="fa fa-check-circle me-2"></i>
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
}

export default Bookingform