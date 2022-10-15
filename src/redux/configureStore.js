import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { stockReducer } from './SotckActions/stocks';
import CategoryReducer from './Category/category';
import detailsReducer from './Details/coinsDetails';

const reducer = combineReducers({
  stock: stockReducer,
  category: CategoryReducer,
  detail: detailsReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
