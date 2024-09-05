require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/config');

// Import routes
const customerRoutes = require('./routes/customers');
const vehicleRoutes = require('./routes/vehicles');
const workOrderRoutes = require('./routes/workOrders');
const technicianRoutes = require('./routes/technicians');
const partsInventoryRoutes = require('./routes/partsInventory');
const supplierRoutes = require('./routes/suppliers');
const invoiceRoutes = require('./routes/invoices');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/api/customers', customerRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/workOrders', workOrderRoutes);
app.use('/api/technicians', technicianRoutes);
app.use('/api/partsInventory', partsInventoryRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/invoices', invoiceRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
