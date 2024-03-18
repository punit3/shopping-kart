import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

function PaginationComponent({
  products,
  handlePaginate,
  totalProducts,
  productsPerPage,
}) {
  const [activePage, setActivePage] = useState(1);
  // debugger
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    console.log("from here");
    pageNumbers.push(i);
  }
  const handlePagination = (value) => {
    console.log(value);
    handlePaginate(value);
    setActivePage(value);
  };

  return (
    <Pagination>
      {pageNumbers.map((_, index) => {
        return (
          <Pagination.Item
            onClick={() => handlePagination(index + 1)}
            key={index + 1}
            active={index + 1 === activePage}
          >
            {index + 1}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
}

export default PaginationComponent;
