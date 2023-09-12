import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Categories } from '../Categories';
import { addProduct } from '../../redux/Reducers/productSlice';


export const AddProduct = () => {
  <Categories/>
  const [product, setProduct] = useState({
    title: '',
    image: '',
    description: '',
    price:'',
    category:'',
  });

  const { categories } = useSelector((state) => state.category);
  console.log(categories)

  const handleSubmit = ()=>{
   const newproducts = addProduct(product)
    console.log(newproducts)

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
   <button  type="submit">Add Product</button>
 </form>
    
    </>)
  
}
