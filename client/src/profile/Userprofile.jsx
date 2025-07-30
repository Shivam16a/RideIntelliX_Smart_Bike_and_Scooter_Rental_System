import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulated API call (replace with real API in production)
    const fetchUser = async () => {
      const mockUser = {
        name: 'Amit Sharma',
        email: 'amit.sharma@gmail.com',
        phone: '+91 9876543210',
        address: 'MG Road, Bengaluru, India',
        avatar: 'https://i.pravatar.cc/150?img=5',
        currentRental: {
          vehicleType: 'Scooter',
          model: 'Honda Activa 6G',
          rentedOn: '2025-07-25',
          returnDue: '2025-07-30',
        }
      };

      setTimeout(() => {
        setUser(mockUser);
      }, 1000);
    };

    fetchUser();
  }, []);

  if (!user) return <div>Loading Profile...</div>;

  return (
    <div className="user-profile-container">
      <div className="profile-card">
        <img src={user.avatar} alt="User Avatar" className="avatar" />
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>
      </div>

      {user.currentRental ? (
        <div className="rental-info">
          <h3>Current Rental</h3>
          <p><strong>Vehicle:</strong> {user.currentRental.vehicleType}</p>
          <p><strong>Model:</strong> {user.currentRental.model}</p>
          <p><strong>Rented On:</strong> {user.currentRental.rentedOn}</p>
          <p><strong>Return Due:</strong> {user.currentRental.returnDue}</p>
        </div>
      ) : (
        <p>No active rentals.</p>
      )}
    </div>
  );
};

export default UserProfile;
