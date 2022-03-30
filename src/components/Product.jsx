import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-vanilla-tilt";

const Product = ({ item }) => {
  return (
    <Tilt
      style={{ backgroundColor: "transparent" }}
      options={{ glare: true, "max-glare": 1 }}
      className="products-product"
    >
      <Link to={`/product/${item.title}`} className="product-container">
        <img src={item.img} alt="" className="products-image" />
        <div className="product-thumb-title">
          <h1>{item.title}</h1>
        </div>
      </Link>
    </Tilt>
  );
};

export default Product;
