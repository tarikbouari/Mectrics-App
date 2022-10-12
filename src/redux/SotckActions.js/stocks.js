import { createAsyncThunk } from '@reduxjs/toolkit';

const initialstate = [];
// API url

const url = 'https://coinranking1.p.rapidapi.com/coins';

// Create stock Action type
const GET_STOCK = 'metrics/stocks/GET_STOCK';

export const getStock = createAsyncThunk(GET_STOCK, async () => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b9f261dee6mshf5721e09b0a9f8ep1a16b9jsnc187afe74e7b',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      },
    });

    let stockData = await res.json();
    stockData = stockData.data.coins;
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
      console.log(state);
      console.log(action.payload);
      console.log(action.payload.stock);
      return action.payload.stock;
    default:
      return state;
  }
};
