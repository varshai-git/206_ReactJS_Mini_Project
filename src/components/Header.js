import React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../utils/CartContext';
const Header = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <header>
      <nav>
        <h1>Eazy Cart</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button className="cart-button"><Link to="/cart"><i className="fas fa-shopping-cart" style={{ color: 'white' }}></i> <span className="cart-count">{cartCount}</span></Link></button>
      </nav>
    </header>
  );
};

export default Header