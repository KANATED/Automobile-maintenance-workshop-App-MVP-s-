const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Technician = sequelize.define('Technician', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialty: {
    type: DataTypes.STRING,
  },
});

module.exports = Technician;
