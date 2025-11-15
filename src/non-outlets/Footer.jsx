import React from "react";
import { Link } from "react-router-dom";
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import GetInTouch from "../components/GetInTouch";
import "../css/footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const years = currentYear - 2021;

  return (
    <>
      <GetInTouch />
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* About Section */}
            <div className="footer-section">
              <div className="footer-logo">
                <img src="https://res.cloudinary.com/dmqa8d6yq/image/upload/v1763182157/unnamed_imgupscaler.ai_V1_Fast__2K_a61c5i.png" alt="" />
              </div>
              <p className="footer-description">
                Professional investigative services with over {years}+ years of experience.
                Discretion guaranteed, results delivered.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/why-us">Why Choose Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3>Services</h3>
              <ul className="footer-links">
                <li><Link to="/services/background-checks">Background Checks</Link></li>
                <li><Link to="/services/corporate">Corporate Investigation</Link></li>
                <li><Link to="/services/surveillance">Surveillance</Link></li>
                <li><Link to="/services/fraud">Fraud Detection</Link></li>
                <li><Link to="/services/missing-persons">Missing Persons</Link></li>
              </ul>
            </div>
          </div>



          <div className="footer-bottom-content">
            <p>&copy; 2025 True Find Detective Agency. All rights reserved.</p>
            <p className="license-text">Licensed & Insured Private Investigation Agency</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
