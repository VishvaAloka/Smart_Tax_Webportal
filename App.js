// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PaymentList from './components/PaymentList';
import PaymentForm from './components/PaymentForm';
import PaymentDetail from './components/PaymentDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/payments" element={<PaymentList />} />
            <Route path="/payments/new" element={<PaymentForm />} />
            <Route path="/payments/edit/:id" element={<PaymentForm />} />
            <Route path="/payments/:id" element={<PaymentDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;