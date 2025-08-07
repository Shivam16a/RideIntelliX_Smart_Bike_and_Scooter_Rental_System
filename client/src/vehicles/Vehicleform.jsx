import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

const Vehicleform = ({ fetchVehicles, selectedVehicle, setSelectedVehicle }) => {
  const [vehicleData, setVehicleData] = useState({
    Brand: '',
    Model: '',
    vehicletype: '',
    location: '',
    price: '',
    Fuel: '',
    status: '',
    image: '',
    Description: ''
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (selectedVehicle) {
      setVehicleData({
        Brand: selectedVehicle.Brand || '',
        Model: selectedVehicle.Model || '',
        vehicletype: selectedVehicle.vehicletype || '',
        location: selectedVehicle.location || '',
        price: selectedVehicle.price || '',
        Fuel: selectedVehicle.Fuel || '',
        status: selectedVehicle.status || '',
        image: '',
        Description: selectedVehicle.Description || ''
      });
    }
  }, [selectedVehicle]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setVehicleData({ ...vehicleData, image: files[0] });
    } else {
      setVehicleData({ ...vehicleData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem('token');
    e.preventDefault();

    const formData = new FormData();

    for (const key in vehicleData) {
      if (key === "image") continue;
      formData.append(key, vehicleData[key]);
    }

    if (vehicleData.image) {
      formData.append("image", vehicleData.image);
    }

    try {
      if (selectedVehicle) {
        await axios.put(
          `http://localhost:5700/api/vehicle/update/${selectedVehicle._id}`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        alert("Vehicle updated successfully!");
      } else {
        await axios.post("http://localhost:5700/api/vehicle/add", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Vehicle added successfully!");
      }

      setVehicleData({
        Brand: '',
        Model: '',
        vehicletype: '',
        location: '',
        price: '',
        Fuel: '',
        status: '',
        image: '',
        Description: ''
      });

      if (fileInputRef.current) fileInputRef.current.value = null;

      if (fetchVehicles) fetchVehicles();
      if (setSelectedVehicle) setSelectedVehicle(null);
    } catch (error) {
      console.error(error);
      alert("Operation failed");
    }
  };

  return <>
    <div className="container d-flex justify-content-center" style={{ marginTop: "90px" }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <h3 className="text-center mb-4">
          <i className="fas fa-motorcycle me-2"></i>{selectedVehicle ? "Update Vehicle" : "Upload Vehicle"}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label"><i className="fas fa-industry me-2"></i>Brand</label>
            <input type="text" className="form-control" name="Brand" value={vehicleData.Brand} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="fas fa-car me-2"></i>Model</label>
            <input type="text" className="form-control" name="Model" value={vehicleData.Model} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="fas fa-list-alt me-2"></i>Vehicle Type</label>
            <input type="text" className="form-control" name="vehicletype" value={vehicleData.vehicletype} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="fas fa-map-marker-alt me-2"></i>Location</label>
            <input type="text" className="form-control" name="location" value={vehicleData.location} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="fas fa-cogs me-2"></i>Status</label>
            <select className="form-select" name="status" value={vehicleData.status} onChange={handleChange} required>
              <option value="">Select status</option>
              <option value="available">Available</option>
              <option value="rented">Rented</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="fas fa-rupee-sign me-2"></i>Price</label>
            <input type="number" className="form-control" name="price" value={vehicleData.price} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="fas fa-gas-pump me-2"></i>Fuel Type</label>
            <select className="form-select" name="Fuel" value={vehicleData.Fuel} onChange={handleChange} required>
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="fas fa-image me-2"></i>Upload Image</label>
            <input type="file" className="form-control" name="image" onChange={handleChange} ref={fileInputRef} />
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="fas fa-align-left me-2"></i>Description</label>
            <textarea className="form-control" rows="3" name="Description" value={vehicleData.Description} onChange={handleChange} required></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              <i className={`fas ${selectedVehicle ? "fa-save" : "fa-upload"} me-2`}></i>
              {selectedVehicle ? "Update" : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
};

export default Vehicleform;
