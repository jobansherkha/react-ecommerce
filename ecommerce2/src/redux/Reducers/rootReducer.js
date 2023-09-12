import { combineReducers } from "redux";
import { productReducer } from "./productSlice";
import { cartReducer } from "./cartSlice";
import { categoryReducer } from "./categorySlice";


const rootReducer = combineReducers({
    product : productReducer,
    cart : cartReducer,
    category : categoryReducer
})

export default rootReducer


