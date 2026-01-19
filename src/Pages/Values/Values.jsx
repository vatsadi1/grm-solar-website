import React from "react";
import "./Value.css";

const Values = () => {
  return (
    <section className="values-unique">
      
      <div className="values-wrap">

        {/* LEFT SIDE */}
        <div className="values-left">
          <span className="values-tag">Our Values</span>
          <h2>
            Values That Shape <br /> Every Solar Project
          </h2>
          <p>
            We don’t just install solar systems — we build trust, sustainability
            and long-term partnerships that power a greener future.
          </p>

          <div className="vertical-line"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="values-right">
          <div className="value-box">
            <h4>Sustainability First</h4>
            <p>Every solution is designed to reduce carbon footprint.</p>
          </div>

          <div className="value-box shift">
            <h4>Engineering Excellence</h4>
            <p>Precision-driven EPC execution with industry standards.</p>
          </div>

          <div className="value-box">
            <h4>Transparent Process</h4>
            <p>Clear communication, honest pricing, zero shortcuts.</p>
          </div>

          <div className="value-box shift">
            <h4>Future Ready</h4>
            <p>Innovation-led systems built for long-term performance.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Values;
