import { Add, Remove } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Anouncements from "../components/Anouncements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart">
      <Anouncements />
      <Navbar />
      <div className="cart-wrapper">
        <h1 className="cart-title">Your Bag</h1>
        <div className="cart-top">
          <button className="cart-top-button">Continue Shopping</button>
          <div className="cart-top-texts">
            <span className="cart-top-text">Shopping Bag (2)</span>
            <span className="cart-top-text">Your Wishlist (0)</span>
          </div>
          <button className="cart-top-button">Checkout Now</button>
        </div>
        <div className="cart-bottom">
          <div className="cart-info">
            {cart.products.map((product) => (
              <div className="cart-product">
                <div className="cart-detail">
                  <img src={product.img} alt="" className="cart-img" />
                  <div className="cart-product-detail">
                    <div className="cart-name">
                      <strong>Product:</strong> {product.title}
                    </div>
                    <div className="cart-id">
                      <strong>Id:</strong> {product._id}
                    </div>
                    <div
                      className="cart-color"
                      style={{ backgroundColor: `${product.color}` }}
                    />
                    <div className="cart-id">
                      <strong>Size:</strong> {product.size}
                    </div>
                  </div>
                </div>
                <div className="cart-price">
                  <div className="cart-amtContainer">
                    <Remove />
                    <div className="cart-amount">{product.quantity}</div>
                    <Add />
                  </div>
                  <div className="cart-product-price">{`₹ ${
                    product.price * product.quantity
                  }`}</div>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h1 className="cart-summary-title">Order Summary</h1>
            <div className="cart-summary-item">
              <div className="cart-summary-text">Subtotal</div>
              <div className="cart-summary-text">{`₹ ${cart.total}`}</div>
            </div>
            <div className="cart-summary-item">
              <div className="cart-summary-text">Estimated Shipping</div>
              <div className="cart-summary-text">₹ 10</div>
            </div>
            <div className="cart-summary-item">
              <div className="cart-summary-text">Shipping Discount</div>
              <div className="cart-summary-text">₹ -10</div>
            </div>
            <div
              className="cart-summary-item"
              style={{ fontSize: "24px", fontWeight: "500" }}
            >
              <div className="cart-summary-text">Total</div>
              <div className="cart-summary-text">{`₹ ${cart.total}`}</div>
            </div>
            <Link
              to={cart.total >= 1 ? "/checkout" : ""}
              className="cart-summary-btn"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
