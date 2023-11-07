import React from 'react'
import { useState } from 'react';

import { setCategory } from '../../redux/Reducers/categorySlice';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from 'react';
import { addItemAsync, addProduct } from '../../redux/Reducers/productSlice';


export const AddProduct = () => {
  const dispatch = useDispatch();
  
  const fetchCategories = async () => {
    const response = await axios
      .get("http://localhost:3002/category/getcategories")
      .catch((err) => {
        console.log("err", err);
      });

      

    dispatch(setCategory(response.data));
    
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  const [product, setProduct] = useState({
    title: '',
    image: '',
    description: '',
    price:'',
    category:'',
  });

  const { categories } = useSelector((state) => state.category);
  

  const handleSubmit = (e)=>{
    e.preventDefault()
   const newproducts = dispatch(addItemAsync(product))
    
    setProduct({
      title: '',
      image: '',
      description: '',
      price:'',
      category:'',
    })

  }

const handleChange =(e)=>{
  setProduct({
    ...product,
    [e.target.name]: e.target.value,
  });

  

}


   

  
 
  return(
    <>
    <form onSubmit={handleSubmit}>
   <input
     type="text"
     name="title"
     placeholder="Product Name"
     value={product.title}
     onChange={handleChange}
   />
   <input
     type="text"
     name="image"
     placeholder="Product image"
     value={product.image}
     onChange={handleChange}
   />
   <input
     type="text"
     name="description"
     placeholder="Product description"
     value={product.description}
     onChange={handleChange}
   />
   <input
     type="number"
     name="price"
     placeholder="Product Price"
     value={product.price}
     onChange={handleChange}
   />
   <select
   type = "text"
     name="category"
     value={product.category}
     onChange={handleChange}
   >
     <option value="">Select a Category</option>
     {categories.map((category) => (
       <option key={category._id} value={category._id}>
         {category.categoryName}
       </option>
     ))}
   </select>
   <button  onClick={handleSubmit}>Add Product</button>
 </form>
    
    </>)
  
}
