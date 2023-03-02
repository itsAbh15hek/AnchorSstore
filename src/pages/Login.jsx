import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="login">
      <h4 className="login-welcome">Welcome to Anchor Store.</h4>
      <div className="login-wrapper">
        <h1 className="login-title">Sign In</h1>
        <form className="login-form">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
          />
          <button className="login-btn" onClick={(e) => handleClick(e)}>
            {isFetching ? (
              <img
                src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
                alt=""
                height={10}
              />
            ) : (
              "Login"
            )}
          </button>
        </form>
        <p style={{ color: "purple", marginBottom: "10px" }}>
          {error ? "Something went wrong..." : ""}
        </p>
        <a href="##" className="login-link">
          Forgot Password?
        </a>
        <a href="##" className="login-link">
          Create an Account
        </a>
      </div>
      <h1 className="login-logo">Anchor Store.</h1>
    </div>
  );
};

export default Login;
