import React from "react";
import "./CompanyPresence.css";
import solarIcon from "/src/assets/ChatGPT_Image_Jan_10__2026__01_04_01_AM-removebg-preview.png";

const CompanyPresence = () => {
  return (
    <section className="presence-section">
      <div className="presence-card">
        <h2 className="presence-title">
          We are Known and Popular with <span>GRM Solar</span> name
          <br />
          across the <strong>04 States of India</strong>.
        </h2>

        <div className="presence-content">
          {/* LEFT */}
          <div className="presence-block">
            <h4>Our Services At</h4>
            <ul>
              <li>Bihar</li>
              <li>Jharkhand</li>
              <li>Uttar Pradesh</li>
              <li>Gujarat</li>
            </ul>

            <h4 className="mt">Our OEM Partners</h4>
            <p>Waaree, Adani, Eastman, Rayzon & more</p>
          </div>

          {/* CENTER ICON */}
          <div className="presence-icon">
            <img src={solarIcon} alt="Solar Energy Icon" />
          </div>

          {/* RIGHT */}
          <div className="presence-block">
            <h4>Branch Offices</h4>
            <ul>
              <li>Patna</li>
              <li>Bettiah</li>
              <li>Jamshedpur</li>
              <li>Balia</li>
              <li>Vadodara</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPresence;
