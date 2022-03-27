import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addShipping } from "../redux/shippingRedux";

const Shipping = ({ setIsShipping }) => {
  const [shipping, setShipping] = useState({
    email: "",
    name: "",
    address: "",
    zip: "",
    city: "",
    country: "",
  });
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addShipping({ ...shipping }));
  };

  const changed = (e) => {
    switch (e.target.name) {
      case "email":
        setShipping((p) => ({ ...p, email: e.target.value }));

        break;
      case "name":
        setShipping((p) => ({ ...p, name: e.target.value }));

        break;
      case "address":
        setShipping((p) => ({ ...p, address: e.target.value }));

        break;
      case "zip":
        setShipping((p) => ({ ...p, zip: e.target.value }));
        break;
      case "city":
        setShipping((p) => ({ ...p, city: e.target.value }));
        break;
      case "country":
        setShipping((p) => ({ ...p, country: e.target.value }));

        break;

      default:
        break;
    }
  };

  return (
    <div>
      <form className="shipping-form">
        <h1>Enter your Shipping Address</h1>
        <label htmlFor="email">email</label>

        <input type="text" name="email" onChange={changed} />

        <label htmlFor="name">name</label>

        <input type="text" name="name" onChange={changed} />

        <label htmlFor="address">address</label>

        <input type="text" name="address" onChange={changed} />

        <label htmlFor="zip">zip</label>

        <input type="text" name="zip" onChange={changed} />

        <label htmlFor="city">city</label>

        <input type="text" name="city" onChange={changed} />

        <label htmlFor="country">country</label>

        <input type="text" name="country" onChange={changed} />

        <div className="btn-container">
          <Link to="/cart">
            <button>Back to Cart</button>
          </Link>
          <button
            onClick={() => {
              setIsShipping(false);
              handleClick();
            }}
          >
            Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shipping;
