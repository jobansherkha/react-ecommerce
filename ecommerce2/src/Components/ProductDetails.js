import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


export const productDetails = () => {
    const productId = useParams();
    const products = useSelector((state)=> state.products);
    const dispath = useDispatch();

    const fetchProductDetails = ()=>{

        
    }


    

 

  return (
    <div>productDetails</div>
  )
}
