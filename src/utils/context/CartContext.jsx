import { createContext, useState, useContext, useEffect } from 'react';
import { initializeStock, getStock, decrementStock  } from '../stockUtils';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(()=> {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const restoreStock = () => {
    cartItems.forEach(item => {
      const currentStock = getStock(item.id);
      localStorage.setItem(`stock_${item.id}`, (currentStock + item.quantity).toString());
    });
  };

  const addToCart = (product) => {
    initializeStock(product.id)
    decrementStock(product.id);
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {

      const existingItem = prevItems.find(item => item.id === productId);
      
      if (existingItem) {
        const currentStock = getStock(productId);
        localStorage.setItem(`stock_${productId}`, (currentStock + existingItem.quantity).toString());

      if (existingItem.quantity === 1) {
        return prevItems.filter(item => item.id !== productId);
      } else {
        return prevItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    }
    return prevItems; // Si produit n'existe pas
    });
  };


  const clearCart = () => {
    setCartItems([]);
    restoreStock();
  };

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
