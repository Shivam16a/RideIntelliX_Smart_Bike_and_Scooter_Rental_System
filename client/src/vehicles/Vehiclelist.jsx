import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Vehiclelist = ({ vehicle, fetchVehicle, setSelectedVehicle }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5700/api/vehicle") // update if needed
      .then((res) => setVehicles(res.data))
      .catch((err) => console.error("Error fetching vehicles", err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this vehicle?")) {
      try {
        await axios.delete(`http://localhost:5700/api/vehicle/${id}`);
        alert("Vehicle deleted successfully!");
        axios.get("http://localhost:5700/api/vehicle")
          .then((res) => setVehicles(res.data))
          .catch((err) => console.error("Error fetching vehicles", err));
      } catch (error) {
        console.error("Error deleting vehicle:", error);
        alert("Failed to delete vehicle.");
      }
    }
  };

  const handleEdit = (x) => {
    setSelectedVehicle(x); // Set the selected vehicle in Admin's state for editing
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top to show the form
  };

  return <>
    <div className="container my-5">
      <h2 className="text-center mb-4">
        <i className="fa fa-motorcycle me-2"></i>
        Available Vehicles
      </h2>
      <div className="row">
        {vehicles.map((vehicle) => (
          <div className="col-md-4 mb-4" key={vehicle._id}>
            <div className="card shadow-sm h-100">
              <img
                src={`http://localhost:5700/uploads/${vehicle.image}`}
                alt={vehicle.Brand}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa fa-car me-2 text-primary"></i>
                  {vehicle.Brand} {vehicle.Model}
                </h5>
                <p className="card-text mb-1">
                  <i className="fa fa-map-marker-alt me-2 text-danger"></i>
                  <strong>Location in:</strong> {vehicle.location}
                </p>
                <p className="card-text mb-1">
                  <i className="fa fa-cogs me-2 text-secondary"></i>
                  <strong>Type:</strong> {vehicle.vehicletype}
                </p>
                <p className="card-text mb-1">
                  <i className="fa fa-gas-pump me-2 text-warning"></i>
                  <strong>Fuel:</strong> {vehicle.Fuel}
                </p>
                <p className="card-text mb-1">
                  <i className="fa fa-info-circle me-2 text-info"></i>
                  <strong>Status:</strong> {vehicle.status}
                </p>
                <p className="card-text mb-1">
                  <i className="fa fa-rupee-sign me-2 text-success"></i>
                  <strong>Price/d:</strong> ₹{vehicle.price}
                </p>
                <p className="card-text mt-2">
                  <strong>Description:</strong><br />{vehicle.Description}
                </p>
              </div>
              <div className="card-footer text-center bg-white border-0">
                <button className="btn btn-primary w-100">
                  <i className="fa fa-shopping-cart me-2"></i>
                  Buy / Rent
                </button>
              </div>
              <div className="card-footer text-center bg-white border-0">
                <button className="btn btn-danger w-100" onClick={() => handleDelete(vehicle._id)}>
                  <i className="fa fa-trash me-2"></i>
                  Delete
                </button>
              </div>
              <div className="card-footer text-center bg-white border-0">
                <button className="btn btn-warning w-100" onClick={() => handleEdit(vehicle)}>
                  <i className="fa fa-pen me-2"></i>
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
}

export default Vehiclelist