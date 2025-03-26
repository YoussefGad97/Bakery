import React from "react";
import "../styles/Offers.scss";
import croissant from "../assets/images/croissant.jpg";
import baguette from "../assets/images/baguette.jpg";
import chocolatecake from "../assets/images/ChocolateCake.jpg";
import muffin from "../assets/images/Muffin.png";
import sourdough from "../assets/images/Sourdough.jpg";
import cupkae from "../assets/images/Cupcake.png";
import donut from "../assets/images/Donut.jpg";
import eclair from "../assets/images/Eclair.jpeg";
import pretzel from "../assets/images/Pretzel.jpg";
import cheesecake from "../assets/images/Cheesecake.jpeg";
import headerImage from "../assets/images/back4.jpg";

const Offers = () => {
  const packages = [
    {
      title: "Family Bundle",
      description: "Perfect for family gatherings",
      price: "$49.99",
      includes: ["1 Large Bread", "12 Pastries", "1 Cake"],
      bestSeller: true,
    },
    {
      title: "Party Pack",
      description: "Ideal for celebrations",
      price: "$79.99",
      includes: ["2 Large Breads", "24 Pastries", "2 Cakes"],
      bestSeller: false,
    },
    {
      title: "Daily Delight",
      description: "For everyday enjoyment",
      price: "$29.99",
      includes: ["1 Medium Bread", "6 Pastries"],
      bestSeller: false,
    },
  ];

  const individualItems = [
    { name: "Croissant", price: "$2.50", image: croissant },
    { name: "Baguette", price: "$3.99", image: baguette },
    { name: "Chocolate Cake", price: "$15.99", image: chocolatecake },
    { name: "Muffin", price: "$1.99", image: muffin },
    { name: "Sourdough Bread", price: "$5.99", image: sourdough },
    { name: "Cupcake", price: "$1.50", image: cupkae },
    { name: "Donut", price: "$1.99", image: donut },
    { name: "Eclair", price: "$2.99", image: eclair },
    { name: "Pretzel", price: "$2.25", image: pretzel },
    { name: "Cheesecake", price: "$4.99", image: cheesecake },
  ];

  return (
    <div className="offers-page">
      <div className="header-section" style={{ backgroundImage: `url(${headerImage})` }}>
        <h1>Our Special Offers</h1>
      </div>
      <p className="page-description">
        Discover our best deals and packages, crafted with love and quality
        ingredients
      </p>

      <section className="packages-section">
        <h2>Bundles & Packages</h2>
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div
              className={`package-card ${pkg.bestSeller ? "best-seller" : ""}`}
              key={index}
            >
              {pkg.bestSeller && (
                <div className="best-seller-badge">Best Seller</div>
              )}
              <h3>{pkg.title}</h3>
              <p className="description">{pkg.description}</p>
              <div className="price">{pkg.price}</div>
              <ul>
                {pkg.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="individual-items">
        <h2>Individual Items</h2>
        <div className="items-grid">
          {individualItems.map((item, index) => (
            <div className="item-card" key={index}>
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <div className="price">{item.price}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Offers;
