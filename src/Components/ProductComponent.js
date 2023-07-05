import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { addToCart } from '../Redux/Actions/productAction';

export const ProductComponent = () => {
  const products = useSelector((state) =>  state.allProducts.products)
  const dispatch = useDispatch()

  const click= (product)=>{
    
    console.log(product)
    dispatch(addToCart(product))
    
}
 
 
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white overflow-hidden shadow rounded-lg"
      > <Link to ={`/product/${product.id}`} >
      
   
        <img className="object-contain h-48 w-96 ..." src={product.image} alt={product.title} /></Link>
        <div className="p-4">
          <h2 className="text-gray-900 font-semibold text-lg">
            {product.title}
          </h2>
          <p className="text-gray-500 text-sm"></p>
          <div className="mt-2">
            <span className="text-gray-500">Price:</span>
            <span className="text-gray-900 font-medium">${product.price}</span>
          </div> 
          <div className="mt-4">
            <button onClick={()=>click(product)} className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);
};

 
