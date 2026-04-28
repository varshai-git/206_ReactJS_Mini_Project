import React, { useState } from 'react';
import './Main.css';
import { products } from '../utils/ProductsArray';
import { NavLink, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../utils/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const {
    quantity,
    handleQuantityChange,
    handleAddToCart,
    handleQuantityIncrement,
    handleQuantityDecrement,
  } = useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState(0);

  // Get Cart Items from localStorage (for demo purposes, not fully implemented)
  //const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  // Find product by ID (default to first product if not found)
  const product = products.find(p => p.id === parseInt(id)) || products[0];

  // Generate multiple images for gallery (using same image multiple times for demo)
  const productImages = [product.image, product.image, product.image, product.image];

  /*const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0 && value <= product.stocks) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
    console.log(product);
    // Add product to cart (for demo purposes, not fully implemented)
    const updatedCartItems = [...cartItems, { ...product, quantity }];
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleQuantityIncrement = () => {
    if (quantity < product.stocks) {
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };*/

  // Get related products (same category - first 4 products for demo)
  const relatedProducts = products.slice(0, 5).filter(p => p.id !== product.id);

  return (
    <main className="product-details-main">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span><NavLink to="/">Home</NavLink></span> / <span><NavLink to="/products">Products</NavLink></span> / <span>{product.name}</span>
      </div>

      {/* Product Details Container */}
      <div className="product-details-container">
        {/* Left Section - Image Gallery */}
        <div className="product-image-section">
          <div className="main-image-container">
            <img
              className="main-product-image"
              src={`/images/${productImages[selectedImage]}`}
              alt={product.name}
            />
            <div className="image-badge">
              {product.stocks > 5 ? 'In Stock' : `Only ${product.stocks} left`}
            </div>
          </div>

          {/* Image Gallery Thumbnails */}
          <div className="thumbnail-gallery">
            {productImages.map((img, idx) => (
              <div
                key={idx}
                className={`thumbnail ${selectedImage === idx ? 'active' : ''}`}
                onClick={() => setSelectedImage(idx)}
              >
                <img src={`/images/${img}`} alt={`Product ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Product Info */}
        <div className="product-info-section">
          {/* Product Title */}
          <h1 className="product-title">{product.name}</h1>

          {/* Rating */}
          <div className="product-rating">
            <div className="stars">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <span className="rating-count">(128 Reviews)</span>
          </div>

          {/* Price Section */}
          <div className="price-section">
            <div className="current-price">₹{product.price.toLocaleString()}</div>
            <div className="original-price">₹{Math.round(product.price * 1.2).toLocaleString()}</div>
            <div className="discount-badge">20% OFF</div>
          </div>

          {/* Description */}
          <div className="product-description-section">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          {/* Product Specifications */}
          <div className="product-specs">
            <h3>Key Features</h3>
            <ul>
              <li>✓ Premium Quality Build</li>
              <li>✓ Energy Efficient Design</li>
              <li>✓ Advanced Technology</li>
              <li>✓ Warranty Included</li>
              <li>✓ Easy Installation</li>
            </ul>
          </div>

          {/* Stock Status */}
          <div className="stock-status">
            <span className="stock-label">Stock Available:</span>
            <span className="stock-count">{product.stocks} Units</span>
            <div className="stock-bar">
              <div className="stock-fill" style={{ width: `${(product.stocks / 10) * 100}%` }}></div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="quantity-section">
            <label htmlFor="quantity">Quantity:</label>
            <div className="quantity-control">
              <button
                className="qty-btn"
                onClick={() => handleQuantityDecrement(product)}
                disabled={quantity === 1}
              >
                −
              </button>
              <input
                id="quantity"
                type="number"
                min="1"
                max={product.stocks}
                value={quantity}
                onChange={(e) => handleQuantityChange(e, product)}
                className="qty-input"
              />
              <button
                className="qty-btn"
                onClick={() => handleQuantityIncrement(product)}
                disabled={quantity === product.stocks}
              >
                +
              </button>
            </div>
            {/* Action Buttons */}
            <div className="action-buttons">
                <button
                className="add-to-cart-btn-large"
                onClick={() => handleAddToCart(product)}
                disabled={product.stocks === 0}
                >
                <i className="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
          </div>

          {/* Benefits */}
          <div className="product-benefits">
            <div className="benefit">
              <span className="benefit-icon">🚚</span>
              <div>
                <strong>Free Shipping</strong>
                <p>On orders above ₹500</p>
              </div>
            </div>
            <div className="benefit">
              <span className="benefit-icon">🛡️</span>
              <div>
                <strong>Secure Payment</strong>
                <p>100% safe transactions</p>
              </div>
            </div>
            <div className="benefit">
              <span className="benefit-icon">↩️</span>
              <div>
                <strong>Easy Returns</strong>
                <p>30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          {[1, 2, 3].map((review) => (
            <div key={review} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <strong>Customer {review}</strong>
                  <div className="review-stars">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="review-text">
                Excellent product quality and fast delivery. Highly recommended!
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="related-products-section">
        <h2>Related Products</h2>
        <div className="related-products-container">
          {relatedProducts.map((relProduct) => (
            <div key={relProduct.id} className="related-product-card">
              <img src={`/images/${relProduct.image}`} alt={relProduct.name} />
              <h4>{relProduct.name}</h4>
              <div className="product-price">₹{relProduct.price.toLocaleString()}</div>
              <button className="add-to-cart-btn">Quick View</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;