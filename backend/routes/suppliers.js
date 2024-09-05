const express = require('express');
const router = express.Router();
const Supplier = require('../models/supplier');

// Get all suppliers
router.get('/', async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new supplier
router.post('/', async (req, res) => {
  try {
    const supplier = await Supplier.create(req.body);
    res.status(201).json(supplier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific supplier
router.get('/:id', async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (supplier) {
      res.json(supplier);
    } else {
      res.status(404).json({ error: 'Supplier not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a supplier
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Supplier.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedSupplier = await Supplier.findByPk(req.params.id);
      res.json(updatedSupplier);
    } else {
      res.status(404).json({ error: 'Supplier not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a supplier
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Supplier.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Supplier not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;