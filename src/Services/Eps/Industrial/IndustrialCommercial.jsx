import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../Pages/Navigation/Navigation";
import "./IndustrialCommercial.css";

const IndustrialCommercial = () => {
  return (
    <>
    <Navbar/>
    
    <section className="ic-wrap">
      {/* HERO */}
        {/* ===== NEW IMAGE HERO (LIKE CONTACT PAGE) ===== */}
        <div className="agr-image-hero">
          <img
            src="/comercial/ChatGPT Image Jan 20, 2026, 01_06_58 AM.png"
            alt="Agricultural Solar Solutions"
          />
          <div className="agri-image-overlay">
            <h1>Industrial & Commercial EPC Solutions</h1>
            <p>
              End-to-end solar EPC solutions for commercial buildings,
          factories, institutions, and industrial infrastructure.
            </p>
          </div>
        </div>

      
       
{/* INDUSTRIAL / COMMERCIAL IMAGE SECTION */}
<section className="ic-image-section">
  <div className="ic-image-container">
    <img
      src="/comercial/ChatGPT Image Jan 18, 2026, 02_51_51 PM.png"
      alt="Industrial & Commercial Solar Installation"
    />

    
  </div>
</section>


      {/* CONTENT */}
      <div className="ic-container">
        <div className="ic-grid">

          <div className="ic-card glass">
            <h3>Overview</h3>
            <p>
              Our Industrial & Commercial EPC Solutions are designed to
              deliver large-scale, reliable, and cost-effective solar
              power systems tailored to business and industrial energy needs.
            </p>
          </div>

          <div className="ic-card neo">
            <h3>System Applications</h3>
            <ul>
              <li>Commercial Rooftop Solar Systems</li>
              <li>Industrial Rooftop Solar Plants</li>
              <li>Ground Mounted Solar Systems</li>
              <li>On-Grid & Hybrid Solar Solutions</li>
            </ul>
          </div>

          <div className="ic-card glass">
            <h3>System Components</h3>
            <ul>
              <li>High-capacity Solar Panels</li>
              <li>String / Central Solar Inverters</li>
              <li>DC & AC Power Cables</li>
              <li>GI / MS Mounting Structures</li>
              <li>Complete electrical & safety accessories</li>
            </ul>
          </div>

          <div className="ic-card neo">
            <h3>Installation & Commissioning</h3>
            <p>
              Our experienced EPC team handles complete installation,
              electrical integration, grid synchronization, testing,
              and commissioning in compliance with MNRE and safety standards.
            </p>
          </div>

          <div className="ic-card glass">
            <h3>Operation & Maintenance (O&M)</h3>
            <p>
              We provide comprehensive operation and maintenance services
              including performance monitoring, preventive maintenance,
              and corrective support to ensure consistent power generation.
            </p>
          </div>

          <div className="ic-card neo">
            <h3>Why Choose Our EPC Solutions</h3>
            <ul className="check-list">
              <li>Turnkey EPC execution</li>
              <li>Optimized system design for high ROI</li>
              <li>Compliance with MNRE & DISCOM norms</li>
              <li>Experienced technical & execution team</li>
              <li>Reliable after-sales support</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default IndustrialCommercial;
