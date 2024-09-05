const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new customer
router.post('/', async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific customer
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a customer
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Customer.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCustomer = await Customer.findByPk(req.params.id);
      res.json(updatedCustomer);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a customer
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Customer.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
