// productActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk action to fetch products
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  try {
    // Perform your API request here (e.g., using fetch or axios)
    const response = await fetch('http://localhost:3002/product/getproduct');
    const data = await response.json();

    // Return the fetched data
    return data;
  } catch (error) {
    throw error;
  }
});

// Export other action creators as needed
