import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product";
import { publicRequest } from "../requestMethods";

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          category ? `/products?category=${category}` : "/products"
        );
        setFilteredProducts(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [category]);
  useEffect(() => {
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
  }, [filters, products]);
  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProducts((prev) =>
        prev.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    } else if (sort === "Asc") {
      setFilteredProducts((prev) => prev.sort((a, b) => a.price - b.price));
    } else if (sort === "Desc") {
      setFilteredProducts((prev) => prev.sort((a, b) => b.price - a.price));
    } else {
      setFilteredProducts((prev) => prev);
    }
  }, [sort]);
  useEffect(() => {
    setFilteredProducts((p) => [...p]);
  }, []);

  return (
    <div className="products">
      {filteredProducts.map((item) => (
        <Product item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Products;
