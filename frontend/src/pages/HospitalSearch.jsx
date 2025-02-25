import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa"; // Import icons
import "../styles/Hospital.css";

const HospitalSearch = () => {
  const [location, setLocation] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const fetchNearbyHospitals = async (latitude, longitude) => {
    try {
      const latNum = parseFloat(latitude);
      const lonNum = parseFloat(longitude);
  
      if (isNaN(latNum) || isNaN(lonNum)) {
        console.error("Invalid latitude or longitude");
        return;
      }
  
      const minLon = lonNum - 0.05;
      const maxLon = lonNum + 0.05;
      const minLat = latNum - 0.05;
      const maxLat = latNum + 0.05;
  
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
      <h2>Find Nearby Hospitals</h2>
      
      <div className="search-container">
        <FaMapMarkerAlt className="location-icon" /> {/* Location icon */}
        <input
          type="text"
          placeholder="Enter your location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={fetchLocationCoordinates} disabled={loading}>
          {loading ? "Searching..." : <FaSearch />} {/* Search icon */}
        </button>
      </div>

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
