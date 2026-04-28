import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Get Cart Items from localStorage
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(totalItems || 0);

  const handleQuantityChange = (e, product) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= product.stocks) {
      setQuantity(value);
    }
  };

  const handleAddToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    let updatedCartItems;

    if (existingItemIndex !== -1) {
      // Product already exists, increase quantity
      updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += quantity;
      alert(`Increased quantity of ${product.name} by ${quantity} item(s)!`);
    } else {
      // Product doesn't exist, add as new item
      updatedCartItems = [...cartItems, { ...product, quantity }];
      alert(`Added ${quantity} item(s) of ${product.name} to cart!`);
    }

    // Update state and localStorage
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    // Update cart count
    const newTotalItems = updatedCartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(newTotalItems);
  };

  const handleQuantityIncrement = (product) => {
    if (quantity < product.stocks) {
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityDecrement = (product) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const value = {
    cartItems,
    setCartItems,
    quantity,
    setQuantity,
    cartCount,
    setCartCount,
    handleQuantityChange,
    handleAddToCart,
    handleQuantityIncrement,
    handleQuantityDecrement,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};


