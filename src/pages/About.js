import React from 'react';
import '../styles/About.scss';
import AboutImg from "../assets/images/back3.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1>Our Bakery Story</h1>
        <p>Since 1995, we've been crafting artisanal baked goods with love and tradition</p>
      </div>
      
      <div className="history-section">
        <div className="history-content">
          <h2>From Humble Beginnings</h2>
          <p>
            What started as a small family kitchen has grown into a beloved community bakery. 
            Our founder, Maria, began baking with her grandmother's recipes, and today we continue 
            that tradition with every loaf and pastry.
          </p>
        </div>
        <div className="history-image">
          <img src={AboutImg} alt="Our bakery in the early days" />
        </div>
      </div>

      <div className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Quality Ingredients</h3>
            <p>We source only the finest, locally-sourced ingredients</p>
          </div>
          <div className="value-card">
            <h3>Traditional Techniques</h3>
            <p>Handcrafted using time-honored baking methods</p>
          </div>
          <div className="value-card">
            <h3>Community Focus</h3>
            <p>Supporting local farmers and giving back to our community</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
