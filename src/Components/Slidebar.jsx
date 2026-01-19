import { useState, useEffect } from "react";
import "./Slidebar.css";
import { Link } from "react-router-dom";

const MobileSidebar = ({
  open,
  onClose,
  categories,
  procategories,
}) => {
  const [openSection, setOpenSection] = useState(null);

  // 🔒 Lock scroll when sidebar opens
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (!open) return null;

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  // ✅ HARD CLOSE HANDLER
 const handleClose = () => {
  document.body.style.overflow = "auto";
  onClose();

  // 🔁 force scroll after sidebar animation
  setTimeout(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.scrollTo(0, 0);
  }, 350);
};


  return (
    <>
      <div className="glass-overlay" onClick={handleClose} />

      <aside className="glass-sidebar">
        <button className="glass-close" onClick={handleClose}>✕</button>

        <ul className="glass-menu">

          <li className="glass-item">
            🏠
            <Link to="/" onClick={handleClose}>
              Home
            </Link>
          </li>

          <li className="glass-section" onClick={() => toggleSection("epc")}>
            ⚡ <span>EPC Solution</span>
            <span className={`arrow ${openSection === "epc" ? "rotate" : ""}`}>⌄</span>
          </li>

          {openSection === "epc" &&
            categories.map((cat) => (
              <li key={cat.id} className="glass-sub">
                <Link to={cat.path} onClick={handleClose}>
                  {cat.label}
                </Link>
              </li>
            ))}

          <li className="glass-section" onClick={() => toggleSection("products")}>
            🌱 <span>Products</span>
            <span className={`arrow ${openSection === "products" ? "rotate" : ""}`}>⌄</span>
          </li>

          {openSection === "products" &&
            procategories.map((cat) => (
              <li key={cat.id} className="glass-sub">
                <Link to={cat.path} onClick={handleClose}>
                  {cat.label}
                </Link>
              </li>
            ))}

          <li className="glass-item">
            ℹ️
            <Link to="/about" onClick={handleClose}>
              About Us
            </Link>
          </li>

          <li className="glass-item">
            📞
            <Link to="/contact" onClick={handleClose}>
              Contact Us
            </Link>
          </li>

        </ul>

        <a href="tel:+919122392555" className="nav-btn">
          Get In Touch
        </a>
      </aside>
    </>
  );
};

export default MobileSidebar;
