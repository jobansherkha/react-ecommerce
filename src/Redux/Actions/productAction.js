import { ActionTypes } from "../Contents/action-types";
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProduct = (products) => {
  return {
    type: ActionTypes.REMOVE_SELECED_PRODUCT,
    payload: products,
  };
};
export const addToCart = (products) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: products,
  };
};
