const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const PartsInventory = sequelize.define('PartsInventory', {
  partName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = PartsInventory;
