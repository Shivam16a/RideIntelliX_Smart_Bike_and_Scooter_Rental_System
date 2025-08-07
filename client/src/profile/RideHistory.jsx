import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Userprofile.css'; // custom styling

const RideHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingBooking, setEditingBooking] = useState(null);
  const [updatedStatus, setUpdatedStatus] = useState('Confirmed');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (token) {
          const res = await axios.get('http://localhost:5700/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
          setIsAdmin(res.data?.role === 'admin');
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, [token]);

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:5700/api/vehicle')
        .then(res => setVehicles(res.data))
        .catch(err => console.error("Error fetching vehicles:", err));
    }
  }, [token]);

  useEffect(() => {
    if (user !== null) {
      axios.get(isAdmin ? 'http://localhost:5700/api/booking/' : 'http://localhost:5700/api/booking/mybookings', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => setBookings(res.data))
        .catch(err => console.error("Error fetching bookings:", err));
    }
  }, [user]);

  const getVehicleDetails = (vehicleId) => vehicles.find(v => v._id === vehicleId);

  const handleDelete = async (bookingId) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        await axios.delete(`http://localhost:5700/api/booking/${bookingId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBookings(prev => prev.filter(b => b._id !== bookingId));
      } catch (err) {
        console.error("Delete failed:", err);
      }
    }
  };

  const handleEditClick = (booking) => {
    setEditingBooking(booking);
    setUpdatedStatus(booking.bookingStatus);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5700/api/booking/${editingBooking._id}/status`, {
        pickupLocation: editingBooking.pickupLocation,
        dropLocation: editingBooking.dropLocation,
        startTime: editingBooking.startTime,
        endTime: editingBooking.endTime,
        totalAmount: editingBooking.totalAmount,
        bookingStatus: updatedStatus,
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setEditingBooking(null);
      const res = await axios.get(isAdmin ? 'http://localhost:5700/api/booking/' : 'http://localhost:5700/api/booking/mybookings', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(res.data);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return <>
    <div className="container mt-5">
      <h3 className="text-center mb-4 fw-bold">{isAdmin ? 'All Booking History' : 'My Booking History'}</h3>
      {bookings.length === 0 ? (
        <p className="text-center">No bookings found.</p>
      ) : (
        <div className="row g-4">
          {bookings.map((booking, index) => {
            const vehicle = getVehicleDetails(booking.vehicle);
            const isEditing = editingBooking?._id === booking._id;

            return (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card shadow booking-card h-100 border border-primary position-relative">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="fas fa-car me-2"></i>
                      {vehicle ? `${vehicle.Brand} ${vehicle.Model}` : 'Vehicle Info'}
                    </h5>
                    {isAdmin && (
                      <p><i className="fas fa-user me-2"></i> <strong>User:</strong> {booking.user?.name || 'N/A'}</p>
                    )}
                    <p><i className="fas fa-map-marker-alt me-2"></i> <strong>Pickup:</strong> {booking.pickupLocation}</p>
                    <p><i className="fas fa-map-pin me-2"></i> <strong>Drop:</strong> {booking.dropLocation}</p>
                    <p><i className="fas fa-calendar-day me-2"></i> <strong>From:</strong> {new Date(booking.startTime).toLocaleDateString()}</p>
                    <p><i className="fas fa-calendar-check me-2"></i> <strong>To:</strong> {new Date(booking.endTime).toLocaleDateString()}</p>
                    <p><i className="fas fa-rupee-sign me-2"></i> <strong>Total:</strong> ₹{booking.totalAmount}</p>
                    <p><i className="fas fa-wallet me-2"></i> <strong>Payment:</strong> {booking.payment || 'Online'}</p>
                    <div className="mb-2">
                      <strong>Status: </strong>
                      {isEditing ? (
                        <select className="form-select form-select-sm" value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)}>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Cancelled">Cancelled</option>
                          <option value="Pending">Pending</option>
                          <option value="Completed">Completed</option>
                        </select>
                      ) : (
                        <span className={`badge bg-${booking.bookingStatus === 'Cancelled' ? 'danger' : booking.bookingStatus === 'Pending' ? 'warning' : 'success'}`}>
                          {booking.bookingStatus}
                        </span>
                      )}
                    </div>

                    {isAdmin && (
                      <div className="mt-3 d-flex justify-content-end gap-2">
                        {isEditing ? (
                          <>
                            <button className="btn btn-sm btn-success" onClick={handleUpdate}><i className="fas fa-save me-1"></i>Save</button>
                            <button className="btn btn-sm btn-secondary" onClick={() => setEditingBooking(null)}><i className="fas fa-times me-1"></i>Cancel</button>
                          </>
                        ) : (
                          <>
                            <button className="btn btn-sm btn-primary" onClick={() => handleEditClick(booking)}><i className="fas fa-edit me-1"></i>Edit</button>
                            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(booking._id)}><i className="fas fa-trash-alt me-1"></i>Delete</button>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  </>
};

export default RideHistory;
