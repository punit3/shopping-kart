import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../../styles/product.css";
import PaginationComponent from "../Pagination";

const ProductList = ({ products }) => {
  // Assuming each product has a unique ID for the key
  const [keyedProducts, setKeyedProducts] = useState([]);
  // const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    // Add unique key to each product if it doesn't have one
    const updatedProducts = products.map((product) => ({
      ...product,
      id: product.id || generateUniqueId(),
    }));

    setKeyedProducts(updatedProducts);
  }, [products]);

  const generateUniqueId = () => {
    // Simple function to generate a unique ID
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = keyedProducts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  return (
    <>
      <div className="product-list">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <PaginationComponent
       productsPerPage={productsPerPage}
       totalProducts={keyedProducts.length}
        products={keyedProducts}
        handlePaginate={paginate}
      />
    </>
  );
};

export default ProductList;
