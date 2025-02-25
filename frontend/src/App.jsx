import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./pages/Login";
import Medicine from "./pages/Medicine"; 
import Cart from "./pages/Cart"; // Import Cart Page
import AppointmentStatus from "./pages/AppointmentStatus"; 
import HospitalSearch from "./pages/HospitalSearch";
import PharmacySearch from "./pages/PharmacySearch";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const [cart, setCart] = useState([]); // Cart State

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          { withCredentials: true }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Router>  
        <Navbar cartCount={cart.length} /> {/* Pass cart count */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hospitalsearch" element={<HospitalSearch />} />
          <Route path="/pharmacysearch" element={<PharmacySearch />} />
          <Route
            path="/medicine"
            element={isAuthenticated ? <Medicine cart={cart} setCart={setCart} /> : <Navigate to="/login" />}
          />
          <Route
            path="/cart"
            element={isAuthenticated ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/login" />}
          />
          <Route
            path="/appointment-status"
            element={isAuthenticated ? <AppointmentStatus /> : <Navigate to="/login" />}
          />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
