import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/vehicles')
      .then(response => setVehicles(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>{vehicle.model} - {vehicle.licensePlate}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
