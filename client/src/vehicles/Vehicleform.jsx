import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import '../Index.css'; // Import custom CSS

const Vehicleform = ({ fetchclient, selectedclient, setSelectedclient }) => {
  const [form, setForm] = useState({ name: "", vehicletype: "", location: "", status: "" });

  useEffect(() => {
    if (selectedclient) setForm(selectedclient);
  }, [selectedclient]);

  const hc = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const hs = async (e) => {
    e.preventDefault();
    if (selectedclient) {
      await axios.put(`http://localhost:5700/api/users/${selectedclient._id}`, form);
      setSelectedclient(null);
    } else {
      await axios.post('http://localhost:5700/api/users', form);
    }
    setForm({ name: "", vehicletype: "", location: "", status: "" });
    fetchclient();
  };

  return<>
      <div className="form-container d-flex justify-content-center align-items-center">
      <form className="vehicle-form shadow p-4 rounded" onSubmit={hs}>
        <div className="d-flex justify-content-end">
          <Link to='/' className="close-icon">
            <i className="fas fa-times"></i>
          </Link>
        </div>

        <h3 className="text-center mb-4">{selectedclient ? "Update Details" : "Add User"}</h3>

        {["name", "vehicletype", "location", "status"].map((field, idx) => (
          <div className='form-group mb-3' key={idx}>
            <label className='form-label text-capitalize'>{field}:</label>
            <input
              type='text'
              name={field}
              placeholder={`Enter ${field}...`}
              onChange={hc}
              className='form-control modern-input'
              value={form[field]}
            />
          </div>
        ))}

        <button type='submit' className="btn btn-primary w-100 mt-3">
          {selectedclient ? "Update" : "Add"} Client
        </button>
      </form>
    </div>
  </>
};

export default Vehicleform;
