import { useEffect } from "react";
import "./BoardOfDirectors.css";

const CMDSection = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="cmd-section">
      <div className="cmd-container">
        {/* LEFT IMAGE AREA */}
        <div className="cmd-images fade-up">
          <img
            src="/CmdImg/ChatGPT Image Jan 20, 2026, 04_50_21 PM.png"
            alt="CMD Portrait"
            className="cmd-main-img"
          />
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="cmd-content-wrap fade-up">
  <div className="cmd-content">
          
          <span className="cmd-badge">From the CMD's Desk</span>

          <h2>
            Leading India Towards a<span> Solar-Powered Future</span>
          </h2>

          <h4>Smriti Kumari</h4>
          <p className="cmd-role">Chairman & Managing Director (CMD)</p>

          <p>
            Smriti Kumari is a distinguished leader with a strong foundation in
            engineering and strategic management, bringing a rare blend of
            technical expertise and business acumen to the renewable energy
            sector. She holds a B.Tech in Electrical & Electronics Engineering
            and an MBA in Project Management, equipping her with deep insight
            into both system design and large-scale project execution.
          </p>

          
        </div>
        </div>
      </div>
    </section>
  );
};

export default CMDSection;
