import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./Slider.css";
import { sliderItems } from "../data";
import { Link } from "react-router-dom";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (dir) => {
    if (dir === "left") {
      setSlideIndex(slideIndex === 0 ? 2 : slideIndex - 1);
    }
    if (dir === "right") {
      setSlideIndex(slideIndex === 2 ? 0 : slideIndex + 1);
    }
  };
  useEffect(() => {
    document.querySelector(
      ".slider-wrapper"
    ).style.transform = `translateX(-${slideIndex}00vw)`;
  }, [slideIndex]);

  return (
    <div className="slider">
      <div
        className="slider-arrow slider-arrowLeft"
        onClick={() => handleClick("left")}
      >
        <ArrowBackIosNewOutlined />
      </div>
      <div className="slider-wrapper">
        {sliderItems.map((slide) => (
          <div
            key={slide.id}
            className="slider-slide"
            style={{ backgroundColor: slide.bg }}
          >
            <div className="slider-imgContainer">
              <img src={slide.img} alt="slide" className="slider-image" />
            </div>
            <div className="slider-infoContainer">
              <h1 className="slider-title">{slide.title}</h1>
              <p className="slider-description">{slide.desc}</p>
              <Link to={`/products/${slide.link}`} className="slider-button">
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div
        className="slider-arrow slider-arrowRight"
        onClick={() => handleClick("right")}
      >
        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
};

export default Slider;
