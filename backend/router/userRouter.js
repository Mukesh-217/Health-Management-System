import express from "express";
import { addNewAdmin,
     addNewDoctor,
     deleteDoctor,
     getAllDoctors,
     getAllPatients,
     getUserDetails,
     login, 
     logoutAdmin, 
     logoutDoctor, 
     logoutPatient, 
     patientRegister 
    } from "../controller/userController.js";

import {
    isAdminAuthenticated,
    isDoctorAuthenticated,
    isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew",isAdminAuthenticated, addNewAdmin);
router.get("/doctors",getAllDoctors);
router.get("/admin/me",isAdminAuthenticated, getUserDetails);
router.get("/doctor/me",isDoctorAuthenticated, getUserDetails);
router.get("/patient/me",isPatientAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
router.get("/doctor/logout", isDoctorAuthenticated, logoutDoctor);
router.delete("/doctor/delete/:doctorId", isAdminAuthenticated, deleteDoctor);
router.get("/patients",isAdminAuthenticated, getAllPatients);




export default router;