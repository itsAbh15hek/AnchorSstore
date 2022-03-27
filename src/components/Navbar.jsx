import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { logOut } from "../redux/userRedux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state?.user?.currentUser?.username);
  const [search, setSearch] = useState(null);
  const dispatch = useDispatch();
  const signOut = () => {
    if (user) {
      dispatch(logOut());
    }
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="searchContainer">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link to={search ? `/search/${search}` : ""}>
              <Search style={{ color: "gray", fontSize: 16 }} />
            </Link>
          </div>
          <Link to={"/products"} className="productLink">
            Browse Products
          </Link>
        </div>
        <Link to={"/"} className="center">
          <h1 className="logo">Anchor Store.</h1>
        </Link>
        <div className="right">
          <Link to={user ? "" : "/register"} className="menuItem">
            {user ? user : "Register"}
          </Link>
          <Link
            to={user ? "" : "/login"}
            onClick={signOut}
            className="menuItem"
          >
            {user ? "Log Out" : "SIGN IN"}
          </Link>
          <Link to={"/cart"} className="menuItem">
            <Badge badgeContent={cart.quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
