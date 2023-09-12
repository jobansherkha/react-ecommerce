import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import "../List.css"

const PaginatedData=(props)=>{
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
      };
      const offset = currentPage * props.itemsPerPage;
  const currentPageData = props.data.slice(offset, offset + props.itemsPerPage);
  

  return (
    <div>
        <div className="containerProduct">
        <div class="product-list">
      {/* Render your data here */}
      {currentPageData.map((product) => (
        <div class="product-card" >
        <a href={`/product/${product.id}`}>
          <img src={product.image} className="product-image" alt={product.title} />

          <div class="product-details">
            <h1 class="product-title">{product.title.slice(0,44)}</h1>
            <p class="product-price">${product.price}</p></div></a>
            <button class="product-button" onClick={()=>props.click(product)}>
              {" "}
              add to cart{" "}
            </button>
            </div>
        
      ))}</div></div>

      {/* Pagination component */}
      <ReactPaginate
        pageCount={Math.ceil(props.data.length / props.itemsPerPage)}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default PaginatedData;