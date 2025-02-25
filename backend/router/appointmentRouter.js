import express from "express";
import { deleteAppointment, getAllAppointments, getPatientAppointments, postAppointment, updateAppointmentStatus } from "../controller/appointmentController.js";
import {
    isAdminAuthenticated,
    isDoctorAuthenticated,
    isPatientAuthenticated
  } from "../middlewares/auth.js";

const router = express.Router();

router.post("/post",isPatientAuthenticated, postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.get("/getall1", isDoctorAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.put("/update/:id", isDoctorAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);
router.get("/patient/appointments", isPatientAuthenticated, getPatientAppointments);



export default router;