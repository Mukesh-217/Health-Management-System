import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

// Create a transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === "true", // Convert string to boolean
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send an email
const sendEmail = async (to, subject, htmlContent) => {
  try {
    await transporter.sendMail({
      from: `"Hospital Management System" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: htmlContent,
    });
    console.log("📧 Email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw new Error("Email could not be sent.");
  }
};

export default sendEmail;
