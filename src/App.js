import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Offers from './pages/Offers';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './styles/App.scss';

// Placeholder components for other routes
const AboutPage = () => <div className="page">About Page</div>;
const OffersPage = () => <div className="page">Our Offers Page</div>;
const GalleryPage = () => <div className="page">Gallery Page</div>;
const BlogPage = () => <div className="page">Blog Page</div>;
const ContactPage = () => <div className="page">Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
