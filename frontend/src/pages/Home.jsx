import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";
import { AlertTriangle } from "lucide-react"; // Import Emergency Icon


const Home = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <Hero title="Welcome to HMS Portal | Your Trusted Healthcare Provider" imageUrl="/hero.png" />
      <Biography imageUrl="/about.jpeg" />
      <Departments />
      <MessageForm />

      {/* Floating Emergency Button */}
      <div className="floating-btn-container">
        <button className="floating-btn" onClick={() => setShowOptions(!showOptions)}>
          <AlertTriangle size={28} color="white" />
        </button>

        {/* Dropdown Menu */}
        {showOptions && (
          <div className="floating-dropdown">
            <button onClick={() => navigate("/hospitalsearch")}>🏥 Hospitals</button>
            <button onClick={() => navigate("/pharmacysearch")}>💊 Pharmacies</button>
          </div>
        )}
      </div>

      {/* Add Some CSS for the Button */}
      <style>
        {`
          .floating-btn-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }
          .floating-btn {
            background-color: red;
            border: none;
            color: white;
            padding: 12px;
            border-radius: 50%;
            cursor: pointer;
          }
          .floating-dropdown {
            background: white;
            border-radius: 10px;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
            margin-top: 10px;
            padding: 10px;
            display: flex;
            flex-direction: column;
          }
          .floating-dropdown button {
            background: none;
            border: none;
            padding: 8px;
            cursor: pointer;
            width: 100%;
          }
          .floating-dropdown button:hover {
            background: lightgray;
          }
        `}
      </style>
    </>
  );
};

export default Home;
