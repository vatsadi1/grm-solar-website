// WhyChooseUs.jsx
import React from "react";
import "./Choose.css";
import { FaSolarPanel, FaLeaf, FaBolt, FaUsers } from "react-icons/fa";

const reasons = [
  {
    icon: <FaSolarPanel />,
    title: "Expert Installation",
    description: "Our team provides professional solar panel installation with maximum efficiency."
  },
  {
    icon: <FaBolt />,
    title: "Reliable Energy Solutions",
    description: "We ensure uninterrupted power supply with advanced energy storage systems."
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly",
    description: "We help you reduce carbon footprint and switch to sustainable energy sources."
  },
  {
    icon: <FaUsers />,
    title: "Customer Support",
    description: "24/7 dedicated support to answer all your solar energy queries."
  }
];

const Choose = () => {
  return (
    <section className="choose-section" id="why-choose-us">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="choose-container">
        {reasons.map((reason, index) => (
          <div key={index} className="choose-card">
            <div className="choose-icon">{reason.icon}</div>
            <h3 className="choose-title">{reason.title}</h3>
            <p className="choose-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
