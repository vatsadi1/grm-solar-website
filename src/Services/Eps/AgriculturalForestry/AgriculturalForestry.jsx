import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../Pages/Navigation/Navigation";
import "./AgriculturalForestry.css";

const AgriculturalForestry = () => {
  return (
    <>
      <Navbar />

      <section className="agri-page">

        {/* ===== NEW IMAGE HERO (LIKE CONTACT PAGE) ===== */}
        <div className="agri-image-hero">
          <img
            src="/Agriculture/ChatGPT Image Jan 20, 2026, 12_50_44 AM.png"
            alt="Agricultural Solar Solutions"
          />
          <div className="agri-image-overlay">
            <h1>Agriculture & Forestry</h1>
            <p>
              End-to-end solar EPC solutions for agriculture, rural communities,
              and forestry applications.
            </p>
          </div>
        </div>

        {/* ===== OLD HERO (UNCHANGED) ===== */}
        

        {/* ===== OLD IMAGE SECTION (UNCHANGED) ===== */}
        <section className="agri-image-section">
          <div className="agri-image-container">
            <img
              src="/Agriculture/ChatGPT Image Jan 18, 2026, 03_02_19 PM.png"
              alt="Agricultural Solar Solutions"
            />
          </div>
        </section>

        {/* ===== CONTENT GRID (UNCHANGED) ===== */}
        <div className="agri-grid">

          <div className="agri-card neo">
            <h3>Who We Serve</h3>
            <p>
              Our Agricultural & Forestry EPC solutions are designed for
              farmers, rural communities, and forestry operations,
              providing clean and dependable solar power for essential
              needs.
            </p>
          </div>

          <div className="agri-card neo">
            <h3>What We Do</h3>
            <ul>
              <li>Solar Water Pumping Systems</li>
              <li>Off-Grid & Hybrid Solar Systems</li>
              <li>Rural Electrification Projects</li>
              <li>Solar Power for Forestry Infrastructure</li>
              <li>Operation & Maintenance Services</li>
            </ul>
          </div>

          <div className="agri-card neo">
            <h3>Working Process</h3>
            <ul>
              <li>Site survey & water requirement analysis</li>
              <li>System design based on irrigation needs</li>
              <li>Procurement of certified solar components</li>
              <li>Installation & commissioning</li>
              <li>Performance testing & training</li>
            </ul>
          </div>

          <div className="agri-card neo">
            <h3>Key Benefits</h3>
            <ul>
              <li>Reduced dependency on diesel & grid power</li>
              <li>Lower operational costs for farmers</li>
              <li>Reliable water supply for irrigation</li>
              <li>Environment-friendly energy solution</li>
              <li>Long-term system reliability</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AgriculturalForestry;
