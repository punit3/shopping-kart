// store.js
import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
  user: userReducer,
//   product: productReducer,
});

const store = createStore(rootReducer);

export default store;
