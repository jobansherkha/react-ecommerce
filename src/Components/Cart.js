import React from 'react'
import { useSelector } from 'react-redux'

export const Cart = () => {
    const cartProducts = useSelector((state) =>  state.cartProducts.products)
    

    
  return (

    <div>
        
        {cartProducts.map((product) =>(
       <h1>{product.title}</h1>

    ))}</div>
  )
}
