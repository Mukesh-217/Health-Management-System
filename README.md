# Hospital Management System

## Overview
The **Hospital Management System** is a comprehensive web-based platform designed to streamline hospital operations, enhance patient experience, and improve hospital administration efficiency. It integrates various components into a unified system, including secure user authentication, automated appointment scheduling, real-time email notifications, and location-based searches for hospitals and pharmacies.

This project is built using the **MERN (MongoDB, Express, React, Node.js) stack**, ensuring seamless communication between frontend and backend services. It provides dedicated **Admin and Doctor Dashboards** for efficient hospital operations management and patient care.

---
## Features
### 1. Authentication and Authorization
- Secure user authentication with **JWT (JSON Web Tokens)**.
- Email verification using **Nodemailer**.
- Role-based access control for **Admin, Doctor, and Patient**.

### 2. Appointment Management
- Patients can **book, update, and cancel** appointments.
- Doctors can manage schedules and notify patients via **email**.
- Admins can **approve or reject** appointment requests.
- Appointment status updates and email notifications.

### 3. Pharmacy & Hospital Search
- Users can search for nearby **hospitals and pharmacies** using **Google Maps API**.
- Search results display **contact details and directions**.

### 4. Medicine Purchase & Payment
- Users can **add medicines** to their cart and securely **checkout via Stripe**.
- Order history is maintained with **confirmation emails** sent to users.

### 5. Emergency Services
- **Quick-access emergency button** on the homepage.
- Users can quickly find **nearby hospitals and pharmacies**.

### 6. Admin Dashboard
- Manage **users, doctors, and appointment logs**.
- View **patient feedback** and monitor system activity.
- Add new **doctors and admins** to the system.

### 7. Doctor Dashboard
- View and manage **appointments**.
- Notify patients via **email** about **appointment time and meeting link**.
- Track patient **medical records**.

---
## System Architecture
The system follows a **client-server architecture**:
### Backend (Node.js, Express.js, MongoDB)
- **Middleware**: Authentication, email verification, role-based access control.
- **Models**: User, Appointment, Medicine, Feedback.
- **Routes**: API endpoints for authentication, appointments, pharmacy search, and admin operations.

### Frontend (React.js, Redux, Vite)
- Secure **authentication system**.
- User **dashboard** for tracking appointments and medicine purchases.
- **Location-based search** for hospitals and pharmacies.

### Database (MongoDB)
- Stores **user data, appointments, medicine logs, and feedback**.

---
## API Endpoints
### Authentication
- `POST /api/v1/user/register` - Register a new user.
- `POST /api/v1/user/login` - User login.
- `POST /api/v1/user/logout` - User logout.

### Appointments
- `POST /api/user/appointments` - Book an appointment.
- `GET /api/user/appointments/:userId` - Retrieve user’s appointments.
- `PUT /api/appointments/status/:appointmentId` - Update appointment status.

### Doctors
- `GET /api/doctors/` - Retrieve list of doctors.
- `POST /api/doctors/addnew` - Add a new doctor.

### Medicine & Cart
- `POST /api/user/cart/add` - Add medicine to cart.
- `GET /api/user/cart/:userId` - Retrieve user’s cart.
- `POST /api/user/cart/checkout` - Process payment.

---
## User Flow
### **1. Patient**
#### Pre-login Pages:
- **Home**: General hospital information and services.
- **About Us**: Hospital details, mission, and vision.
- **Appointment**: Form to book an appointment.

#### Registration & Login:
- Register **(successful → login, failure → error message)**.
- Login **(successful → dashboard, failure → error message)**.

#### Post-login Features:
- **Medicine**: Browse and purchase medicines.
- **My Log**: View personal activity logs.
- **My Appointment Status**: Track booked appointments.
- **Cart**: View and purchase medicines.
- **Logout**: Securely exit the system.

### **2. Admin**
#### Features:
- **Add Doctor/Admin**: Register new doctors and admins.
- **Dashboard**: Manage hospital system operations.
- **Messages**: View and manage patient messages.
- **Users & Doctors List**: View all registered users and doctors.
- **Update Appointment Status**: Approve or reject appointments.
- **Logout**: Secure exit.

### **3. Doctor**
#### Features:
- **Dashboard**: Manage appointments and schedules.
- **Approve/Reject Appointments**: Take necessary actions.
- **Email Patients**: Notify patients about their appointment.
- **Logout**: Secure exit.

---
## Security Measures
- **JWT-based authentication** for secure access control.
- **Bcrypt.js for password encryption**.
- **Role-based access control** (Patients, Doctors, Admins).
- **Secure API requests** with validation and middleware.

---
## Future Enhancements
- **Real-time chat** between doctors and patients.
- **AI-based symptom checker** for preliminary diagnosis.
- **Integration with wearable health devices**.
- **Advanced analytics** for optimizing hospital operations.
- **Multi-language support** for global accessibility.

---
## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js**
- **MongoDB**
- **NPM or Yarn**

### Backend Setup
```sh
cd backend
npm install
npm start
```

### Frontend Setup
```sh
cd frontend
npm install
npm run dev
```

### Admin Dashboard Setup
```sh
cd admin-dashboard
npm install
npm start
```

### Doctor Dashboard Setup
```sh
cd doctor-dashboard
npm install
npm start
```

---
## GitHub Repository
[Hospital Management System - GitHub](https://github.com/Mukesh-217/Hospital-Management-System)

---
## Contributors
- **Mukesh** (Project Lead)

---
## License
This project is licensed under the **MIT License**.

---
## Conclusion
The **Hospital Management System** is a scalable and robust platform designed to enhance hospital operations and improve patient experience. Future updates will introduce more advanced features to optimize healthcare management.

