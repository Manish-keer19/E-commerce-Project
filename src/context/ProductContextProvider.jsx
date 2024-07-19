// ProductContext.js
import React, { createContext, useState, useEffect } from 'react';
import ProductContext from './ProductContext';

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products'))||[]);


  
  // Function to fetch products from an API or localStorage
  const fetchProducts = () => {
    // Check if products are already in localStorage
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    } else {
      // Fetch products from an API (exa)
      fetch('https://api.escuelajs.co/api/v1/products')
      // fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
          setProducts(data);
          localStorage.setItem('products', JSON.stringify(data)); // Store in localStorage
        })
        .catch(error => console.error('Error fetching products:', error));
    }
  };

  useEffect(() => {
    fetchProducts();
  
  }, []);

  return (
    <ProductContext.Provider value={{ products,setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
