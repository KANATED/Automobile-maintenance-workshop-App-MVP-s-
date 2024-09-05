import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AdminDashboard from './components/AdminDashboard';
import TechnicianInterface from './components/TechnicianInterface';
import CustomerPortal from './components/CustomerPortal';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/technician" component={TechnicianInterface} />
        <Route path="/customer" component={CustomerPortal} />
      </Switch>
    </Router>
  );
}

export default App;