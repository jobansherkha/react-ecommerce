import React from "react";
import axios from "axios";
import { setProducts } from "../Redux/Actions/productAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductComponent } from "./productComponent";


export const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });

      
      
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  },[]);
  
  return (
    <div className="container mx-auto px-4"><div> <ProductComponent/></div></div>
  );
};
