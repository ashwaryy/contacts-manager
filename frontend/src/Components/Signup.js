import React from "react";
import "./Login_Signup.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="login-container">
        <h1>Logo</h1>
        <h5>create new account</h5>
        <div className="wrapper-inp-btn">
          <input type="text" placeholder="User ID" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirmed Password" />
          <button type="submit">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
