// import { createAsyncThunk } from '@reduxjs/toolkit';

// const initialstate = [];
// API url

// const url = 'https://coinranking1.p.rapidapi.com/coins';

// Create stock Action type
// const GET_STOCK = 'metrics/stocks/GET_STOCK';
// export const getStock = createAsyncThunk(GET_STOCK, async () => {
//   try {
//     const res = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'b9f261dee6mshf5721e09b0a9f8ep1a16b9jsnc187afe74e7b',
//         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//       },
//     });

//     let stockData = await res.json();
//     stockData = stockData.data.coins;
//     console.log(stockData);
//     return { stock: stockData };
//   } catch (error) {
//     return 'failed to fetch';
//   }
// });

// create reducer
/* Reducers are pure functions that take the current state and an action as arguments and
return a new state. Each reducer typically handles a specific slice of the application state. */

// export const stockReducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case 'metrics/stocks/GET_STOCK/fulfilled':
//       return action.payload.stock;
//     default:
//       return state;
//   }
// };

/*
In Redux, the term "payload" generally refers to the data that is included in an action object.
The payload is the information that is sent along with the action to describe the update
 or change that should be made to the state.
 The payload can be of any data type, such as a string, number, object,
 or array, depending on what information is needed to perform the action.  */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API url
const url = 'https://coinranking1.p.rapidapi.com/coins';

// Create stock Action type
export const getStock = createAsyncThunk('metrics/stocks/GET_STOCK', async () => {
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
    throw new Error('Failed to fetch');
  }
});

// Create a slice to handle the state and actions, reducers
const stockSlice = createSlice({
  name: 'stocks',
  initialState: {
    data: [],
    status: 'idle', // 'idle', 'pending', 'fulfilled', 'rejected'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStock.pending, (state) => ({ ...state, status: 'pending' }))
      .addCase(getStock.fulfilled, (state, action) => ({ ...state, status: 'fulfilled', data: action.payload.stock }))
      .addCase(getStock.rejected, (state, action) => ({ ...state, status: 'rejected', error: action.error.message }));
  },

});

// Export the reducer
export const stockReducer = stockSlice.reducer;
