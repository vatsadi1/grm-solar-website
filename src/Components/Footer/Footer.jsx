import { Link } from "react-router-dom";
import "./Footer.css";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="neo-footer">
      <div className="neo-footer-grid">
        {/* CARD 1 */}
        <div className="neo-footer-card">
          <h4>About the Organization</h4>
          <p>
            GRM Bharat Infra Private Ltd is committed to delivering reliable and
            sustainable solar energy solutions aligned with national renewable
            energy goals.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="neo-footer-card">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/top">Home</Link>{" "}
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>{" "}
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>{" "}
            </li>
            <li>
              <Link to="/terms-conditions">Terms & Conditions</Link>{" "}
            </li>
          </ul>
        </div>

        {/* CARD 3 */}
        <div className="neo-footer-card">
          <h4>Contact Information</h4>
          <p>
            Bhikhampur, Senwaria, Chanpatia Bazar
            <br />
            Bettiah, West Champaran - 845453
          </p>
          <p className="neo-phone">📞 +91 9122392555</p>
          <p className="neo-phone"> 📞 +91 9122394789</p>
          <p className="neo-phone">📞 +91 9122393789</p>

          <p>✉️ grmprivateltd@gmail.com</p>

          <div className="neo-socials">
            <a
              href="https://www.facebook.com/people/GRM-Bharat-Infra-Private-Ltd/61581054903001/"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/grmbharat?igsh=MW5meXg3dTZnNjBtcQ=="
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="neo-footer-bottom">
        © GRM Bharat Infra Private Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
