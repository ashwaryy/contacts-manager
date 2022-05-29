import React from "react";
import { Link } from "react-router-dom";
import "./Login_Signup.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="login-container">
        <h1>Logo</h1>
        <h5>Enter your credentials to access your account</h5>
        <div className="wrapper-inp-btn">
          <input type="text" placeholder="User ID" />
          <input type="text" placeholder="Password" />
          <button type="submit">Sign in</button>
        </div>
        <Link to="/signup">Signup </Link>
      </div>
    </div>
  );
};

export default Login;
