const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Invoice = sequelize.define('Invoice', {
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'unpaid',
  },
});

module.exports = Invoice;
