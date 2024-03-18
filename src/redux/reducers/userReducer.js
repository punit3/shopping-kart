// reducers/userReducer.js
import { LOGIN_USER, ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from '../actionTypes';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_TO_CART:
      const updatedUserAdd = { ...state.user };
      updatedUserAdd.addToCart(action.payload);
      return {
        ...state,
        user: updatedUserAdd,
      };
    case REMOVE_FROM_CART:
      const updatedUserRemove = { ...state.user };
      updatedUserRemove.removeFromCart(action.payload);
      return {
        ...state,
        user: updatedUserRemove,
      };
    case CHECKOUT:
      const updatedUserCheckout = { ...state.user };
      updatedUserCheckout.checkout();
      return {
        ...state,
        user: updatedUserCheckout,
      };
    default:
      return state;
  }
};

export default userReducer;
