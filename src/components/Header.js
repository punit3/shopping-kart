import { Col, NavDropdown, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "./Button";
import "../styles/header.css";
import Search from "./Search";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

// Styles for the Back Button
const BackButtonStyles = {
  padding: "1.5% 8%",
  border: " 2px solid green",
  backgroundColor: "white",
  color: "green",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "20px",
};

// Styles for the Approve Button
const ApproveButtonStyles = {
  padding: "1.5% 8%",
  border: " 2px solid white",
  backgroundColor: "green",
  color: "white",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "20px",
};

function Header() {
  // Click event handler for the Back Button
  const handleBack = () => {
    console.log("Button was clicked!");
  };

  // Click event handler for the Approve Button
  const handleApprove = () => {
    console.log("Button was clicked!");
  };

  return (
    <>
      {/* Header div with background color and shadow */}
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0px 0px 6px 0px rgba(0,0,0,0.52)",
        }}
      >
        <Container >
          <Row>
            <Col lg={2} md={2}>
              <img
                style={{ width: "100%" }}
                src="/images/svg/logo-no-background.svg"
              />
            </Col>
            <Col lg={7} md={7}>
              {" "}
              <Search />
            </Col>
            <Col lg={1} md={1}></Col>
            <Col lg={2} md={1}>
              {" "}
              <div className="header-icons-container">
                <FaRegHeart style={{ color: "#ff851b", fontSize: "28px" }} />
              
                <FiShoppingCart
                  style={{ color: "#ff851b", fontSize: "28px" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Header;
