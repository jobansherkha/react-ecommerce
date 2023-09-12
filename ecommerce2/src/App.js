
import { Route, Routes } from 'react-router-dom';
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





function App() {
  return (
   <>
    <Provider store = {store}>
      <Header/>
      {/* <Categories/> */}
   <ToastContainer/>
   
   <Routes>
   <Route path={'/home'} element = {<Home/>}/>
    <Route path={'/'} element = {<List/>}/>
    <Route path={'/product/:productId'} element = {<Details/>}/>
    <Route path={'/cart'} element = {<Cart/>}/>
    <Route path={'/addProduct'} element = {<AddProduct/>}/>
    
    
    </Routes>
    </Provider>
   </>
  );
}

export default App;
