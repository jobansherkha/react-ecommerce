import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, thunkAPI) => {
    try {
      // Perform the DELETE API request
      await axios.delete(`http://localhost:3002/product/delete/${productId}`);

      // Return the product ID to be used in the success reducer
      return productId;
    } catch (error) {
      // Thunk will automatically dispatch the failure action if an error occurs
      throw error;
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:3002/product/getproduct"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
const api = axios.create({
  baseURL: "http://localhost:3002", // Replace with your API URL
});
export const addItemAsync = createAsyncThunk(
  "items/addItemAsync",
  async (product) => {
    const response = await axios.post(
      "http://localhost:3002/product/addproduct",
      product
    );
    return response.data;
  }
);
export const productSlice = createSlice({
  name: "product",

  initialState: {
    products: [],
    deleting: false,
    error: null,
    status: "idle",
  },

  reducers: {
    // setProducts: (state, action) => {
    //   return {
    //     state,
    //     ...state,
    //     products: action.payload,
    //   };
    // },

    selectedProduct: (state, action) => {
      return {
        state,
        ...state,
        products: action.payload,
      };
    },
    removeSelectedProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(deleteProduct.pending, (state) => {
        state.deleting = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const updatedProducts = state.products.filter(
          (product) => product._id !== action.payload
        );
        console.log(updatedProducts);
        state.products = updatedProducts;
        state.deleting = false;
        state.error = null;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.deleting = false;
        state.error = action.error.message;
      });
  },
});

export const addProduct = async (product) => {
  const response = await fetch("http://localhost:3002/product/addproduct", {
    method: "POST",

    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(product),
  });
};

export const deleteProducts = async (id) => {
  try {
    // Send a DELETE request to the API with the note ID in the URL
    const response = await axios.delete(
      `http://localhost:3002/product/delete/${id}`
    );

    // Check if the request was successful (status code 200)
    if (response.status === 200) {
      console.log(`product with ID ${id} has been deleted successfully.`);
      console.log(response);

      // Optionally, you can update your local state or UI to reflect the deletion.
    } else {
      console.error("Failed to delete the note.");
    }
  } catch (error) {
    console.error("An error occurred while deleting the product:", error);
  }
};

// productActions.js

// Define an async thunk action to fetch products

// Export other action creators as needed

export const productReducer = productSlice.reducer;
export const { setProducts, selectedProduct, removeSelectedProduct } =
  productSlice.actions;
