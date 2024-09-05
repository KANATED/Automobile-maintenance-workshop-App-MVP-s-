// src/models/vehiclesModel.js
const pool = require('../db');

exports.getAllVehicles = async () => {
  const result = await pool.query('SELECT * FROM Vehicles');
  return result.rows;
};

exports.getVehicleById = async (id) => {
  const result = await pool.query('SELECT * FROM Vehicles WHERE id = $1', [id]);
  return result.rows[0];
};

exports.createVehicle = async (vehicleData) => {
  const { vin, make, model, year, odometer, engine, customer_id } = vehicleData;
  const result = await pool.query(
    'INSERT INTO Vehicles (vin, make, model, year, odometer, engine, customer_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [vin, make, model, year, odometer, engine, customer_id]
  );
  return result.rows[0];
};

exports.updateVehicle = async (id, vehicleData) => {
  const { vin, make, model, year, odometer, engine, customer_id } = vehicleData;
  const result = await pool.query(
    'UPDATE Vehicles SET vin = $1, make = $2, model = $3, year = $4, odometer = $5, engine = $6, customer_id = $7 WHERE id = $8 RETURNING *',
    [vin, make, model, year, odometer, engine, customer_id, id]
  );
  return result.rows[0];
};

exports.deleteVehicle = async (id) => {
  const result = await pool.query('DELETE FROM Vehicles WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};