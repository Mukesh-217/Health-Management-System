import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import Dashboard from "./components/Dashboard";
import AppointmentEmail from "./components/AppointmentEmail"; 
import axios from "axios";
import { Context } from "./main";
import Sidebar from "./components/Sidebar";

const App = () => {
    const { isAuthenticated, setIsAuthenticated, doctor, setDoctor } =
      useContext(Context);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            "http://localhost:4000/api/v1/user/doctor/me",
            {
              withCredentials: true,
            }
          );
          setIsAuthenticated(true);
          setDoctor(response.data.user);
        } catch (error) {
          setIsAuthenticated(false);
          setDoctor({});
        }
      };
      fetchUser();
    }, [isAuthenticated]);


  return (
    <>
    <Router>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/send-email" element={<AppointmentEmail />} />
      </Routes>
    </Router>
    </>
  )
}

export default App