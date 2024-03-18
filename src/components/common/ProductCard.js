import React, { useReducer, useState } from "react";
import Button from "../Button";
import { BiRupee } from "react-icons/bi";
import userReducer from "../../redux/reducers/userReducer";

const ProductDetails = ({ product }) => {
  const { image, title, price, description } = product;
  const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(userReducer, { count: 0 });

  const truncateString = (str, limit) => {
    const words = str.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + "...";
    }
    return str;
  };

  const truncatedTitle = truncateString(title, 6); // Limiting to 5 words
  const truncatedDescription = truncateString(description, 8); // Limiting to 20 words

  const handleAddToCart = () => {
    // console.log("--new", cart);
    // const updatedCart = [...cart];
    // // cart

    // //   const index = updatedCart.findIndex((item) => item.title === title);
    // // debugger
    // //   if (index !== -1) {
    // //     // If the product is already in the cart, update the quantity
    // //     updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity + 1 };
    // //   } else {
    // //     // If the product is not in the cart, add it
    // //     updatedCart.push({...updatedCart, ...product, quantity: 1 });
    // // }
    // updatedCart.push(product);
    // setCart(updatedCart);
  };

  console.log("---cart", cart);
  return (
    <>
      <div class="card">
        <div class="card-body-top">
          <img src={image} class="card-img-top" alt="..." />
          <div class="text-section">
            <h5 class="card-title">{truncatedTitle}</h5>
            <div style={{ fontSize: "20px", color: "#161616" }}>
              <BiRupee />
              {price}
            </div>
          </div>
        </div>
        <div class="card-body-bottom">
          <p class="card-description">{truncatedDescription}</p>

          <Button
            isAddToCart={true}
            className="btn addToCard"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ProductDetails;
