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
      {/* Render vehicle data */}
    </div>
  );
}

export default AdminDashboard;