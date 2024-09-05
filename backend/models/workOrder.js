const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const WorkOrder = sequelize.define('WorkOrder', {
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending',
  },
});

module.exports = WorkOrder;
