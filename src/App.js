import "./App.css";
import "./styles.css";
import { Header } from "./Components/Header";
import { ProductComponent} from "./Components/ProductComponent";
import { ProductDetail } from "./Components/ProductDetail";
import { ProductList } from "./Components/ProductList";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./Components/Cart";

function App() {
  return (
  
    <BrowserRouter>
    
      <div className="App">
        <Header/>
        <Routes>
          <Route path={"/"} element={<ProductList/>} />
          <Route path={"/product/:productId"} element={<ProductDetail/>} />
          <Route path={"/productList"} element={<ProductList/>} />
          <Route path={"/cart"} element={<Cart/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
