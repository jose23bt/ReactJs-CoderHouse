import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  increaseItemQuantity: () => {},
  decreaseItemQuantity: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newTotalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
    setTotalQuantity(newTotalQuantity);
  }, [cart]);

  const addItem = (item, quantity) => {
    const existingProductIndex = cart.findIndex(product => product.id === item.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart(prev => [...prev, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const increaseItemQuantity = (itemId) => {
    const updatedCart = cart.map(product => {
      if (product.id === itemId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const decreaseItemQuantity = (itemId) => {
    const updatedCart = cart.map(product => {
      if (product.id === itemId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartContext = {
    cart,
    addItem,
    removeItem,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    totalQuantity,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};
