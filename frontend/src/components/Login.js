import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login_Signup.css";

const Login = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const apiURL = "https://contacts-manager-b.herokuapp.com/login";
  const [authToken, setAuthToken] = useState("");
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const SubmitHandler = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const url = apiURL;
    const data = { email: email, password: password };
    const response = await fetch(url, {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
    });
    const status = await response.json();
    if (status.status) {
      setAuthToken(status.token);
      localStorage.removeItem("token");
      localStorage.setItem("token", status.token);
      myHeaders.append("Authorization", `Bearer ${authToken}`);
      navigate("/");
    } else if (status.message === "password mismatch") {
      const errorText = document.getElementsByClassName("lp-wrong-password")[0];
      errorText.style.display = "block";
    } else if (status.message === "User Not Found") {
      const errorTextem = document.getElementsByClassName("lp-wrong-email")[0];
      errorTextem.style.display = "block";
    }
  };
  if (!token) {
    return (
      <div className="Login">
        <div className="login-container">
          <h1>Logo</h1>
          <h5>Enter your credentials to access your account</h5>
          <div className="wrapper-inp-btn">
            <input
              type="text"
              placeholder="User ID"
              id="email"
              onClick={() => {
                const errorText =
                  document.getElementsByClassName("lp-wrong-email")[0];
                errorText.style.display = "none";
              }}
            />
            <p className="lp-wrong-email">User Not Found</p>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onClick={() => {
                const errorText =
                  document.getElementsByClassName("lp-wrong-password")[0];
                errorText.style.display = "none";
              }}
            />
            <p className="lp-wrong-password">Wrong Password</p>

            <button type="submit" onClick={SubmitHandler}>
              Sign in
            </button>
          </div>
          <Link to="/signup">Signup </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="logp-container">
      <p>Already Logged In</p>
      <button
        className="logp-button"
        style={{ width: "150px", height: "50px", marginTop: "0px" }}
      >
        <a href="/" style={{ textDecoration: "none", marginBottom: "0px" }}>
          Go To Contacts Page
        </a>
      </button>
    </div>
  );
};

export default Login;
