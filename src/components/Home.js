import React, { useState, useEffect } from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import { products } from '../utils/ProductsArray';
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Banner slides
  const banners = [
    {
      id: 1,
      title: 'Welcome to EazyCart',
      subtitle: 'Shop the Best Products at Great Prices',
      bgColor: '#4CAF50',
      image: '/images/banner.jpg'
    },
    {
      id: 2,
      title: 'Special Offers Available',
      subtitle: 'Enjoy Exclusive Deals on Premium Products',
      bgColor: '#0bba11',
      image: '/images/banner5.jpg'
    },
    {
      id: 3,
      title: 'Fast & Reliable Delivery',
      subtitle: 'Get Your Orders Delivered in 2-3 Business Days',
      bgColor: '#06920b',
      image: '/images/banner6.jpg'
    }
  ];
  // Auto-play slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  // Previous slide handler
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Next slide handler
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <main>
      {/* Banner Slideshow */}
      <div className="banner-slideshow">
        <div className="slides-container">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundColor: banner.bgColor }}
            >
              {/* <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={banner.image} alt={banner.title} className="slide-image" /> */}
              <div className="slide-content">
                <h1>{banner.title}</h1>
                <p>{banner.subtitle}</p>
                <button className="explore-btn">Explore Now</button>
              </div>
            </div>
          ))}
        </div>

        {/* Slideshow Controls */}
        <button className="slide-btn prev-btn" onClick={handlePrevSlide}>
          &#10094;
        </button>
        <button className="slide-btn next-btn" onClick={handleNextSlide}>
          &#10095;
        </button>

        {/* Dots Indicator */}
        <div className="dots-container">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="featured-section">
        <h2>Featured Products</h2>
        <p className="section-subtitle">Discover our most popular items</p>
        
        <div className="featured-products">
          {products.slice(0, 6).map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div  className="product-card">
                <img src={`/images/${product.image}`} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-price">₹{product.price}</div>
                <button className="view-details-btn">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;