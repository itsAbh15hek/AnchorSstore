import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tilt from "react-vanilla-tilt";
import { updateUser } from "../redux/apiCalls";
import lodash from "lodash";

const Product = ({ item }) => {
  const user = useSelector((state) => state.user.currentUser);
  const updatedUser = lodash.cloneDeep(user);
  const [isFav, setIsFav] = useState(
    updatedUser?.favourites?.includes(item._id)
  );
  const dispatch = useDispatch();
  const addFavourites = () => {
    try {
      if (!isFav) updatedUser.favourites.push(item._id);
      if (isFav)
        updatedUser.favourites.forEach((id) => {
          if (id === item._id) {
            console.log(id);
            updatedUser.favourites.splice(
              updatedUser.favourites.indexOf(id),
              1
            );
          }
        });
      updateUser(dispatch, updatedUser);
      setIsFav(updatedUser.favourites.includes(item._id));
    } catch (err) {
      console.log(err.message);
    }
  };
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
          <div
            className="products-icon"
            onClick={addFavourites}
            style={{
              color: `${isFav ? "white" : "black"}`,
              backgroundColor: `${isFav ? "teal" : "white"}`,
            }}
          >
            <FavoriteBorderOutlined />
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Product;
