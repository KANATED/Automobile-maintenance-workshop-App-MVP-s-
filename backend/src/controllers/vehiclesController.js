// src/controllers/vehiclesController.js
const vehiclesModel = require('../models/vehiclesModel');

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await vehiclesModel.getAllVehicles();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vehicles' });
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await vehiclesModel.getVehicleById(req.params.id);
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.status(404).json({ error: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch vehicle' });
  }
};

exports.createVehicle = async (req, res) => {
  try {
    const newVehicle = await vehiclesModel.createVehicle(req.body);
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create vehicle' });
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const updatedVehicle = await vehiclesModel.updateVehicle(req.params.id, req.body);
    if (updatedVehicle) {
      res.json(updatedVehicle);
    } else {
      res.status(404).json({ error: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update vehicle' });
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    const deletedVehicle = await vehiclesModel.deleteVehicle(req.params.id);
    if (deletedVehicle) {
      res.json({ message: 'Vehicle deleted' });
    } else {
      res.status(404).json({ error: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete vehicle' });
  }
};