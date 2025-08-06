import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Vehicleform from '../vehicles/Vehicleform';
import Vehiclelist from '../vehicles/Vehiclelist';

const Admin = () => {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const fetchVehicles = async () => {
    try {
      const res = await axios.get('http://localhost:5700/api/vehicle');
      setVehicles(res.data);
    } catch (err) {
      console.error('Failed to fetch vehicles:', err);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <>
      <Vehicleform
        fetchVehicle={fetchVehicles}
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
      />
      <Vehiclelist
        vehicle={vehicles}
        fetchVehicle={fetchVehicles}
        setSelectedVehicle={setSelectedVehicle}
      />
    </>
  );
};

export default Admin;
