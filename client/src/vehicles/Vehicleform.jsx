import React, { useState, useEffect } from 'react';
import axios from "axios";

const Vehicleform = () => {
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

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setVehicleData({ ...vehicleData, image: e.target.files[0] }); // Image is File
    } else {
      setVehicleData({ ...vehicleData, [e.target.name]: e.target.value });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // Append all text fields
      formData.append("Brand", vehicleData.Brand);
      formData.append("Model", vehicleData.Model);
      formData.append("vehicletype", vehicleData.vehicletype);
      formData.append("location", vehicleData.location);
      formData.append("price", vehicleData.price);
      formData.append("Fuel", vehicleData.Fuel);
      formData.append("status", vehicleData.status);
      formData.append("Description", vehicleData.Description);

      // ✅ Append image only if available
      if (vehicleData.image) {
        formData.append("image", vehicleData.image);
      }

      const res = await axios.post("http://localhost:5700/api/vehicle/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Vehicle added successfully!");
      setVehicleData({
        Brand: '',
        Model: '',
        vehicletype: '',
        location: '',
        price: '',
        Fuel: '',
        image: '', // reset image
        status: '',
        Description: ''
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add vehicle");
    }
  };

  return <>
    <div className="container  d-flex justify-content-center" style={{ marginTop: "90px" }}>
      <div className="card shadow-lg p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <h3 className="text-center mb-4">
          <i className="fas fa-motorcycle me-2"></i> Upload Vehicle
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
            <label className="form-label">
              <i className="fas fa-cogs me-2"></i>Status
            </label>
            <select className="form-select" name="status" value={vehicleData.status} onChange={handleChange} required>
              <option value="">Selest status</option>
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
            <label className="form-label"><i className="fas fa-image me-2"></i>Image URL</label>
            <input type="file" className="form-control" name="image" onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label className="form-label"><i className="fas fa-align-left me-2"></i>Description</label>
            <textarea className="form-control" rows="3" name="Description" value={vehicleData.Description} onChange={handleChange} required></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-upload me-2"></i>Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
};

export default Vehicleform;
