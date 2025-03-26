import React, { useState } from "react";
import "../styles/Gallery.scss";
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

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const products = [
    {
      id: 1,
      name: "Croissant",
      type: "pastry",
      price: "$2.50",
      image: croissant,
    },
    {
      id: 2,
      name: "Chocolate Cake",
      type: "cake",
      price: "$15.99",
      image: chocolatecake,
    },
    { id: 3, name: "Baguette", type: "bread", price: "$3.99", image: baguette },
    {
      id: 4,
      name: "Blueberry Muffin",
      type: "pastry",
      price: "$2.99",
      image: muffin,
    },
    {
      id: 5,
      name: "Sourdough Bread",
      type: "bread",
      price: "$5.99",
      image: sourdough,
    },
    {
      id: 6,
      name: "Cheesecake",
      type: "cake",
      price: "$4.99",
      image: cheesecake,
    },
    { id: 7, name: "Eclair", type: "pastry", price: "$2.99", image: eclair },
    { id: 8, name: "Pretzel", type: "bread", price: "$2.25", image: pretzel },
  ];

  const filteredProducts =
    filter === "all" ? products : products.filter((p) => p.type === filter);

  return (
    <div className="gallery-page">
      <div className="gallery-header">
        <h1>Our Bakery Gallery</h1>
        <p>Explore our delicious creations</p>
      </div>

      <div className="filters">
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("bread")}
          className={filter === "bread" ? "active" : ""}
        >
          Breads
        </button>
        <button
          onClick={() => setFilter("pastry")}
          className={filter === "pastry" ? "active" : ""}
        >
          Pastries
        </button>
        <button
          onClick={() => setFilter("cake")}
          className={filter === "cake" ? "active" : ""}
        >
          Cakes
        </button>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="price">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
