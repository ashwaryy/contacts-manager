import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./DisplayContacts.css";
import Table from "./Table";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
function DisplayContacts() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    } else {
      window.location.href = "/login";
    }
  }, []);

  if (token) {
    return (
      <div id="display-contacts-main-container">
        <Sidebar />
        <div id="header-and-contact">
          <Header />
          <Table />
        </div>
      </div>
    );
  }
}

export default DisplayContacts;
