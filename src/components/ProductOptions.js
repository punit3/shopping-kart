import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { SlSupport } from "react-icons/sl";
import { SlEnvolopeLetter } from "react-icons/sl";


// import useApiData from "./utils/useApiData"; // Note the corrected imp

// const API_URL = "https://fakestoreapi.com/products";

const ProductOptions = () => {
 

  return (
    <>
      <div class="dor-box-features">
        <div class="container">
          {/* <div class="row"> */}
            <div class="dor-box-features-main">
              <div class="dor-box-features-wrapper slick-initialized slick-slider">
                <div class="slick-list draggable">
                  <div
                    class="slick-track"
                    style={{display:"flex",opacity: "1", width: "1292px", transform: "translate3d(0px, 0px, 0px)"}}
                  >
                    <div
                      class="icon-box slick-slide slick-current slick-active"
                      style={{width:"323px"}}
                      data-slick-index="0"
                      aria-hidden="false"
                      tabindex="0"
                    >
                      <div class="icon-box-wrapper">
                        <span class="icon-box-icon">
                          {" "}
                          <TbTruckDelivery style={{ color: "#ff851b", fontSize: "30px" }}/>
                        </span>
                        <div class="icon-box-content">
                          <h3 class="icon-box-title">Payment &amp; Delivery</h3>
                          <p class="font-weight-light">
                            Free shipping for orders over $50
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="icon-box slick-slide slick-active"
                      style={{width:"323px"}}
                      data-slick-index="1"
                      aria-hidden="false"
                      tabindex="0"
                    >
                      <div class="icon-box-wrapper">
                        <span class="icon-box-icon">
                          {" "}
                          <RiRefund2Fill style={{ color: "#ff851b", fontSize: "26px" }}/>
                        </span>
                        <div class="icon-box-content">
                          <h3 class="icon-box-title">Return &amp; Refund</h3>
                          <p class="font-weight-light">
                            Free 100% money back guarantee
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="icon-box slick-slide slick-active"
                      style={{width:"323px"}}
                      data-slick-index="2"
                      aria-hidden="false"
                      tabindex="0"
                    >
                      <div class="icon-box-wrapper">
                        <span class="icon-box-icon">
                          {" "}
                          <SlSupport style={{ color: "#ff851b", fontSize: "26px" }}/>
                        </span>
                        <div class="icon-box-content">
                          <h3 class="icon-box-title">Quality Support</h3>
                          <p class="font-weight-light">
                            Alway online feedback 24/7
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      class="icon-box slick-slide slick-active"
                      style={{width:"323px"}}
                      data-slick-index="3"
                      aria-hidden="false"
                      tabindex="0"
                    >
                      <div class="icon-box-wrapper">
                        <span class="icon-box-icon">
                          {" "}
                          <SlEnvolopeLetter style={{ color: "#ff851b", fontSize: "26px" }}/>
                        </span>
                        <div class="icon-box-content">
                          <h3 class="icon-box-title">Join Our Newsletter</h3>
                          <p class="font-weight-light">
                            10% off by subscribing to our newsletter
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ProductOptions;
