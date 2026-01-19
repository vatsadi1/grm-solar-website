import Navbar from "../../Pages/Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <>
      <Navbar />

      <section className="terms-wrap">
        <div className="terms-container">

          <h1>Terms & Conditions</h1>
          <p className="terms-updated">Last Updated: January 2026</p>

          <p>
            These Terms & Conditions ("Terms") govern your use of the website
            and services provided by <strong>GRM Bharat Infra Private Limited</strong>
            ("we", "our", "us"). By accessing or using our website and solar EPC
            services, you agree to be bound by these Terms.
          </p>

          <h2>1. Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a
            manner that does not infringe the rights of, restrict, or inhibit
            anyone else’s use of the website. Unauthorized use of this website
            may give rise to a claim for damages and/or be a criminal offense
            under applicable laws.
          </p>

          <h2>2. Services</h2>
          <p>
            GRM Bharat Infra Private Limited provides solar EPC services,
            including but not limited to design, procurement, installation,
            commissioning, and maintenance of solar energy systems. All service
            details, timelines, and pricing are subject to a formal agreement
            or proposal shared with the client.
          </p>

          <h2>3. Pricing and Payments</h2>
          <p>
            All prices quoted are subject to change without prior notice unless
            stated in a signed agreement. Payment terms, milestones, and refund
            policies will be defined in the project-specific contract or invoice.
            Delayed payments may result in suspension of services.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos,
            images, and software, is the property of GRM Bharat Infra Private
            Limited and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, or use any content without our
            prior written consent.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            While we strive to ensure accurate information on our website,
            we do not guarantee the completeness or accuracy of any content.
            GRM Bharat Infra Private Limited shall not be liable for any direct,
            indirect, incidental, or consequential damages arising from the
            use of our website or services.
          </p>

          <h2>6. Warranties and Guarantees</h2>
          <p>
            Product warranties are provided by respective manufacturers and
            are subject to their individual terms and conditions. Performance
            estimates are indicative and may vary based on site conditions,
            weather, and operational factors.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content, policies, or practices of such external
            sites and encourage you to review their terms independently.
          </p>

          <h2>8. Termination of Services</h2>
          <p>
            We reserve the right to suspend or terminate services in case of
            breach of these Terms, non-payment, or misuse of our website or
            services.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by and interpreted in accordance
            with the laws of India. Any disputes arising out of or relating to
            these Terms shall be subject to the exclusive jurisdiction of the
            courts in India.
          </p>

          <h2>10. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Any changes will be
            posted on this page with an updated "Last Updated" date.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions regarding these Terms & Conditions,
            please contact us at:
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

export default TermsConditions;
