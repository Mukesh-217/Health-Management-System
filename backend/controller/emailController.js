import sendEmail from "../utils/emailService.js";

export const sendAppointmentEmail = async (req, res) => {
  const { email, doctorName, patientName, date, time, meetingLink } = req.body;

  if (!email || !doctorName || !patientName || !date || !time || !meetingLink) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const htmlContent = `
    <h2>Appointment Details</h2>
    <p><strong>Doctor:</strong> Dr. ${doctorName}</p>
    <p><strong>Patient:</strong> ${patientName}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>
    <p>Click the link above to join your appointment.</p>
  `;

  try {
    await sendEmail(email, "Your Appointment Details", htmlContent);
    res.status(200).json({ message: "Appointment email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
