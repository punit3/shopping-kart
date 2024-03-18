// actions/productActions.js
import { FETCH_PRODUCTS, ADD_TO_CART } from '../constants/actionTypes';

export const fetchProducts = () => {
  // Simulate an API call to fetch products
  const products = [
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    // ... more products
  ];

  return {
    type: FETCH_PRODUCTS,
    payload: products,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
