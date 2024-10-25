export const initializeStock = (productId) => {
    const stock = localStorage.getItem(`stock_${productId}`);
    if (stock === null) {
      localStorage.setItem(`stock_${productId}`, "10"); 
    }
  };
  
  export const getStock = (productId) => {
    return parseInt(localStorage.getItem(`stock_${productId}`), 10);
  };
  
  export const decrementStock = (productId) => {
    const currentStock = getStock(productId);
    if (currentStock > 0) {
      localStorage.setItem(`stock_${productId}`, (currentStock - 1).toString());
    }
  };

  