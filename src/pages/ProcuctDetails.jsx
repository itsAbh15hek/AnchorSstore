import { Add, Remove } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Anouncements from "../components/Anouncements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { addProduct } from "../redux/cartRedux";
import { publicRequest } from "../requestMethods";
import "./ProductDetails.css";

const ProcuctDetails = () => {
  const Location = useLocation();
  const title = Location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      publicRequest
        .get(`/products/${title}`)
        .then((data) => setProduct({ ...data.data }))
        .catch((err) => console.log(err));
    };
    getProduct();
  }, [title]);

  useEffect(() => {
    !size && product.size && setSize(product.size[0]);
    !color && product.color && setColor(product.color[0]);
  }, [color, product, size]);

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity, color, size }));
  };

  return (
    <div className="ProductDetails">
      <Anouncements />
      <Navbar />
      <div className="product-wrapper">
        <div className="product-imgContaier">
          <img src={product.img} alt="" className="product-img" />
        </div>
        <div className="product-infoContainer">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-desc">{product.desc}</p>
          <span className="product-price">{`₹ ${product.price}`}</span>
          <div className="product-filterContainer">
            <div className="product-filter">
              <h3 className="product-filter-title">Color</h3>
              {product.color &&
                [...product.color].map((pCol) => (
                  <div
                    className="product-filter-color"
                    style={{ backgroundColor: `${pCol}` }}
                    onClick={() => setColor(pCol)}
                  ></div>
                ))}
            </div>
            <div className="product-filter">
              <h3 className="product-filter-title">Size</h3>
              <select
                name="size"
                id=""
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size &&
                  [...product.size].map((pSize) =>
                    pSize === size ? (
                      <option selected>{`${pSize}`}</option>
                    ) : (
                      <option>{`${pSize}`}</option>
                    )
                  )}
              </select>
            </div>
          </div>
          <div className="product-addContainer">
            <div className="product-amountContainer">
              <Remove
                onClick={() => setQuantity((p) => (p === 1 ? p : p - 1))}
              />
              <span className="product-amount">{quantity}</span>
              <Add onClick={() => setQuantity((p) => p + 1)} />
            </div>
            <button className="product-addToCart" onClick={handleClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProcuctDetails;
