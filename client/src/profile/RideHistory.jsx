import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RideHistory = () => {

  const [bookings, setBookings] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  // Fetch all vehicles
  const fetchVehicles = async () => {
    try {
      const res = await axios.get('http://localhost:5700/api/vehicle');
      setVehicles(res.data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  // Fetch user bookings
  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get("http://localhost:5700/api/booking/mybookings", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBookings(res.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    fetchVehicles();
    fetchBookings();
  }, []);

  // Get full vehicle details for a booking
  const getVehicleDetails = (vehicleId) => {
    return vehicles.find(v => v._id === vehicleId);
  };


  return <>
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Booking History</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="table-responsive shadow p-3 border rounded">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Vehicle</th>
                <th>Pickup</th>
                <th>Drop</th>
                <th>From</th>
                <th>To</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => {
                const vehicle = getVehicleDetails(booking.vehicle);
                return (
                  <tr key={index}>
                    <td>{vehicle ? `${vehicle.Brand} ${vehicle.Model}` : 'N/A'}</td>
                    <td>{booking.pickup}</td>
                    <td>{booking.drop}</td>
                    <td>{new Date(booking.startDate).toLocaleDateString()}</td>
                    <td>{new Date(booking.endDate).toLocaleDateString()}</td>
                    <td>₹{booking.total}</td>
                    <td>{booking.payment}</td>
                    <td>
                      <span className={`badge ${booking.status === 'Cancelled' ? 'bg-danger' : 'bg-success'}`}>
                        {booking.status || 'Confirmed'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  </>
}

export default RideHistory

