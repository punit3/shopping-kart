// reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
// Import other reducers as needed

const rootReducer = combineReducers({
  user: userReducer,
//   product
  // Add other reducers here
});

export default rootReducer;
