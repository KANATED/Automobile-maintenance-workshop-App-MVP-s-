const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Supplier = sequelize.define('Supplier', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactInfo: {
    type: DataTypes.STRING,
  },
});

module.exports = Supplier;
