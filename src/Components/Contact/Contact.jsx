import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import "./Contact.css";
import Footer from "../Footer/Footer";
import Navbar from "../../Pages/Navigation/Navigation";
import contactHero from "/Contact/ChatGPT Image Jan 20, 2026, 12_14_52 AM.png"
const Contact = () => {
  return (
    <>
    <Navbar/>
    <section className="contact-wrap">
             <div className="about-image-hero">
                <img src={contactHero} alt="About GRM Solar" />
                <div className="about-image-overlay">
                  <h1>Contact Us</h1>
                  <p>
                    Get in touch with us for reliable solar energy solutions and
          professional support.
                  </p>
                </div>
              </div>
      {/* HERO */}
     

      {/* CONTENT */}
      <div className="contact-container">
        <div className="contact-grid">

          {/* CONTACT INFO */}
          <div className="contact-card glass">
            <h3>Contact Information</h3>

            <p>
              <strong>GRM Bharat Infra Private Limited</strong>
            </p>

            <p>
              Bhikhampur, Senwaria, Chanpatia Bazar <br />
              Bettiah, West Champaran – 845453
            </p>
             <p className="neo-phone">📞 +91 9122392555
 </p>
         <p className="neo-phone"> 📞 +91 9122394789
 </p>
  <p className="neo-phone">📞 +91 9122393789
 </p>

            <p className="contact-line">
              ✉️ <span>grmprivateltd@gmail.com</span>
            </p>

             {/* SOCIAL ICONS */}
  <div className="contact-socials">
    <a href="https://www.facebook.com/people/GRM-Bharat-Infra-Private-Ltd/61581054903001/" aria-label="Facebook">
      <Facebook size={20} />
    </a>
    <a href="https://www.instagram.com/grmbharat?igsh=MW5meXg3dTZnNjBtcQ==" aria-label="Instagram">
      <Instagram size={20} />
    </a>
    <a href="#" aria-label="Twitter">
      <Twitter size={20} />
    </a>
    <a href="#" aria-label="LinkedIn">
      <Linkedin size={20} />
    </a>
  </div>

          </div>

          {/* CONTACT FORM */}
       <div className="contact-card neo">
  <h3>Our Location</h3>

  <div className="map-wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.5284897079464!2d84.45664579999999!3d26.950158499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399365fcb99a221d%3A0x9506d9f0fe45884e!2sGRM%20Bharat%20Infra%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1768706266450!5m2!1sen!2sin"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="GRM Bharat Infra Pvt Ltd Location"
    ></iframe>
  </div>
</div>


        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Contact;
