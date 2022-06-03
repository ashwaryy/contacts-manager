import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./DisplayContacts.css";
import Table from "./Table";
function DisplayContacts() {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  console.log(data);
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
          <Header setData={setData} />
          <Table data={data} setData={setData} />
        </div>
      </div>
    );
  }
}

export default DisplayContacts;
