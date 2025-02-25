import express from "express";
import { sendAppointmentEmail } from "../controller/emailController.js";

const router = express.Router();

router.post("/send-appointment-mail", sendAppointmentEmail);

export default router;
