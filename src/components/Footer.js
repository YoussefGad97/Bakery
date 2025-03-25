import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are passionate about creating delicious baked goods that bring joy
            to your day. Our recipes have been perfected over generations, using
            only the finest ingredients.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/offers">Our Offers</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <FaPhone className="icon" />
              <span>(555) 123-4567</span>
            </li>
            <li>
              <FaEnvelope className="icon" />
              <span>info@ourbakery.com</span>
            </li>
            <li>
              <FaMapMarkerAlt className="icon" />
              <span>123 Bakery Street, City, State 12345</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Opening Hours</h3>
          <ul className="opening-hours">
            <li>
              <span>Monday - Friday:</span>
              <span>7:00 AM - 7:00 PM</span>
            </li>
            <li>
              <span>Saturday:</span>
              <span>8:00 AM - 6:00 PM</span>
            </li>
            <li>
              <span>Sunday:</span>
              <span>8:00 AM - 4:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Our Bakery. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 