import { combineReducers } from 'redux';

import { routeReducer } from 'react-router-redux';
import productsList from './productsList';
import shoppingCart from './shoppingCart';

export default combineReducers({
  routing: routeReducer,
  productsList,
  shoppingCart
});
