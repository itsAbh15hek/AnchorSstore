import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
import { publicRequest } from "../requestMethods";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const dispatch = useDispatch();
  const handleClick = async (e) => {
    e.preventDefault();
    if (password === password2) {
      await publicRequest.post("/auth/register", {
        username,
        email,
        password,
      });
    }

    login(dispatch, { username, password });
  };
  return (
    <div className="register">
      <h4 className="register-welcome">Welcome to Anchor Store.</h4>
      <div className="register-wrapper">
        <h1 className="register-title">Create an Account</h1>
        <form className="register-form">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <p className="register-agreement">
            By creating this account, I consent to the processing of my personal
            data in accordance with the <strong>Privacy Policy</strong>.
          </p>
          <button
            onClick={(e) => handleClick(e)}
            type="submit"
            className="register-btn"
          >
            Register
          </button>
        </form>
      </div>
      <h1 className="register-logo">Anchor Store.</h1>
    </div>
  );
};

export default Register;
