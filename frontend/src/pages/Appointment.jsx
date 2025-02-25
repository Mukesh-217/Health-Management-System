import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmenForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | HMS"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
