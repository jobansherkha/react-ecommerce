import { ActionTypes } from "../Contents/action-types"

const initialState = {
    products :[]
}
const cartState = {
    products :[]
}

export const productReducer = (state = initialState, {type, payload})=>{
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {state, ...state, products: payload};
        default:
            return state;

    }

}

export const selectedProductReducer=(state={}, {type, payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return{...state,...payload}
        
    
        default:
            return state;
    }


}
export const addToCartReducer=(state=cartState, {type, payload})=>{
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return{ ...state, products: [...state.products,payload]}
        
    
        default:
            return state;
    }
    

}