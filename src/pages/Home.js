import React, { useState } from "react";
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
import blog1 from "../assets/images/Blog1.jpg";
import blog2 from "../assets/images/Blog2.jpg";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const galleryItems = [
    { image: gallery1, title: "Fresh Breads" },
    { image: gallery2, title: "Sweet Pastries" },
    { image: gallery3, title: "Custom Cakes" },
    { image: gallery1, title: "Artisan Loaves" },
    { image: gallery2, title: "Fresh Croissants" },
    { image: gallery3, title: "Wedding Cakes" }
  ];

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
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className={`gallery-item slide-${activeIndex}`}
                  style={{ transform: `rotate(${index % 2 === 0 ? '-' : ''}${(index % 3) + 1}deg) translate(${index % 2 === 0 ? '' : '-'}${(index % 3) * 10}px, ${(index % 3) * 5}px)` }}
                >
                  <img src={item.image} alt={`Gallery Item ${index + 1}`} />
                  <div className="gallery-item-overlay">
                    <span>{item.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mobile-carousel-controls">
              <button onClick={handlePrev} className="carousel-prev" disabled={activeIndex === 0}>
                &lt;
              </button>
              <div className="carousel-indicators">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <button onClick={handleNext} className="carousel-next" disabled={activeIndex === galleryItems.length - 1}>
                &gt;
              </button>
            </div>
            <Link to="/gallery" className="view-all">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="blog-section">
        <div className="container">
          <h2>Latest from Our Blog</h2>
          <div className="blog-grid">
            <article className="blog-card">
              <img src={blog2} alt="Blog Post 1" />
              <div className="blog-content">
                <h3>Baking Tips & Tricks</h3>
                <p>Learn the secrets of perfect baking</p>
                <Link to="/blog" className="read-more">
                  Read More
                </Link>
              </div>
            </article>
            <article className="blog-card">
              <img src={blog1} alt="Blog Post 2" />
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
