import React, { useState } from "react";
import "../styles/Medicine.css";
import { toast } from "react-toastify";

const products = [
  // Medicines
  { id: 1, name: "Paracetamol", image: "/paracetamol.jpg", use: "Relieves pain and reduces fever.", category: "medicine" ,price: 5 },
  { id: 2, name: "Amoxicillin", image: "/amoxicillin.jpg", use: "Treats bacterial infections.", category: "medicine",price: 5  },
  { id: 3, name: "Ibuprofen", image: "/ibuprofen.avif", use: "Pain relief, fever reduction, and anti-inflammation.", category: "medicine" ,price: 5 },
  { id: 4, name: "Cetirizine", image: "/cetirizine.webp", use: "Treats allergies, hay fever, and cold symptoms." , category: "medicine",price: 5 },
  { id: 5, name: "Aspirin", image: "/aspirin.webp", use: "Pain reliever and blood thinner.", category: "medicine" ,price: 5 },
  { id: 6, name: "Metformin", image: "/metformim.avif", use: "Used to treat type 2 diabetes.", category: "medicine" ,price: 5 },
  { id: 7, name: "Losartan", image: "luthozide.jpg", use: "Lowers blood pressure.", category: "medicine",price: 5  },
  { id: 8, name: "Omeprazole", image: "/omiless.jpg", use: "Reduces stomach acid and treats acid reflux." , category: "medicine",price: 5 },
  { id: 9, name: "Atorvastatin", image: "/atorvastatin.jpg", useC: "Lowers cholesterol levels.", category: "medicine" ,price: 5 },
  { id: 10, name: "Azithromycin", image: "/biofield.jpg", use: "Antibiotic used for infections.", category: "medicine" ,price: 5 },
  { id: 11, name: "Doxycycline", image: "/doxycycline.webp", use: "Treats bacterial infections and acne.", category: "medicine" ,price: 5 },
  { id: 12, name: "Levothyroxine", image: "/Levothyroxine.jpg", use: "Used for thyroid hormone replacement." , category: "medicine",price: 5 },
  { id: 13, name: "Prednisone", image: "/prednisone.jpg", use: "Treats inflammation and immune disorders.", category: "medicine" ,price: 5 },
  { id: 14, name: "Lisinopril", image: "/lisinopril.jpg", use: "Lowers high blood pressure.", category: "medicine" ,price: 5 },
  { id: 15, name: "Clopidogrel", image: "/clopidogrel.jpg", use: "Prevents blood clots.", category: "medicine" ,price: 5 },
  { id: 16, name: "Warfarin", image: "/warf.jpg", use: "Blood thinner for clot prevention.", category: "medicine",price: 5  },
  { id: 17, name: "Hydrochlorothiazide", image: "/hydrochlorothiazida.webp", use: "Diuretic used to lower blood pressure.", category: "medicine",price: 5  },
  { id: 18, name: "Metoprolol", image: "/meptolo.webp", use: "Used for high blood pressure and heart disease." , category: "medicine",price: 5  },
  { id: 19, name: "Simvastatin", image: "/simvastatin.avif", use: "Lowers cholesterol levels.", category: "medicine",price: 5  },
  { id: 20, name: "Albuterol", image: "/albuterol.jpg", use: "Treats asthma and breathing issues.", category: "medicine" ,price: 5 },
  { id: 21, name: "Furosemide", image: "/furosemidl.jpg", use: "Diuretic for fluid retention and high blood pressure.", category: "medicine" ,price: 5 },
  { id: 22, name: "Gabapentin", image: "/gabapentin.jpg", use: "Used to treat nerve pain and seizures.", category: "medicine" ,price: 5 },
  { id: 23, name: "Sertraline", image: "/sertraline.jpg", use: "Antidepressant for anxiety and depression.", category: "medicine" ,price: 5 },
  { id: 24, name: "Tamsulosin", image: "/tamsulosin.jpg", use: "Used for prostate enlargement symptoms.", category: "medicine" ,price: 5 },
  { id: 25, name: "Tramadol", image: "/tramadol.jpg", use: "Pain relief for moderate to severe pain." , category: "medicine",price: 5 },

  // Handwashes
  { id: 26, name: "Microshield Schulke", image: "/microshiled.jpg", use: "Medical Grade Disinfectant Handwash", category: "handwash" ,price: 5 },
  { id: 27, name: "Healthy Touch", image: "/healthytouch.jpg", use: "Kills 99.9% of germs.", category: "handwash" ,price: 5 },
  { id: 28, name: "Dettol Handwash", image: "/dettol.jpg", use: "Kills 99.9% of germs.", category: "handwash",price: 5  },
  { id: 29, name: "Lifebuoy Handwash", image: "/lifebuoy.webp", use: "Anti-bacterial hand wash.", category: "handwash" ,price: 5 },
  { id: 30, name: "Anti-Bacterial", image: "/antibacterial.avif", use: "Anti-bacterial hand wash.", category: "handwash" ,price: 5 },

  // Energy Powders 
{ id: 31, name: "Wal", image: "/wallace.jpg", use: "Walyte ORSL", category: "energy powder" ,price: 5 },
{ id: 32, name: "ElectroFizz", image: "/electrofizz.jpg", use: "Instant Energy Drink", category: "energy powder" ,price: 5 },
{ id: 33, name: "Electral", image: "/electral.webp", use: "Replenishes electrolytes and prevents dehydration.", category: "energy powder",price: 5  },
{ id: 34, name: "ORS-L", image: "/orsl.jpg", use: "Helps restore lost fluids and electrolytes.", category: "energy powder" ,price: 5 },
{ id: 35, name: "DripDrop ORS", image: "/dripdrop.jpg", use: "Medical-grade hydration solution.", category: "energy powder" ,price: 5 },
{ id: 36, name: "Pedialyte", image: "/pedialyte.jpg", use: "Effective rehydration drink.", category: "energy powder" ,price: 5 },
{ id: 37, name: "Hydralyte", image: "/hydralyte.jpg", use: "Hydration boost with essential minerals.", category: "energy powder" ,price: 5 },
{ id: 38, name: "NormaLyte", image: "/normalyte.webp", use: "ORS for rapid dehydration recovery.", category: "energy powder",price: 5  },
{ id: 39, name: "ReVital ORS", image: "/revital.jpg", use: "Essential electrolytes for hydration.", category: "energy powder" ,price: 5 },
{ id: 40, name: "Gastrolite", image: "/gastrolite.jpg", use: "Maintains fluid balance and prevents dehydration.", category: "energy powder" ,price: 5 },
{ id: 41, name: "Glucose-D", image: "/glucose-d.jpg", use: "Instant energy and hydration.", category: "energy powder" ,price: 5 },
{ id: 42, name: "Vital ORS", image: "/vitalors.png", use: "ORS powder to restore hydration.", category: "energy powder" ,price: 5 },


  // Sprays
  { id: 43, name: "Moov Pain Relief Spray", image: "/moov.jpg", use: "Suitable for Back Pain, Muscle Pain,Joint Pain,Knee Pain", category: "spray"  ,price: 5 },
  { id: 44, name: "Volini Big Spray 60 G", image: "/volini.webp", use: "Relieves for Back Pain, Muscle Pain, Joint Pain, Knee Pain.", category: "spray" },

  // Equipment
  { id: 45, name: "N95 Mask", image: "/n95_mask.jpg", use: "Protects against airborne particles.", category: "equipment" },
  { id: 46, name: "Digital Thermometer", image: "/thermometer.webp", use: "Measures body temperature.", category: "equipment" },
  { id: 47, name: "Disposable Gloves", image: "/gloves.jpg", use: "Ensures hygiene and safety.", category: "equipment" },
  { id: 48, name: "Pulse Oximeter", image: "/pulse_oximeter.png", use: "Measures blood oxygen levels and pulse rate.", category: "equipment" },
  { id: 49, name: "Blood Pressure Monitor", image: "/bp_monitor.jpg", use: "Tracks blood pressure readings at home.", category: "equipment" },
  { id: 50, name: "Wheelchair", image: "/wheelchair.webp", use: "Helps with mobility for disabled or injured individuals.", category: "equipment" },
  { id: 51, name: "Glucometer", image: "/glucometer.jpg", use: "Measures blood sugar levels for diabetes management.", category: "equipment" },
  { id: 52, name: "Nebulizer", image: "/nebulizer.webp", use: "Delivers medication for respiratory conditions.", category: "equipment" },
  { id: 53, name: "Infrared Thermometer", image: "/infrared_thermometer.jpg", use: "Measures temperature without direct contact.", category: "equipment" },
  { id: 54, name: "Surgical Mask", image: "/surgical_mask.webp", use: "Provides protection against airborne contaminants.", category: "equipment" },
  { id: 55, name: "Hand Sanitizer", image: "/hand_sanitizer.avif", use: "Kills germs and bacteria on hands.", category: "equipment" },
  { id: 56, name: "Face Shield", image: "/face_shield.webp", use: "Provides additional facial protection.", category: "equipment" },
  { id: 57, name: "CPR Mask", image: "/cpr_mask..jpg", use: "Used for safe and effective CPR administration.", category: "equipment" },
  { id: 58, name: "Surgical Gown", image: "/surgical_gown.jpg", use: "Protective gown for surgical procedures.", category: "equipment" },
  { id: 59, name: "First Aid Kit", image: "/first_aid_kit.jpg", use: "Contains essential medical supplies for emergencies.", category: "equipment" },
  { id: 60, name: "Medical Scissors", image: "/medical_scissors.webp", use: "Used for cutting bandages and dressings.", category: "equipment" },
  { id: 61, name: "Disposable Syringes", image: "/syringes.jpg", use: "Used for injections and medication administration.", category: "equipment" },
  { id: 62, name: "Hot Water Bag", image: "/hot_water_bag.jpg", use: "Provides warmth for pain relief and comfort.", category: "equipment" },
  { id: 63, name: "Cold Pack", image: "/cold_pack.jpg", use: "Used for reducing swelling and pain.", category: "equipment" },
  { id: 64, name: "Defibrillator (AED)", image: "/defibrillator.webp", use: "Used for emergency cardiac arrest situations.", category: "equipment" },
  { id: 65, name: "Walker", image: "/walker.jpg", use: "Provides stability for those with walking difficulties.", category: "equipment" },

  
];

const Medicine = ({ cart, setCart }) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const addToCart = (product) => {
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedCategory === "all" || product.category.toLowerCase() === selectedCategory.toLowerCase())
    );
  });

  return (
    <div className="medicine-container">
      <h1>Available Products</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <div className="sort-buttons">
        <button onClick={() => setSelectedCategory("all")}>All</button>
        <button onClick={() => setSelectedCategory("medicine")}>Medicines</button>
        <button onClick={() => setSelectedCategory("handwash")}>Handwashes</button>
        <button onClick={() => setSelectedCategory("energy powder")}>Energy Powder</button>
        <button onClick={() => setSelectedCategory("spray")}>Spray</button>
        <button onClick={() => setSelectedCategory("equipment")}>Equipment</button>
      </div>
      <div className="medicine-list">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="medicine-card">
              <img src={product.image} alt={product.name} className="medicine-image" />
              <h2>{product.name}</h2>
              <p>{product.use}</p>
              <p>Price: ${product.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Medicine;
