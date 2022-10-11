import { createAsyncThunk } from '@reduxjs/toolkit';

const initialstate = [];
// API url

const url = 'http://api.marketstack.com/v1/tickers?access_key=8d4d80c1e4deb655e3fec8fc00f5bd0b';

// Create stock Action type
const GET_STOCK = 'metrics/stocks/GET_STOCK';

export const getStock = createAsyncThunk(GET_STOCK, async () => {
  try {
    const res = await fetch(url);
    const stockData = await res.json();
    console.log(stockData);

    return { stock: stockData };
  } catch (error) {
    return 'failed to fetch';
  }
});

// create reducer

export const stockReducer = (state = initialstate, action) => {
  switch (action.type) {
    case 'metrics/stocks/GET_STOCK/fulfilled':
      return action.payload.stock;
    default:
      return state;
  }
};
