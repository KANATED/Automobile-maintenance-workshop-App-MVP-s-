const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicle');

// Get all vehicles
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new vehicle
router.post('/', async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific vehicle
router.get('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.status(404).json({ error: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a vehicle
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Vehicle.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedVehicle = await Vehicle.findByPk(req.params.id);
      res.json(updatedVehicle);
    } else {
      res.status(404).json({ error: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a vehicle
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Vehicle.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Vehicle not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
