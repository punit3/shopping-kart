// actions/userActions.js
import { LOGIN_USER, ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from '../actionTypes';

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const checkout = () => ({
  type: CHECKOUT,
});
