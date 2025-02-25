import React, { useState } from "react";
import "../styles/Hospital.css"

const HospitalSearch = () => {
  const [location, setLocation] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to get latitude & longitude of entered location
  const fetchLocationCoordinates = async () => {
    if (!location) {
      alert("Please enter a location.");
      return;
    }
    
    setLoading(true);

    try {
      const locationResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
      );
      const locationData = await locationResponse.json();

      if (locationData.length === 0) {
        alert("Location not found. Try a different place.");
        setLoading(false);
        return;
      }

      const { lat, lon } = locationData[0];
      console.log("Coordinates:", lat, lon);
      fetchNearbyHospitals(lat, lon);

    } catch (error) {
      console.error("Error fetching location:", error);
      setLoading(false);
    }
  };

  // Function to find hospitals near the latitude & longitude
  const fetchNearbyHospitals = async (latitude, longitude) => {
    try {
      // Convert lat/lon to numbers
      const latNum = parseFloat(latitude);
      const lonNum = parseFloat(longitude);
  
      if (isNaN(latNum) || isNaN(lonNum)) {
        console.error("Invalid latitude or longitude");
        return;
      }
  
      // Define a small search area (0.05 degrees ~ 5km range)
      const minLon = lonNum - 0.05;
      const maxLon = lonNum + 0.05;
      const minLat = latNum - 0.05;
      const maxLat = latNum + 0.05;
  
      // Fetch hospitals in the area
      const hospitalsResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=hospital&bounded=1&viewbox=${minLon},${maxLat},${maxLon},${minLat}`
      );
  
      const hospitalsData = await hospitalsResponse.json();
  
      if (hospitalsData.length === 0) {
        alert("No hospitals found nearby.");
      }
  
      setHospitals(hospitalsData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      setLoading(false);
    }
  };
  

  return (
    <div className="hospital-search">
      <input
        type="text"
        placeholder="Enter your location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchLocationCoordinates} disabled={loading}>
        {loading ? "Searching..." : "Find Hospitals"}
      </button>

      {/* Display Hospitals */}
      {hospitals.length > 0 && (
        <div className="hospital-results">
          <h3>Nearest Hospitals</h3>
          <ul>
            {hospitals.map((hospital, index) => (
              <li key={index}>
                <strong>{hospital.display_name}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HospitalSearch;
