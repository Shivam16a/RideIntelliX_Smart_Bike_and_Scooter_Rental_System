import React, { useEffect, useState } from 'react';

const RideHistory = () => {
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching ride history from an API
    const fetchRides = async () => {
      const mockRides = [
        {
          id: 1,
          vehicleType: 'Scooter',
          model: 'TVS Jupiter',
          startTime: '2025-07-20 10:30 AM',
          endTime: '2025-07-20 11:15 AM',
          duration: '45 mins',
          cost: 60,
          pickup: 'Indiranagar',
          drop: 'MG Road',
        },
        {
          id: 2,
          vehicleType: 'Bike',
          model: 'Bajaj Pulsar 150',
          startTime: '2025-07-18 3:00 PM',
          endTime: '2025-07-18 4:00 PM',
          duration: '1 hour',
          cost: 90,
          pickup: 'Koramangala',
          drop: 'HSR Layout',
        }
      ];

      setTimeout(() => {
        setRides(mockRides);
        setLoading(false);
      }, 1000);
    };

    fetchRides();
  }, []);

  if (loading) return <p>Loading ride history...</p>;
  if (rides.length === 0) return <p>No past rides found.</p>;

  return (
    <div className="ride-history-container">
      <h2>Ride History</h2>
      {rides.map((ride) => (
        <div key={ride.id} className="ride-card">
          <h3>{ride.vehicleType} - {ride.model}</h3>
          <p><strong>From:</strong> {ride.pickup}</p>
          <p><strong>To:</strong> {ride.drop}</p>
          <p><strong>Start:</strong> {ride.startTime}</p>
          <p><strong>End:</strong> {ride.endTime}</p>
          <p><strong>Duration:</strong> {ride.duration}</p>
          <p><strong>Cost:</strong> ₹{ride.cost}</p>
        </div>
      ))}
    </div>
  );
};

export default RideHistory;
