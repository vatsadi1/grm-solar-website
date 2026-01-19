import Navbar from "../../Pages/Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./AboutUs.css";
import aboutHero from "/About/ChatGPT Image Jan 19, 2026, 11_54_06 PM.png"; // 👈 image import

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <section className="about-wrap">

        {/* ===== IMAGE HERO SECTION ===== */}
        <div className="about-image-hero">
          <img src={aboutHero} alt="About GRM Solar" />
          <div className="about-image-overlay">
            <h1>About Us</h1>
            <p>
              Empowering a sustainable future through reliable and high-quality
              solar energy solutions.
            </p>
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="about-container">
          <div className="about-grid">

            <div className="about-card glass">
              <h3>Who We Are</h3>
              <p>
                <strong>GRM Bharat Infra Private Limited</strong> is a professionally
                managed solar EPC and infrastructure company delivering dependable,
                scalable, and sustainable renewable energy solutions.
              </p>
            </div>

            <div className="about-card neo">
              <h3>What We Do</h3>
              <ul>
                <li>On-Grid, Off-Grid & Hybrid Solar Systems</li>
                <li>Rooftop Solar EPC Solutions</li>
                <li>Solar Water Pumping Systems</li>
                <li>Solar & Energy-Efficient Lighting</li>
                <li>Operation & Maintenance Support</li>
              </ul>
            </div>

            <div className="about-card glass">
              <h3>Our Vision</h3>
              <p>
                To become a trusted contributor in India’s clean energy transition
                by delivering reliable and sustainable solar solutions.
              </p>
            </div>

            <div className="about-card neo">
              <h3>Our Mission</h3>
              <p>
                To execute every project with technical excellence, transparency,
                and a customer-first approach.
              </p>
            </div>

            <div className="about-card glass">
              <h3>Why Choose Us</h3>
              <ul className="check-list">
                <li>Experienced technical and execution team</li>
                <li>Quality-driven component selection</li>
                <li>MNRE & industry compliance</li>
                <li>Transparent pricing</li>
                <li>Strong after-sales support</li>
              </ul>
            </div>

            <div className="about-card neo image-card">
              <h3>Our Work Culture</h3>
              <ul className="check-list">
                <li>Reliable & skilled workforce</li>
                <li>High project execution standards</li>
                <li>Long-term client trust</li>
                <li>Consistent quality & compliance</li>
                <li>Positive impact on environment & society</li>
              </ul>
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
