import React from "react";
import ProductOptions from "../ProductOptions";
import ProductList from "../common/ProductList";
import SidebarNavigation from "../SideBarNavigation";
import ProductCarousal from "../ProductCarousal";

const Home = ({products}) => {
  return (
    <>
      <div  style={{display:"flex",padding:"2% 4%"}}>
        <span style={{background:"white"}}>
                <SidebarNavigation/>
        </span>
        <span >
            <ProductCarousal/>
        </span>
      </div>
      <div>
        <ProductOptions />
        <ProductList products={products} />
      </div>
    </>
  );
};

export default Home;
