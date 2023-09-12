import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <div>
         <header class="header">
    <h1 class="logo">E-commerce Website</h1>
  </header>

  <nav class="nav">
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>

  <section class="hero">
    <div>
      <h1>Welcome to Our Store</h1>
      <p>Discover a wide range of products for all your needs.</p>
      <button>Shop Now</button>
    </div>
  </section>

  <section class="featured-products">
    <div class="featured-product">
      <img src="" alt="Product 1"/>
      <h3>Product 1</h3>
      <p>Description of Product 1</p>
      <button>Add to Cart</button>
    </div>
    <div class="featured-product">
      <img src="" alt="Product 2"/>
      <h3>Product 2</h3>
      <p>Description of Product 2</p>
      <button>Add to Cart</button>
    </div>
    <div class="featured-product">
      <img src="" alt="Product 3"/>
      <h3>Product 3</h3>
      <p>Description of Product 3</p>
      <button>Add to Cart</button>
    </div>
    
  </section>

  <footer class="footer">
    <p>&copy; 2023 E-commerce Website. All rights reserved.</p>
  </footer>
    </div>
  )
}
