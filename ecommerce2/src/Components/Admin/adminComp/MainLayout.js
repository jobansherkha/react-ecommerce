import React from 'react'

import "./MainLayout.css"
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { Products } from '../Dpages/Products';

export const MainLayout = () => {
    

   
   
  return (
    <>
    <div class="admin-container">
        
        <div class="sidebar">
            <h1>Admin Dashboard</h1>
            <ul>
                <li><Link to="/admin/products">products</Link> </li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
        
        
        <div class="main-content">
            <header>
                <div class="user-profile">
                   <Routes>
                   <Route path="/admin/products" exact component={Products} />
                   </Routes>
                </div>
                <div class="logout-button">
                
                </div>
            </header>
            <main>
               
            </main>
        </div>
    </div>
    </>
  )
}
