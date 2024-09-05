import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import TechnicianInterface from './components/TechnicianInterface';
import CustomerPortal from './components/CustomerPortal';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/technician" component={TechnicianInterface} />
        <Route path="/customer" component={CustomerPortal} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
}

export default App;