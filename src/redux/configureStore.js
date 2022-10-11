import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { stockReducer } from './SotckActions.js/stocks';

const rootStore = { reducer: stockReducer };

const store = configureStore(rootStore, applyMiddleware(thunk));

export default store;
