import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Anouncements from "../components/Anouncements";
import "./ProductList.css";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");
  console.log("filters", filters);
  const handleFilters = (e) => {
    if (e.target.value !== "All colors" && e.target.value !== "All Sizes")
      setFilters((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (e.target.value === "All colors") {
      const obj = { ...filters };
      delete obj["color"];
      console.log("obj", obj);
      setFilters(obj);
    }
    if (e.target.value === "All Sizes") {
      const obj = { ...filters };
      delete obj["size"];
      console.log("obj", obj);
      setFilters(obj);
    }
  };
  const handleSort = (e) => {
    setSort({ [e.target.name]: e.target.value });
  };
  return (
    <div className="productList">
      <Anouncements />
      <Navbar />
      <h1 className="productList-title">{category?.toUpperCase()}</h1>
      <div className="productList-filterContainer">
        <div className="productList-filter">
          <span className="filterText">Filter Products: </span>
          <select onChange={handleFilters} name="color" id="">
            <option defaultChecked>All colors</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>
          <select onChange={handleFilters} name="size" id="">
            <option defaultChecked>All Sizes</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="productList-filter">
          <span className="filterText">Sort Products: </span>
          <select onChange={handleSort} name="Sort" id="">
            <option defaultChecked>- - -</option>
            <option>Newest</option>
            <option>Asc</option>
            <option>Desc</option>
          </select>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort.Sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
