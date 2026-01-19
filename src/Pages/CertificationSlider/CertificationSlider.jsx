import "./CertificationSlider.css";

import logo1 from "/src/assets/Organization_ISO_9000_ISO_9001_2015_Certification_PNG-removebg-preview.png";
import logo2 from "/src/assets/Esic_Logo_PNG_Images__Transparent_HD_Photo_Clipart_-removebg-preview.png";
import logo3 from "/src/assets/ChatGPT Image Jan 16, 2026, 02_10_01 PM.png";
import logo4 from "/src/assets/MNRE_India.svg.png";
import logo5 from "/src/assets/SBPDCL_logo.gif";
import logo6 from "/src/assets/NBPDCL_logo.png";


const certifications = [
  { img: logo1, title: "ISO Certified Organization" },
  { img: logo2, title: " ESIC Approved" },
  { img: logo3, title: "UDYAM Registered" },
  { img: logo4,price:"", title: "MNRE Certified" },
  { img: logo5, title: "SBPDCL Empanelled" },
  { img: logo6, title: "NBPDCL Empanelled" },

  
   
];

const CertificationGrid = () => {
  return (
    <section className="cert-grid-section">
      <h3 className="cert-title">
        Certifications & <span>Accreditations</span>
      </h3>

      <div className="cert-grid">
        {certifications.map((item, i) => (
          <div className="cert-card" key={i}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationGrid;
