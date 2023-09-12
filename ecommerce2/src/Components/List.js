import React from "react";
import "./List.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/Reducers/productSlice";
import { useEffect } from "react";
import axios from "axios";
import { addToCart } from "../redux/Reducers/cartSlice";
import { Cart } from "./Cart";
import PaginatedData from "./Pagination/PaginatedData";
import { Categories } from "./Categories";
import { setCategory } from "../redux/Reducers/categorySlice";

export const List = () => {
  // Fetch products and manage state
  const { products } = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Function to fetch products from the server
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3002/products");
      console.log(response.data);
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log("Error fetching products", error);
    }
  };

 

  // Function to handle adding a product to the cart
  const click = (product) => {
    dispatch(addToCart(product));
    console.log(cart);
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
    
  }, []);

  // Define the number of items to display per page
  const itemsPerPage = 8;

  return (
    <>
      <div>
        {/* Title for featured products */}
        <h2>Featured products</h2>

        {/* Paginated product data */}
        <PaginatedData data={products} itemsPerPage={itemsPerPage} click={click} />

        {/* Example of commented-out code */}
        {/* 
        {products.map((product) => (
          <div>
            <div class="product-card">
              <a href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  className="product-image"
                  alt={product.title}
                />
                <div class="product-details">
                  <h1 class="product-title">{product.title.slice(0, 44)}</h1>
                  <p class="product-price">{product.price}</p>
                </div>
              </a>
              <button class="product-button" onClick={() => click(product)}>
                add to cart
              </button>
            </div>
          </div>
        ))}
        */}
      </div>
    </>
  );
};
