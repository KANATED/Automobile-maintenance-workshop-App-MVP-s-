const express = require('express');
const router = express.Router();
const PartsInventory = require('../models/partsInventory');

// Get all parts
router.get('/', async (req, res) => {
  try {
    const parts = await PartsInventory.findAll();
    res.json(parts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new part
router.post('/', async (req, res) => {
  try {
    const part = await PartsInventory.create(req.body);
    res.status(201).json(part);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific part
router.get('/:id', async (req, res) => {
  try {
    const part = await PartsInventory.findByPk(req.params.id);
    if (part) {
      res.json(part);
    } else {
      res.status(404).json({ error: 'Part not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a part
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await PartsInventory.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPart = await PartsInventory.findByPk(req.params.id);
      res.json(updatedPart);
    } else {
      res.status(404).json({ error: 'Part not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a part
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await PartsInventory.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Part not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
