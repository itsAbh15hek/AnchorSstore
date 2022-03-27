import React from "react";
import Anouncements from "../components/Anouncements";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

import "./Home.css";

const Home = () => {
  return (
    <>
      <Anouncements />
      <Navbar />
      <Slider />
      <Categories />
      <Products category="Featured" filters="" sort="" />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
