import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { stockReducer } from './SotckActions/stocks';
import CategoryReducer from './Category/category';
import detailsReducer from './Details/coinsDetails';
import historyReducer from './Details/coinHistory';

/*  The Redux store is a single source of truth for the state of your entire application.
 It holds the application state and allows you to dispatch actions to update that state */

const reducer = combineReducers({
  stock: stockReducer,
  category: CategoryReducer,
  detail: detailsReducer,
  history: historyReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
