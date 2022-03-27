import { Send } from "@mui/icons-material";
import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="news">
      <h1 className="news-title">Newsletter</h1>
      <p className="news-desc">
        Get timely updates for your favourite products.
      </p>
      <div className="news-input">
        <input type="text" placeholder="Your email..." />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
