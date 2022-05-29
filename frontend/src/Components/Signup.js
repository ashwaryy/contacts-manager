import React, { useNavigate } from "react-router-dom";
import "./Login_Signup.css";

const Login = () => {
  const navigate = useNavigate();
  const apiURL = "http://localhost:3001/register";
  const SubmitHandler = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const url = apiURL;
    const data = { name: name, email: email, password: password };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const status = await response.json();
    console.log(status);
    if (status.status) {
      window.alert("Registration Successful, Please login to view contacts");
      navigate("/login");
    } else {
      window.alert("User already exists");
    }
  };

  return (
    <div className="Login">
      <div className="login-container">
        <h1>Logo</h1>
        <h5>create new account</h5>
        <div className="wrapper-inp-btn">
          <input type="text" placeholder="Name" id="name" required />
          <input type="email" placeholder="User ID" id="email" required />
          <input
            type="password"
            placeholder="Confirm Password"
            id="password"
            required
          />
          <button type="submit" onClick={SubmitHandler}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
