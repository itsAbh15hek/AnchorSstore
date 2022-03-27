import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
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
      <div className="products-circle" />
      <img src={item.img} alt="" className="products-image" />
      <div className="products-info">
        <h1>{item.title}</h1>
        <div className="info-icons">
          <div className="products-icon">
            <ShoppingCartOutlined />
          </div>
          <Link to={`/product/${item.title}`} className="products-icon">
            <SearchOutlined />
          </Link>
          <div className="products-icon">
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Product;
