import React, { useContext } from 'react';
import { CartContext } from '../utils/CartContext';
import { Link } from 'react-router-dom';
import './Main.css';

const Cart = () => {
  const { cartItems, setCartItems, setCartCount } = useContext(CartContext);

  const updateQuantity = (index, newQuantity) => {
    // Check stock availability
    let stock = cartItems[index].stocks;
    if (newQuantity > stock) {
      alert(`Only ${stock} item(s) in stock!`);
      return
    }
    if (newQuantity < 1) return;
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));

    // Update cart count
    const newTotalItems = updatedCart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(newTotalItems);
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));

    // Update cart count
    const newTotalItems = updatedCart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(newTotalItems);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1; // 10% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <div className="empty-cart">
          <i className="fas fa-shopping-cart fa-4x"></i>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link to="/products" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1><i className="fas fa-shopping-cart"></i> Your Shopping Cart</h1>
        <p>{cartItems.reduce((total, item) => total + item.quantity, 0)} item{cartItems.reduce((total, item) => total + item.quantity, 0) !== 1 ? 's' : ''} in your cart</p>
      </div>

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item-card">
              <div className="cart-item-image">
                <Link to={`/product/${item.id}`}>
                  <img src={`/images/${item.image}`} alt={item.name} />
                </Link>
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">₹{(item.price).toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(index, item.quantity - 1)}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, parseInt(e.target.value) || 1)}
                    className="quantity-input"
                  />
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="cart-item-total">
                <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(index)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Total Items:</span>
              <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
            </div>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>₹{calculateSubtotal().toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="summary-row">
              <span>Tax (10%):</span>
              <span>₹{calculateTax().toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="summary-row total-row">
              <span>Total:</span>
              <span>₹{calculateTotal().toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
            </div>
            <button className="checkout-btn">
              <i className="fas fa-credit-card"></i> Proceed to Checkout
            </button>
            <Link to="/products" className="continue-shopping-link">
              <i className="fas fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;