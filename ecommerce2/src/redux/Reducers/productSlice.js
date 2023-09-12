import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const productSlice = createSlice({
    name : 'product',
    initialState : {
        products : [],

    },

    reducers : {
        setProducts : (state, action)=> {
            return {
                state, ...state, products : action.payload
            }

        },

        

        selectedProduct : (state, action )=>{
            return{
                state,...state,products: action.payload
            }
        },
        removeSelectedProduct : ()=>{
            return{
                
            }
        }

    }

})

export const addProduct = async (product)=>{
    const response = await fetch('http://localhost:3002/addproducts', {
        method: "POST",
  
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          
        },
  
        body: JSON.stringify(product),
      });
    }

export const productReducer = productSlice.reducer;
export const {setProducts, selectedProduct,removeSelectedProduct} = productSlice.actions;
