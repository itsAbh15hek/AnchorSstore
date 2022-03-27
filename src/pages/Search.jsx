import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Anouncements from "../components/Anouncements";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import { publicRequest } from "../requestMethods";

const Search = () => {
  const location = useLocation();
  const search = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products");
        res.data.forEach((product) => {
          product.categories.forEach((cat) => cat.toLowerCase());
        });
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    setfilteredProducts(
      products.filter(
        (product) =>
          product.title.toLowerCase().includes(search) ||
          product.categories.includes(search)
      )
    );
  }, [products, search]);

  return (
    <div className="productList">
      <Anouncements />
      <Navbar />
      <div className="products">
        {filteredProducts.map((item) => (
          <Product item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
