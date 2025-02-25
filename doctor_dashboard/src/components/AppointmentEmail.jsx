import React, { useState } from "react";
import "../styles/AppointmentEmail.css"; // Import the CSS file

const AppointmentEmail = () => {
  const [email, setEmail] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/email/send-appointment-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, doctorName, patientName, date, time, meetingLink }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("✅ Email sent successfully!");
      } else {
        setMessage(`❌ Error: ${data.message}`);
      }
    } catch (error) {
      setMessage("❌ Failed to send email. Check console for details.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="appointment-container">
      <h2>Send Appointment Email</h2>
      
      <input type="email" placeholder="Patient Email" value={email} onChange={(e) => setEmail(e.target.value)} className="appointment-input" />
      <input type="text" placeholder="Doctor Name" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} className="appointment-input" />
      <input type="text" placeholder="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} className="appointment-input" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="appointment-input" />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="appointment-input" />
      <input type="text" placeholder="Meeting Link" value={meetingLink} onChange={(e) => setMeetingLink(e.target.value)} className="appointment-input" />

      <button onClick={sendEmail} className="appointment-button">Send Email</button>
      {message && <p className={message.startsWith("✅") ? "message-success" : "message-error"}>{message}</p>}
    </div>
  );
};

export default AppointmentEmail;
