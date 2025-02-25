import React, { useState } from "react";
import "../styles/PharmacySearch.css";
import { FaSearchLocation } from "react-icons/fa";

const PharmacySearch = () => {
  const [location, setLocation] = useState("");
  const [pharmacies, setPharmacies] = useState([]);
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
      fetchNearbyPharmacies(lat, lon);
    } catch (error) {
      console.error("Error fetching location:", error);
      setLoading(false);
    }
  };

  const fetchNearbyPharmacies = async (latitude, longitude) => {
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

      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=pharmacy&bounded=1&viewbox=${minLon},${maxLat},${maxLon},${minLat}`
      );
      
      const data = await response.json();
      if (data.length === 0) {
        alert("No pharmacies found nearby.");
      }

      setPharmacies(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching pharmacies:", error);
      setLoading(false);
    }
  };

  return (
    <div className="pharmacy-search">
      <h2>Find Nearby Pharmacies</h2>
      <div className="search-box">
        <FaSearchLocation className="search-icon" />
        <input
          type="text"
          placeholder="Enter your location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={fetchLocationCoordinates} disabled={loading}>
          {loading ? "Searching..." : "Find Pharmacies"}
        </button>
      </div>

      {pharmacies.length > 0 && (
        <div className="pharmacy-results">
          <h3>Nearest Pharmacies</h3>
          <ul>
            {pharmacies.map((pharmacy, index) => (
              <li key={index}>
                <strong>{pharmacy.display_name}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PharmacySearch;
