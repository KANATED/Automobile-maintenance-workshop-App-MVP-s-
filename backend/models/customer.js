const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Customer = sequelize.define('Customer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
});

module.exports = Customer;
