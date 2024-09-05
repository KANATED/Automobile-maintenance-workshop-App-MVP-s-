const express = require('express');
const router = express.Router();
const Invoice = require('../models/invoice');

// Get all invoices
router.get('/', async (req, res) => {
  try {
    const invoices = await Invoice.findAll();
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new invoice
router.post('/', async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific invoice
router.get('/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    if (invoice) {
      res.json(invoice);
    } else {
      res.status(404).json({ error: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an invoice
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Invoice.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedInvoice = await Invoice.findByPk(req.params.id);
      res.json(updatedInvoice);
    } else {
      res.status(404).json({ error: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an invoice
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Invoice.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Invoice not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
