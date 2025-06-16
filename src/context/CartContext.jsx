import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addItem = (product, qty = 1) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        const copy = [...prev];
        copy[idx].qty += qty;
        return copy;
      }
      return [...prev, { ...product, qty }];
    });
  };

  const removeItem = (id) =>
    setCart((prev) => prev.filter((item) => item.id !== id));
  const updateQty = (id, qty) =>
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
