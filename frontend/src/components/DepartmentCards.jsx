import React, { useState } from "react";
import "../styles/DepartmentCard.css"


const departments = [
    {
        name: "Pediatrics",
        description: "Dedicated to children's health and wellness.",
        imageUrl: "/pediatrics.jpg",
        services: [
          "Newborn and child check-ups",
          "Vaccinations and immunizations",
          "Growth and development monitoring",
          "Treatment of childhood illnesses",
          "Nutritional guidance"
        ],
        specialties: ["Neonatology", "Pediatric Cardiology", "Pediatric Neurology"]
      },
      {
        name: "Orthopedics",
        description: "Specializing in bone and joint care.",
        imageUrl: "/orthopedics.jpg",
        services: [
          "Fracture and trauma care",
          "Joint replacement surgery",
          "Sports injury treatment",
          "Arthritis management",
          "Physical rehabilitation"
        ],
        specialties: ["Spinal Surgery", "Sports Medicine", "Pediatric Orthopedics"]
      },
      {
        name: "Cardiology",
        description: "Heart health and cardiovascular treatment.",
        imageUrl: "/cardiology.jpg",
        services: [
          "ECG and stress tests",
          "Heart disease diagnosis and treatment",
          "Cardiac catheterization",
          "Hypertension management",
          "Post-heart attack care"
        ],
        specialties: ["Interventional Cardiology", "Pediatric Cardiology", "Electrophysiology"]
      },
      {
        name: "Neurology",
        description: "Brain and nervous system care.",
        imageUrl: "/Neurology.jpeg",
        services: [
          "Stroke management",
          "Seizure and epilepsy treatment",
          "Neurological disorder diagnosis",
          "Migraine and headache treatment",
          "Rehabilitation therapy"
        ],
        specialties: ["Neurosurgery", "Neurophysiology", "Multiple Sclerosis Care"]
      },
      {
        name: "Oncology",
        description: "Comprehensive cancer diagnosis and treatment.",
        imageUrl: "/Oncology.png",
        services: [
          "Chemotherapy",
          "Radiation therapy",
          "Cancer screening",
          "Surgical oncology",
          "Palliative care"
        ],
        specialties: ["Medical Oncology", "Radiation Oncology", "Surgical Oncology"]
      },
      {
        name: "Radiology",
        description: "Advanced imaging and diagnostic services.",
        imageUrl: "/Radiology.jpg",
        services: [
          "MRI and CT scans",
          "X-rays and ultrasound",
          "Mammography",
          "Nuclear medicine",
          "Interventional radiology"
        ],
        specialties: ["Diagnostic Radiology", "Interventional Radiology", "Neuroradiology"]
      },
      {
        name: "Physical Therapy",
        description: "Rehabilitation and movement therapy.",
        imageUrl: "/PhysicalTherapy.jpg",
        services: [
          "Post-surgical rehab",
          "Sports injury rehab",
          "Pain management",
          "Gait training",
          "Manual therapy"
        ],
        specialties: ["Orthopedic PT", "Neurological PT", "Pediatric PT"]
      },
      {
        name: "Dermatology",
        description: "Skin, hair, and nail health treatments.",
        imageUrl: "/Dermatology.jpg",
        services: [
          "Acne and eczema treatment",
          "Skin cancer screening",
          "Hair loss treatment",
          "Psoriasis and rosacea care",
          "Cosmetic dermatology"
        ],
        specialties: ["Medical Dermatology", "Cosmetic Dermatology", "Pediatric Dermatology"]
      },
      {
        name: "ENT (Ear, Nose, and Throat)",
        description: "Comprehensive care for ENT disorders.",
        imageUrl: "/ent.jpg",
        services: [
          "Sinus and allergy treatment",
          "Hearing tests and hearing aids",
          "Voice and swallowing therapy",
          "Tonsillectomy and adenoidectomy",
          "Dizziness and balance disorders"
        ],
        specialties: ["Otolaryngology", "Audiology", "Rhinology"]
      },
      {
        name: "Nephrology",
        description: "Kidney health and disease management.",
        imageUrl: "/Nephrology.png",
        services: [
          "Dialysis",
          "Kidney disease treatment",
          "Hypertension management",
          "Kidney transplant evaluation",
          "Electrolyte disorders"
        ],
        specialties: ["Dialysis Care", "Transplant Nephrology", "Pediatric Nephrology"]
  },
];

const DepartmentCards = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  return (
    <div className="container departments">
      <h2 className="section-title">Our Departments</h2>
      <div className="department-grid">
        {departments.map((dept, index) => (
          <div key={index} className="card" onClick={() => setSelectedDepartment(dept)}>
            <img src={dept.imageUrl} alt={dept.name} className="card-image" />
            <h3>{dept.name}</h3>
          </div>
        ))}
      </div>

      {selectedDepartment && (
        <div className="modal-overlay" onClick={() => setSelectedDepartment(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">{selectedDepartment.name}</h3>
            <p className="modal-description"><strong>{selectedDepartment.description}</strong></p>

            <h4>Services Offered:</h4>
            <ul className="modal-list">
              {selectedDepartment.services.map((service, i) => (
                <li key={i}>✔ {service}</li>
              ))}
            </ul>

            <h4>Specialties:</h4>
            <ul className="modal-list">
              {selectedDepartment.specialties.map((specialty, i) => (
                <li key={i}>⭐ {specialty}</li>
              ))}
            </ul>

            <button className="modal-close-btn" onClick={() => setSelectedDepartment(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DepartmentCards;
