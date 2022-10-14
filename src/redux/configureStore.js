import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { stockReducer } from './SotckActions.js/stocks';
import CategoryReducer from './Category/category';
// const rootStore = { stock: stockReducer };
const reducer = combineReducers({
  stock: stockReducer,
  category: CategoryReducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
