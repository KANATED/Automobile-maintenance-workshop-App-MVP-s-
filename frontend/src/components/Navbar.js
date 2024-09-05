import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin Dashboard</Link></li>
        <li><Link to="/technician">Technician Interface</Link></li>
        <li><Link to="/customer">Customer Portal</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
