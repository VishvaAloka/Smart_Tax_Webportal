import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Hero";
import Login from "../Pages/login";
import Signup from "../Pages/signup";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Services from "../Pages/Services";
import STO from "../Pages/STO";
import AdminUser from "../Pages/Admin_User"; // ✅ Import your new page
import Calculator from "../Pages/Calculator";

const AppRoutes = () => {
  return (
    <div className="pt-16">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/sto" element={<STO />} />
        <Route path="/tax-calculator" element={<Calculator />} />

        <Route path="/signup" element={<Signup />} />
        {/* Protected Routes */}
        {/* ✅ Add Admin Route */}
        <Route path="/admin/users" element={<AdminUser />} />
        {/* 404 Route */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
