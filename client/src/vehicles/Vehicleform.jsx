import React, { useState } from "react";
const VehicleForm = ({ addVehicle }) => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    fuel: "",
    price: "",
    imageUrl: "",
    location: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVehicle(form);
    setForm({
      name: "",
      type: "",
      fuel: "",
      price: "",
      imageUrl: "",
      location: ""
    });
  };

  return <>
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input name="name" placeholder="Vehicle Name" value={form.name} onChange={handleChange} />
      <input name="type" placeholder="Type (Bike/Scooter)" value={form.type} onChange={handleChange} />
      <input name="fuel" placeholder="Fuel Type" value={form.fuel} onChange={handleChange} />
      <input name="price" placeholder="Price/Day" value={form.price} onChange={handleChange} />
      <input name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
      <button type="submit">Add Vehicle</button>
    </form>
  </>
};

export default VehicleForm;