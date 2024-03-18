import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import useApiData from "./utils/useApiData";
import ProductList from "./components/common/ProductList";
import ProductOptions from "./components/ProductOptions";
import Home from "./components/Pages/Home";
// import useApiData from "./utils/useApiData"; // Note the corrected imp

const API_URL = "https://fakestoreapi.com/products";

const App = () => {
  const { data: products, loading, error } = useApiData(API_URL);

  // Uncomment and customize if needed
  // useEffect(() => {
  //   // Additional logic or side effects can be added here if needed
  //   // This useEffect runs when the component mounts
  //
  //   return () => {
  //     // Cleanup or additional logic when the component unmounts
  //   };
  // }, []); // Empty dependency array means it runs once when the component mounts

  // Uncomment for debugging
  console.log("pro", products);

  return (
    <>
      <Container fluid style={{ backgroundColor: "#f4f4f4", padding: 0 }}>
        <Navigation />
        <Header />
        {/* <ProductOptions />
        <ProductList products={products} /> */}
        <Home products={products}/>
      </Container>
    </>
  );
};

export default App;
