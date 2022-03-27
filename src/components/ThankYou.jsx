import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userRequest } from "../requestMethods";

const ThankYou = () => {
  const shipping = useSelector((state) => state.shipping.details);
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);
  console.log(shipping);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: shipping,
        });
        console.log(res.data);
        setOrderId(res.data._id);
      } catch {}
    };
    createOrder();
  }, [cart, shipping, currentUser]);

  return (
    <div>
      <h1>Order placed, thank you!</h1>
      <p>Order has been created successfully. Your order number is {orderId}</p>
      <p>
        <strong>Shipping to {shipping.name}</strong>, {shipping.address},{" "}
        {shipping.city}, {shipping.country}, {shipping.zip}
      </p>
      <div className="btn-container">
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
