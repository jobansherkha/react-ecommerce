import React from 'react'
import { setCategory } from '../redux/Reducers/categorySlice';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from 'react';



export const Categories = () => {
 
  const dispatch = useDispatch();

  

  const fetchCategories = async () => {
    const response = await axios
      .get("http://localhost:3002/getcategories")
      .catch((err) => {
        console.log("err", err);
      });

      console.log(response.data)

    dispatch(setCategory(response.data));
    
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
   <>
   </>
  )
}
