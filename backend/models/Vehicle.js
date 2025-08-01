const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  Brand: {
    type: String,
    required: true
  },
  Model: {
    type: String,
    required: true
  },
  vehicletype: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['available', 'rented', 'maintenance'],
    default: 'available'
  },
  price: {
    type: Number,
    required: true
  },
  Fuel: {
    type: String,
    enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid'],
    required: true
  },
  image: {
    type: String,
    default: 'default-vehicle.jpg'
  },
  Description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
