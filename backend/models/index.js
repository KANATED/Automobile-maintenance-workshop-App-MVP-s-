const sequelize = require('../config/config');
const Customer = require('./customer');
const Vehicle = require('./vehicle');
const WorkOrder = require('./workOrder');
const Technician = require('./technician');
const PartsInventory = require('./partsInventory');
const Supplier = require('./supplier');
const Invoice = require('./invoice');

// Define relationships if needed
// Example:
// Vehicle.belongsTo(Customer);

sequelize.sync({ force: false })
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database', err));

module.exports = {
  sequelize,
  Customer,
  Vehicle,
  WorkOrder,
  Technician,
  PartsInventory,
  Supplier,
  Invoice
};
