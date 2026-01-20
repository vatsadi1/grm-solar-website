import "./OEMPartners.css";

import adani from "/src/assets/ENT.jpeg";
import waaree from "/src/assets/Waaree Energies IPO_ Illuminating the Path to a Sustainable Future.jpeg";
import tata from "/src/assets/TATA POWER.jpeg";
import suzlon from "/src/assets/SUZLON.jpeg";
import utl from "/src/assets/utl-solar-logo-png_seeklogo-623475.png";
import mahindra from "/src/assets/Mahindra Logo - Mahindra Emblem - Mahindra Symbol.jpeg";
import rayzon from "/src/assets/rayzon-solar-logo-teal.png";
import vikram from "/src/assets/download (11).jpeg"


const oemPartners = [
  { img: adani, name: "Adani Solar" },
  { img: waaree, name: "Waaree Energies" },
  { img: tata, name: "TATA Group" },
  { img: suzlon, name: "Suzlon Energy" },
  { img: utl, name: "UTL Solar" },
  { img: mahindra, name: "Mahindra Susten" },
  { img: rayzon, name: "Rayzon Solar" },
    { img: vikram, name: "Vikram Solar" },
];

const OEMPartners = () => {
  return (
    <section className="oem-section">
      <div className="oem-container">
        <h3 className="oem-title">
          Our <span>OEM Partners</span>
        </h3>

        <p className="oem-subtitle">
          We procure solar modules, inverters, and allied components from
          reputed OEMs, ensuring quality, reliability, and compliance with
          applicable standards.
        </p>

        <div className="oem-grid">
          {oemPartners.map((partner, i) => (
            <div className="oem-card" key={i}>
              <img src={partner.img} alt={partner.name} />
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OEMPartners;
