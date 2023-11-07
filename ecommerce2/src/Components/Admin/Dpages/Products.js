import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Product.css'
import { deleteProduct, fetchProducts, removeSelectedProduct } from '../../../redux/Reducers/productSlice'
import { useEffect } from "react";
import { setProducts } from "../../../redux/Reducers/productSlice";
import axios from "axios";

export const Products = () => {
   const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);
    console.log(products);
    // const fetchProducts = async () => {
    //   try {
    //     const response = await axios.get("http://localhost:3002/product/getproduct");
    //     console.log(response.data);
    //     dispatch(setProducts(response.data));
    //   } catch (error) {
    //     console.log("Error fetching products", error);
    //   }
    // };
     // Fetch products when the component mounts
  useEffect(() => {
    dispatch(fetchProducts());
    
  }, [dispatch]);
   
    const handleRemoveProduct = (productId) => {
      // Dispatch the removeProduct action with the product's ID
     dispatch( deleteProduct(productId));
     
    };
    
  return (
    <><table className="product-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr key={product._id}>
          <td>{product.title}</td>
          <td>{product.name}</td>
          <td>${product.price.toFixed(2)}</td>
          <td>
            <button className="edit-button">Edit</button>
            <button onClick={() =>handleRemoveProduct(product._id)}
              className="delete-button"
              
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table></>

  )
}
