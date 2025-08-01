const Vehicle = require("../models/Vehicle");

// Create a new vehicle
exports.createVehicle = async (req, res) => {
  try {
    const {
      Brand,
      Model,
      vehicletype,
      location,
      price,
      Fuel,
      Description
    } = req.body;

    const image = req.file ? req.file.filename : null;

    const newVehicle = new Vehicle({
      Brand,
      Model,
      vehicletype,
      location,
      price,
      Fuel,
      Description,
      image
    });

    await newVehicle.save();
    res.status(201).json({ message: "Vehicle created successfully", vehicle: newVehicle });
  } catch (error) {
    res.status(400).json({ error: "Failed to create vehicle" });
  }
};


// Get all vehicles
exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single vehicle by ID
exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a vehicle by ID
exports.updateVehicle = async (req, res) => {
  try {
    const {
      Brand,
      Model,
      vehicletype,
      location,
      status,
      price,
      Fuel,
      Description,
    } = req.body;

    const image = req.file ? req.file.filename : null;

    const updateData = {
      Brand,
      Model,
      vehicletype,
      location,
      status,
      price,
      Fuel,
      Description,
    };

     if (image) updateData.image = image;

    const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id,updateData,{ new: true});
    if (!updatedVehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.status(200).json(updatedVehicle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a vehicle by ID
exports.deleteVehicle = async (req, res) => {
  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!deletedVehicle) return res.status(404).json({ message: "Vehicle not found" });
    res.status(200).json({ message: "Vehicle deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
