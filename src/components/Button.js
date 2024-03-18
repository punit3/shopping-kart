import React from "react";

const Button = ({ onClick, children, variant, style, isAddToCart }) => {
  const buttonStyles = {
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    ...style,
  };

  // Apply variant-specific styles
  if (variant === "primary") {
    buttonStyles.backgroundColor = "#007BFF";
    buttonStyles.color = "#fff";
  } else if (variant === "success") {
    buttonStyles.backgroundColor = "#28A745";
    buttonStyles.color = "#fff";
  }

  const buttonText = isAddToCart ? "Add to Cart" : children;

  return (
    <button style={buttonStyles} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
