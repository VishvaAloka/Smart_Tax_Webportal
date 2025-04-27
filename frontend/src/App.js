import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust the path as necessary
import LoginPage from "./Pages/login"; // Adjust the path as necessary

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <AppRoutes />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
