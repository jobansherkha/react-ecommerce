import { combineReducers } from "redux";
import {  productReducer , selectedProductReducer} from "./productReducer";
import { addToCartReducer } from "./cartReducer";

const reducers = combineReducers({
    allProducts : productReducer,
    product: selectedProductReducer,
    cartProducts: addToCartReducer
})
export default reducers;
