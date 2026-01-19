import Footer from "../../components/Footer/Footer";
import Navbar from "../../Pages/Navigation/Navigation";
import "./Product.css";

const Products = () => {
  return (
    <>
    <Navbar/>
    <section className="prod-wrap">

     {/* ===== NEW IMAGE HERO (LIKE CONTACT PAGE) ===== */}
        <div className="agri-image-hero">
          <img
            src="/Products/ChatGPT Image Jan 20, 2026, 01_27_21 AM.png"
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

   
   {/* IMAGE SECTION (LIKE RESIDENTIAL) */}
      <section className="prod-image-section">
        <div className="prod-image-container">
          <img
            src="/Products/ChatGPT Image Jan 18, 2026, 03_18_16 PM.png"
            alt="Solar Products"
          />

           
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <div className="prod-container">
        <div className="prod-grid">

          <div className="prod-card glass">
            <h3>Solar Panels</h3>
            <p>
              High-efficiency photovoltaic panels designed for maximum
              energy generation and long operational life.
            </p>
          </div>

          <div className="prod-card neo">
            <h3>Solar Inverters</h3>
            <p>
              Reliable inverters that convert DC power into usable AC
              electricity with high efficiency and safety.
            </p>
          </div>

          <div className="prod-card glass">
            <h3>Solar Wires & Cables</h3>
            <p>
              UV and heat-resistant DC & AC cables ensuring safe and
              efficient power transmission.
            </p>
          </div>

          <div className="prod-card neo">
            <h3>GI Mounting Structures</h3>
            <p>
              Strong and corrosion-resistant structures for secure
              mounting of solar panels on rooftops and ground.
            </p>
          </div>

          <div className="prod-card glass">
            <h3>Balance of System (BoS)</h3>
            <p>
              Complete range of accessories including junction boxes,
              earthing, connectors, and protection devices.
            </p>
          </div>

          <div className="prod-card neo">
            <h3>Operation & Maintenance</h3>
            <p>
              Professional O&M services to ensure optimal performance
              and long-term reliability of solar systems.
            </p>
          </div>

        </div>
      </div>

    </section>
    <Footer/>
      </>
  );
};

export default Products;
