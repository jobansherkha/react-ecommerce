import { ActionTypes } from "../Contents/action-types"
const initialState = {
    products :[],
    
}
export const addToCartReducer=(state=initialState, {type, payload})=>{
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return{ ...state, cart: [...state.products,payload]}
        
    
        default:
            return state;
    }
    

}