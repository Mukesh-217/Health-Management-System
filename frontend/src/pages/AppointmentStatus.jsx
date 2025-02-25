import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AppointmentStatus.css"; // Import the CSS file

const AppointmentStatus = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/api/v1/appointment/patient/appointments",
          { withCredentials: true }
        );
        setAppointments(data.appointments);
        setError("");
      } catch (error) {
        setAppointments([]);
        setError("No Appointments Found!");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        <h2 className="appointment-title">Your Appointments</h2>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : appointments.length === 0 ? (
          <p>No Appointments Found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="appointment-table">
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Department</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>
                      {appointment.doctor.firstName} {appointment.doctor.lastName}
                    </td>
                    <td>{appointment.department}</td>
                    <td>
                      {new Date(appointment.appointment_date).toLocaleDateString()}
                    </td>
                    <td
                      className={
                        appointment.status === "Accepted"
                          ? "appointment-status-accepted"
                          : appointment.status === "Rejected"
                          ? "appointment-status-rejected"
                          : "appointment-status-pending"
                      }
                    >
                      {appointment.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br></br>
            <h7>Note: Please Do Check Your Mail for Appointment Details</h7>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentStatus;
