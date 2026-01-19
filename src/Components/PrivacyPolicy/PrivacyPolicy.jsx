import Navbar from "../../Pages/Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <section className="policy-wrap">
        <div className="policy-container">

          <h1>Privacy Policy</h1>
          <p className="policy-updated">Last Updated: January 2026</p>

          <p>
            GRM Bharat Infra Private Limited ("we", "our", "us") is committed to
            protecting your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website or interact with our solar EPC services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to
            us, including but not limited to:
          </p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Location / site details</li>
            <li>Project requirements and inquiries</li>
          </ul>

          <p>
            We may also automatically collect certain technical information such
            as IP address, browser type, device information, and usage data to
            improve our website performance and user experience.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To respond to your inquiries and service requests</li>
            <li>To provide solar EPC consultation and project proposals</li>
            <li>To improve our website and services</li>
            <li>To communicate project updates and offers</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>

          <h2>3. Sharing of Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information only in the following cases:
          </p>
          <ul>
            <li>With trusted service providers assisting in project execution</li>
            <li>To comply with legal requirements or government authorities</li>
            <li>To protect our legal rights and business interests</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security
            measures to protect your personal data against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2>5. Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            enhance your browsing experience and analyze site traffic. You may
            choose to disable cookies through your browser settings.
          </p>

          <h2>6. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those external
            sites.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Request access to your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent for data processing</li>
            <li>Opt-out of promotional communications</li>
          </ul>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be reflected on this page with an updated "Last Updated" date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <ul>
            <li><strong>Email:</strong> grmbharatinfra@gmail.com</li>
            <li><strong>Phone:</strong> +91 91223 92555</li>
          </ul>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
