import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Vehicleform from '../vehicles/Vehicleform';
import Vehiclelist from '../vehicles/Vehiclelist';

const Admin = () => {
  const [clients, setClients] = useState([]);
  const [seletedclient, setSelectedclient] = useState(null);

  const fetchclients = async () => {
    const res = await axios.get('http://localhost:5700/api/vehicle');
    setClients(res.data);
  };
  useEffect(() => {
    fetchclients();
  }, []);
  return <>
    <Vehicleform fetchclient={fetchclients} selectedclient={seletedclient} setSelectedclient={setSelectedclient} />
    <Vehiclelist
      clients={clients}
      fetchclients={fetchclients}
      setSelectedclient={setSelectedclient}
    />
  </>
}

export default Admin