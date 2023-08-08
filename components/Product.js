import React from "react";
import "../components/Product.css";
import Bigimage from "../images/image-product-desktop.jpg";
import SmallImage from "../images/image-product-mobile.jpg";
import cart from "../images/icon-cart.svg";

const Product = () => {
  return (
    <div
      class="card mb-3 border-0 "
      style={{
        maxWidth: "500px",
        margin: "auto",
        marginTop: "10rem",
      }}
    >
      <div class="row g-0">
        <div class="col-md-6">
          <picture className="picture col-md-6">
            <source
              srcSet={SmallImage}
              className="bigimage"
              // style={{ minWidth: "1000%", height: "100%" }}
              media="(max-width: 375px)"
            />
            <source srcSet={Bigimage} media="(max-width: 1440px)" />
            <img
              src={Bigimage}
              style={{
                width: "100%",
                height: "24.3rem",
                borderRadius: "0.4rem",
              }}
              alt="perfume"
            />
          </picture>

          {/* <img
            src={Bigimage}
            class="img-fluid rounded-start bigimage"
            alt="..."
          /> */}
        </div>

        <div class="col-md-6" style={{ paddingLeft: "0.5rem" }}>
          <div class="card-body">
            <p class="card-text">
              <small
                class="text-body-secondary"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "13px",
                  color: "hsl(228, 12%, 48%)",
                  letterSpacing: "0.3rem",
                }}
              >
                PERFUME
              </small>
            </p>
            <h1
              class="card-title"
              style={{ fontFamily: "Fraunces", fontSize: "1.8rem" }}
            >
              Gabrielle Essence Eau De Parfum
            </h1>
            <p
              class="card-text"
              style={{
                fontWeight: "200",
                fontSize: "13px",
                fontFamily: "Montserrat",
                color: "hsl(228, 12%, 48%)",
              }}
            >
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL
            </p>
            <h2
              style={{
                fontFamily: "Fraunces",
                display: "inline",
                color: "hsl(158, 36%, 37%)",
              }}
            >
              $149.99
            </h2>

            <span
              style={{
                fontFamily: "Montserrat",
                fontSize: "14px",
                color: "hsl(228, 12%, 48%)",
                paddingLeft: "1rem",
              }}
            >
              <del> $169.99</del>
            </span>

            <button>
              <img src={cart} alt="cart" />
              <span
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Add to Cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
