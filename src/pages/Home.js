import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
import aboutImg from "../assets/images/back1.jpg";
import offer1 from "../assets/images/back2.jpg";
import offer2 from "../assets/images/back4.jpg";
import offer3 from "../assets/images/Cake.jpg";
import { GiBread, GiCakeSlice, GiCupcake, GiCoffeeCup } from "react-icons/gi";
import gallery1 from "../assets/images/back1.jpg";
import gallery2 from "../assets/images/back2.jpg";
import gallery3 from "../assets/images/back4.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Our Bakery</h1>
          <p>Fresh baked goods made with love</p>
          <Link to="/offers" className="cta-button">
            Explore Our Offerings
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={aboutImg} alt="Our Bakery" />
            </div>
            <div className="about-text">
              <p>
                We are passionate about creating delicious baked goods that
                bring joy to your day. Our recipes have been perfected over
                generations, using only the finest ingredients.
              </p>
              <div className="bakery-features">
                <div className="feature-item">
                  <GiBread className="feature-icon" />
                  <span>Freshly baked breads daily</span>
                </div>
                <div className="feature-item">
                  <GiCakeSlice className="feature-icon" />
                  <span>Handcrafted pastries</span>
                </div>
                <div className="feature-item">
                  <GiCupcake className="feature-icon" />
                  <span>Custom celebration cakes</span>
                </div>
                <div className="feature-item">
                  <GiCoffeeCup className="feature-icon" />
                  <span>Perfect coffee pairings</span>
                </div>
              </div>
              <Link to="/about" className="learn-more">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Offers Section */}
      <section id="offers" className="offers-section">
        <div className="container">
          <h2>Our Special Offers</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <img src={offer1} alt="Fresh Bread" />
              <h3>Fresh Bread</h3>
              <p>Daily baked artisan breads</p>
            </div>
            <div className="offer-card">
              <img src={offer2} alt="Pastries" />
              <h3>Pastries</h3>
              <p>Sweet and savory delights</p>
            </div>
            <div className="offer-card">
              <img src={offer3} alt="Cakes" />
              <h3>Cakes</h3>
              <p>Custom and celebration cakes</p>
            </div>
          </div>
          <Link to="/offers" className="view-all">
            View All Offerings
          </Link>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery" className="gallery-section">
        <div className="container">
          <h2>Our Gallery</h2>
          <div className="gallery-container">
            <div className="gallery-track">
              {/* First set of images */}
              <div className="gallery-item">
                <img src={gallery1} alt="Gallery Item 1" />
              </div>
              <div className="gallery-item">
                <img src={gallery2} alt="Gallery Item 2" />
              </div>
              <div className="gallery-item">
                <img src={gallery3} alt="Gallery Item 3" />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="gallery-item">
                <img src={gallery1} alt="Gallery Item 1" />
              </div>
              <div className="gallery-item">
                <img src={gallery2} alt="Gallery Item 2" />
              </div>
              <div className="gallery-item">
                <img src={gallery3} alt="Gallery Item 3" />
              </div>
            </div>
          </div>
          <Link to="/gallery" className="view-all">
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="blog-section">
        <div className="container">
          <h2>Latest from Our Blog</h2>
          <div className="blog-grid">
            <article className="blog-card">
              <img src="/images/blog-1.jpg" alt="Blog Post 1" />
              <div className="blog-content">
                <h3>Baking Tips & Tricks</h3>
                <p>Learn the secrets of perfect baking</p>
                <Link to="/blog" className="read-more">
                  Read More
                </Link>
              </div>
            </article>
            <article className="blog-card">
              <img src="/images/blog-2.jpg" alt="Blog Post 2" />
              <div className="blog-content">
                <h3>Seasonal Specials</h3>
                <p>Discover our seasonal favorites</p>
                <Link to="/blog" className="read-more">
                  Read More
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Visit Us</h3>
              <p>123 Bakery Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@ourbakery.com</p>
            </div>
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
