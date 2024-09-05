const express = require('express');
const router = express.Router();
const Technician = require('../models/technician');

// Get all technicians
router.get('/', async (req, res) => {
  try {
    const technicians = await Technician.findAll();
    res.json(technicians);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new technician
router.post('/', async (req, res) => {
  try {
    const technician = await Technician.create(req.body);
    res.status(201).json(technician);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific technician
router.get('/:id', async (req, res) => {
  try {
    const technician = await Technician.findByPk(req.params.id);
    if (technician) {
      res.json(technician);
    } else {
      res.status(404).json({ error: 'Technician not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a technician
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Technician.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedTechnician = await Technician.findByPk(req.params.id);
      res.json(updatedTechnician);
    } else {
      res.status(404).json({ error: 'Technician not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a technician
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Technician.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Technician not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
