import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice(
    {
        name : "category",
        initialState : {
            categories : [],
        },
        reducers : {

            setCategory : (state, action)=>{
    
                return{
                    state, ...state, categories: action.payload
                }
    
            }
    
    
        }

    },
    
    
)
export const categoryReducer = categorySlice.reducer;
export const {setCategory} = categorySlice.actions;
