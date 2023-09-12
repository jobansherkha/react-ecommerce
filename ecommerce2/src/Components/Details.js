import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectedProduct, removeSelectedProduct } from "../redux/Reducers/productSlice";
import "./Details.css"
import { addToCart } from "../redux/Reducers/cartSlice";

export const Details = () => {
  const {productId} = useParams();
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });

      dispatch(selectedProduct(response.data))
  };

  useEffect(()=>{
 
    if (productId && productId !=="") fetchProductDetails();
    return()=>{ dispatch(removeSelectedProduct())

    }

  },[productId])

  return <div><div class="containerP">
  <div class="product-imageP">
    <img src={products.image} alt="Product Image"/>
  </div>
  <div class="product-infoP">
    <h1 class="product-titleP">{products.title}</h1>
    <p class="product-descriptionP">{products.description}.</p>
    <div class="product-priceP">${products.price}</div>
    <button class="add-to-cartP" onClick={()=>{dispatch(addToCart(products))}}>Add to Cart</button>
  </div>
</div></div>;
};
