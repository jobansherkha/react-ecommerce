
import { Route, Routes, useLocation } from 'react-router-dom';
import { List } from './Components/List';
import { Details } from './Components/Details';

import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Cart } from './Components/Cart';
import { Header } from './Components/header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import { Home } from './Components/home/Home';
import { Categories } from './Components/Categories/Categories';
import { AddProduct } from './Components/addProduct/AddProduct';
import { MainLayout } from './Components/Admin/adminComp/MainLayout';
import { Login } from './Components/Admin/pages/Login';
import { Dashboard } from './Components/Admin/pages/Dashboard';
import { useState } from 'react';
import { Signup } from './Components/Admin/pages/Signup';
import Alert from './Components/Alert';
import { Products } from './Components/Admin/Dpages/Products';






function App() {
  const location = useLocation();

  const isHomeRoute = location.pathname === '/';
  const isAdminRoute = location.pathname.startsWith('/admin');

  const [alert, setalert] = useState(null);
  const showAlert = (type, message) => {
    setalert(
      // used an object inside this
      { type: type, message: message }
    );
    setTimeout(() => {
      setalert(null);
  }, 1500);
    console.log(alert)
  };
  return (
   <>
    <Provider store = {store}>
      <Header/>
      
     {isAdminRoute ?  <Dashboard/> : null}
      <Alert alert = {alert}/>
      
   <ToastContainer/>
   
   <Routes>
   <Route path={'/home'} element = {<Home/>}/>
    <Route path={'/'} element = {<List/>}/>
    <Route path={'/product/:productId'} element = {<Details/>}/>
    <Route path={'/cart'} element = {<Cart/>}/>
    <Route path={'/admin/addProduct'} element = {<AddProduct/>}/>
    {/* <Route path={'/admin/products'} element = {<Products/>}/> */}
    <Route path={'/user/login'} element = {<Login alert = {alert} showAlert = {showAlert}/>}/>
    <Route path={'/user/adduser'} element = {<Signup alert = {alert} showAlert = {showAlert}/>}/>
    <Route path = {'/admin/dashboard/products'} element = {<Products/>}/>
    
    
    
    </Routes>
    </Provider>
   </>
  );
}

export default App;
