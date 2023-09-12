// Import required modules and styles
import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import logo from "../header/logo.jpg";

// Define the Header component
export const Header = () => {
  // Get the current location using React Router's useLocation hook
  let location = useLocation();

  // Access the 'cart' data from the Redux store using useSelector hook
  const cart = useSelector((state) => state.cart.cart);

  // Function to calculate the total number of items in the cart
  const totalCartItems = () => {
    let total = cart.length;
    return total;
  };

  // Render the Header component
  return (
    <>
      <div className="header">
        {/* Logo image with a link to the home page (empty href is used for simplicity) */}
        <a href="">
          <img className="logo" src={logo} alt="Logo" />
        </a>
        <div>
          {/* Navigation bar with links to different pages */}
          <ul className="navbar">
            <li>
              {/* Link to the Home page, marked as 'active' if the current location is the Home page */}
              <a className={location.pathname === "/" ? "active" : ""} href="/">
                Home
              </a>
            </li>
            <li>
              {/* Link to the About Us page, marked as 'active' if the current location is the About Us page */}
              <a
                className={location.pathname === "/aboutus" ? "active" : ""}
                href="/aboutus"
              >
                About us
              </a>
            </li>
            <li>
              {/* Link to the Contact Us page, marked as 'active' if the current location is the Contact Us page */}
              <a
                className={location.pathname === "/contactus" ? "active" : ""}
                href="/contactus"
              >
                Contact Us
              </a>
            </li>
            <li>
              {/* Link to the Cart page, marked as 'active' if the current location is the Cart page */}
              <a
                className={location.pathname === "/cart" ? "active" : ""}
                href="/cart"
              >
                {/* Cart icon with a counter showing the number of items in the cart */}
                <div className="cart-icon">
                  <span class="material-symbols-outlined">shopping_cart</span>
                  <span className="cart-counter">{totalCartItems() || 0}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
