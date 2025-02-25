import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import "../styles/PatientsList.css";

const PatientsList = () => {
  const { isAuthenticated } = useContext(Context);
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchPatients = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/v1/user/patients", {
          withCredentials: true,
        });
        setPatients(data.patients);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch patients.");
      }
    };

    fetchPatients();
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <h2 className="not-authenticated">Please log in as an admin to view patient details.</h2>;
  }

  // Filter patients based on search query
  const filteredPatients = patients.filter((patient) =>
    `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.phone.includes(searchQuery) ||
    patient.nic.includes(searchQuery)
  );

  return (
    <div className="patients-container">
      <h2 className="patients-header">All Registered Patients</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, email, phone, or Aadhar number..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredPatients.length > 0 ? (
        <div className="table-wrapper">
          <table className="patients-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Aadhar Number</th>
                <th>DOB</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.map((patient) => (
                <tr key={patient._id}>
                  <td>{patient.firstName} {patient.lastName}</td>
                  <td>{patient.email}</td>
                  <td>{patient.phone}</td>
                  <td>{patient.nic}</td>
                  <td>{new Date(patient.dob).toLocaleDateString()}</td>
                  <td>{patient.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="no-patients">No patients found.</p>
      )}
    </div>
  );
};

export default PatientsList;
