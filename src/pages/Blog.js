import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Blog.scss";
import blogpost1 from "../assets/images/Blog1.jpg";
import blogpost2 from "../assets/images/Blog2.jpg";
import blogpost3 from "../assets/images/Blog1.jpg";

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Sourdough",
      excerpt: "Discover the secrets behind perfect sourdough bread...",
      image: blogpost1,
      content: "Full content about sourdough...",
    },
    {
      id: 2,
      title: "Decadent Chocolate Cakes",
      excerpt: "Explore the world of rich, moist chocolate cakes...",
      image: blogpost2,
      content: "Full content about chocolate cakes...",
    },
    {
      id: 3,
      title: "French Pastries 101",
      excerpt: "Learn the techniques behind classic French pastries...",
      image: blogpost3,
      content: "Full content about French pastries...",
    },
  ];

  const handleReadMore = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="blog-page">
      <h1>Our Bakery Blog</h1>
      <p className="page-description">Discover the latest from our kitchen</p>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <h2>{post.title}</h2>
              <p className="excerpt">{post.excerpt}</p>
              <button
                className="read-more"
                onClick={() => handleReadMore(post.id)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
