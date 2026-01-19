// Services.jsx
import React from "react";
import "./Services.css";
import { FaSolarPanel, FaBolt, FaLeaf } from "react-icons/fa";

const servicesData = [
  {
    icon: <FaSolarPanel />,
    title: "Solar Panel Installation",
    description:
      "Expert installation of residential and commercial solar panels with efficiency and reliability.",
  },
  {
    icon: <FaBolt />,
    title: "Energy Storage Solutions",
    description:
      "Advanced battery storage systems to store excess energy and optimize consumption.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainable Energy Consulting",
    description:
      "Professional consulting to help businesses and homeowners switch to renewable energy solutions.",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
