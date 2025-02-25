import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="whoweare" />
      </div>
      <div className="banner">
        <h2>Who We Are</h2>
        <p>
          We are committed to revolutionizing healthcare management by providing
          innovative, technology-driven solutions.
        </p>
        <p>
          Our Hospital Management System simplifies daily operations, ensuring
          accuracy, efficiency, and seamless workflows for medical
          professionals and administrators.
        </p>
        <p>
          With a focus on excellence, we empower healthcare providers to deliver
          high-quality care while reducing administrative burdens.
        </p>
        <p>Enjoy our Facilities!</p>
      </div>
    </div>
  );
};

export default Biography;
