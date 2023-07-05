import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectedProduct } from '../Redux/Actions/productAction'


export const ProductDetail = () => {
  const {productId} = useParams();
  const product= useSelector((state)=> state.product)
  const dispatch = useDispatch();
 

  const addCart= (product)=>{
    
    dispatch(addToCart(product))
    console.log("running")
}

  const fetchProductsDetails = async()=>{

    const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err) =>{
      console.loglog(err)
    });

    dispatch(selectedProduct(response.data));

  }

  useEffect(()=>{
    fetchProductsDetails()
  },[productId])
  
  return (
    <>
    <div className="container mx-auto py-10">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 m-10 border" >
    <div>
      <img src={product.image} alt="Product Image" className="max-w-md m-5 sm: w-auto"/>
    </div>
    <div className='border m-5'>
      <h1 className="text-3xl font-bold m-4 ">{product.title}</h1>
      <p className="text-gray-600 m-6">{product.description}</p>
      <p className="text-2xl font-bold text-green-600 m-4">${product.price}</p>
      <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4">Add to Cart</button>
      <div className="flex items-center m-6">
        <span className="text-gray-600 m-2">Quantity:</span>
        <input type="number" className="border-gray-300 rounded-md w-16 py-2 px-4" value="1"/>
      </div>
     
      
      <div className="flex items-center">
        <span className="text-gray-600 m-2">Categories:</span>
        <ul className="inline-flex">
          <li><a href="#" className="text-green-600 hover:text-green-700 font-bold">{product.category}</a></li>
          <li className="mx-2">/</li>
          
        </ul>
      </div>
    </div>
  </div>
</div>

</>
  )
}
