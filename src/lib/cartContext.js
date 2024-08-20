// CartContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Initialize cart items from localStorage if available
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // console.log('Previous cart items:', prevItems);
      const existingItem = prevItems.find(
        (i) =>
          i.id === item.id &&
          i.size === item.size &&
          i.category === item.category
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id &&
          i.size === item.size &&
          i.category === item.category
            ? {
                ...i,
                quantity: i.quantity + item.quantity,
                totalPrice: i.totalPrice + item.totalPrice,
              }
            : i
        );
      } else {
        return [...prevItems, item];
      }
      // console.log('New cart items:', newItems);
    });
  };

  const removeFromCart = (itemId, size, category) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => 
        !(item.id === itemId && item.size === size && item.category === category)
      )
    );
  };

  const clearCartAfterOrderCreation = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCartAfterOrderCreation }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
