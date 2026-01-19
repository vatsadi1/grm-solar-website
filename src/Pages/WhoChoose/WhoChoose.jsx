import React from "react";
import "./WhoChoose.css";

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        <h2 className="why-heading">
          We Don’t Sell Cheap,<br />
          We Build Solar Systems That Last
        </h2>

        <div className="why-cards">

          <div className="why-card">
            <img src="/src/assets/solar-panel.png" alt="" />
            <h3>Prefabricated & Readymade Structures</h3>
            <p>
              Seamlessly assembled on your roof with zero manual welding.
              Designed to handle wind speeds up to <strong>150 Kmph</strong>,
              ensuring durability and error-free installation.
            </p>
          </div>

          <div className="why-card featured">
            <img src="/src/assets/engineer.png" alt="" />
            <h3>Masters of Solar System Maintenance</h3>
            <p>
              Year-round monitoring and maintenance to ensure maximum generation
              and savings. With India’s best after-sales service, we offer
              a <strong>364-day Plant Uptime Guarantee</strong>.
            </p>
          </div>

          <div className="why-card">
            <img src="/src/assets/briefcase.png" alt="" />
            <h3>We Work With the Best Brands</h3>
            <p>
              Only Tier-1 solar modules and inverters are used.
              Trusted brands, superior performance, and industry-leading
              warranties for long-term peace of mind.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
