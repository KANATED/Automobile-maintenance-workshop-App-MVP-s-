const express = require('express');
const router = express.Router();
const WorkOrder = require('../models/workOrder');

// Get all work orders
router.get('/', async (req, res) => {
  try {
    const workOrders = await WorkOrder.findAll();
    res.json(workOrders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new work order
router.post('/', async (req, res) => {
  try {
    const workOrder = await WorkOrder.create(req.body);
    res.status(201).json(workOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific work order
router.get('/:id', async (req, res) => {
  try {
    const workOrder = await WorkOrder.findByPk(req.params.id);
    if (workOrder) {
      res.json(workOrder);
    } else {
      res.status(404).json({ error: 'Work order not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a work order
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await WorkOrder.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedWorkOrder = await WorkOrder.findByPk(req.params.id);
      res.json(updatedWorkOrder);
    } else {
      res.status(404).json({ error: 'Work order not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a work order
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await WorkOrder.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Work order not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
