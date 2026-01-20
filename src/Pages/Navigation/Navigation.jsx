import { useState } from "react";
import {Link} from "react-router-dom"
import MobileSidebar from "../../Components/Slidebar";
import "./Navigation.css";


const Navbar = ({ floating }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const categories = [
    { id: "res", label: "Residential" ,path:"/residential"},
    { id: "ind", label: "Industrial / Commercial",path:"/IndustrialCommercial" },
    { id: "agri", label: "Agricultural & Forestry",path:"/AgriculturalForestry" },
  ];

  const procategories = [
    { id: "Lig", label: "Industrial Lighting Series",path:"/Product" },
    { id: "Sol", label: "Solar Street Lighting Series",path:"/Product"  },
    { id: "Road", label: "Roadway Lighting Series" ,path:"/Product" },
    { id: "Flood", label: "Flood Lighting Series" ,path:"/Product" },
    { id: "High", label: "High Mast and Poles" ,path:"/Product" },
    { id: "GSM", label: "GSM / GPRS Based Smart Street Lights",path:"/Product"  },
    { id: "Dec", label: "Decorative Lighting Series",path:"/Product"  },
  ];

  const renderEpcDropdown = () => (
    <div className="dropdown open">
      <ul className="dropdown-single">
        {categories.map((cat) => (
          <li key={cat.id}>
              <Link to={cat.path} onClick={() => setOpenMenu(null)}>
            <span>{cat.label}</span>
            <span className="right-arrow">›</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderProductDropdown = () => (
    <div className="dropdown open">
      <ul className="dropdown-single">
        {procategories.map((cat) => (
          <li key={cat.id}>
  <Link to={cat.path} onClick={() => setOpenMenu(null)}>
            <span>{cat.label}</span>
            <span className="right-arrow">›</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <nav className={`navbar ${floating ? "floating" : ""}`}>
        <Link to="/">

        <div className="logo">
          
          <img
            src="/GrmLogo/WhatsApp_Image_2026-01-16_at_11.00.47_PM-removebg-preview.png"
            alt="Logo"
          />
        </div>
</Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
            </li>

          <li
            className="menu-wrapper"
            onMouseEnter={() => setOpenMenu("epc")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className={`menu-item ${openMenu === "epc" ? "open" : ""}`}>
              EPC Solution <span className="arrow">▼</span>
            </span>
            {openMenu === "epc" && renderEpcDropdown()}
          </li>

          <li
            className="menu-wrapper"
            onMouseEnter={() => setOpenMenu("products")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <span className={`menu-item ${openMenu === "products" ? "open" : ""}`}>
              Products <span className="arrow">▼</span>
            </span>
            {openMenu === "products" && renderProductDropdown()}
          </li>

          <li><Link to="/about">About Us</Link> </li>
          <li><Link to="/contact">Contact Us</Link> </li>
        </ul>

        <div className="nav-actions">
          <a href="tel:+919122392555" className="nav-btn">
            Get In Touch
          </a>

          <button className="glass-hamburger" onClick={() => setMobileOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <MobileSidebar
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        categories={categories}
        procategories={procategories}
      />
    </>
  );
};

export default Navbar;
