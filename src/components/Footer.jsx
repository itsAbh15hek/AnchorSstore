import {
  Facebook,
  Instagram,
  MarginOutlined,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1 className="footer-logo">Anchor Store.</h1>
        <p className="footer-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorem
          explicabo voluptates architecto impedit temporibus aliquid cum unde
          ducimus maxime.
        </p>
        <div className="footer-social">
          <div className="footer-icon" style={{ backgroundColor: "#3B5999" }}>
            <Facebook />
          </div>
          <div className="footer-icon" style={{ backgroundColor: "#E440F5" }}>
            <Instagram />
          </div>
          <div className="footer-icon" style={{ backgroundColor: "#55ACEE" }}>
            <Twitter />
          </div>
          <div className="footer-icon" style={{ backgroundColor: "#E60023" }}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <h3 className="footer-title">Links</h3>
        <ul className="footer-list">
          <li className="footer-listItem">Home</li>
          <li className="footer-listItem">Cart</li>
          <li className="footer-listItem">Men's Fashion</li>
          <li className="footer-listItem">Women's Fashion</li>
          <li className="footer-listItem">Accessories</li>
          <li className="footer-listItem">My Account</li>
          <li className="footer-listItem">Track Order</li>
          <li className="footer-listItem">Wishlist</li>
          <li className="footer-listItem">T&C</li>
          <li className="footer-listItem">Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3 className="footer-title">Contact</h3>
        <div className="footer-contact">
          <Room style={{ marginRight: "10px" }} />
          116, Bhandari Street, Near Gol Deol, Girgaon, Mumbai 400004
        </div>
        <div className="footer-contact">
          <Phone style={{ marginRight: "10px" }} />
          +91 02223829457
        </div>
        <div className="footer-contact">
          <MarginOutlined style={{ marginRight: "10px" }} />{" "}
          contact@anchor.store
        </div>
        <img
          src="https://woodenwatch.gr/images/Payments.png"
          alt=""
          className="footer-payment"
        />
      </div>
    </div>
  );
};

export default Footer;
