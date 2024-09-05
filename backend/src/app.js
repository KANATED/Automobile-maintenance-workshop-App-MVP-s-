// src/app.js
const express = require('express');
const vehiclesRoutes = require('./routes/vehicles');

const app = express();
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/vehicles', vehiclesRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});