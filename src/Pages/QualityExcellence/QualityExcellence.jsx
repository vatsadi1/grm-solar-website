import "./QualityExcellence.css";

import img1 from "/src/assets/Manufacturing of solar panel system in factory_Industry concept.jpeg";
import img2 from "/src/assets/photovoltaics-factory-investors-evaluate-solar-panels-addressing-issues.jpg";
import img3 from "/src/assets/ChatGPT Image Jan 16, 2026, 08_06_37 PM.png";
import img4 from "/src/assets/monitor-green-energy-solar-panels-plant-with-software-used-optimize-layouts.jpg";

const points = [
  {
    no: "01",
    text: "Adheres to latest IEC and MNRE standards, ensuring high reliability and long-term performance",
  },
  {
    no: "02",
    text: "Continuous testing across multiple quality parameters to ensure durability and safety",
  },
  {
    no: "03",
    text: "Quality checks aligned with globally recognized laboratories and certification bodies",
  },
  {
    no: "04",
    text: "Advanced monitoring using automated and data-driven quality control systems",
  },
  {
    no: "05",
    text: "Strict quality control implemented at every stage of procurement and execution",
  },
  {
    no: "06",
    text: "Continuous improvement through feedback-driven process optimization",
  },
  {
    no: "07",
    text: "Adoption of sustainable and environmentally responsible practices",
  },
  {
    no: "08",
    text: "Real-time performance analysis to ensure operational excellence",
  },
];

const QualityExcellence = () => {
  return (
    <section className="quality-section">
      <div className="quality-top">
        <h2>
          Reliability & Quality <span>Assurance</span>
        </h2>
        <p>
          An integral part of our solar procurement and execution framework,
          ensuring consistency, compliance, and performance excellence.
        </p>

        <div className="quality-points">
          {points.map((item, i) => (
            <div className="quality-point" key={i}>
              <span className="quality-no">{item.no}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE GRID */}
      <div className="quality-images">
        <img src={img1} alt="Quality Testing Lab" />
        <img src={img2} alt="Solar Manufacturing Facility" />
        <img src={img3} alt="Module Testing Process" />
        <img src={img4} alt="Final Inspection" />
      </div>
    </section>
  );
};

export default QualityExcellence;
