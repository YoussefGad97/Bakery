import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

// Placeholder components for other routes
const About = () => <div className="page">About Page</div>;
const Offers = () => <div className="page">Our Offers Page</div>;
const Gallery = () => <div className="page">Gallery Page</div>;
const Blog = () => <div className="page">Blog Page</div>;
const Contact = () => <div className="page">Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
