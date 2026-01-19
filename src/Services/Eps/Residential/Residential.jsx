import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../Pages/Navigation/Navigation";
import "./Residential.css";

const Residential = () => {
  return (
    <>
    <Navbar/>
    
    <section className="res-wrap">

   {/* ===== NEW IMAGE HERO (LIKE CONTACT PAGE) ===== */}
        <div className="agr-image-hero">
          <img
            src="/Residential/ChatGPT Image Jan 20, 2026, 01_15_22 AM.png"
            alt="Agricultural Solar Solutions"
          />
          <div className="agri-image-overlay">
            <h1>Residential EPC Solutions</h1>
            <p>
             End-to-end rooftop solar solutions for residential homes,
          designed for efficiency, reliability, and long-term savings.
            </p>
          </div>
        </div>

      {/* HERO */}
    

{/* IMAGE CARD SECTION */}
{/* RESIDENTIAL IMAGE SECTION */}
<section className="res-image-section">
  <div className="res-image-container">
    <img
      src="/Residential/ChatGPT Image Jan 18, 2026, 09_21_16 AM.png"
      alt="Residential Rooftop Solar Installation"
    />
  
  </div>
</section>


      {/* CONTENT */}
      <div className="res-container">
        <div className="res-grid">

          {/* CARD 1 */}
          <div className="res-card glass">
            <h3>Overview</h3>
            <p>
              Our Residential EPC Solutions provide complete rooftop solar
              systems for homes, covering engineering, procurement,
              installation, commissioning, and maintenance.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="res-card neo">
            <h3>Types of Systems</h3>
            <ul>
              <li>On-Grid Rooftop Solar System</li>
              <li>Off-Grid Rooftop Solar System</li>
              <li>Hybrid Rooftop Solar System</li>
            </ul>
          </div>

          {/* CARD 3 */}
          <div className="res-card glass">
            <h3>System Components</h3>
            <ul>
              <li>High-efficiency Solar Panels</li>
              <li>Reliable Solar Inverters</li>
              <li>DC & AC Cables / Wires</li>
              <li>GI Mounting Structure</li>
              <li>All materials for complete installation</li>
            </ul>
          </div>

          {/* CARD 4 */}
          <div className="res-card neo">
            <h3>Installation & Commissioning</h3>
            <p>
              Our expert team ensures safe installation, electrical
              integration, testing, and commissioning as per
              applicable standards and safety norms.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="res-card glass">
            <h3>Operation & Maintenance</h3>
            <p>
              We provide ongoing operation and maintenance (O&M)
              services to ensure optimal system performance,
              reliability, and long service life.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="res-card neo">
            <h3>Why Choose Our Residential EPC</h3>
            <ul className="check-list">
              <li>Complete turnkey EPC solution</li>
              <li>Quality-certified components</li>
              <li>Experienced technical team</li>
              <li>Transparent execution process</li>
              <li>Dedicated after-sales support</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Residential;
