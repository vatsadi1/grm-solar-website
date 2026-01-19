import React from "react";
import "./Benifit.css";

const Benefits = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-container">

        <h2 className="benefits-heading">
          Why Switching to Solar Is a Smart Decision
        </h2>
        <p className="benefits-subheading">
          Solar energy is not just about saving electricity — it’s about
          building a secure, sustainable, and cost-efficient future.
        </p>

        <div className="benefits-grid">

          <div className="benefit-card">
            <h3>Significant Cost Savings</h3>
            <p>
              Reduce your electricity bills by up to <strong>90%</strong>.
              Once installed, solar power protects you from rising
              electricity tariffs for decades.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Government Subsidies & Incentives</h3>
            <p>
              Benefit from central and state government subsidies,
              accelerated depreciation, and net-metering policies
              that improve your ROI.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Clean & Green Energy</h3>
            <p>
              Solar power reduces carbon footprint and air pollution,
              helping fight climate change while creating a healthier
              environment for future generations.
            </p>
          </div>

          <div className="benefit-card highlight">
            <h3>Low Maintenance, High Reliability</h3>
            <p>
              Solar systems require minimal maintenance and are designed
              to operate efficiently for <strong>25+ years</strong> with
              consistent performance.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Energy Independence</h3>
            <p>
              Generate your own electricity and reduce dependency on
              power grids, ensuring uninterrupted energy even during
              outages.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Increase Property Value</h3>
            <p>
              Properties equipped with solar systems are more attractive,
              command higher value, and sell faster in the real estate market.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
