import React from 'react'
import { useSelector } from 'react-redux';
import "./Categories.css";


export const Categories = () => {
    const { products } = useSelector((state) => state.product);
    const uniqueCategories = Array.from(new Set(products.map((item) => item.category)));
    
    
    

  return (
    <><div>
    <div class="categoriesBox" >
        <ul className='categoryCard'>
     {uniqueCategories.map((product) => (
              
                        <li className='categoryname'>{product}</li>
                    
              
            ))}</ul>
                    
                    
              
                    
                    </div>
                </div>
    </>
  )
}
