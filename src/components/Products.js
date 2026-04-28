import React from 'react';
import './Main.css';
import { products } from '../utils/ProductsArray';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <main>
      <h3>All Products</h3>
      <div className="products-container">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="product-card">
              <img className="product-image" src={`/images/${product.image}`} alt={product.name} />
              <h4>{product.name}</h4>
              <div className="product-price">₹{product.price.toLocaleString()}</div>
              <button className="add-to-cart-btn">View Details</button>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Products;