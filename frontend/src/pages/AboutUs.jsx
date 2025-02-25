import React, { useState } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import DepartmentCards from "../components/DepartmentCards";

const AboutUs = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  return (
    <>
      <Hero title={"Learn More About Us | HMS"} imageUrl={"/about.jpeg"} />
      <Biography imageUrl={"/whoweare.png"} />
      <DepartmentCards />
    </>
  );
};

export default AboutUs;
