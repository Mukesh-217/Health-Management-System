import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Our Hospital Management System enhances healthcare operations by streamlining appointments, patient records, billing, and staff coordination. 
          With advanced technology and an intuitive interface, it improves efficiency, reduces administrative tasks, and ensures seamless hospital workflows,
           allowing healthcare professionals to focus on patient care.
           
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
