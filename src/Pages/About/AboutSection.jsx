import React from "react";
import "./AboutSection.css";


const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* LEFT IMAGE */}
        

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-tag">Who We Are</span>
          <h2>Powering India with Smart Solar Solutions</h2>
          <p>
            We specialize in delivering high-quality solar EPC solutions for
            residential, commercial, and industrial sectors. Our mission is to
            create sustainable energy systems that reduce costs and protect the
            environment.
          </p>

          <div className="about-points">
            <div>✔ 03+ Years Industry Experience</div>
            <div>✔ Government Approved Projects</div>
            <div>✔ End-to-End EPC Solutions</div>
          </div>

          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
