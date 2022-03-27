import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-vanilla-tilt";

const CategoryItem = ({ item }) => {
  return (
    <Tilt
      style={{ backgroundColor: "transparent" }}
      options={{ glare: true, "max-glare": 1 }}
      className="categories-item"
    >
      <Link to={`/products/${item.category}`}>
        <img src={item.img} alt="" className="categories-image" />
        <div className="categories-info">
          <h1 className="categories-title">{item.title}</h1>
          <button className="categories-button">Shop Now</button>
        </div>
      </Link>
    </Tilt>
  );
};

export default CategoryItem;
